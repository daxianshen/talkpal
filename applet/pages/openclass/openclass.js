Page({
  data: {
    videoList: [
      { name: '亲子阅读', id: 'guowei', imgSrc:"http://cdn.32ci.com/o_1bg5jfhhe1thrq81qqq1ogo14o88.jpg-w640" },
      { name: '亲子阅读', id: 'shucai', imgSrc: "http://cdn.32ci.com/o_1bg5jfhhe1thrq81qqq1ogo14o88.jpg-w640" },
      { name: '亲子阅读', id: 'chaohuo', imgSrc: "http://cdn.32ci.com/o_1bg5jfhhe1thrq81qqq1ogo14o88.jpg-w640" },
      { name: '亲子阅读', id: 'dianxin', imgSrc: "http://cdn.32ci.com/o_1bg5jfhhe1thrq81qqq1ogo14o88.jpg-w640" },
      { name: '亲子阅读', id: 'cucha', imgSrc: "http://cdn.32ci.com/o_1bg5jfhhe1thrq81qqq1ogo14o88.jpg-w640" },
      { name: '亲子阅读', id: 'danfan', imgSrc: "http://cdn.32ci.com/o_1bg5jfhhe1thrq81qqq1ogo14o88.jpg-w640" }
    ],
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    that.setData({
          movielist: this.data.videoList
    })
    wx.request({
      url: 'http://talkpal.cc/teacher/list',
      method: 'POST',
      success: function (res) {
        // success
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
    var id = event.currentTarget.dataset.vid;
    console.log(event, id);
    wx.navigateTo({
      url: '/pages/videoDetail/videoDetail?id=' + id
    });
  }

})