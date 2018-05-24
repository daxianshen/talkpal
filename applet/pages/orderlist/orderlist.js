// pages/orderlist/orderlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var app = getApp();
    var g_data = app.globalData;

    console.log(g_data)

    //获取订单信息、团长和已拼课用户信息....

  
    wx.request({
      url: g_data.host + '/api/shareclass/myteam',//存储用户拼团订单接口
      method: 'get',
      data:{token:g_data.token},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {

        var data =res.data.data;

        for(var a=0;a<data.length;a++){
          data[a].create_at = new Date(data[a].create_at).getFullYear() + "/" + (new Date(data[a].create_at).getMonth() + 1) +"/"+ new Date(data[a].create_at).getDate()+ " " + new Date(data[a].create_at).getHours() + ":" + new Date(data[a].create_at).getMinutes();
        }

        that.setData({
          orders: data
        })
      }
    })
  }
})