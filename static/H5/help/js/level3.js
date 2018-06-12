/**
 * Created by Administrator on 2017/9/12.
 */
var app = new Vue({
	el: "#app",
	data: {
		title: "帮助",
		list: [{
				text: "常见问题",
				list: [{
						text: "划分级别",
						list_text: "a、建议参考首页入学测试。\nb、或者4岁左右零基础推荐启蒙课程，学习1年推荐入门课程，2年推荐初级课程，3年及以上推荐中级或者高级课程。\nc、部分地区三年级正式系统学习英语，推荐入门课程。"
					},
					{
						text: "7天免费体验期",
						list_text: "a、所有新注册用户享受7天连续免费体验期，期间可以体验脱口派全部课程。请注意各课程上课时间，准时上课。\nb、错过体验，建议使用邀请链接邀请朋友注册脱口派，您将获得100元（自动存入“我的钱包”）；您的好友将获赠7天免费课程+100元（自动存入“我的钱包”），多邀请，多赠送，上不封顶。可以使用余额兑换免费课程。"
					},
					{
						text: "录音识别",
						list_text: "采用美国帧频音轨语言识别技术，实时评分，纠正发音。"
					},
					{
						text: "验证码",
						list_text: "十分钟之内可收到三次验证码，之后需要等待两个小时，所以请不要频繁点击接受验证码。"
					},
					{
						text: "登录设备",
						list_text: "目前支持手机和平板登录。（不支持Windows手机和平板）"
					},
					{
						text: "用户名",
						list_text: "建议英文+数字，凡是注册之后的用户名都不可以更改。"
					}
				]
			},
			{
				text: "课程相关",
				list: [{
						text: "课程特点",
						list_text: "北美优质外教直播上课，每节课30分钟趣味教学，三月一周期，每周一主题，围绕主题学习单词、句子和语法，还可以和外教实时视频互动，掌握发音技巧，培养美式语感，打败哑巴式英语，孩子变身英语小学霸随时脱口而出纯正美英。"
					},
					{
						text: "周末课程",
						list_text: "在有效体验期或付费期内，都可体验。内容包括绘画课，音乐课，手工课，文化课等。时间：19:30-20:30。"
					},
					{
						text: "上课时间",
						list_text: "每节课30分钟；周一至周五每晚级别课程上课时间：启蒙课程19:00-19:30，入门和中级课程19:30-20:00，初级和高级课程20:00-20:30；周末拓展课程19:30-20:30。"
					},
					{
						text: "连麦互动",
						list_text: "外教会随机抽取小朋友进行视频互动连麦哦，小朋友们请随时准备好。可以在课后评价留言：我要跟老师连麦；或者上课时通过消息窗口发送我想跟老师视频的英文消息（只有老师可以看到）即可和老师视频互动。"
					},
					{
						text: "课程回放",
						list_text: "所有课程都有主要内容复习以及精品课程回顾，巩固孩子的每日学习。"
					},
					{
						text: "关于老师",
						list_text: "每个年级由固定外教老师授课。"
					},
					{
						text: "教材",
						list_text: "根据香港朗文教材编写的课程，家长无需备教材。"
					},
					{
						text: "更换年级",
						list_text: "付费用户在有效期内可以向客服老师申请更换年级。（客服老师电话/微信：18922403657）"
					}
				]
			},
            {
                text: "直播",
                list: [{
                    text: "直播",
                    list_text: "外教老师直播定时上课，请准时参加。"
                }]
            },
			{
				text: "付费",
				list: [{
						text: "付费课程",
						list_text: "在“个人中心”点击购买课程即可进行付费操作，如钱包有邀请奖励的100元可作抵扣券使用。付费后可观看已付费的分级课程，并且享受周末免费主题课程。上课时间从付费即日起生效，有任何问题或特殊情况可添加Jill老师微信号18922403657进行咨询处理。"
					},
					{
						text: "我的钱包",
						list_text: "建议使用邀请链接邀请朋友注册脱口派，您将获得100元（自动存入“我的钱包”）；您的好友将获赠7天免费课程+100元（自动存入“我的钱包”），多邀请，多赠送，上不封顶。"
					}
				]
			}
		],
		text: ""
	},
	computed: {
		// this.data.newList = this.data.list;
	},
	created: function() {
		// console.log(this);
		this.newList = this.list;
		this.getHelping();
	},
	methods: {
		getHelping: function() {
			var index1 = this.GetRequest().index1;
			var index2 = this.GetRequest().index2;
			var title = document.getElementsByTagName("title")[0];
			this.text = this.list[index1].list[index2].list_text;
			title.innerHTML = this.list[index1].list[index2].text;
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