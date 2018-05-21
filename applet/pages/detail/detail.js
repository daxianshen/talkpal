// pages/detail/detail.js


var array = [];

for (var a = 1; a < 100; a++) {
  array.push(a);
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    state1:"inline-block",
    state2:"none",
    obj:null,
    users:[
      "/icon/user.png",
      "/icon/user.png",
      "/icon/user.png",
      "/icon/user.png",
      "/icon/user.png",
      "/icon/user.png",
      "/icon/user.png",
      "/icon/user.png"
    ],
    index1: 0,
    index2: 0,
    array: array,
    larray: ["正常对话", "掌握对话", "知道单词", "基础薄弱"],
    button1:"none",
    button2:"none",
    button3:"none",
    unum:0,
    date:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;

    //获取订单信息、团长和已拼课用户信息....


    //渲染测试
    //假设用户id为xxx

    var uid =1234;


    //此订单数据
    that.setData({
      obj:[
        {
          headpic:"/icon/book.png",
            openid:1234
        },
        {
          headpic: "/icon/book.png",
            openid:2345
        },
        {
          headpic: "/icon/book.png",
            openid:3456
        }
      ]
    })


    //判断订单是否开团,条件是this.data.obj里边用户数据长度为8或者订单属性"status"为true，“拼团中”“分享XXX”“还差....为止”隐藏，“已开团”显示


    //页面渲染
    var obj= that.data.obj;


    //超过五天
    var order_date = 1526460687; //下订单的时间戳

    if((Date.parse(new Date())/1000-order_date)/86400>5){

      
      wx.showToast({
        title: '订单已开团',
        icon:"success",
        duration:1000
      })
      setTimeout(function(){
        wx.hideToast();
        wx.switchTab({
          url: '/pages/openclass/openclass',
        })
      },1000)
    }


    var arr =that.data.users;
    for(var a=0;a<obj.length;a++){
      arr[a]=obj[a].headpic;
    }


    for(var b=0;b<obj.length;b++){
        if(uid==obj[b].openid){
          console.log(b)
          if(b==0){
            that.setData({
                button1: "block",
                button2: "none"
            });
              console.log(111);
              break;
          }else{
              that.setData({
                  button3: "block",
                  button2: "none"
              });
              console.log(333);
              break;
          }
        }else{
          that.setData({
              button2: "block"
          });
            console.log(222);
        }

    }



    this.setData({
      users: arr
    })

    console.log(this.data.users)


  },


  bindPickerChange1: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  /**
   * 用户点击按钮分享
   */
  onShareAppMessage: function (res) {
    console.log(res.from);

    if(res.from==='button'){
      console.log(111);
      return {
        title:"一起来上脱口派的体验课吧~",
        path:"/pages/detail/detail?orderId=",//订单号orderId
        success:function(res){
          
        }
      }
    }else{
      wx.hideShareMenu()
    }
  },

  begin:function(){
    if(this.data.obj.length>=3){
      wx.showModal({
        title: '提示',
        content: '确定不等多点小伙伴了吗？',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            //订单状态status属性改为“true”


          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  }
})