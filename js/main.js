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
        scrollTo(0,0)
        $('#s2').addClass('show')
        $('#about_box').addClass('bounceInUp animated')
    });
    $('#about_box').on('animationend', function(){
        $(this).removeClass('bounceInUp animated');
      });

    $('#portfolio').click(function(){
        $('section').removeClass('show')
        scrollTo(0,0)
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


      // 스크롤을 감지하면 gnb축소
      var didScroll; 
      var lastScrollTop = 0; 
      var delta = 5; 
      var navbarHeight = $('#gnb').outerHeight(); 
      
      $(window).scroll(function(event){ 
          didScroll = true; 
        }); 
        
        setInterval(function() { 
            if (didScroll) { 
                hasScrolled(); 
                didScroll = false; 
            } 
        }, 250); 
        
        function hasScrolled() { var st = $(this).scrollTop();
            if(Math.abs(lastScrollTop - st) <= delta) return;
            if (st > lastScrollTop && st > navbarHeight){ 
                // Scroll Down 
                $('#gnb')
                    .removeClass('nav-left_move')
                    .addClass('nav-right_move'); 
            } else { 
                // Scroll Up 
                if(st + $(window).height() < $(document).height()) { 
                    $('#gnb')
                        .removeClass('nav-right_move')
                        .addClass('nav-left_move'); 
                } 
            } 
            lastScrollTop = st; 
        }

});