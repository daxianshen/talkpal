// pages/advice/advice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    advice:{
      info:""
    }
  },
  bindFormSubmit: function (e) {
    var app = getApp();
    var g_data = app.globalData;
    var that = this;
    if(e.detail.value.textarea){
      wx.request({
        url: g_data.host +"/api/miniFeedback/rest",
        method:'post',
        data: {
          feedback:e.detail.value.textarea,
          nickname: g_data.userInfo.nickName,
          token:g_data.token
          },
        success:function(res){
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 2000
          })
          setTimeout(function(){
            wx.navigateBack({
              delta: 1
            })
          },2000)
        }
      })
    }
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