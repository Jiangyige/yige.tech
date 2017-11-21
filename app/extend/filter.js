'use strict';

const moment = require('moment');

exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();

exports.domain = url => url && url.split('/')[2];

exports.imgList = imgs => {
  let length = imgs.length;
  let str = '';
  switch (length) {
    case 1:
      return `<img class="p_img lazy" data-src="${imgs[0]}" data-action="zoom" style="cursor: -webkit-zoom-in;">`
    case 2:
      imgs.forEach(img => {
        str = str + `<img class="p_img_2 is-6 lazy" data-src="${img}" data-action="zoom" style="cursor: -webkit-zoom-in;">`;
      });
      return str;
    case 3:
      imgs.forEach(img => {
        str = str + `<img class="p_img_3 is-4 lazy" data-src="${img}" data-action="zoom" style="cursor: -webkit-zoom-in;">`;
      });
      return str;
    case 4:
      imgs.forEach(img => {
        str = str + `<img class="p_img_4 is-6 lazy" data-src="${img}" data-action="zoom" style="cursor: -webkit-zoom-in;">`;
      });
      return str;
    default:
      break;
  }
}