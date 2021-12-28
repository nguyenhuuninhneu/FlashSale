(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  var endDate = "12/25/2021 23:00:00";
  const countDown = new Date(endDate).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime();
      distance = countDown - now;

      // document.getElementById("days").innerText = Math.floor(distance / (day));
      document.getElementById("hours").innerText = orichiFormatTime(Math.abs(Math.floor((distance % (day)) / (hour))));
      document.getElementById("minutes").innerText = orichiFormatTime(Math.abs(Math.floor((distance % (hour)) / (minute))));
      document.getElementById("seconds").innerText = orichiFormatTime(Math.abs(Math.floor((distance % (minute)) / second)));
      if (distance < 0) {
document.getElementById("orichi-countdown").style.display = "none";
clearInterval(x);
      }
    }, 0)

}());

function orichiFormatTime(number) {
  if (number < 10) return "0" + number;
  return number;
}
/*Hàm cho Owlcarousel*/

$(document).ready(function () {

  $("img").lazy({
    effect: "fadeIn",
    effectTime: 1000
  });

})

if ($('#orichi-layout').val() === 'slider') {
  $('.orichi-product-list')
    .on('init', function (slick) {
      $('.orichi-slick-prev').addClass('orichi-hidden');
    }).slick({
      dots: false,
      infinite: false,
      lazyLoad: 'ondemand',
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '<div class="orichi-slick-prev"></div>',
      nextArrow: '<div class="orichi-slick-next"></div>',
      responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
      ]
    });
  $('.orichi-product-list').on('afterChange', function (event, slick, currentSlide) {
    if (slick.currentSlide >= slick.slideCount - slick.options.slidesToShow) {
      $('.orichi-slick-next').addClass('orichi-hidden');
    }
    else {
      $('.orichi-slick-next').removeClass('orichi-hidden');
    }

    if (currentSlide === 0) {
      $('.orichi-slick-prev').addClass('orichi-hidden');
    }
    else {
      $('.orichi-slick-prev').removeClass('orichi-hidden');
    }
  })
}


$('.orichi-btn-view-more').on('click', function () {
  $('.orichi-btn-view-more').css('visibility', 'hidden');
  $('#orichi-spin-loading').css('visibility', 'visible');
  var html = '<div class="orichi-product-item"><div class="wImage"><a href="#" title="" class="image cover">  <img data-src="img/1.png" /></a></div><div class="orichi-price-wrapper"><div class="orichi-price">$150.000  <div class="orichi-discount-price">-10%</div></div></div><div class="orichi-progress-bar"><div class="orichi-flash-sale-progress-bar">  <div    class="orichi-flash-sale-progress-bar__complement-wrapper">  </div>  <div class="orichi-flash-sale-progress-bar__text">Sold 159</div>  <div class="orichi-flash-sale-progress-bar__fire">    <img src="./img/f5233259f90b05efbf3867f564628853.png" alt="">  </div></div></div></div><div class="orichi-product-item"><div class="wImage"><a href="#" title="" class="image cover">  <img data-src="img/1.jpg" /></a></div><div class="orichi-price-wrapper"><div class="orichi-price">$150.000  <div class="orichi-discount-price">-10%</div></div></div><div class="orichi-progress-bar"><div class="orichi-flash-sale-progress-bar">  <div    class="orichi-flash-sale-progress-bar__complement-wrapper">  </div>  <div class="orichi-flash-sale-progress-bar__text">Sold 159</div>  <div class="orichi-flash-sale-progress-bar__fire">    <img src="./img/f5233259f90b05efbf3867f564628853.png" alt="">  </div></div></div></div><div class="orichi-product-item"><div class="wImage"><a href="#" title="" class="image cover">  <img data-src="img/product.png" /></a></div><div class="orichi-price-wrapper"><div class="orichi-price">$150.000  <div class="orichi-discount-price">-10%</div></div></div><div class="orichi-progress-bar"><div class="orichi-flash-sale-progress-bar">  <div    class="orichi-flash-sale-progress-bar__complement-wrapper">  </div>  <div class="orichi-flash-sale-progress-bar__text">Sold 159</div>  <div class="orichi-flash-sale-progress-bar__fire">    <img src="./img/f5233259f90b05efbf3867f564628853.png" alt="">  </div></div></div></div>';
  html += '</div>';
  $('.orichi-product-list').find('.orichi-cb').remove();
  $('.orichi-product-list').append(html);

  $('.orichi-product-list').append('<div class="orichi-cb"></div>');
  $("img").lazy({
    effect: "fadeIn",
    effectTime: 1000
  });
  $('.orichi-btn-view-more').css('visibility', 'visible');
  $('#orichi-spin-loading').css('visibility', 'hidden');
  $('.orichi-product-list').find('orichi-cb').remove();

})