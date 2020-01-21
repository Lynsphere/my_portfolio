/* main.js */
$(function(){
    // 메인커버 이동
    $('#cover').click(function () {
       $('#cover').addClass('slideup'); 
    });

    // gnb
    $('#home').click(function(){
        $('#color_box').css('background-color','#898989')
        $('section').removeClass('show')
        $('#s1').addClass('show')
        $('#home_box').addClass('bounceInUp animated')
    });
    $('#home_box').on('animationend', function(){
        $(this).removeClass('bounceInUp animated');
      });

    $('#about').click(function(){
        $('#color_box').css('background-color','#00aeef')
        $('section').removeClass('show')
        scrollTo(0,0)
        $('#s2').addClass('show')
        $('#about_box').addClass('bounceInUp animated')
    });
    $('#about_box').on('animationend', function(){
        $(this).removeClass('bounceInUp animated');
      });

    $('#portfolio').click(function(){
        $('#color_box').css('background-color','#00a651')
        $('section').removeClass('show')
        scrollTo(0,0)
        $('#s3').addClass('show')
        $('#portfolio_box').addClass('bounceInUp animated')
    });
    $('#portfolio_box').on('animationend', function(){
        $(this).removeClass('bounceInUp animated');
      });

    $('#contact').click(function(){
        $('#color_box').css('background-color','#ed145b')
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

    // 클릭시 gnb열림
    $('#color_box').on('click', function(){
        $('#gnb')
            .removeClass('nav-right_move')
            .addClass('nav-left_move')
    });
});