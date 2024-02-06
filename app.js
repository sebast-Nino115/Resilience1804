const active =document.querySelector('.active')
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true, // habilita el bucle
        centeredSlide:true,
        grabCursor: true, // Muestra el cursor de agarre
        keyboard: {
            enabled: true, // Permite la navegación mediante teclado
        },
    });
    var direccionImagenSeleccionada = null;

    // Obtén todas las imágenes dentro del carrusel
    var images = document.querySelectorAll('.swiper-slide img');

    // Añade un evento de clic a cada imagen
    images.forEach(function (image, index) {
        image.addEventListener('click', function () {
            this.classList.add('active');
            // Llama a la función personalizada al hacer clic en la imagen
            seleccionSwiper(image.src, index);
        });
    });

    // Función personalizada que se llama al hacer clic en una imagen
    function seleccionSwiper(src, index) {
        // Asigna la dirección de la imagen clickeada a la variable
        swiper.slideTo(index);
        
        direccionImagenSeleccionada = src;
        var imagenContainer = document.getElementById('imagenContainer');
        while (imagenContainer.firstChild) {
            imagenContainer.removeChild(imagenContainer.firstChild);
        }
        // Crea la etiqueta img y establece el atributo src
        var imagen = document.createElement('img');
        imagen.src = direccionImagenSeleccionada;

        // Agrega la imagen al contenedor
        imagenContainer.appendChild(imagen);
    }
});


