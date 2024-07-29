document.addEventListener('DOMContentLoaded', function() {

    // Inicializa los carousels
    $('.carousel-container').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.video-carousel-container').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // Reproduce la canción de cumpleaños
    var audio = document.getElementById('birthdaySong');
    audio.play();

    // Lanza el confeti al cargar la página
    confetti({
        particleCount: 200,
        spread: 160,
        origin: { y: 0.6 }
    });
});

function showImage(src) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = src;
}

function closeImage() {
    var modal = document.getElementById('imageModal');
    modal.style.display = "none";
}
