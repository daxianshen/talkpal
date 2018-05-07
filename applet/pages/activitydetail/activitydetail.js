 // pages/activitydetail/activitydetail.js
Page({

  data:{
    url:""
  },

  onLoad:function(options){

    this.setData({
      url:'https://www.talkpal.cc/static/znewtalkpal/article.html?id='+options.id
      
    })

  }
  
})