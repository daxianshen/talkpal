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
})