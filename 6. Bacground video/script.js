const container = document.querySelectorAll('.container');

container.forEach(button=>{
    const btn = button.querySelector('.button');

    const video = button.querySelector('.played-video');
    const crop = button.querySelector('.crop');

    btn.addEventListener('click', ()=>{
        if(crop.classList.contains('crop-2')){
            crop.classList.remove('crop-2');
            video.pause();
        } else {
            crop.classList.add('crop-2');
            video.play();
        }
    });
});