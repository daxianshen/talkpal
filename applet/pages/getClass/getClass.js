// pages/getClass.js


var  postdata = require("../../data/data.js");

var array=[];

for(var a=1;a<100;a++){
  array.push(a);
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:{},
    groupDetail:null,
    index1:0,
    index2:0,
    array:[],
    larray:["正常对话","掌握对话","知道单词","基础薄弱"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var app = getApp();
      var g_data = app.globalData;
      //检测是否加入...
      wx.request({
          url: g_data.host + "/api/shareclass/join",
          method: 'get',
          data: {token:g_data.token},
          success: function (res) {

              if(res.data && res.data.id){
                  wx.navigateTo({
                      url: '../../pages/detail/detail?oid='+res.data.id,
                  })
              }

          }
      });
    this.setData({
      groupDetail: postdata.groupData[options.index],
      array:array
    })


    console.log(this.data.groupDetail)
  },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  imageLoad: function (e) {
    var $width = e.detail.width,    //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;    //图片的真实宽高比例
    var viewWidth = wx.getSystemInfoSync().windowWidth,           //设置图片显示宽度
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


//表格验证
  formSubmit:function(e){
    //e.detail.value

    var that=this;

    if (!e.detail.value.name || !e.detail.value.mobile || !array[e.detail.value.age] || !e.detail.value.sex || !that.data.larray[e.detail.value.level]||!e.detail.value.address){
      wx.showToast({
        title: '请完善信息！',
        icon:'loading',
        duration:1500
      })
      setTimeout(function(){
        wx.hideToast()
      },2000)
    } else if (e.detail.value.mobile.length != 11) {
      wx.showToast({
        title: '请输入11位手机号码!',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    }else{

      //把数据传去支付页面
      var dataobj={
        title:  that.data.groupDetail.title,
        detail: that.data.groupDetail.detail,
        nprice: that.data.groupDetail.groupPrice,
        oprice: that.data.groupDetail.previousPrice,
        poster: that.data.groupDetail.poster,
        name: e.detail.value.name,
        mobile: e.detail.value.mobile,
        age: array[e.detail.value.age],
        sex: e.detail.value.sex,
        level: that.data.larray[e.detail.value.level],
        address: e.detail.value.address
      }
      wx.navigateTo({
        url: '../../pages/pay/pay?data='+JSON.stringify(dataobj)
      })
    }
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