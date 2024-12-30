window.addEventListener("load", () => {
    const canvas = document.getElementById("form2");
    const benrikit = canvas.getContext("2d");
    let spd=1;

    const images = [ "slide (3).png", "anzu.png","slide (2).png"].map(src => {
        const img = new Image();
        img.src = src;
        return img;
    });

    const imageWidth = 90;
    const imageHeight = 90;
    let positions = images.map((_, index) => -index * 200); // 初期位置をずらす

    function responsive() {
        canvas.width = canvas.clientWidth * 2;
        canvas.height = canvas.clientHeight * 2;
        benrikit.scale(2, 2);
        spd = 1;
    }

    window.addEventListener('resize', responsive);
    responsive();

    function update() {
        benrikit.clearRect(0, 0, canvas.width, canvas.height);
        positions = positions.map((x) => {
            const newX = x + spd; 
            if (newX > canvas.width) {
                return -imageWidth; // 画面を超えたら左端に戻る
            }
            return newX;
        });

        images.forEach((img, index) => {
            benrikit.drawImage(img, positions[index], canvas.height / 5 - imageHeight / 2, imageWidth, imageHeight);
        });
    }

    function startAnimation() {
        setInterval(update, 1000 / 60);
    }

    images[0].onload = startAnimation; // 最初の画像がロードされたら開始
    canvas.addEventListener("click", () => 
        {
        spd++;
        if (spd == 15) 
            {
            alert("Web装飾[Msg]:画像のスピードを速くしすぎると端末の性能低下を招く可能性があります。ご注意下さい。遊んでくれてありがとうございます!!(リセットするには端末を回転させるか、ページサイズを変更してください。)");
        }
});
});