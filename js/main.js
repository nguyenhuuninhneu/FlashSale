(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  var endDate = "12/2/2021 00:00:00";
  const countDown = new Date(endDate).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime();
      distance = countDown - now;

      // document.getElementById("days").innerText = Math.floor(distance / (day));

      document.getElementById("hours").innerText = orichiFormatTime(Math.floor((distance % (day)) / (hour)));
      document.getElementById("minutes").innerText = orichiFormatTime(Math.floor((distance % (hour)) / (minute)));
      document.getElementById("seconds").innerText = orichiFormatTime(Math.floor((distance % (minute)) / second));

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
$('.orichi-product-list')
  .on('init', function (slick) {
    $('.slick-prev').addClass('hidden');
  }).slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<div class="slick-prev"><span><i class="fas fa-chevron-left"></i></span></div>',
    nextArrow: '<div class="slick-next"><span><i class="fas fa-chevron-right"></i></span></div>',
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
  var slickFor1024 = 4;
  var slickFor600 = 2;
  var slickFor480 = 1;
  var isNext = false;
  if ($(window).width() >= 1024) {
    if (currentSlide === slickFor1024) {
      isNext = true;
    }
  }
  else if ($(window).width() >= 600) {
    if (currentSlide === slickFor600) {
      isNext = true;
    }
  }
  else if ($(window).width() >= 480) {
    if (currentSlide === slickFor480) {
      isNext = true;
    }
  }
  if (isNext) {
    $('.slick-next').addClass('hidden');
  }
  else {
    $('.slick-next').removeClass('hidden');
  }

  if (currentSlide === 0) {
    $('.slick-prev').addClass('hidden');
  }
  else {
    $('.slick-prev').removeClass('hidden');
  }
})
