$(function () {

  // * 全局注册 animate
  $.fn.extend({
    animateCss: function (animationName, callback) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      this.addClass('animated ' + animationName).one(animationEnd, function () {
        $(this).removeClass('animated ' + animationName);
        if (callback) {
          callback();
        }
      });
      return this;
    }
  });

  // console.log(new Date())
  window.onload = function () {
    setTimeout(() => {
      $('.flex-container').addClass('hide')
      $('.Y-container').removeClass('hide');
      wedding.init();
    }, 1600);

    // $('video').get(0).addEventListener('canplaythrough', function () {
    //   console.log('asa')
    //   console.log(new Date())
    // });
  }

  // * 判断是否是移动端
  var isMobile = (function (a) {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
  })(navigator.userAgent || navigator.vendor || window.opera);

  var wedding = {
    init: function () {

      // * 根据终端特性，计算图片尺寸
      var calculateFilter = function () {
        var quality = isMobile ? 90 : 90;
        var width = isMobile ? 960 : 1920;
        var height = isMobile ? 640 : 1280;

        return !isSupportWebP ?
          '?imageView2/2/w/' + width + '/h/' + height + '/q/' + quality + '|imageslim' :
          '?imageMogr2/thumbnail/' + width + 'x' + height + '/format/webp/interlace/1/blur/1x0/quality/' + quality + '|imageslim';
      }

      // * 图片懒加载
      $('img.lazy').lazyload({
        threshold: 150,
        effect: 'fadeIn',
        data_attribute: 'src',
        url_rewriter_fn: function ($element, originalSrcInAttr) {
          return originalSrcInAttr + calculateFilter();
        }
      });

      // * Y字背景变换
      this.randomGradient();


      // * ScrollMagic init
      var controller = new ScrollMagic.Controller();

      // * Greensock 时间线 Y字
      var tl = new TimelineMax()
        .add(TweenMax.to('.video-container', 1, {
          scale: 0.8,
          transformOrigin: "50%, 50%",
          ease: Power2.easeInOut
        }))
        .add(TweenMax.to('.tips', 0.1, {
          display: 'none',
          ease: Power2.easeInOut
        }), 0)
        .add(TweenMax.to(".svg-container", 1, {
          scale: 15,
          transformOrigin: "50%, 50%",
          ease: Power2.easeInOut
        }), "-=1")

      // container pin
      var startpin = new ScrollMagic.Scene()
        .setPin(".container")
        // .addIndicators()
        .addTo(controller);

      // tween
      new ScrollMagic.Scene({
        duration: 500
      })
        .setTween(tl)
        // .addIndicators()
        .addTo(controller);

      
      // * jyg&dy svg
      // prepare SVG
      var $J = $("path#J");
      var $Y = $("path#Y");
      var $G = $("path#G");
      var $And = $("path#and");
      var $D = $("path#D");
      var $Y2 = $("path#Y2");

      function pathPrepare($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
      }

      pathPrepare($J);
      pathPrepare($Y);
      pathPrepare($G);
      pathPrepare($And);
      pathPrepare($D);
      pathPrepare($Y2);

      // build tween
      var tween = new TimelineMax()
        .add(TweenMax.to($J, 0.2, {
          strokeDashoffset: 0,
          ease: Linear.easeNone
        }))
        .add(TweenMax.to($Y, 0.2, {
          strokeDashoffset: 0,
          ease: Linear.easeNone
        }))
        .add(TweenMax.to($G, 0.2, {
          strokeDashoffset: 0,
          ease: Linear.easeNone
        }))
        .add(TweenMax.to($And, 0.2, {
          strokeDashoffset: 0,
          ease: Linear.easeNone
        }))
        .add(TweenMax.to($D, 0.2, {
          strokeDashoffset: 0,
          ease: Linear.easeNone
        }))
        .add(TweenMax.to($Y2, 0.2, {
          strokeDashoffset: 0,
          ease: Linear.easeNone
        }))
        .add(TweenMax.to($('.text'), 1, {
          transform: 'translateX(0)',
          className: "+=animated bounceIn"
        }))
        .add(TweenMax.to("path", 1, {
          stroke: "#351F11",
          ease: Linear.easeNone
        }), 0)
        .add(TweenMax.to($('#people'), 1, {
          transform: 'translateY(0)',
          ease: Power2.easeInOut
        }), 0)
        .add(TweenMax.to("path", 1, {
          fill: "#FFFFFF",
          ease: Linear.easeNone
        }))

      // build scene
      new ScrollMagic.Scene({
        offset: 100,
        duration: 300,
        tweenChanges: true
      })
        .setTween(tween)
        // .addIndicators()
        .addTo(controller);


      // ! 图片样式
      var tweenImg1 = new TimelineMax()
        .add(TweenMax.set($('#trigger-img-1 h1'), {
          className: "animated fadeInUp"
        }), 1)
        .add(TweenMax.set($('.J-img-1'), {
          className: "+=animated fadeInUp"
        }))

      new ScrollMagic.Scene({ triggerElement: "#trigger-img-1" })
        .setTween(tweenImg1)
        // .addIndicators()
        .addTo(controller);


      var tweenImg2 = new TimelineMax()
        .add(TweenMax.to($('.container'), 0.2, {
          opacity: 0
        }), 1)  
        .add(TweenMax.set($('#trigger-img-2 h1'), {
          className: "animated fadeInUp"
        }), 1)
        .add(TweenMax.set($('.J-img-2'), {
          className: "+=animated fadeInUp"
        }))

      new ScrollMagic.Scene({ triggerElement: "#trigger-img-2" })
        .setTween(tweenImg2)
        // .addIndicators()
        .addTo(controller);
      
      var tweenImg3 = new TimelineMax()
        .add(TweenMax.set($('#trigger-img-3 h1'), {
          className: "animated fadeInUp"
        }), 1)
        .add(TweenMax.set($('.J-img-3'), {
          className: "+=animated fadeInUp"
        }))

        new ScrollMagic.Scene({ triggerElement: "#trigger-img-3" })
        .setTween(tweenImg3)
        // .addIndicators()
        .addTo(controller);
      
      
      var tweenImg4 = new TimelineMax()
        .add(TweenMax.set($('#trigger-img-4 h1'), {
          className: "animated fadeInUp"
        }), 1)
        .add(TweenMax.set($('.J-img-4'), {
          className: "+=animated fadeInUp"
        }))

      new ScrollMagic.Scene({ triggerElement: "#trigger-img-4" })
        .setTween(tweenImg4)
        // .addIndicators()
        .addTo(controller);
      
      
      var tweenImg5 = new TimelineMax()
        .add(TweenMax.set($('#trigger-img-5 h1'), {
          className: "animated fadeInUp"
        }), 1)
        .add(TweenMax.set($('.J-img-5'), {
          className: "+=animated fadeInUp"
        }))

      new ScrollMagic.Scene({ triggerElement: "#trigger-img-5" })
        .setTween(tweenImg5)
        // .addIndicators()
        .addTo(controller);
      
      var tweenImg6 = new TimelineMax()
        .add(TweenMax.set($('#trigger-img-6 h1'), {
          className: "animated fadeInUp"
        }), 1)
        .add(TweenMax.set($('.J-img-6'), {
          className: "+=animated fadeInUp"
        }))

      new ScrollMagic.Scene({ triggerElement: "#trigger-img-6" })
        .setTween(tweenImg6)
        // .addIndicators()
        .addTo(controller);
      
      
      var tweenImg7 = new TimelineMax()
        .add(TweenMax.set($('#trigger-img-7 h1'), {
          className: "animated fadeInUp"
        }), 1)
        .add(TweenMax.set($('.J-img-7'), {
          className: "+=animated fadeInUp"
        }))

      new ScrollMagic.Scene({ triggerElement: "#trigger-img-7" })
        .setTween(tweenImg7)
        // .addIndicators()
        .addTo(controller);
      
      var tweenImg8 = new TimelineMax()
        .add(TweenMax.set($('#trigger-img-8 h1'), {
          className: "animated fadeInUp"
        }), 1)
        .add(TweenMax.set($('.J-img-8'), {
          className: "+=animated fadeInUp"
        }))

      new ScrollMagic.Scene({ triggerElement: "#trigger-img-8" })
        .setTween(tweenImg8)
        // .addIndicators()
        .addTo(controller);
      
      var tweenImg9 = new TimelineMax()
        .add(TweenMax.set($('#trigger-img-9 h1'), {
          className: "animated fadeInUp"
        }), 1)
        .add(TweenMax.set($('.J-img-9'), {
          className: "+=animated fadeInUp"
        }))

      new ScrollMagic.Scene({ triggerElement: "#trigger-img-9" })
        .setTween(tweenImg9)
        // .addIndicators()
        .addTo(controller);
      
      var tweenImg10 = new TimelineMax()
        .add(TweenMax.set($('#trigger-img-10 h1'), {
          className: "animated fadeInUp"
        }), 1)
        .add(TweenMax.set($('.J-img-10'), {
          className: "+=animated fadeInUp"
        }))

      new ScrollMagic.Scene({ triggerElement: "#trigger-img-10" })
        .setTween(tweenImg10)
        // .addIndicators()
        .addTo(controller);
      
      var tweenImg11 = new TimelineMax()
        .add(TweenMax.set($('#trigger-img-11 h1'), {
          className: "animated fadeInUp"
        }), 1)
        .add(TweenMax.set($('.J-img-11'), {
          className: "+=animated fadeInUp"
        }))

      new ScrollMagic.Scene({ triggerElement: "#trigger-img-11" })
        .setTween(tweenImg11)
        // .addIndicators()
        .addTo(controller);
      
      var tweenImg12 = new TimelineMax()
        .add(TweenMax.set($('.J-img-12'), {
          className: "+=animated fadeInUp"
        }))

      new ScrollMagic.Scene({ triggerElement: "#trigger-img-12" })
        .setTween(tweenImg12)
        // .addIndicators()
        .addTo(controller);
      
      var tweenImg13 = new TimelineMax()
        .add(TweenMax.set($('.J-img-13'), {
          className: "+=animated fadeInUp"
        }))

      new ScrollMagic.Scene({ triggerElement: "#trigger-img-13" })
        .setTween(tweenImg13)
        // .addIndicators()
        .addTo(controller);
      
      var tweenImg14 = new TimelineMax()
        .add(TweenMax.set($('#trigger-img-14 h1'), {
          className: "animated fadeInUp"
        }), 1)
        .add(TweenMax.set($('.J-img-14'), {
          className: "+=animated fadeInUp"
        }))

      new ScrollMagic.Scene({ triggerElement: "#trigger-img-14" })
        .setTween(tweenImg14)
        // .addIndicators()
        .addTo(controller);
      
      var tweenImg15 = new TimelineMax()
        .add(TweenMax.set($('#trigger-img-15 h1'), {
          className: "animated fadeInUp"
        }), 1)
        .add(TweenMax.set($('.J-img-15'), {
          className: "+=animated fadeInUp"
        }))

      new ScrollMagic.Scene({ triggerElement: "#trigger-img-15" })
        .setTween(tweenImg15)
        // .addIndicators()
        .addTo(controller);
      
      
      var tweenImg16 = new TimelineMax()
        .add(TweenMax.set($('#trigger-img-16 h1'), {
          className: "animated rubberBand fadeInUp"
        }), 1)
        .add(TweenMax.set($('.J-img-16'), {
          className: "+=animated fadeInUp"
        }))

      new ScrollMagic.Scene({ triggerElement: "#trigger-img-16" })
        .setTween(tweenImg16)
        // .addIndicators()
        .addTo(controller);
      
      var tweenImg17 = new TimelineMax()
        .add(TweenMax.set($('#trigger-img-17 h1'), {
          className: "animated rubberBand fadeInUp"
        }), 1)
        .add(TweenMax.set($('.J-img-17'), {
          className: "+=animated fadeInUp"
        }))

      new ScrollMagic.Scene({ triggerElement: "#trigger-img-17" })
        .setTween(tweenImg17)
        // .addIndicators()
        .addTo(controller);
      

      // * 配置使用bscroll 
      if (isMobile) {
        let scroll = new BScroll('.Y-container', {
          scrollX: false,
          scrollY: true,
          scrollbars: true,
          useTransform: false,
          useTransition: false,
          probeType: 3,
          eventPassthrough: true,
          click: true
        })

        scroll.on("scroll", function () {
          controller.update();
        });

        console.log('mobile');
      }


      // ! 背景视频暂时去除，效果未必好
      // function autoPlayAudio1() {
      //   wx.config({
      //     // 配置信息, 即使不正确也能使用 wx.ready
      //     debug: false,
      //     appId: '',
      //     timestamp: 1,
      //     nonceStr: '',
      //     signature: '',
      //     jsApiList: []
      //   });
      //   wx.ready(function () {
      //     $('video').get(0).play();
      //   });
      // }

      // autoPlayAudio1();
      // $('video').get(0).play();


      // // get the video
      // var video = document.querySelector('video');
      // // use the whole window and a *named function*
      // window.addEventListener('touchstart', function videoStart() {
      //   $('video').get(0).play();
      //   console.log('first touch');
      //   // remove from the window and call the function we are removing
      //   this.removeEventListener('touchstart', videoStart);
      // });



      // * 百度地图API功能
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(116.331398, 39.897445);
      map.centerAndZoom(point, 12);

      var top_right_navigation = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        type: BMAP_NAVIGATION_CONTROL_SMALL
      }); //右上角，仅包含平移和缩放按钮
      /*缩放控件type有四种类型:
      BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/
      map.addControl(top_right_navigation);


      // 创建地址解析器实例
      var myGeo = new BMap.Geocoder();
      // 将地址解析结果显示在地图上,并调整地图视野
      myGeo.getPoint("溧阳涵田度假村酒店", function (point) {
        if (point) {
          map.centerAndZoom(point, 15);

          var marker = new BMap.Marker(point); // 创建标注
          map.addOverlay(marker); // 将标注添加到地图中
          marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

          var opts = {
            width: 200, // 信息窗口宽度
            height: 100, // 信息窗口高度
            title: "溧阳涵田度假村酒店", // 信息窗口标题
            enableMessage: true, //设置允许信息窗发送短息
            message: "蒋一戈和狄芸的婚宴地点，就等你来参加~"
          }
          var infoWindow = new BMap.InfoWindow("蒋一戈和狄芸的婚宴地点，就等你来参加~", opts); // 创建信息窗口对象 
          marker.addEventListener("click", function () {
            map.openInfoWindow(infoWindow, point); //开启信息窗口
          });
        } else {
          alert("您选择地址没有解析到结果!");
        }
      }, "常州市");
    },
    randomGradient: function () {
      var colors = new Array(
        [62, 35, 255],
        [60, 255, 60],
        [255, 35, 98],
        [45, 175, 230],
        [255, 0, 255],
        [255, 128, 0]);

      var step = 0;
      //color table indices for: 
      // current color left
      // next color left
      // current color right
      // next color right
      var colorIndices = [0, 1, 2, 3];

      //transition speed
      var gradientSpeed = 0.002;

      function updateGradient() {

        if ($ === undefined) return;

        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

        $('.svg-container svg').css({
          background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
        }).css({
          background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
        });

        step += gradientSpeed;
        if (step >= 1) {
          step %= 1;
          colorIndices[0] = colorIndices[1];
          colorIndices[2] = colorIndices[3];

          //pick two new target color indices
          //do not pick the same as the current one
          colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
          colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

        }
      }

      setInterval(updateGradient, 10);
    }

  }


});