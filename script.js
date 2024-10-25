document.getElementById('combine-btn').addEventListener('click', function() {
    const emoji1 = document.getElementById('emoji1').value; //emoji 2
    const emoji2 = document.getElementById('emoji2').value; // emoji 1

    const resultImage = `asessts/${emoji1}-${emoji2}.png`; //adding emojis

    const resultImgElement = document.getElementById('result-img');
    resultImgElement.src = resultImage;

    resultImgElement.classList.remove('show');
    
    setTimeout(() => {
        resultImgElement.classList.add('show');
    }, 100);
});