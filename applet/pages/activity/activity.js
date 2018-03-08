Page({
  data: {
    videoList: [],
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    // that.setData({
    //   movielist: this.data.videoList
    // })
    wx.request({
      url: 'http://talkpal.cc/api/kwactivity/rest',
      method: 'GET',
      success: function (res) {
        if(res.data) {
          res = res.data;
        // success
        if(res && res.code == 0 && res.data){
          that.setData({
            movielist: res.data
          })
        }
        }
        console.log(res);
      }
    })
    // wx.request({
    //   url: 'http://www.maodan.online/php/movie.php',
    //   success: function (res) {
    //     console.log(res);
    //     that.setData({
    //       movielist: res.data
    //     })
    //   }
    // });

  },
  onReady: function () {
    // 页面渲染完成
  },
  gotoDetail: function (event) {
    var data = event.currentTarget.dataset;
    var id = data.id;
    var name = data.name;
    var price = data.price
    wx.navigateTo({
      url: '/pages/activitydetail/activitydetail?id=' + id +'&name='+name+'&price='+price
    });
  }

})