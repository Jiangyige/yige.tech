
$(function () {

  // 判断是否是移动端
  var isMobile = (function (a) { return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)) })(navigator.userAgent || navigator.vendor || window.opera);

  var calculateFilter = function () {
    var quality = isMobile ? 90 : 90;
    var width = isMobile ? 960 : 1920;
    var height = isMobile ? 640 : 1280;

    return !isSupportWebP ?
      '?imageView2/2/w/' + width + '/h/' + height + '/q/' + quality + '|imageslim' :
      '?imageMogr2/thumbnail/' + width + 'x' + height + '/format/webp/interlace/1/blur/1x0/quality/' + quality + '|imageslim';
  }

  $('img.lazy').lazyload({
    threshold: 150,
    effect: 'fadeIn',
    data_attribute: 'src',
    url_rewriter_fn: function ($element, originalSrcInAttr) {
      return originalSrcInAttr + calculateFilter();
    }
  });



  function pathPrepare($el) {
    var lineLength = $el[0].getTotalLength()+0.02;
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
  }

  // prepare SVG
  var $J = $("path#J");
  var $Y = $("path#Y");
  var $G = $("path#G");
  var $And = $("path#and");
  var $D = $("path#D");
  var $Y2 = $("path#Y2");

  pathPrepare($J);
  pathPrepare($Y);
  pathPrepare($G);
  pathPrepare($And);
  pathPrepare($D);
  pathPrepare($Y2);





  // Greensock 时间线
  var tl = new TimelineMax();
  tl.add(
    TweenMax.to('.video-container', 1, { scale: 0.8, transformOrigin: "50%, 50%", ease: Power2.easeInOut })
  )
  tl.add(
    TweenMax.to(".svg-container", 1, { scale: 15, transformOrigin: "50%, 50%", ease: Power2.easeInOut }),
    "-=1"
  )

  // ScrollMagic init
  var controller = new ScrollMagic.Controller();

  // container pin
  var startpin = new ScrollMagic.Scene({
    duration: 500
  })
    .setPin(".container")
    .addIndicators()
    .addTo(controller);

  // tween
  new ScrollMagic.Scene({
    duration: 500
  })
    .setTween(tl)
    .addIndicators()
    .addTo(controller);
  
  
  
  
  
  // build tween
  var tween = new TimelineMax()
    .add(TweenMax.to($J, 0.2, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
    .add(TweenMax.to($Y, 0.2, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
    .add(TweenMax.to($G, 0.2, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
    .add(TweenMax.to($And, 0.2, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
    .add(TweenMax.to($D, 0.2, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
    .add(TweenMax.to($Y2, 0.2, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
    .add(TweenMax.to("path", 1, { stroke: "#351F11", ease: Linear.easeNone }), 0)			// change color during the whole thing
    .add(TweenMax.to($('.text'), 1, { right: 0, ease: Power2.easeInOut }), 0)
    .add(TweenMax.to($('#people'), 1, { opacity: 1, ease: Linear.easeNone }), 0)
    .add(TweenMax.to("path", 1, { fill: "#FFFFFF", ease: Linear.easeNone }))

  // build scene
  var scene = new ScrollMagic.Scene({offset: 100, duration: 300, tweenChanges: true })
    .setTween(tween)
    .addIndicators()
    .addTo(controller);
  
  
  
  
  // imgs
  // build tween
  var tween1 = TweenMax.to(".J-img-1", 1, { css: { bottom: "+=400", opacity: 1 }, ease: Strong.easeInOut });

  // build scene
  new ScrollMagic.Scene({ triggerElement: "#trigger-img-1", duration: 100 })
    .setTween(tween1)
    .addIndicators()
    .addTo(controller);
  
  var tween2 = TweenMax.to(".J-img-2", 1, { css: { bottom: "+=400", opacity: 1 }, ease: Strong.easeInOut });

  // build scene
  new ScrollMagic.Scene({ triggerElement: "#trigger-img-2", duration: 100 })
    .setTween(tween2)
    .addIndicators()
    .addTo(controller);
  
  var tween3 = TweenMax.to(".J-img-3", 1, { css: { bottom: "+=400", opacity: 1 }, ease: Strong.easeInOut });

  // build scene
  new ScrollMagic.Scene({ triggerElement: "#trigger-img-3", duration: 100 })
    .setTween(tween3)
    .addIndicators()
    .addTo(controller);


  if (isMobile) {
    // configure iScroll
    var myScroll = new IScroll('#Y-container',
      {
        // don't scroll horizontal
        scrollX: false,
        // but do scroll vertical
        scrollY: true,
        // show scrollbars
        scrollbars: true,
        // deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
        // if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
        useTransform: false,
        // deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
        useTransition: false,
        // set to highest probing level to get scroll events even during momentum and bounce
        // requires inclusion of iscroll-probe.js
        probeType: 3,
        eventPassthrough: true, 
        // pass through clicks inside scroll container
        click: true
      }
    );

    // overwrite scroll position calculation to use child's offset instead of container's scrollTop();
    // controller.scrollPos(function () {
    //   return -myScroll.y;
    // });

    // thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
    myScroll.on("scroll", function () {
      controller.update();
    });
    console.log('mobile');
    // alert('mobile');
  }

  function autoPlayAudio1() {
    wx.config({
      // 配置信息, 即使不正确也能使用 wx.ready
      debug: false,
      appId: '',
      timestamp: 1,
      nonceStr: '',
      signature: '',
      jsApiList: []
    });
    wx.ready(function () {
      $('video').get(0).play();
    });
  }

  autoPlayAudio1();
  // autoPlayAudio2();
  $('video').get(0).play();









    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point, 12);

    var top_right_navigation = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL }); //右上角，仅包含平移和缩放按钮
	  /*缩放控件type有四种类型:
	  BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/

    map.addControl(top_right_navigation);


    // 创建地址解析器实例
    var myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上,并调整地图视野
    myGeo.getPoint("溧阳涵田度假村酒店", function(point){
      if (point) {
        map.centerAndZoom(point, 15);

        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

        var opts = {
          width: 200,     // 信息窗口宽度
          height: 100,     // 信息窗口高度
          title: "溧阳涵田度假村酒店", // 信息窗口标题
          enableMessage: true,//设置允许信息窗发送短息
          message: "蒋一戈和狄芸的婚宴地点，就等你来参加~"
        }
        var infoWindow = new BMap.InfoWindow("蒋一戈和狄芸的婚宴地点，就等你来参加~", opts);  // 创建信息窗口对象 
        marker.addEventListener("click", function () {
          map.openInfoWindow(infoWindow, point); //开启信息窗口
        });

      }else{
        alert("您选择地址没有解析到结果!");
      }
    }, "常州市");


});