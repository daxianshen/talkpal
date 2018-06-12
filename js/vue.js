var app = new Vue({
	el:"#app",
	data:{
		demoList:[
			{
				videoSrc: "https://www.talkpal.com/video/video1.mp4",
				audioSrc: "https://www.talkpal.com/music/audio1.mp3",
				wordVersion: "Thank you, Mr. Zebra. Goodbye!"
			},
            {
                videoSrc: "https://www.talkpal.com/video/video1.mp4",
                audioSrc: "https://www.talkpal.com/music/audio1.mp3",
                wordVersion: "Thank you, Mr. Zebra. Goodbye! Goodbye! Goodbye! Goodbye! Goodbye!"
            }
		],
		index:0,
		demoJson:{}
	},
	computed: {

	},
	mounted: function() {
		this.splitString();
		var that = this;
		this.demoJson = this.demoList[0];
		var video = document.getElementsByTagName("video");
		console.log(video);
		// video[0].addEventListener("ended",function () {
		// 	that.demoJson = that.demoList[that.index+1];
		// 	that.index++;
		// })
	},
	methods:{
		getDemo:function () {
			
		},
		splitString:function () {
			str = new Array; //定义一数组
            str = this.demoList[0].wordVersion.split(" "); //字符分割
            for(var i = 0;i<str.length;i++){
                str[i] = str[i].replace(/,/g, "");
                str[i] = str[i].replace(/!/g, "");
                str[i] = str[i].replace(".", "");
			}
			this.demoList[0].wordVersion = str;
			console.log(str);
		}
	}
});