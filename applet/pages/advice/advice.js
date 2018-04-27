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
  }
  
})