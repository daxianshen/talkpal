// pages/activitydetail/activitydetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      name: "",
      phone: "",
      num: "",
      age: "",
    },
    activityName: "",
    activityId: "",
    showTopTips: ""
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  showAlert: function (arg_msg) {
    var that = this;
    that.setData({
      showTopTips: arg_msg
    })
    setTimeout(function () {
      that.setData({
        showTopTips: null
      })
    }, 5000)
  },
  formSubmit: function (e) {
    console.log(e);
    var that = this;
    var data = e.detail.value;
    var phone = data.phone;
    if (!phone) return this.showAlert("手机号未填写");
    var params = {
      price: parseInt(that.data.price) * data.num,
      'type': "activity",
      order_id: that.data.activityId,
      goodsName: that.data.activityName + "活动报名",
      phone: that.phone,
      joinNum: that.num,
      realName: that.name,
    };
    wx.request({
      url: 'http://talkpal.cc/order/add',
      method: 'POST',
      data: params,
      success: function (res) {
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var that = this;
    that.setData({
      activityName: options.name
    });
    that.setData({
      activityId: options.id
    });
    that.setData({
      price: options.price
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})