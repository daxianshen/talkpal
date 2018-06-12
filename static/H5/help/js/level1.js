var app = new Vue({
	el: "#app",
	data: {
		title: "帮助",
		list: [{
				text: "常见问题"
			},
			{
				text: "课程相关"
			},
			{
				text: "直播"
			},
            {
                text: "付费"
            },
			{
				text: "观看新手教程"
			}
		],
		newList: []
	},
	computed: {
		// this.data.newList = this.data.list;
	},
	created: function() {
		// console.log(this);
		this.newList = this.list;
	},
	methods: {
		listClick: function(index) {
            if(index === 2) {
                window.location.href = "level3.html?index1=2&index2=0";
                return
            }
			if(index === 4) {
				window.location.href = "talkpal://BootstrapLessonsViewController";
				return
			}
			window.location.href = "level2.html?index=" + index;
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