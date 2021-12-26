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

$(document).ready(function () {
  $("img").lazy({
    effect: "fadeIn",
    effectTime: 1000
  });
  $('#slider .slider-view').owlCarousel(owlslide($('#slider .slider-view .orichi-product-item-slider').size(), 30, false, true, true, 1, 2, 2, 4, 4, "fadeIn", "fadeOut"));
})
$('.btn-view-more').on('click', function () {
  $('.btn-view-more').css('visibility', 'hidden');
  $('#spin-loading').css('visibility', 'visible');
  var html = '<div class="orichi-product-item"><div class="wImage"><a href="#" title="" class="image cover">  <img data-src="img/1.png" /></a></div><div class="orichi-price-wrapper"><div class="orichi-price">$150.000  <div class="orichi-discount-price">-10%</div></div></div><div class="orichi-progress-bar"><div class="flash-sale-progress-bar flash-sale-progress-bar--landing-page">  <div    class="flash-sale-progress-bar__complement-wrapper flash-sale-progress-bar__complement-wrapper--landing-page">  </div>  <div class="flash-sale-progress-bar__text">Sold 159</div>  <div class="flash-sale-progress-bar__fire">    <img src="./img/f5233259f90b05efbf3867f564628853.png" alt="">  </div></div></div>        </div>        <div class="orichi-product-item"><div class="wImage"><a href="#" title="" class="image cover">  <img data-src="img/2.jpg" /></a></div><div class="orichi-price-wrapper"><div class="orichi-price">$150.000  <div class="orichi-discount-price">-10%</div></div></div><div class="orichi-progress-bar"><div class="flash-sale-progress-bar flash-sale-progress-bar--landing-page">  <div    class="flash-sale-progress-bar__complement-wrapper flash-sale-progress-bar__complement-wrapper--landing-page">  </div>  <div class="flash-sale-progress-bar__text">Sold 159</div>  <div class="flash-sale-progress-bar__fire">    <img src="./img/f5233259f90b05efbf3867f564628853.png" alt="">  </div></div></div>        </div>        <div class="orichi-product-item"><div class="wImage"><a href="#" title="" class="image cover">  <img data-src="" /></a></div><div class="orichi-price-wrapper"><div class="orichi-price">$150.000  <div class="orichi-discount-price">-10%</div></div></div><div class="orichi-progress-bar"><div class="flash-sale-progress-bar flash-sale-progress-bar--landing-page">  <div    class="flash-sale-progress-bar__complement-wrapper flash-sale-progress-bar__complement-wrapper--landing-page">  </div>  <div class="flash-sale-progress-bar__text">Sold 159</div>  <div class="flash-sale-progress-bar__fire">    <img src="./img/f5233259f90b05efbf3867f564628853.png" alt="">  </div></div></div>        </div>';
  html += '</div>';
  setTimeout(
    function functionName() {
      $('.orichi-product-list').find('.cb').remove();
      for (let index = 0; index < 5; index++) {
        $('.orichi-product-list').append(html);
      }
      $('.orichi-product-list').append('<div class="cb"></div>');
      $("img").lazy({
        effect: "fadeIn",
        effectTime: 1000
      });
      $('.btn-view-more').css('visibility', 'visible');
      $('#spin-loading').css('visibility', 'hidden');
      $('.orichi-product-list').find('cb').remove();
    }, 3000)

})