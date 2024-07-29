document.addEventListener('DOMContentLoaded', function() {
    // Inicializa el calendario
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Nuestro Aniversario',
                start: '2023-08-15'
            }
        ]
    });

    calendar.render();

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

    // Lanza el confeti al cargar la página usando party.js
    party.confetti(document.body, {
        count: party.variation.range(200, 300),
        spread: 360,
        shapes: ["square", "circle"],
        colors: ["#4b0082", "#320062", "#1a0033", "#ffffff", "#ecf0f1"]
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
