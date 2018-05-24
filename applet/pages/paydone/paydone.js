// pages/paydone/paydone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:null,
    order:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      order: options.orderid
    })
  },

  imageLoad: function (e) {
    var $width = e.detail.width,    //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;    //图片的真实宽高比例
    var viewWidth = 200,           //设置图片显示宽度
      viewHeight = parseInt(viewWidth / ratio);    //计算的高度值
    var image = this.data.images;
    //存储图片的宽高值
    image = {
      width: viewWidth,
      height: viewHeight
    }
    this.setData({
      images: image
    })
  },

  detail:function(){
    var that = this;
    wx.navigateTo({
      url: '../../pages/detail/detail?oid='+that.data.order,
    })
  },
  
  onShareAppMessage: function () {
    if (res.from === 'button') {
      var path = "/pages/detail/detail?oid=" + this.data.order;
      console.log(path);
      return {
        title: "一起来上脱口派的体验课吧~",
        path: path,//订单号orderId
        success: function (res) {

        }
      }
    } else {
      wx.hideShareMenu()
    }
  }
})