// cash
var doc = document;

// add event
$(document).ready(function() {
    
    $(window).on("orientationchange", mobile_version);
    
    $(window).on("resize", mobile_version);
    
    $(document).on("scroll", onScroll);
    
    $('.js-slider').children('li').on('click', changeSlide);
    
    $("a").click(function(e) {
        
        if($(this).attr("href").indexOf("#") === 0)
        {
            var hash = $(this).attr("href");
        
            var target = $(hash);

            $("html, body").animate( 
                {
                    scrollTop: target.offset().top
                }, 
                700, 
                function() 
                {
                    window.location.hash = hash;  
                }
            );
        }
        
        return true;
    });
    
    // check email
    $(".contact-me").on("blur", '.email-contact-me', checkEmail);
    
    // show form 
    $('.js-show-form').on('click', function() {
        $('.form-contact-me').toggleClass('toggle');
    });
    
    $('.js-contact-me').click(sendPost);
    
    // mobile resolution
    mobile_version();
    
});

// change active with scrolling
function onScroll() {
    
    var scroll_top = $(document).scrollTop();

    $(".menu-js a").each(function() {
        
        var hash = $(this).attr("href");
        
        var target = $(hash);
        
        if ((target.position().top <= scroll_top + (target.outerHeight())/2) && (target.offset().top + target.outerHeight() > scroll_top)) 
        {
            
            $("a.active").removeClass("active");
            
            $(this).addClass("active");
            
//            window.location.hash = hash;  
            
        } 
        else 
        {
            $(this).removeClass("active");
        }
    });
}

// check email
function checkEmail()
{
   // get entering data
    var email_value = $(this).val();

    // check reg
    var reg = /^[0-9a-z-_\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i;
    var result = email_value.match(reg);
    
    // error
    if(!result)
    {
        if(!($("div").is(".error-message")))
        {
            $(this).parent().addClass('error');
            $(this).css("padding-left", "45px");
            $(this).parent().append('<div class="error-message">Invalid email address</div>');
        }
    }
    else 
    {
        $(this).parent().removeClass('error');
        $(this).css("padding-left", "10px");
        $(".error-message").remove();
    }
}

// change in mobile's version
function mobile_version()
{
    
    // check resolution for the mobile's version
    if($(window).width() <= 600)
    { 
        $(".menu-js").css("display", "none");
        
        // change menu's view
        if(!($("div").is("#icon_menu")))
        {
            // create and add icon
            $("#header").append("<div id='icon_menu'></div>");
            $("#icon_menu").on("click", show_menu);
        }
        
        
    }
    else if($(window).width() > 600 )
    {
        // icon is exist
        if($("div").is("#icon_menu"))
        { 
            // delete icon
            $("#icon_menu").remove();
            $(".menu-js").css("display", "inline-block");
        }
    }
}

// drop menu
function show_menu()
{
    // menu isn't show
    if(!($(".menu-js").hasClass("show_menu")))
    { 
        $(".menu-js").css("display", "inline-block");
        $(".menu-js").toggleClass("show_menu");
        $("#icon_menu").addClass("show_icon");
    }
    else
    {
        $(".menu-js").css("display", "none");
        $(".menu-js").toggleClass("show_menu");
        $("#icon_menu").removeClass("show_icon");
    }

}

// message contacts form
function show_message(mes)
{
    
    if(mes)
    {
        $('.form-contact-me').html("Your message was successfully sent!");
    }
    else
    {
        $('.form-contact-me').html("Sorry, unknown error!!");
    }
}

// slider main
function changeSlide()
{ 
    // get name appropriate slider
    var name_slider = $(this).parent().attr('data-name-slide');

    // get img adress
    var img_adress = $(this).attr('data-slide');
    var full_img_adress = 'url("./image/' + img_adress + '")';
    
    // set bg
    $(name_slider).children(".js-bg-slide").css('background-image', full_img_adress);

    $(this).parent().children('li').removeClass('current');
    $(this).addClass('current');
}

function sendPost(e)
{
    
    e.preventDefault();
    
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment-contact-me').value;

    $.ajax({
        type: "POST",
        url: 'send.php',
        data: { 'email': email,
              'comment': comment },
        success: function() {
            $('.form-contact-me').css('font-size', '24px');
            $('.form-contact-me').html("Your message was successfully sent!");
        }
    });
    
}