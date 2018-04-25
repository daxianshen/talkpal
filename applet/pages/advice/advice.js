// pages/advice/advice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    advice:{
      info:""
    }
  },

  bindFormSubmit: function (e) {
    console.log(e.detail.value.textarea);
    var that = this;
    if(e.detail.value.textarea){
      wx.request({
        url: '',
        method:'post',
        data: e.detail.value.textarea,
        complete:function(res){
          if (res == null || res.data == null) {
            console.error('网络请求失败');
            return;
          }else{
            that.setData({
              advice: {
                info: ""
              }
            })
          }
          
        }
      })
    }
  }
  
})