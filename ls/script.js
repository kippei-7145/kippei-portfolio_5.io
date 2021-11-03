$(function() {
  $(window).on('scroll',function() {
    var scroll = $(window).scrollTop();
    if(scroll > 10) {
      $('.header-inner').addClass('fixed');
    }else{
      $('.header-inner').removeClass('fixed')
    }
  })
      // ハンバーガーメニュー
    $('.burger-btn').on('click', function() {
      $('.header-nav').toggleClass('slidin');
      $(this).toggleClass('active');
      $('.burger-musk').toggleClass('open');
      $('.burger-btn').toggleClass('black');
      $('.bar').toggleClass('cross');
    });
  //タブ
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() { 
			var idName = $(this).attr('href');	
			if(idName == hashIDName){ 
				var parentElm = $(this).parent(); 
				$('.tab li').removeClass("active"); 
				$(parentElm).addClass("active"); 
				$(".area").removeClass("is-active"); 
				$(hashIDName).addClass("is-active"); 
			}
		});
	}
}
//タブをクリックしたら
$('.tab a').on('click', function() {
	var idName = $(this).attr('href');
	GethashID (idName);
	return false;
});
    // swiperfv
    let swipeOption = {
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      speed: 2000,
    }
    new Swiper('.swiper-fv', swipeOption);
    // swiper
  var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    simulateTouch:true,
    centeredSlides:true,
    autoHeight: true,
    breakpoints: {
      500: {
        slidesPerView: 1,
      },
      // 1200px以上の場合
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    loop: true,
    autoplay: {
      speed: 1000,
      delay: 5000,
      disableOnInteraction: false,
    },
  })
  AOS.init({
    offset: 100,
    // duration: 1500,
    easing: 'ease',
    delay: 50,
    once: true,
    anchorPlacement: 'top-center',
  });
})