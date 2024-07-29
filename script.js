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
});
    // Reproduce la canción de cumpleaños
    var audio = document.getElementById('birthdaySong');
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(function() {
            // La canción se ha comenzado a reproducir exitosamente
        }).catch(function(error) {
            // La canción no se ha reproducido debido a una política del navegador
            console.log('Error al reproducir la canción:', error);
        });
    }

    // Lanza el confeti al cargar la página
    if (typeof party !== 'undefined') {
        party.confetti(document.body, {
            count: party.variation.range(200, 300),
            spread: 360,
            shapes: ["square", "circle"],
            colors: ["#4b0082", "#320062", "#1a0033", "#ffffff", "#ecf0f1"]
        });
    } else {
        console.error('La biblioteca party.js no está cargada.');
    }

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
