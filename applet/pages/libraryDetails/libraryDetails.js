// pages/libraryDetails.js

var postData = require('../../data/data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:null,
    height:0,
    style:"display:none",
    text:"加载中...",
    state:false,
    animation1:{},
    animation2: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      books: postData.postList,
      height: postData.postList.length*50+10+'px'
    });
  },

  onReady:function(){
    
  },

  //旋转
  rotate:function(e){
    this.animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease',
      success: function (res) {
        console.log(res)
      }
    })

    if(this.data.state){
      this.animation.rotate(0).step();
      this.setData({
        //输出动画
        animation1: this.animation.export(),
      });
      
    }else{
      this.animation.rotate(-90).step()
      this.setData({
        //输出动画
        animation1: this.animation.export(),
      })
    }
   
    
  },

  show:function(){

    this.animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease',
      success: function (res) {
        console.log(res)
      }
    })

    if (this.data.state) {
      this.animation.height(50 * this.data.books.length + 10).step();
      this.setData({
        //输出动画
        animation2: this.animation.export(),
        state: false
      });

    } else {
      this.animation.height(0).step()
      this.setData({
        //输出动画
        animation2: this.animation.export(),
        state: true
      })
    }
  },

  both:function(){
    this.rotate();
    this.show()
  },

  click:function(e){

    console.log(e.currentTarget)

    //当前点击绘本的index
    var index = parseInt(e.currentTarget.dataset.index);
    //当前点击绘本的地址
    var url =this.data.books[index].bUrl;
  
    var that = this;

    wx.getStorage({
      key: this.data.books[index].key,
      success: function(res) {
        console.log(res.data);
        wx.openDocument({
          filePath: res.data,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      },
      fail:function(res){
        console.log("进入下载");
        that.setData({
          style:"display:block"
        })
        wx.downloadFile({
          url: url,
          success: function (res) {
            console.log(res)
            that.setData({
              style: "display:none"
            })
            var filePath = res.tempFilePath;
            console.log(filePath);
            wx.openDocument({
              filePath: filePath,
              success: function (res) {
                console.log('打开文档成功');
                
              }
            })

            //设定这本书已下载，下次点击直接打开
            wx.setStorage({
              key: that.data.books[index].key,
              data: filePath,
            })
          },
          fail:function(res){
            console.log(res)
            that.setData({
              text:"加载失败，请重试"
            });
            setTimeout(function(){
              that.setData({
                style: "display:none"
              });
            },2000)
          }
        })
      }
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