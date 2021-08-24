
$(document).ready(() => {

    // nav_menu

    $(".toggleButton").click(() => {
        $(".toggleButton").toggleClass('active');
        $(".nav_menu_top").toggleClass('active');
    });

    $(".nav-link").click(() => {
        $(".toggleButton").removeClass('active');
        $(".nav_menu_top").removeClass('active');
    });

    $(".main_screen_content").click(() => {
        $(".toggleButton").removeClass('active');
        $(".nav_menu_top").removeClass('active');
    });

    $(document).scroll(() => {
        $(".toggleButton").removeClass('active');
        $(".nav_menu_top").removeClass('active');
    });

    $('.wybrac_wycieczke_button').click(() => {
        $('html, body').animate({
        scrollTop: $("#slajder").offset().top
    }, 1500);
    });

//kierunki
    $('.kieruken_item1').click(() => {
        $('.category').removeClass('active');
        $('.category1').addClass('active');
        $('.products-container').hide();
        $('#polska-container').show();
        $('#polska-container' + ' .products').slick('refresh');

    });

    $('.kieruken_item2').click(() => {
        $('.category').removeClass('active');
        $('.category2').addClass('active');
        $('.products-container').hide();
        $('#niemcy-container').show();
        $('#niemcy-container' + ' .products').slick('refresh');

    });

    $('.kieruken_item3').click(() => {
        $('.category').removeClass('active');
        $('.category3').addClass('active');
        $('.products-container').hide();
        $('#czechy-container').show();
        $('#czechy-container' + ' .products').slick('refresh');
    });

    $('.kieruken_item4').click(() => {
        $('.category').removeClass('active');
        $('.category4').addClass('active');
        $('.products-container').hide();
        $('#wlochy-container').show();
        $('#wlochy-container' + ' .products').slick('refresh');
    });

// slajder

$('.category').click((e) => {
    let currentElement = $(e.target);
    $('.products-container').hide();

    let id = currentElement.data('id');
    $('#' + id).show();

    $('.category').removeClass('active');
    currentElement.addClass('active');

    $('#' + id + ' .products').slick('refresh');
});

    $('#polska-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        responsive: [
                    {
                      breakpoint: 767,
                      settings: {
                        arrows: false,
                      }
                    }
                  ]
    });

    $('#niemcy-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        responsive: [
                    {
                      breakpoint: 767,
                      settings: {
                        arrows: false,
                      }
                    }
                  ]
    });

    $('#czechy-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        responsive: [
                    {
                      breakpoint: 767,
                      settings: {
                        arrows: false,
                      }
                    }
                  ]
    });

    $('#wlochy-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        responsive: [
                    {
                      breakpoint: 767,
                      settings: {
                        arrows: false,
                      }
                    }
                  ]
    });

    // GALLERY
    // if( $(document).width() < 768 ) {
    //     $('#gallery_wrapper').slick({
    //             slidesToShow: 1,
    //             slidesToScroll: 4,
    //             arrows: false,
    //             dots: true,
    //             autoplay: true,
    //             autoplaySpeed: 2800,
    //         });
    //         // if(('.gal').click()){
    //         //     $('#gallery_wrapper').slick('refresh');
    //         // }
    // };



// opinie

    $('#reviews').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
                },
                {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });

// Reserwacja //

    $('.open-module-kontakt').click(() => {
        $('#reservation-container').css('display', 'flex');
    });

    $('#reservation-cancel-close, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container'|| e.target.id === 'reservation-cancel-close') {
            $('#reservation-container').hide();
        }
    });

    $('#reserve-button').click(() => {
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
                    alert('Błąd. Zadzwoń, proszę, pod numer ..');
                }
            });
        } else {
            $('#reserve-error').show();
        }
    });
})

// Opinie

$('.open-module-opinie').click(() => {
    $('#opinie-container').css('display', 'flex');
});

$('#opinie-cancel-close, #opinie-container').click((e) => {
    if (e.target.id === 'opinie-container'|| e.target.id === 'opinie-cancel-close') {
        $('#opinie-container').hide();
    }
});

$('#opinie-button').click(() => {
    let opinie_name = $('#opinie-name');
    let opinie_wycieczka = $('#opinie-wycieczka');
    let opinie_text = $('#wycieczka-description-text');

    if (opinie_name.val() && opinie_wycieczka.val() && opinie_text.val()) {
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: 'opinie-name=' + opinie-name.val() + '&opinie-wycieczka=' + opinie-wycieczka.val() + '&opinie_text=' + opinie_text.val(),
            success: () => {
                $('#opinie-sent').show();
                $('#opinie-content').hide();
            },
            error: () => {
                $('#opinie-container').hide();
                alert('Błąd. Zadzwoń, proszę, pod numer ..');
            }
        });
    } else {
        $('#opinie-error').show();
    }
});
