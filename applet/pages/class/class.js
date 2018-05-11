// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var url = "https://www.talkpal.cc/user/appointments/package?token="+getApp().globalData.token;
    this.setData({ url:url})
  
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