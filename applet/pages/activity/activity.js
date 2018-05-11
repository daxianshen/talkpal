Page({
  data: {
    activities:[],
    display:"none",
    defaultnum:0,
    loadnum:5,
    page:1,
  },

  getData:function(page){

      var that = this;
      wx.request({
          url: 'https://www.talkpal.cc/api/article/rest?count=true&page='+ page +'&size=5',
          method: 'GET',
          success: function (res) {

            wx.setStorage({
              key: 'totalnum',
              data: {
                "num":res.data.data.count
                },
              success:function(res){

              } 
            })

            var ndata = res.data.data.data;

            for (var a = 0; a < ndata.length;a++){
              ndata[a].create_at = ndata[a].create_at.slice(0,10);
            }

            setTimeout(function () {
              that.setData({
                display: "block"
              })
            })

            setTimeout(function () {
              that.setData({
                activities: that.data.activities.concat(ndata),
              })
            }, 1000)

            wx.getStorage({
              key: 'totalnum',
              success: function (res) {
                var num = res.data.num;
               
                if(that.data.activities.length<num){

                  that.setData({
                    page: that.data.page + 1
                  })
                
                }
              },
              fail: function (res) {
                console.log(res)
              }
            })


            setTimeout(function () {
              that.setData({
                display: "none"
              })
            }, 1000)

            
            



          }
      })





  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    this.getData(this.data.page);

  },
  onReady: function () {
    // 页面渲染完成
  },


  onReachBottom:function(){
    var that=this;
    this.getData(this.data.page);
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