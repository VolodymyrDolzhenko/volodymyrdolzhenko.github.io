// function myFunction() {
//     // alert("hello");
//     var x = document.getElementByClassName("menu_lines");
//     if (x.className === "nav_menu") {
//       x.className = ".nav_menu_active";
//     } else {
//       x.className = "nav_menu";
//     }
// }

$(document).ready(() => {
    $(".toggleButton").click(() => {
        $(".toggleButton").toggleClass('active');
        $(".nav_menu_top").toggleClass('active');
    });
    $(".nav-link").click(() => {
        $(".toggleButton").removeClass('active');
        $(".nav_menu_top").removeClass('active');
    });
    // $('.category').click((e) => {
    //     let currentElement = $(e.target);
    //     $('.products-container').hide();
    //     let id = currentElement.data('id');
    //     $('#' + id).show();
    //
    //     $('.category').removeClass('active');
    //     currentElement.addClass('active');
    //
    //     $('#' + id + ' .products').slick('refresh');
    //     $('#' + id + ' .products-nav').slick('refresh');
    // });

    $('#polska-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#polska-container .products-nav'
    });
    $('#polska-container .products-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '#polska-container .products',
        infinite: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('#niemcy-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#niemcy-container .products-nav'
    });
    $('#niemcy-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#niemcy-container .products',
        infinite: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('#czechy-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#czechy-container .products-nav'
    });
    $('#czechy-container .products-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '#czechy-container .products',
        infinite: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('#wlochy-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#wlochy-container .products-nav'
    });
    $('#wlochy-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#wlochy-container .products',
        infinite: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
    $('#reviews').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });

// Reserwacja //

    $('.open-module-kontakt').click(() => {
        $('#reservation-container').css('display', 'flex');
    });

    $('#reservation-cancel-close, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
            $('#reservation-container').hide();
        }
    });

    $('#reserve-button > button').click(() => {
        let name = $('#name');
        let nazwisko = $('#nazwisko');
        let phone = $('#phone');
        let time = $('#time');

        if (name.val() && nazwisko.val() && phone.val() && time.val()) {
            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: 'name=' + name.val() + '&nazwisko=' + nazwisko.val() + '&phone=' + phone.val() + '&time=' + time.val(),
                success: () => {
                    $('#reservation-sent').show();
                    $('#reservation-content').hide();
                },
                error: () => {
                    $('#reservation-container').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            });
        } else {
            $('#reserve-error').show();
        }
    });

    $('#burger').click(() =>{
        $('#header').toggleClass('menu-open');
    });

    $('#header #menu ul li').click(() =>{
        $('#header').toggleClass('menu-open');
    })
})

img.setAttribute('loading','lazy');
