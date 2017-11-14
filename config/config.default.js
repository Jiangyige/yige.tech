'use strict';

const fs = require('fs');
const path = require('path');

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '123456';

  // config.siteFile = {
  //   '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.ico')),
  // };

  // config.news = {
  //   pageSize: 30,
  //   serverUrl: 'https://hacker-news.firebaseio.com/v0',
  // };

  // photo页面数据
  config.cdn = 'http://7xnwd9.com1.z0.glb.clouddn.com/';

  config.photos = [{
      title: '“故事，开始于两座城～”',
      subTitle: 'December 12, 2015',
      location: 'Nanjing,Shanghai',
      imgs: [
        'nanjing.jpg',
        'shanghai.jpg'
      ]
    },
    {
      title: '“杂。”',
      subTitle: 'December 12, 2015',
      location: '田子坊,Shanghai',
      imgs: [
        'tianzifang-1.jpg',
        'tianzifang-2.jpg',
        'tianzifang-3.jpg'
      ]
    },
    {
      title: '“First Christmas。”',
      subTitle: 'December 25, 2015',
      location: '中山路,Nanjing',
      imgs: [
        'merry.jpg'
      ]
    },
    {
      title: '“好汉达成。\（￣︶￣）/”',
      subTitle: 'January 1, 2016',
      location: '八达岭,Beijing',
      imgs: [
        'greatwall-1.jpg',
        'greatwall-2.jpg'
      ]
    },
    {
      title: '“我爱北京天安门！”',
      subTitle: 'January 1, 2016',
      location: '天安门,Beijing',
      imgs: [
        'tiananmen.jpg'
      ]
    },
    {
      title: '“你在拍什么？”',
      subTitle: 'January 3, 2016',
      location: '故宫,Beijing',
      imgs: [
        'zijincheng.jpg'
      ]
    },
    {
      title: '“元宵节小聚。”',
      subTitle: 'February 5, 2016',
      location: '夫子庙,Nanjing',
      imgs: [
        'yuanxiaojie.jpg'
      ]
    },
    {
      title: '“さくら満開。”',
      subTitle: 'March 19, 2016',
      location: '南林,Nanjing',
      imgs: [
        'sakura1.jpg',
        'sakura2.JPG',
        'sakura3.JPG'
      ]
    },
    {
      title: '“お誕生日おめでとう。”',
      subTitle: 'May 3, 2016',
      location: 'Home,Nanjing',
      imgs: [
        'birth1.jpg',
        'birth2.jpg'
      ]
    }
  ]

  config.photos.forEach((e, i) => {
    e.imgs.forEach((img, j) => {
      // 默认为  非webp格式
      config.photos[i].imgs[j] = config.cdn + img;
    });
  });

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.nj': 'nunjucks',
    },
  };

  config.static = {
    gzip: true
  };

  return config;
};