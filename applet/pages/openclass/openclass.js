
var imageUtil = require('../../utils/util.js');

Page({
  data: {
    imgUrls:[    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    detail: [
        {
          imgurl:"/icon/library.png",
          url:"/pages/libraryDetails/libraryDetails"
        },
        {
          imgurl: "/icon/class.png",
        },
        {
          imgurl: "/icon/ekids.png",
        }
      ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    current:0,
   

    imagewidth:0,
    imageheight:0
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  swiperChange: function (e) {
    //只要把切换后当前的index传给<swiper>组件的current属性即可  
    this.setData({
      current: e.detail.current
    })
  }, 
  swipclick: function (e) {//点击图片触发事件
    // console.log(this.data.jumpTo[this.data.current]);
    var id = this.data.current;
    wx.navigateTo({
      url: '/pages/outview/outview',
    })
  },

  onLoad: function (options) {
  
  },


})