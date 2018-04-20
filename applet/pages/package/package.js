// pages/package/package.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    taocan:[],
    array: [1, 2,3,4,5,6,7,8],
    items:[],
    index:0,
    joinNum:1
  },                    

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    wx.request({
      url: 'http://talkpal.cc/api/taocan/rest?sort=num&type=1',
      method: 'GET',
      success: function (res) {
        if (res.data) {
          res = res.data;
          // success
          if (res && res.code == 0 && res.data) {
            that.setData({
              taocan: res.data
            });
            that.setData({
              items: res.data[0].tcs
            });
          }
        }
        console.log(res);
        wx.hideLoading()
      }
    })
  
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value 
    })
    var val = e.detail.value ;
    this.setData({
      joinNum: e.detail.value+1
    })
    console.log(this);
    for (var i = 0, l = this.data.taocan.length; i < l; i++) {
      if (this.data.taocan[i].num == val) {
        this.setData({
          items: this.data.taocan[i].tcs
        })
        return;
      }
    };
  },
  gotoDetail: function (event) {
    var data = event.currentTarget.dataset;
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定购买'+name+"?",
      success: function (res) {
        if (res.confirm) {
          that.gotoPay(data);
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  gotoPay:function(item){
    console.log(item);
    var params = {
      price: item.price * item.lessonnum * this.data.joinNum,
      type: "package",
      timeLong: item.long,
      goodsName: "脱口派" + item.name + "(" + this.data.taocan[this.data.index].tcName + "," + item.lessonnum + "节课）",
      joinNum: this.data.joinNum,
      lessonNum: item.lessonnum,
      lessonTotalNum: item.lessonnum,
      deleted: true
    };
    console.log(params);
    wx.request({
      url: 'http://talkpal.cc/order/add',
      method: 'POST',
      data: params,
      success: function (res) {
        console.log(res);
      }
    })
    console.log("go to pay");
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})