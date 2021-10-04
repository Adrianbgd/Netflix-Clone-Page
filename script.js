    const togglevideo = () => {
        const Trailer = document.querySelector('.trailer');
        const video = document.querySelector('video');
        Trailer.classList.toggle('active');
        video.currentTime = 0;
        video.pause();
    }
