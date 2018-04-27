// pages/mine/mine.js
Page({
  data: {
    info: {},
    group:{},
    animationData:{},
    phoneCall:"15692404006"
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
    
  }
  
})

