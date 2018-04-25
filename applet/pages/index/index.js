//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '简约，而不简单',
    userInfo: {},
    windowHeight:0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '/pages/videoDetail/videoDetail'
    })
  },
  gotoDetail: function (event) {
    var url = event.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    });
  },
  onLoad: function () {
    console.log('onLoad555')
    var that = this;
    
   
  }
})
