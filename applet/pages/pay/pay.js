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
    console.log(JSON.parse(options.data));
    this.setData({
      order: JSON.parse(options.data)
    })
    

    //随机生成订单号，并存入order对象内
  },

  initPay:function(oid){
     var that = this;
     var app = getApp();
     var g_data = app.globalData;
     var params = {
       order_id: oid,
       trade_type:"miniApp"
     };

     wx.request({
       url: g_data.host + "/pay/init",
       method: 'post',
       data: params,
       success: function (res) {
         if (res.data && res.data.data) {
           var data = res.data.data;
            console.log(data);
            wx.hideLoading()
             // wx.requestPayment(
             //     {
             //         'timeStamp': data.timeStamp,
             //         'nonceStr': data.nonceStr,
             //         'package': data.package,
             //         'signType': 'MD5',
             //         'paySign': data.paySign,
             //         'success': function (res) {
                         var order  = that.data.order;
                         var data = {
                           phone:order.mobile,
                           childName:order.name,
                           sex:order.sex,
                           age:order.age,
                           order_id:oid,
                           address: order.address,
                           level:order.level,
                           headimgurl:g_data.userInfo.avatarUrl,
                           token:g_data.token,
                         };
                         wx.request({
                             url: g_data.host + '/api/shareclass/add',//存储用户拼团订单接口
                             data: data,
                             method: 'post',
                             header: {
                                 'content-type': 'application/json' // 默认值
                             },
                             success: function (res) {
                                 wx.showToast({
                                     title: '支付成功'
                                 });
                                 setTimeout(function () {
                                     wx.hideToast()
                                     wx.navigateTo({
                                         url: '../../pages/paydone/paydone?orderid=' + res.data.id
                                     })
                                 }, 2000)
                             }
                         })
                     };
                 //     'fail': function (res) {
                 //       wx.hideLoading()
                 //         wx.showToast({
                 //             title: '用户取消',
                 //             icon: 'loading',
                 //             duration: 1500
                 //         })
                 //         setTimeout(function () {
                 //             wx.hideToast()
                 //         }, 2000)
                 //
                 //
                 //     }
                 // })
       //   }
       }
     })


  },

  pay:function(){
    console.log("pay");
    wx.showLoading({
      title: '加载中',
    })
  

    var app = getApp();
    var g_data = app.globalData;
    var that = this;
    var order  = that.data.order;
    var params = {
      price: 0.01,
      type: "ping",
      goodsName: "脱口派拼团",
      deleted: true,
      token: g_data.token
    }
    wx.request({
      url: g_data.host + "/order/add",
      method: 'post',
      data: params,
      success: function (res) {
        if (res.data && res.data.data) {
          var data = res.data.data;
          that.initPay(data._id);
        }
      }
    })
  },
  
  onShareAppMessage: function () {

  }
})