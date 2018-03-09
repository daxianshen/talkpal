//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url:'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ],
    banners: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ],
   sections: [
      { url:'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',title:"公司介绍" },
      { url:'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',title: "公司介绍" },
      { url:'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg', title: "公司介绍" },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg', title: "公司介绍" },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg', title: "公司介绍" },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg', title: "公司介绍" },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg', title: "公司介绍" },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg', title: "公司介绍" }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '/pages/videoDetail/videoDetail'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        that.setData({
          windowHeight:res.windowHeight
        })
      }
    })
  }
})
