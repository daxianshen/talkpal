var app = new Vue({
	el: "#app",
	data: {
		title: "帮助",
		list: [{
				text: "常见问题",
				list: [{
						text: "划分级别"
					},
					{
						text: "7天免费体验期"
					},
					{
						text: "录音识别"
					},
					{
						text: "验证码"
					},
					{
						text: "登录设备"
					},
					{
						text: "用户名"
					}
				]
			},
			{
				text: "课程相关",
				list: [{
						text: "课程特点"
					},
					{
						text: "周末课程"
					},
					{
						text: "上课时间"
					},
					{
						text: "连麦互动"
					},
                    {
                        text: "课程回放"
                    },
					{
						text: "关于老师"
					},
					{
						text: "教材"
					},
					{
						text: "更换年级"
					}
				]
			},
			{
				text: "直播",
				list: [{
					text: "外教老师直播定时上课，请准时参加。"
				}]
			},
            {
                text: "付费",
                list: [{
						text: "付费课程"
					},
					{
						text: "我的钱包"
					}
				]
            }
		],
		newList: []
	},
	computed: {
		
	},
	created: function() {
		this.newList = this.list;
		this.getHelping();
	},
	methods: {
		getHelping: function() {
			var index = this.GetRequest().index;
			this.newList = this.list[index].list;
			var title = document.getElementsByTagName("title")[0];
			title.innerHTML = this.list[index].text;
		},
		listClick: function(index2) {
			var index1 = this.GetRequest().index;
			window.location.href = "level3.html?index1=" + index1 + "&index2=" + index2;
		},
		GetRequest: function() {
			var url = location.search; //获取url中"?"符后的字串
			var theRequest = new Object();
			if(url.indexOf("?") != -1) {
				var str = url.substr(1);
				strs = str.split("&");
				for(var i = 0; i < strs.length; i++) {
					theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
				}
			}
			return theRequest;
		}
	}
});