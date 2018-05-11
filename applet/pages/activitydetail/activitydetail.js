 // pages/activitydetail/activitydetail.js
Page({

  data:{
    url:""
  },

  onLoad:function(options){

    this.setData({
      url:'https://www.talkpal.cc/static/znewtalkpal/article.html?id='+options.id
      
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