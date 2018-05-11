// pages/process/process.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [
      "/icon/process.jpg",
      "/icon/find_01.png",
      "/icon/find_02.png",
      "/icon/find_03.png",
      "/icon/find_04.png",
      "/icon/find_05.png"
    ],
    images:[]
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

    var viewWidth = wx.getSystemInfoSync().windowWidth,           //设置图片显示宽度，左右留有16rpx边距
      viewHeight = parseInt(viewWidth / ratio);    //计算的高度值

    var that = this;
    this.setData({
      images: that.data.images.concat([{
        width: viewWidth,
        height: viewHeight
      }])
    })
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
        console.log(res)
      },
      fail: function (res) {
        // 转发失败
        console.log(res)
      }
    }
  }

})