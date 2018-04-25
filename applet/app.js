//app.js

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var that= this;

    wx.login({
      success: function (loginCode) {
       wx.getUserInfo({
          withCredentials:true,
          success: function (res) {
            console.log(res);
            that.globalData.userInfo = res.userInfo
            wx.request({
              url: 'https://www.talkpal.cc/splogin',
              method: 'POST',
              data: {
                js_code:loginCode.code,
                nickName:res.userInfo.nickName
              },
            
              success: function (res) {
                console.log(res);
                that.globalData.token = res.data.data.token
              }
            })
          }
        })
      },
      error: function (res) {
        console.log(res);
      }
    })
      
    
  },

  globalData:{
    userInfo:null,
    host: "https://www.talkpal.cc",
    token:null
  }
})