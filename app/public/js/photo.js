$(function () {


  function checkComplete() {
    var $img = $('img');
    console.log($img);
    setTimeout(function () {
      var complete = true;
      $img.each(function () {
        if (!this.complete) {
          complete = false;
          return false;
        }
      });
      if (complete) {
        console.log('所有图片已加载完成！');
        $('.flex-container').addClass('hide')
        $('.photos').removeClass('hide');
        photo.init();
      } else {
        checkComplete();
      }
    }, 50);
  }

  checkComplete();


  var photo = {
    init: function () {
      $('img.lazy').lazyload({
        threshold: 50,
        effect: 'fadeIn',
        data_attribute: 'src',
        url_rewriter_fn: function ($element, originalSrcInAttr) {
          var imgFilter = !isSupportWebP ?
            '?imageView2/2/w/1920/h/1280/q/90|imageslim' :
            '?imageMogr2/thumbnail/1920x1280/format/webp/interlace/1/blur/1x0/quality/90|imageslim';

          return originalSrcInAttr + imgFilter;
        }
      });
    }
  }
});