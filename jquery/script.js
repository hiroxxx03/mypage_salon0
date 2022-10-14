$(function () {
  $(window).scroll(function () {
    $(".area, .effect").each(function () {
      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect-scroll");
      }
    });
  });
  jQuery(window).scroll();
});

$(function(){
  $('.link-box1').hover(
    function(){
      $('.link-box1').css({transform: 'rotateY(20deg)'});
    },
    function(){
      $('.link-box1').css({transform: 'rotateY(0deg)'});
    }
  );
  $('.link-box2').hover(
    function(){
      $('.link-box2').css({transform: 'rotateY(20deg)'});
    },
    function(){
      $('.link-box2').css({transform: 'rotateY(0deg)'});
    }
  );
  $('.link-box3').hover(
    function(){
      $('.link-box3').css({transform: 'rotateY(20deg)'});
    },
    function(){
      $('.link-box3').css({transform: 'rotateY(0deg)'});
    }
  );
});

//header-imgの画像遷移
$(function(){
  setInterval(function(){
    $('.img-child').toggleClass('aaa');
  }, 6000);
});