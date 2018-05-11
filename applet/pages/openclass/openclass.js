

Page({
  data: {
    indicators:[    
        {
          imgUrl:"http://7xlw0s.com2.z0.glb.qiniucdn.com/FsE3NY83ACbNCB44spQ9PYcBEUkK",
          _id:"5aeab6a11879ff2307fc0b99"
        },
        {
          imgUrl:"http://7xlw0s.com2.z0.glb.qiniucdn.com/FgMGaNqoKUsHfPWUeJ2lmRJEtMNJ",
          _id:"5aeaa8e51879ff2307fc0b93"
        },
        {
          imgUrl:"http://7xlw0s.com2.z0.glb.qiniucdn.com/Fn2meE-U9mFy7Nh_SSVkSq9rzBp6",
          _id:"5aeaa4951879ff2307fc0b8b"
        },
        {
          imgUrl:"http://7xlw0s.com2.z0.glb.qiniucdn.com/Fgw2mWlHLFtyl3VkCTJLT31vHRC-",
          _id:"5ae980141879ff2307fc0a83"
        }
    ],
    detail: [
        {
          imgurl:"/icon/library.png",
          url:"/pages/libraryDetails/libraryDetails"
        },
        {
          imgurl: "/icon/class.png",
          url: "/pages/process/process"
        },
        {
          imgurl: "/icon/ekids.png",
          url: "/pages/getClass/getClass"
        }
      ],

    width: 0,

    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    current:0,
   

    imagewidth:0,
    imageheight:0
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  swiperChange: function (e) {
    //只要把切换后当前的index传给<swiper>组件的current属性即可  
    this.setData({
      current: e.detail.current
    })
  }, 
  

  onLoad: function (options) {
  
  },

  imageLoad: function (e) {
    var $width = e.detail.width,    //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;    //图片的真实宽高比例

    var viewWidth = wx.getSystemInfoSync().windowWidth-20,           //设置图片显示宽度，左右留有16rpx边距
      viewHeight = parseInt(viewWidth / ratio);    //计算的高度值

    this.setData({
      images: {
        width: viewWidth,
        height: viewHeight
      }
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
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }


})