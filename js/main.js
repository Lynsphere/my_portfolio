/* main.js */
$(function(){
    // 메인커버 이동
    $(document).click(function () {
       $('#cover').addClass('slideup'); 
    });

    // gnb 색상변환
    $('#home').mouseenter(function(){
        $('#gnb').css('border-left','35px solid #898989')
    });
    $('#about').mouseenter(function(){
        $('#gnb').css('border-left','35px solid #00aeef')
    });
    $('#portfolio').mouseenter(function(){
        $('#gnb').css('border-left','35px solid #00a651')
    });
    $('#contact').mouseenter(function(){
        $('#gnb').css('border-left','35px solid #ed145b')
    });
   
    // gnb
    $('#home').click(function(){
        $('section').removeClass('show')
        $('#s1').addClass('show')
        $('#home_box').addClass('bounceInUp animated')
    });
    $('#home_box').on('animationend', function(){
        $(this).removeClass('bounceInUp animated');
      });

    $('#about').click(function(){
        $('section').removeClass('show')
        $('#s2').addClass('show')
        $('#about_box').addClass('bounceInUp animated')
    });
    $('#about_box').on('animationend', function(){
        $(this).removeClass('bounceInUp animated');
      });

    $('#portfolio').click(function(){
        $('section').removeClass('show')
        $('#s3').addClass('show')
        $('#portfolio_box').addClass('bounceInUp animated')
    });
    $('#portfolio_box').on('animationend', function(){
        $(this).removeClass('bounceInUp animated');
      });

    $('#contact').click(function(){
        $('section').removeClass('show')
        $('#s4').addClass('show')
        $('#contact_box').addClass('bounceInUp animated')
    });
    $('#contact_box').on('animationend', function(){
        $(this).removeClass('bounceInUp animated');
      });

});