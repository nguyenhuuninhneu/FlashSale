// main.js

(function () {
  const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

  var endDate = "01/08/2022 23:00:00";
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
var orichi_query = $;
var numverProductInRow = 1;
var productColor = '#ee4d2d';
var productIcon = '';
var productShowProcess = false;
var rootLink = 'http://localhost:57238';
var productItemWidth = 0;
orichi_query('.orichi-slider-view')
.on('init', function (slick) {
  orichi_query('.orichi-slick-prev').addClass('orichi-hidden');
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
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 479,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
orichi_query('.orichi-slider-view').on('afterChange', function (event, slick, currentSlide) {
if (slick.currentSlide >= slick.slideCount - slick.options.slidesToShow) {
  orichi_query('.orichi-slick-next').addClass('orichi-hidden');
}
else {
  orichi_query('.orichi-slick-next').removeClass('orichi-hidden');
}

if (currentSlide === 0) {
  orichi_query('.orichi-slick-prev').addClass('orichi-hidden');
}
else {
  orichi_query('.orichi-slick-prev').removeClass('orichi-hidden');
}
})

orichi_query('.orichi-btn-view-more').on('click', function () {
debugger;
orichi_query('.orichi-btn-view-more').hide();
orichi_query('#orichi-spin-loading').show();
var html = '<div class="orichi-product-item" style="width:'+productItemWidth+'px">';
html += '<div class="wImage"><a href="#" title="" class="image cover"><img data-src="https://raw.githubusercontent.com/nguyenhuuninhneu/FlashSale/main/img/product.png" /></a></div>';
html += '<div class="orichi-price-wrapper">';
html += ' <div class="orichi-price" style="color: '+productColor+'">$150.000';
html += '<div class="orichi-discount-price" style="color: '+productColor+'; border: 1px solid '+productColor+';">-10%</div>';
html += '</div>';
html += '</div>';
if(productShowProcess){
html += '<div class="orichi-progress-bar">';
html += '<div class="orichi-flash-sale-progress-bar">';
html += '<div  class="orichi-flash-sale-progress-bar__complement-wrapper" style="background: '+productColor+';"></div>';
html += '<div class="orichi-flash-sale-progress-bar__text">Sold 159</div>';
html += '<div class="orichi-flash-sale-progress-bar__fire">  <img src="' + productIcon + '" alt=""></div>';
html += '</div>';
html += '</div>';
}
html += '</div>';
orichi_query('.grid-view').find('.orichi-cb').remove();
var totalHtml= '';
for (let index = 0; index < numverProductInRow; index++) {
  totalHtml += html;
}
orichi_query('.grid-view').append(totalHtml);

orichi_query('.grid-view').append('<div class="orichi-cb"></div>');
orichi_query("img").lazy({
  effect: "fadeIn",
  effectTime: 1000
});
orichi_query('.orichi-btn-view-more').show();
orichi_query('#orichi-spin-loading').hide();

})

orichi_query(document).ready(function () {

orichi_query("img").lazy({
  effect: "fadeIn",
  effectTime: 1000
});
fetch('http://localhost:57238/Frontend/GetDesign?shop=codonqua.myshopify.com')
  .then(response =>
    response.json())
  .then(formatedResponse => {
    debugger;
    if (formatedResponse !== undefined && formatedResponse !== null && formatedResponse.design !== null) {
      console.log(formatedResponse.design);
      //LayoutType == 0 : Grid
      orichi_query('.orichi-flashsale-reviews .orichi-wrapper .orichi-head .orichi-fs img').attr('src', rootLink + formatedResponse.design.ProductImage)
      if (formatedResponse.design.LayoutType === 1) {
        orichi_query('.orichi-grid').show();
        productItemWidth = ($('.orichi-grid').width() - formatedResponse.design.ProductNumberInRow) / formatedResponse.design.ProductNumberInRow;
      orichi_query('.grid-view .orichi-product-item').css('width', productItemWidth +'px');
      }
      else {
        orichi_query('.orichi-slider').show();
        orichi_query('.orichi-btn-view-more').hide();
      }
      //CountDown
      if (formatedResponse.design.TimerCountDownStatus == true) {
        orichi_query('.orichi-countdown').show();
        orichi_query('.orichi-countdown ul li span').css('background', formatedResponse.design.TimerCountDownBackground);
        orichi_query('.orichi-countdown ul li span').css('color', formatedResponse.design.TimerCountDownColor);
      } else {
        orichi_query('.orichi-countdown').hide();
      }
      //ProcessBarFire
      if (formatedResponse.design.ProductShowProgressBarStatus == true) {
        orichi_query('.orichi-product-item .orichi-progress-bar').show();
        orichi_query('.orichi-product-item-slider .orichi-progress-bar').show();

        orichi_query('.orichi-product-item .orichi-flash-sale-progress-bar__fire img').attr('src', rootLink + formatedResponse.design.ProductIcon);
        orichi_query('.orichi-product-item-slider .orichi-flash-sale-progress-bar__fire img').attr('src', rootLink + formatedResponse.design.ProductIcon);
      } else {
        orichi_query('.orichi-product-item .orichi-progress-bar').hide();
        orichi_query('.orichi-product-item-slider .orichi-progress-bar').hide();
      }
      //ProductColor
      orichi_query('.orichi-flash-sale-progress-bar__complement-wrapper').css('background', formatedResponse.design.ProductColor);

      orichi_query('.orichi-price-wrapper .orichi-price').css('color', formatedResponse.design.ProductColor);
      orichi_query('.orichi-discount-price').css('color', formatedResponse.design.ProductColor);
      orichi_query('.orichi-discount-price').css('border', '1px solid '+ formatedResponse.design.ProductColor);
      productShowProcess = formatedResponse.design.ProductShowProgressBarStatus;
      numverProductInRow = formatedResponse.design.ProductNumberInRow;
      productColor = formatedResponse.design.ProductColor;
      productIcon = rootLink + formatedResponse.design.ProductIcon;
    }
  })
})