// pages/mine/mine.js
Page({
  data: {
    info: {},
    group:{},
    animationData:{},
    phoneCall:"020-38263691"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var app = getApp();
    var that = this;
    console.log("load");

    // app.getUserInfo(function (userInfo) {
    //   //更新数据
    //   console.log(userInfo);
      that.setData({
        info: app.globalData.userInfo
      })
    // })

    // wx.request({
    //   url:'',
    //   data:{},
    //   method:"get",
    //   success:function(res){
    //     console.log(res.data.result);
    //     that.setData({
    //       group:res.data.result
    //     })
    //   }
    // })

    that.setData({
       group:{
         code:0,
         parents:[
           {
             name:'mama',
             pic:'/icon/zan.png'
           },
           {
             name: 'baba',
             pic: '/icon/zan.png'
           },
           {
             name: 'jiejie',
             pic: '/icon/zan.png'
           },
           {
             name: 'jiejie',
             pic: '/icon/zan.png'
           },
           {
             name: 'jiejie',
             pic: '/icon/zan.png'
           }
         ]
       }
    })

    console.log(this.data.info);
    console.log(this.data.group);
  },
  call: function (e) {
    wx.makePhoneCall({
      phoneNumber: this.data.phoneCall,
    })
  },

  advice: function (e) {
    
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '脱口派',
      path: '/pages/openclass/openclass',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
  
})

