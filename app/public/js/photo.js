$(function () {

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

});