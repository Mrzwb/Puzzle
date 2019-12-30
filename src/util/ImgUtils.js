
const createCanvas = (width, height) => {
    const canvas = document.createElement('CANVAS');
    canvas.width = width;
    canvas.height = height;
    return canvas;
}

/**
 * 图片剪切
 * @param data  The address or URL of the a media resource that is to be considered.
 * @param size  分割的模块 默认 3 x 3
 * @returns {Promise<any>}
 */
export const clipImage = (data, size = 3) => new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = data;
    img.onload = function(){
        let canvas = createCanvas( this.naturalWidth, this.naturalHeight);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(this,0,0);

        let block =  createCanvas( this.naturalWidth/size, this.naturalHeight/size);
        const blockCtx = block.getContext('2d');
        const bw = block.width;
        const bh = block.height;

        let pieces = [];
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const clipData = ctx.getImageData(j*bw, i*bh, bw, bh);
                blockCtx.putImageData(clipData,0,0);
                pieces.push({
                    id: i*size + j + 1,
                    x: j,
                    y: i,
                    data: block.toDataURL(),
                });
            }
        }
        canvas = null;
        block = null;
        return resolve(pieces);
    };

    img.onerror = function() {
        reject(new Error('could not load image!'));
    };
});

/**
 * 图片选择
 * @param event
 * @returns {Promise<any>}
 */
export const chooseImg = event =>  new Promise((resolve, reject) => {
    const file = event.target.files[0];
    if (window.FileReader) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            return resolve(e.target.result);
        };
    } else {
        const url = window.url || window.webkitURL;
        const data = url.createObjectURL(file);
        return resolve(data);
    }
});