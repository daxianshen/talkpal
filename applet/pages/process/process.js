// pages/process/process.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: "/icon/process.jpg",
    images:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  imageLoad: function (e) {
    var $width = e.detail.width,    //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;    //图片的真实宽高比例

    console.log($width)
    console.log($height)

    var viewWidth = wx.getSystemInfoSync().windowWidth,           //设置图片显示宽度，左右留有16rpx边距
      viewHeight = parseInt(viewWidth / ratio);    //计算的高度值

    this.setData({
      images: {
        width: viewWidth,
        height: viewHeight
      }
    })

    console.log(this.data.images)
  }

})