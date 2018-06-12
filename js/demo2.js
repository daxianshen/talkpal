wx.ready(function () {
  // 1 判断当前版本是否支持指定 JS 接口，支持批量判断
//document.querySelector('#checkJsApi').onclick = function () {
//  wx.checkJsApi({
//    jsApiList: [
//      'getNetworkType',
//      'previewImage'
//    ],
//    success: function (res) {
//      alert(JSON.stringify(res));
//    }
//  });
//};

  // 3 智能接口
  var voice = {
    localId: '',
    serverId: ''
  };
  var audio = document.getElementsByTagName("audio")[0];
  // 3.1 识别音频并返回识别结果
//document.querySelector('#translateVoice').onclick = function () {
//  if (voice.localId == '') {
//    alert('请先使用 startRecord 接口录制一段声音');
//    return;
//  }
//  wx.translateVoice({
//    localId: voice.localId,
//    complete: function (res) {
//      if (res.hasOwnProperty('translateResult')) {
//        alert('识别结果：' + res.translateResult);
//      } else {
//        alert('无法识别');
//      }
//    }
//  });
//};

  // 4 音频接口
  // 4.2 开始录音
  document.querySelector('#voiceImage').addEventListener("touchstart",function () {
    console.log(audio.ended);
    if(audio.ended){
        wx.startRecord({
            cancel: function () {
                alert('用户拒绝授权录音');
            }
        });
    }else{
      alert("请先听一下音乐！");
    }
    return false;
  });

  // 4.3 停止录音
  document.querySelector('#voiceImage').addEventListener("touchend",function () {
      if(audio.ended){
          wx.stopRecord({
              success: function (res) {
                  voice.localId = res.localId;
                  optionsFn()
              },
              fail: function (res) {
                  alert(JSON.stringify(res));
              }
          });
      }
  });
  // 4.4 监听录音自动停止
  wx.onVoiceRecordEnd({
    complete: function (res) {
      voice.localId = res.localId;
      alert('录音时间已超过一分钟');
    }
  });

  // 4.5 播放音频
  document.querySelector('#audio').onclick = function () {
    // if (voice.localId == '') {
    //   alert('请先长按语音图标录制一段声音');
    //   return;
    // }
    // wx.playVoice({
    //   localId: voice.localId
    // });
      document.getElementsByTagName("audio")[0].play();
  };

//   4.6 暂停播放音频
//document.querySelector('#pauseVoice').onclick = function () {
//  wx.pauseVoice({
//    localId: voice.localId
//  });
//};
//
// 	 4.7 停止播放音频
//document.querySelector('#stopVoice').onclick = function () {
//  wx.stopVoice({
//    localId: voice.localId
//  });
//};

  // 4.8 监听录音播放停止
//wx.onVoicePlayEnd({
//  complete: function (res) {
//    alert('录音（' + res.localId + '）播放结束');
//  }
//});

  // 4.8 上传语音
//document.querySelector('#uploadVoice').onclick = function () {
//  if (voice.localId == '') {
//    alert('请先使用 startRecord 接口录制一段声音');
//    return;
//  }
//  wx.uploadVoice({
//    localId: voice.localId,
//    success: function (res) {
//      alert('上传语音成功，serverId 为' + res.serverId);
//      voice.serverId = res.serverId;
//    }
//  });
//};

  // 4.9 下载语音
//document.querySelector('#downloadVoice').onclick = function () {
//  if (voice.serverId == '') {
//    alert('请先使用 uploadVoice 上传声音');
//    return;
//  }
//  wx.downloadVoice({
//    serverId: voice.serverId,
//    success: function (res) {
//      alert('下载语音成功，localId 为' + res.localId);
//      voice.localId = res.localId;
//    }
//  });
//};
});

wx.error(function (res) {
  alert(res.errMsg);
});
function optionsFn() {
    var options = document.getElementsByClassName("options");
    var index = 0;
    setTimeOption(index);
    function setTimeOption(i) {
        setTimeout(function() {
            $(".options").eq(i).addClass("optionsAnimation");
            if(i < options.length){
                setTimeOption(i+1);
            }
        }, 1000)
    }
}