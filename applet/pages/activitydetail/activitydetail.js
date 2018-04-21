 // pages/activitydetail/activitydetail.js
Page({

  data:{
    url:""
  },

  onLoad:function(options){
    console.log(options);
    this.setData({
      url:'https://www.talkpal.cc/static/znewtalkpal/article.html?id='+options.id
      
    })
    console.log(this.data.url);
  }
  
})