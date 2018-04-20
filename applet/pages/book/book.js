// pages/book/book.js
Page({
  data: {
    windowHeight: 0,
    dk:true
  },
  onShareAppMessage: function (res) {
    var that = this;
    console.log(that);
    if (res.from === 'button') {
      that.dk=false;
      // 来自页面内转发按钮
      console.log(res.target);
      console.log('hello');    
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {

        // 转发成功
      },
      fail: function (res) {
        that.dk = true;
        // 转发失败  
      }
    }
  },
  onLoad: function (options) {
   var that = this;
   wx.showShareMenu({
     withShareTicket: true
   })
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        that.setData({
          windowHeight:res.windowHeight
        })
      }
    })
  },
  confirm:function(event){
      var value = event.detail.value;
      wx.navigateTo({
        url: '/pages/booklist/booklist?value='+value
      })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})