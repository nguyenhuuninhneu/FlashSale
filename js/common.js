/*Hàm cho Owlcarousel*/
function owlslide(num, margin, autoplay, dot, nav, mobile, mobilel, tablet, tabletl, pc, animateIn, animateOut) {
    var option = {
        items: num,
        autoplay: autoplay,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
        loop: num > 1,
        nav: num > pc ? nav : false,
        dots: num > pc ? dot : false,
        autoplayHoverPause: true,
        margin: margin,
        lazyLoad: true,
        navText: [''],
        animateIn: animateIn,
        animateOut: animateOut,
        responsive: {
            0: {
                items: mobile,
                margin: margin,
                autoplay: num > mobile ? autoplay : false,
                nav: num > mobile ? nav : false,
                dots: num > mobile ? dot : false,
            },
            479: {
                items: mobilel,
                margin: margin,
                autoplay: num > mobilel ? autoplay : false,
                nav: num > mobilel ? nav : false,
                dots: num > mobilel ? dot : false,
            },
            767: {
                items: tablet,
                margin: margin,
                autoplay: num > tablet ? autoplay : false,
                nav: num > tablet ? nav : false,
                dots: num > tablet ? dot : false,
            },
            991: {
                items: tabletl,
                margin: margin,
                autoplay: num > tabletl ? autoplay : false,
                nav: num > tabletl ? nav : false,
                dots: num > tabletl ? dot : false,
            },
            1199: {
                items: pc,
                margin: margin,
                autoplay: num > pc ? autoplay : false,
                nav: num > pc ? nav : false,
                dots: num > pc ? dot : false,
            }
        }
    }
    return option;
  }