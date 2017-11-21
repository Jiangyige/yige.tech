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
        // 'tianzifang-1.jpg',
        // 'za1.jpg',
        // 'tianzifang-3.jpg',
        'za3.jpg'
      ]
    },
    {
      title: '“First Christmas。”',
      subTitle: 'December 25, 2015',
      location: '中山路,Nanjing',
      imgs: [
        // 'merry.jpg'
        'eve1.jpg',
        'eve2.jpg'
      ]
    },
    {
      title: '“好汉达成。\（￣︶￣）/”',
      subTitle: 'January 1, 2016',
      location: '八达岭,Beijing',
      imgs: [
        'greatwall-3.jpg',
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
      title: '“元宵节灯会。”',
      subTitle: 'February 5, 2016',
      location: '夫子庙,Nanjing',
      imgs: [
        'yuanxiaojie1.jpg',
        // 'yuanxiaojie.jpg',
        // 'yuanxiaojie2.jpg'
      ]
    },
    {
      title: '“湖、舟。”',
      subTitle: 'March 6, 2016',
      location: '玄武湖,Nanjing',
      imgs: [
        'xuanwuhu.jpg',
      ]
    },
    {
      title: '“さくら満開。”',
      subTitle: 'March 19, 2016',
      location: '南林,Nanjing',
      imgs: [
        // 'sakura-1.jpg',
        'sakura-2.jpg',
        'sakura-3.jpg',
        'sakura-4.jpg'
        // 'sakura4.jpg',
        // 'sakura2.JPG',
        // 'sakura3.JPG'
      ]
    },
    {
      title: '“花果山。”',
      subTitle: 'March 22, 2016',
      location: '花果山,Lianyungang',
      imgs: [
        'huaguoshan1.jpg',
        'huaguoshan2.jpg'
      ]
    },
    {
      title: '“言传身教。”',
      subTitle: 'March 22, 2016',
      location: '花果山,Lianyungang',
      imgs: [
        'houzi.jpg'
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
    },
    {
      title: '“城市的声音。”',
      subTitle: 'May 14, 2016',
      location: '玄武湖,Nanjing',
      imgs: [
        'xuanhuhu2.jpg'
      ]
    },
    {
      title: '“爱情 恒温。”',
      subTitle: 'May 16, 2016',
      location: 'Home,Nanjing',
      imgs: [
        'lovefood.jpg'
      ]
    },
    {
      title: '“穿衣显胖，脱衣显瘦。”',
      subTitle: 'June 17, 2016',
      location: 'Home,Liyang',
      imgs: [
        'samedog1.jpg',
        'samedog2.jpg'
      ]
    },
    {
      title: '“自撮三つ。”',
      subTitle: 'June 25, 2016',
      location: '艾尚天地,Nanjing',
      imgs: [
        'zipai1.jpg',
        'zipai2.jpg',
        'zipai3.jpg'
      ]
    },
    {
      title: '“旧旧的时光。”',
      subTitle: 'June 26, 2016',
      location: '浦口火车站,Nanjing',
      imgs: [
        'losttime1.jpg',
        'losttime2.jpg',
        'losttime3.jpg',
        'losttime4.jpg'
      ]
    },
    {
      title: '“Go with me。”',
      subTitle: 'June 26, 2016',
      location: '浦口火车站,Nanjing',
      imgs: [
        'gowithme1.jpg',
        'gowithme2.jpg',
        'gowithme3.jpg'
      ]
    },
    {
      title: '“First Ferris Wheel。”',
      subTitle: 'June 26, 2016',
      location: '桥北,Nanjing',
      imgs: [
        'wheel.jpg'
      ]
    },
    {
      title: '“夏。”',
      subTitle: 'July 3, 2016',
      location: '明孝陵,Nanjing',
      imgs: [
        'mingxiaoling1.jpg',
        'mingxiaoling2.jpg',
        'mingxiaoling3.jpg'
      ]
    },
    {
      title: '“云海。”',
      subTitle: 'August 27, 2016',
      location: '黄山,Anhui',
      imgs: [
        'huangshan2.jpg'
      ]
    },
    {
      title: '“黄山。”',
      subTitle: 'August 27, 2016',
      location: '黄山,Anhui',
      imgs: [
        'huangshan3.jpg',
        'huangshan4.jpg'
      ]
    },
    {
      title: '“帅不过3秒。”',
      subTitle: 'August 27, 2016',
      location: '黄山,Anhui',
      imgs: [
        'renshe1.jpg',
        'renshe2.jpg',
        'renshe3.jpg'
      ]
    },
    {
      title: '“天気がいいな〜”',
      subTitle: 'August 28, 2016',
      location: '宏村,Anhui',
      imgs: [
        // 'tianqi1.jpg',
        // 'tianqi2.jpg',
        // 'tianqi3.jpg'
        'tianqi4.jpg'
      ]
    },
    { 
      title: '“小桥流水。”',
      subTitle: 'August 28, 2016',
      location: '宏村,Anhui',
      imgs: [
        'xiaoqiaoliushui1.jpg',
        'xiaoqiaoliushui2.jpg'
      ]
    },
    {
      title: '“稻田。”',
      subTitle: 'August 28, 2016',
      location: '宏村,Anhui',
      imgs: [
        'daotian.jpg'
      ]
    },
    {
      title: '“机车、美女？”',
      subTitle: 'September 3, 2016',
      location: '南京眼,Nanjing',
      imgs: [
        'xiaoniu1.jpg',
        'xiaoniu2.jpg',
        'xiaoniu3.jpg'
      ]
    },
    {
      title: '“南京眼”',
      subTitle: 'September 3, 2016',
      location: '南京眼,Nanjing',
      imgs: [
        'nanjingyan.jpg'
      ]
    },
    {
      title: '“赏月”',
      subTitle: 'September 17, 2016',
      location: '宁丹路,Nanjing',
      imgs: [
        'zhongqiu.jpg'
      ]
    },
    {
      title: '“バカみたい笑ている。”',
      subTitle: 'September 25, 2016',
      location: 'Line Cafe,Nanjing',
      imgs: [
        'line1.jpg',
        'line2.jpg',
        'line3.jpg'
      ]
    },
    {
      title: '“青砖黛瓦。”',
      subTitle: 'October 5, 2016',
      location: '南长街,Wuxi',
      imgs: [
        'nanchangjie.jpg'
      ]
    },
    {
      title: '“演唱会。”',
      subTitle: 'October 22, 2016',
      location: '奥体,Nanjing',
      imgs: [
        // 'yanchanghui1.jpg',
        // 'yanchanghui2.jpg',
        'yanchanghui3.jpg',
        // 'yanchanghui4.jpg'
      ]
    },
    {
      title: '“Sunset。”',
      subTitle: 'October 30, 2016',
      location: '南财,Nanjing',
      imgs: [
        'nancai.jpg'
      ]
    },
    {
      title: '“Light Night。”',
      subTitle: 'November 21, 2016',
      location: '虹悦城,Nanjing',
      imgs: [
        'light4.jpg'
      ]
    },
    {
      title: '“枫。”',
      subTitle: 'November 26, 2016',
      location: '栖霞山,Nanjing',
      imgs: [
        'qixiashan.jpg'
      ]
    },
    {
      title: '“紫金山。”',
      subTitle: 'December 3, 2016',
      location: '紫金山,Nanjing',
      imgs: [
        'zijinshan1.jpg',
        // 'zijinshan2.jpg'
        'zijinshan3.jpg'
      ]
    },
    {
      title: '“在每一条伤心的应天大街...”',
      subTitle: 'April 22, 2017',
      location: '应天大街&南京南站,Nanjing',
      imgs: [
        'yingtiandajie.jpg',
        'yingtiandajie2.jpg'
      ]
    },
    {
      title: '“日本街头。”',
      subTitle: 'April 27, 2017',
      location: '墨田区,Tokyo',
      imgs: [
        'japan1.jpg'
      ]
    },
    {
      title: '“銀座。”',
      subTitle: 'April 27, 2017',
      location: '銀座,Tokyo',
      imgs: [
        'ginza1.jpg',
        'ginza2.jpg'
      ]
    },
    {
      title: '“Sky tree in the day and night。”',
      subTitle: 'April 27, 2017',
      location: 'スカイツリー,Tokyo',
      imgs: [
        'skytree1.jpg',
        'skytree2.jpg'
      ]
    },
    {
      title: '“Asakusa”',
      subTitle: 'April 28, 2017',
      location: '浅草,Tokyo',
      imgs: [
        'asakusa1.jpg',
        'asakusa2.jpg',
        'asakusa3.jpg'
      ]
    },
    {
      title: '“Tokyo tower”',
      subTitle: 'April 28, 2017',
      location: '六本木,Tokyo',
      imgs: [
        'tokyotower.jpg'
      ]
    },
    {
      title: '“看过的最好的夜景。”',
      subTitle: 'April 29, 2017',
      location: '六本木,Tokyo',
      imgs: [
        'nightview2.jpg'
      ]
    },
    {
      title: '“君が好きだと呼びたい。”',
      subTitle: 'April 30, 2017',
      location: '镰仓高校前,Kanakawa',
      imgs: [
        'slamdunk.jpg'
      ]
    },
    {
      title: '“Impressing tree。”',
      subTitle: 'May 1, 2017',
      location: '皇居,Tokyo',
      imgs: [
        'largetree.jpg'
      ]
    },
    {
      title: '“秋叶原。”',
      subTitle: 'May 1, 2017',
      location: '秋叶原,Tokyo',
      imgs: [
        'aki1.jpg',
        'aki2.jpg'
      ]
    },
    {
      title: '“小清新。”',
      subTitle: 'May 14, 2017',
      location: '1912,Nanjing',
      imgs: [
        '1912.jpg'
      ]
    },
    {
      title: '“中超联赛。”',
      subTitle: 'June 18, 2017',
      location: '奥体,Nanjing',
      imgs: [
        'football2.jpg'
      ]
    },
    {
      title: '未完待续... / To Be Continued... / つづく...',
      subTitle: '',
      location: '',
      imgs: []
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