// pages/parents/parents.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    group:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    var g_data = app.globalData;
    var that = this;

      wx.request({
        url: g_data.host + "/getCustomerGroup",
        method: 'get',
        data: {
          token: g_data.token
        },
        success: function (res) {
          if (res.data && res.data.data) {
            var data = res.data.data;
            var ps = [];
            for (var i = 0,l = data.length;i<l; i++) {
              ps.push({name: data[i].nickname, pic: data[i].headimgurl || '/icon/zan.png'})
            }
            that.setData({
              group: {
                parents: ps
              }
            })
          }
        }
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