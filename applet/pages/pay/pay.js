// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      order: JSON.parse(options.data)
    })

    //随机生成订单号，并存入order对象内
  },

  pay:function(){

    var that = this;

    wx.requestPayment(
      {
        'timeStamp': '',
        'nonceStr': '',
        'package': '',
        'signType': 'MD5',
        'paySign': '',
        'success': function (res) {
            wx.request({
              url: '',//存储用户拼团订单接口
              data: that.data.order,
              header: {
                'content-type': 'application/json' // 默认值
              },
              success: function (res) {



                wx.showToast({
                  title: '支付成功'
                })
                setTimeout(function () {
                  wx.hideToast()
                }, 2000,function(){
                  wx.navigateTo({
                    url: '../../pages/paydone/paydone?orderid='+that.data.order.orderid,
                  })
                })
              }
            })
         },
        'fail': function (res) { 
          wx.showToast({
            title: '用户取消',
            icon:'loading',
            duration:1500
          })
          setTimeout(function(){
            wx.hideToast()
          },2000)
        }
      })
  },
  
  onShareAppMessage: function () {

  }
})