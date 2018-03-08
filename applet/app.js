//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              console.log(res);
              res.userInfo.nickname = res.userInfo.nickName;
              res.userInfo.headimgurl = res.userInfo.avatarUrl;
            res.userInfo.openid="oT6dHxCao9tZmwDcKmdqmLqtkcwo";
          res.userInfo.unionid="oWVF2t3KXzlXC_Jq8bS3SeAQdbOE";
              that.globalData.userInfo = res.userInfo
              wx.request({
                url: 'http://talkpal.cc/splogin',
                method: 'POST',
                data: res.userInfo,
                success: function (res) {
                  console.log(res);
                  that.globalData.token = res.data.token
      
                }
              })
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    token:null
  }
})