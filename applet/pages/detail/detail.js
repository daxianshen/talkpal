// pages/detail/detail.js


var array = [];

for (var a = 1; a < 100; a++) {
  array.push(a);
}
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    state1:"inline-block",
    state2:"none",
    obj:null,
    address:null,
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
    oid:null,
    larray: ["正常对话", "掌握对话", "知道单词", "基础薄弱"],
    button1:"none",
    button2:"none",
    button3:"none",
    unum:0,
    date:null,
    order:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
     var that = this;
      var app = getApp();
      var g_data = app.globalData;

    //获取订单信息、团长和已拼课用户信息....

      that.setData({
         oid:options.oid
      });
      wx.request({
          url: g_data.host + '/api/shareclass/rest/'+options.oid,//存储用户拼团订单接口
          method: 'get',
          header: {
              'content-type': 'application/json' // 默认值
          },
          success: function (res) {
               var data  = res.data.data;

              //页面渲染
              var obj= data.members;



              //超过五天
              var order_date =  data.create_at; //下订单的时间戳

              var future = new Date(order_date).getTime() + 5 * 24 * 3600 * 1000;

              var date =  new Date(future).Format("MM-dd");


              if((Date.parse(new Date())/1000-order_date)/86400>5){
                  wx.showToast({
                      title: '订单已开团',
                      icon:"success",
                      duration:1000
                  })
              }



              //
              var arr =that.data.users;
              for(var a=0;a<obj.length;a++){
                  arr[a]=obj[a].headimgurl;
              }
              var unum = 3 - obj.length;
              if(unum<0) unum  = 0;

              that.setData({
                  users: arr,obj:obj,address:data.address,unum:unum,date:date
              });
              if(data.status == "已开团"){
                  that.setData({
                      state2:"inline-block",
                      state1:"none"
                  });
                  return;
              }
              var jointhis = false;
              var istz = false; //是否团长
              wx.request({
                  url: g_data.host + "/api/shareclass/join",
                  method: 'get',
                  data: {token:g_data.token},
                  success: function (res) {
                      console.log(res);
                      if(res.data){
                        var data = res.data;
                        if(data.id && data.id == options.oid) {
                          jointhis = true;
                          if(data.tz) istz = true;
                        }
                      }
                      if(istz){ //团长
                      
                          that.setData({
                                button1:"block",
                                 button2:"none",
                                 button3:"none"
                            });
                      } else if(jointhis){
                          that.setData({
                            button3: "block",
                            button2: "none",
                            button1: "none"
                          });
                      }else {
                          that.setData({
                            button2: "block",
                            button1: "none",
                            button3: "none"
                          });
                      }
                  }
              })

          }
      });


    //此订单数据

    //判断订单是否开团,条件是this.data.obj里边用户数据长度为8或者订单属性"status"为true，“拼团中”“分享XXX”“还差....为止”隐藏，“已开团”显示

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
    console.log(res);

    if(res.from==='button'){
      console.log(111);
      var path = "/pages/detail/detail?oid="+this.data.oid;
      console.log(path);
      return {
        title:"一起来上脱口派的体验课吧~",
        path:path,//订单号orderId
        success:function(res){
          
        }
      }
    }else{
      wx.hideShareMenu()
    }
  },

    initPay:function(oid){
        var that = this;
        var app = getApp();
        var g_data = app.globalData;
        var params = {
            order_id: oid,
            trade_type:"miniApp"
        };

        wx.request({
            url: g_data.host + "/pay/init",
            method: 'post',
            data: params,
            success: function (res) {
                if (res.data && res.data.data) {
                    var data = res.data.data;
                    console.log(data);
                    wx.hideLoading()
                    wx.requestPayment(
                        {
                            'timeStamp': data.timeStamp,
                            'nonceStr': data.nonceStr,
                            'package': data.package,
                            'signType': 'MD5',
                            'paySign': data.paySign,
                            'success': function (res) {
                    var order  = that.data.order;
                     var formId  = data.package.split("=")[1];
                    var params= {
                        phone:order.mobile,
                        childName:order.name,
                        sex:order.sex,
                        age:order.age,
                        order_id:oid,
                        address: order.address,
                        level:order.level,
                        headimgurl:g_data.userInfo.avatarUrl,
                        token:g_data.token,
                        formId:formId, //推送模板消息用
                    };
                    wx.request({
                        url: g_data.host + '/api/shareclass_join/'+that.data.oid,//存储用户拼团订单接口
                        data: params,
                        method: 'post',
                        header: {
                            'content-type': 'application/json' // 默认值
                        },
                        success: function (res) {
                            wx.showToast({
                                title: '支付成功'
                            });
                            setTimeout(function () {
                                wx.hideToast()
                                wx.navigateTo({
                                    url: '../../pages/paydone/paydone?orderid=' + that.data.oid
                                })
                            }, 2000)
                        }
                    })
                },
                    'fail': function (res) {
                      wx.hideLoading()
                        wx.showToast({
                            title: '用户取消',
                            icon: 'loading',
                            duration: 1500
                        })
                        setTimeout(function () {
                            wx.hideToast()
                        }, 2000)


                    }
                })
                 }
            }
        })


    },

    pay:function(){
        console.log("pay");
        wx.showLoading({
            title: '加载中',
        })

        var app = getApp();
        var g_data = app.globalData;
        var that = this;
        var order  = that.data.order;
        var params = {
            price: 0.01,
            type: "ping",
            goodsName: "脱口派拼团",
            deleted: true,
            token: g_data.token
        }
        wx.request({
            url: g_data.host + "/order/add",
            method: 'post',
            data: params,
            success: function (res) {
                if (res.data && res.data.data) {
                    var data = res.data.data;
                    that.initPay(data._id);
                }
            }
        })
    },

    formSubmit:function(e){
        //e.detail.value
        console.log("submit form");
        var that=this;

        if (!e.detail.value.name || !e.detail.value.mobile || !array[e.detail.value.age] || !e.detail.value.sex || !that.data.larray[e.detail.value.level]){
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
            var dataobj={
                name: e.detail.value.name,
                mobile: e.detail.value.mobile,
                age: array[e.detail.value.age],
                sex: e.detail.value.sex,
                level: that.data.larray[e.detail.value.level],
            }
            that.setData({order:dataobj});
            that.pay();
        }
    },




    begin:function(){

    var num = this.data.obj.length;
        var app = getApp();
        var g_data = app.globalData;
        var that = this;
        var params = {
            token: g_data.token
        };

        var begin = function(){

            wx.request({
                url: g_data.host + "/api/shareclass_finish/"+that.data.oid,
                method: 'post',
                data: params,
                success: function (res) {
                    if (res.data) {
                        var data = res.data;
                        if(data.code == 0 ){
                                that.setData({
                                    state2:"inline-block",
                                    state1:"none",
                                    button1:"none"
                                });
                            }


                    }
                }
            })

   };
    if(num>=3 && num<8){
      wx.showModal({
        title: '提示',
        content: '确定不等多点小伙伴了吗？',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            begin();

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }else{
        begin();
    }

  }
});