$(function () { 
    // menu_fixed
    $(window).on('scroll', function () {
        var scrollSize = $(window).scrollTop();

        if (scrollSize > 135) {
            $('#nav').addClass('active');
        } else {
            $('#nav').removeClass('active');
        }
    })

    // preloader
    $(window).on('load', function () {
        $('#preloader').hide();
    })

    // Banner Slide Activation
    $('.your-class').slick({
        dots: true,
        draggable: false,
        slidesToShow: 2,
    });
})

var modeIcon = document.getElementById('mode');
var password = document.getElementById('password');
var password_eye = document.getElementById('password_eye');
var toggle_bar = document.getElementById('menu_toggle_bar');

modeIcon.addEventListener('click', function() {
    document.body.classList.toggle('darkMode')
    if (modeIcon.classList.contains('fa-regular')) {
        modeIcon.classList.add ('fa-solid');
        modeIcon.classList.remove ('fa-regular');
    }else {
        modeIcon.classList.remove ('fa-solid');
        modeIcon.classList.add ('fa-regular');
    }
})


// {/* <i class="fa-regular fa-eye"></i> */}<i class="fa-regular fa-eye-slash"></i>
{/* <i class="fa-solid fa-moon"></i> */}



password_eye.addEventListener('click', function () {
    if (password.type === 'password') {
        password.type = 'text';
        password_eye.classList.add('fa-eye');
        password_eye.classList.remove('fa-eye-slash');
    }else {
        password.type = 'password';
        password_eye.classList.remove('fa-eye');
        password_eye.classList.add('fa-eye-slash');
    }  
})

toggle_bar.addEventListener('click', function () {
    document.getElementById('sidemenu').classList.toggle('active');
})