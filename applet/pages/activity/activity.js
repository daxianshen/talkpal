Page({
  data: {
    imgUrls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522219290612&di=fb5609532c880b306426dc6c47e1f772&imgtype=0&src=http%3A%2F%2Feasyread.ph.126.net%2FAF5Osm74SF7ht_zvLt-4Bw%3D%3D%2F7916495814616608787.jpg',
      'http://7xlw0s.com2.z0.glb.qiniucdn.com/Fi6JvMPfef-UQ0Zjt8RVtcvPavSp',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    activities:[],
    display:"none",
    defaultnum:0,
    loadnum:5,
    page:1,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    current: 0,
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  swiperChange: function (e) {
    //只要把切换后当前的index传给<swiper>组件的current属性即可  
    this.setData({
      current: e.detail.current
    })
  },

  getData:function(page){


    

      var that = this;
      wx.request({
          url: 'http://www.talkpal.cc/api/article/rest?count=true&page='+ page +'&size=5',
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
                  display: "none"
                })
              },2000)
                
                
              setTimeout(function(){
                that.setData({
                  activities: that.data.activities.concat(ndata)
                })
              },1000)  
              
              

              wx.getStorage({
                key: 'totalnum',
                success: function (res) {
                  var num = res.data.num;
                  console.log(res)
                  if(that.data.activities.length<num){

                    that.setData({
                      display: "block"
                    })

                    that.setData({
                      page: that.data.page + 1
                    })
                  }
                },
                fail: function (res) {
                  console.log(res)
                }
              })

              

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

/*  loadData:function(num1,num2){

    var that =this;


    wx.request({
      url: 'http://www.talkpal.cc/api/article/rest?count=true&page=1&size=100',
      method: 'GET',
      success: function (res) {

        setTimeout(function () {
         
          var loadArr = res.data.data.data.slice(num1, num1 + num2)


          for (var b = 0; b < loadArr.length; b++) {
            loadArr[b].create_at = loadArr[b].create_at.slice(0, 10);
          }

          that.setData({
            activities: that.data.activities.concat(loadArr),
            display:"none"
          })

          wx.setStorage({
            key: 'num',
            data: {
              'nownum': num1 + num2,
              'totalnum': res.data.data.data.length
            },
            success: function (res) {}
          })

        }, 1000);

      }
    })
  },*/

  onReachBottom:function(){
    var that=this;
    this.getData(this.data.page);
  }

})