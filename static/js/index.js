var app = new Vue({
	el: "#app",
	data: {
		introduce: [
			{
				text: "关于脱口派",
				list: [
					"致力于提高4-13岁儿童的英语口语",
					"从英语启蒙开始，给孩子保驾护航",
					"北美优质外教，培养纯正美式口音",
					"足不出户，天天和外教见面",
					"每天半小时，开拓国际视野",
					"一年365天，沉浸式体验，让孩子轻轻松松脱口而出！"
				]
			},
			{
				text: "课程",
				list: [
					"5个分级课程，从启蒙到高级",
					"2天周末课程，从兴趣到拓展",
					"半年一个周期，从自主学习到主动升级",
					"每天30分钟，沉浸式体验，就像睡前动画，影响孩子一生",
					"365天每天都有课，不定时推出精品课程，脱口派和你一起成长"
				],
				Course_Topics: [{
						img: "img/share_app_teaching_material.png",
						title: "美国小学同步教材",
						word: "以美国CCSS核心课程为标准，融合剑桥少儿英语、Super Kids以及香港朗文教材等原版经典教材。"
					},
					{
						img: "img/share_app_record.png",
						title: "欧美技术语音测评",
						word: "采用美国帧频音轨语言识别技术，实时评分，纠正发音。"
					},
					{
						img: "img/share_app_time.png",
						title: "365天不间断课程",
						word: "周一至周五，每晚5个分级课程，一天可以上两节；周六至周日拓展课程，丰富课外知识，边玩边学习。 "
					},
					{
						img: "img/share_app_level.png",
						title: "专业测试科学分级",
						word: "首页有分级测试，可判定孩子学习水平，自主选择上课级别。7天免费体验，自主选择孩子最爱的课程和老师。  "
					}
				],
				classList: [{
						title: "分级课程",
						list: ["启蒙", "入门", "初级", "中级", "高级"],
						timeList: ["19:00", "19:30", "20:00", "19:30", "20:00"]
					},
					{
						title: "周末拓展",
						list: ["文化课", "音乐课", "绘画课"],
						timeList: ["19:30 / 20:00", "20:00", "19:30"]
					}
				]
			},
			{
				text: "复习",
				list: [
					"如果错过直播课程怎么办？",
					"我们每节课有主要内容复习！做笔记，学单词，学句子。",
					"我们有精品课程回放！全程回顾完整课程，巩固学习。",
					"建议准时上课，与外教互动，学习效果更佳！"
				],
				imgBol: true,
				imglist: ["img/share_app_review1.png", "img/share_app_review2.png"]
			},
			{
				text: "明星师资",
				list: [
					"北美优质外教，国际通用英语教师TESOL资格认证",
					"名校毕业，教龄超3年，资深教师教龄超9年",
					"风格各异，幽默风趣",
					"每个级别固定外教，深受孩子们的喜爱和追捧"
				],
				imgBol: true,
				imglist: ["img/share_app_teacher1.png", "img/share_app_teacher2.png"]
			},
			{
				text: "服务",
				list: [
					"各级交流群，和外教、中教老师一起交流学习",
					"全程贴心服务，跟进每一位学员的学习进度",
					"可申请更换级别，不浪费任何资源"
				],
				imgBol: true,
				imglist: ["img/share_app_server1.png", "img/share_app_server2.png"]
			}
		],
		countryList: [
			{
				"country_id": 100006,
				"country_code": 244,
				"country_name_en": "Angola",
				"country_name_cn": "安哥拉",
				"ab": "AO"
			},
			{
				"country_id": 100007,
				"country_code": 93,
				"country_name_en": "Afghanistan",
				"country_name_cn": "阿富汗",
				"ab": "AF"
			},
			{
				"country_id": 100008,
				"country_code": 355,
				"country_name_en": "Albania",
				"country_name_cn": "阿尔巴尼亚",
				"ab": "AL"
			},
			{
				"country_id": 100009,
				"country_code": 213,
				"country_name_en": "Algeria",
				"country_name_cn": "阿尔及利亚",
				"ab": "DZ"
			},
			{
				"country_id": 100010,
				"country_code": 376,
				"country_name_en": "Andorra",
				"country_name_cn": "安道尔共和国",
				"ab": "AD"
			},
			{
				"country_id": 100011,
				"country_code": 1264,
				"country_name_en": "Anguilla",
				"country_name_cn": "安圭拉岛",
				"ab": "AI"
			},
			{
				"country_id": 100012,
				"country_code": 1268,
				"country_name_en": "Antigua and Barbuda",
				"country_name_cn": "安提瓜和巴布达",
				"ab": "AG"
			},
			{
				"country_id": 100013,
				"country_code": 54,
				"country_name_en": "Argentina",
				"country_name_cn": "阿根廷",
				"ab": "AR"
			},
			{
				"country_id": 100014,
				"country_code": 374,
				"country_name_en": "Armenia",
				"country_name_cn": "亚美尼亚",
				"ab": "AM"
			},
			{
				"country_id": 100015,
				"country_code": 247,
				"country_name_en": "Ascension",
				"country_name_cn": "阿森松",
				"ab": ""
			},
			{
				"country_id": 100016,
				"country_code": 61,
				"country_name_en": "Australia",
				"country_name_cn": "澳大利亚",
				"ab": "AU"
			},
			{
				"country_id": 100017,
				"country_code": 43,
				"country_name_en": "Austria",
				"country_name_cn": "奥地利",
				"ab": "AT"
			},
			{
				"country_id": 100018,
				"country_code": 994,
				"country_name_en": "Azerbaijan",
				"country_name_cn": "阿塞拜疆",
				"ab": "AZ"
			},
			{
				"country_id": 100019,
				"country_code": 1242,
				"country_name_en": "Bahamas",
				"country_name_cn": "巴哈马",
				"ab": "BS"
			},
			{
				"country_id": 100020,
				"country_code": 973,
				"country_name_en": "Bahrain",
				"country_name_cn": "巴林",
				"ab": "BH"
			},
			{
				"country_id": 100021,
				"country_code": 880,
				"country_name_en": "Bangladesh",
				"country_name_cn": "孟加拉国",
				"ab": "BD"
			},
			{
				"country_id": 100022,
				"country_code": 1246,
				"country_name_en": "Barbados",
				"country_name_cn": "巴巴多斯",
				"ab": "BB"
			},
			{
				"country_id": 100023,
				"country_code": 375,
				"country_name_en": "Belarus",
				"country_name_cn": "白俄罗斯",
				"ab": "BY"
			},
			{
				"country_id": 100024,
				"country_code": 32,
				"country_name_en": "Belgium",
				"country_name_cn": "比利时",
				"ab": "BE"
			},
			{
				"country_id": 100025,
				"country_code": 501,
				"country_name_en": "Belize",
				"country_name_cn": "伯利兹",
				"ab": "BZ"
			},
			{
				"country_id": 100026,
				"country_code": 229,
				"country_name_en": "Benin",
				"country_name_cn": "贝宁",
				"ab": "BJ"
			},
			{
				"country_id": 100027,
				"country_code": 1441,
				"country_name_en": "Bermuda Is.",
				"country_name_cn": "百慕大群岛",
				"ab": "BM"
			},
			{
				"country_id": 100028,
				"country_code": 591,
				"country_name_en": "Bolivia",
				"country_name_cn": "玻利维亚",
				"ab": "BO"
			},
			{
				"country_id": 100029,
				"country_code": 267,
				"country_name_en": "Botswana",
				"country_name_cn": "博茨瓦纳",
				"ab": "BW"
			},
			{
				"country_id": 100030,
				"country_code": 55,
				"country_name_en": "Brazil",
				"country_name_cn": "巴西",
				"ab": "BR"
			},
			{
				"country_id": 100031,
				"country_code": 673,
				"country_name_en": "Brunei",
				"country_name_cn": "文莱",
				"ab": "BN"
			},
			{
				"country_id": 100032,
				"country_code": 359,
				"country_name_en": "Bulgaria",
				"country_name_cn": "保加利亚",
				"ab": "BG"
			},
			{
				"country_id": 100033,
				"country_code": 226,
				"country_name_en": "Burkina-faso",
				"country_name_cn": "布基纳法索",
				"ab": "BF"
			},
			{
				"country_id": 100034,
				"country_code": 95,
				"country_name_en": "Burma",
				"country_name_cn": "缅甸",
				"ab": "MM"
			},
			{
				"country_id": 100035,
				"country_code": 257,
				"country_name_en": "Burundi",
				"country_name_cn": "布隆迪",
				"ab": "BI"
			},
			{
				"country_id": 100036,
				"country_code": 237,
				"country_name_en": "Cameroon",
				"country_name_cn": "喀麦隆",
				"ab": "CM"
			},
			{
				"country_id": 100037,
				"country_code": 1,
				"country_name_en": "Canada",
				"country_name_cn": "加拿大",
				"ab": "CA"
			},
			{
				"country_id": 100038,
				"country_code": 1345,
				"country_name_en": "Cayman Is.",
				"country_name_cn": "开曼群岛",
				"ab": ""
			},
			{
				"country_id": 100039,
				"country_code": 236,
				"country_name_en": "Central African Republic",
				"country_name_cn": "中非共和国",
				"ab": "CF"
			},
			{
				"country_id": 100040,
				"country_code": 235,
				"country_name_en": "Chad",
				"country_name_cn": "乍得",
				"ab": "TD"
			},
			{
				"country_id": 100041,
				"country_code": 56,
				"country_name_en": "Chile",
				"country_name_cn": "智利",
				"ab": "CL"
			},
			{
				"country_id": 100042,
				"country_code": 86,
				"country_name_en": "China",
				"country_name_cn": "中国",
				"ab": "CN"
			},
			{
				"country_id": 100043,
				"country_code": 57,
				"country_name_en": "Colombia",
				"country_name_cn": "哥伦比亚",
				"ab": "CO"
			},
			{
				"country_id": 100044,
				"country_code": 242,
				"country_name_en": "Congo",
				"country_name_cn": "刚果",
				"ab": "CG"
			},
			{
				"country_id": 100045,
				"country_code": 682,
				"country_name_en": "Cook Is.",
				"country_name_cn": "库克群岛",
				"ab": "CK"
			},
			{
				"country_id": 100046,
				"country_code": 506,
				"country_name_en": "Costa Rica",
				"country_name_cn": "哥斯达黎加",
				"ab": "CR"
			},
			{
				"country_id": 100047,
				"country_code": 53,
				"country_name_en": "Cuba",
				"country_name_cn": "古巴",
				"ab": "CU"
			},
			{
				"country_id": 100048,
				"country_code": 357,
				"country_name_en": "Cyprus",
				"country_name_cn": "塞浦路斯",
				"ab": "CY"
			},
			{
				"country_id": 100049,
				"country_code": 420,
				"country_name_en": "Czech Republic",
				"country_name_cn": "捷克",
				"ab": "CZ"
			},
			{
				"country_id": 100050,
				"country_code": 45,
				"country_name_en": "Denmark",
				"country_name_cn": "丹麦",
				"ab": "DK"
			},
			{
				"country_id": 100051,
				"country_code": 253,
				"country_name_en": "Djibouti",
				"country_name_cn": "吉布提",
				"ab": "DJ"
			},
			{
				"country_id": 100052,
				"country_code": 1890,
				"country_name_en": "Dominica Rep.",
				"country_name_cn": "多米尼加共和国",
				"ab": "DO"
			},
			{
				"country_id": 100053,
				"country_code": 593,
				"country_name_en": "Ecuador",
				"country_name_cn": "厄瓜多尔",
				"ab": "EC"
			},
			{
				"country_id": 100054,
				"country_code": 20,
				"country_name_en": "Egypt",
				"country_name_cn": "埃及",
				"ab": "EG"
			},
			{
				"country_id": 100055,
				"country_code": 503,
				"country_name_en": "EI Salvador",
				"country_name_cn": "萨尔瓦多",
				"ab": "SV"
			},
			{
				"country_id": 100056,
				"country_code": 372,
				"country_name_en": "Estonia",
				"country_name_cn": "爱沙尼亚",
				"ab": "EE"
			},
			{
				"country_id": 100057,
				"country_code": 251,
				"country_name_en": "Ethiopia",
				"country_name_cn": "埃塞俄比亚",
				"ab": "ET"
			},
			{
				"country_id": 100058,
				"country_code": 679,
				"country_name_en": "Fiji",
				"country_name_cn": "斐济",
				"ab": "FJ"
			},
			{
				"country_id": 100059,
				"country_code": 358,
				"country_name_en": "Finland",
				"country_name_cn": "芬兰",
				"ab": "FI"
			},
			{
				"country_id": 100060,
				"country_code": 33,
				"country_name_en": "France",
				"country_name_cn": "法国",
				"ab": "FR"
			},
			{
				"country_id": 100061,
				"country_code": 594,
				"country_name_en": "French Guiana",
				"country_name_cn": "法属圭亚那",
				"ab": "GF"
			},
			{
				"country_id": 100062,
				"country_code": 241,
				"country_name_en": "Gabon",
				"country_name_cn": "加蓬",
				"ab": "GA"
			},
			{
				"country_id": 100063,
				"country_code": 220,
				"country_name_en": "Gambia",
				"country_name_cn": "冈比亚",
				"ab": "GM"
			},
			{
				"country_id": 100064,
				"country_code": 995,
				"country_name_en": "Georgia",
				"country_name_cn": "格鲁吉亚",
				"ab": "GE"
			},
			{
				"country_id": 100065,
				"country_code": 49,
				"country_name_en": "Germany",
				"country_name_cn": "德国",
				"ab": "DE"
			},
			{
				"country_id": 100066,
				"country_code": 233,
				"country_name_en": "Ghana",
				"country_name_cn": "加纳",
				"ab": "GH"
			},
			{
				"country_id": 100067,
				"country_code": 350,
				"country_name_en": "Gibraltar",
				"country_name_cn": "直布罗陀",
				"ab": "GI"
			},
			{
				"country_id": 100068,
				"country_code": 30,
				"country_name_en": "Greece",
				"country_name_cn": "希腊",
				"ab": "GR"
			},
			{
				"country_id": 100069,
				"country_code": 1809,
				"country_name_en": "Grenada",
				"country_name_cn": "格林纳达",
				"ab": "GD"
			},
			{
				"country_id": 100070,
				"country_code": 1671,
				"country_name_en": "Guam",
				"country_name_cn": "关岛",
				"ab": "GU"
			},
			{
				"country_id": 100071,
				"country_code": 502,
				"country_name_en": "Guatemala",
				"country_name_cn": "危地马拉",
				"ab": "GT"
			},
			{
				"country_id": 100072,
				"country_code": 224,
				"country_name_en": "Guinea",
				"country_name_cn": "几内亚",
				"ab": "GN"
			},
			{
				"country_id": 100073,
				"country_code": 592,
				"country_name_en": "Guyana",
				"country_name_cn": "圭亚那",
				"ab": "GY"
			},
			{
				"country_id": 100074,
				"country_code": 509,
				"country_name_en": "Haiti",
				"country_name_cn": "海地",
				"ab": "HT"
			},
			{
				"country_id": 100075,
				"country_code": 504,
				"country_name_en": "Honduras",
				"country_name_cn": "洪都拉斯",
				"ab": "HN"
			},
			{
				"country_id": 100076,
				"country_code": 852,
				"country_name_en": "Hongkong",
				"country_name_cn": "香港",
				"ab": "HK"
			},
			{
				"country_id": 100077,
				"country_code": 36,
				"country_name_en": "Hungary",
				"country_name_cn": "匈牙利",
				"ab": "HU"
			},
			{
				"country_id": 100078,
				"country_code": 354,
				"country_name_en": "Iceland",
				"country_name_cn": "冰岛",
				"ab": "IS"
			},
			{
				"country_id": 100079,
				"country_code": 91,
				"country_name_en": "India",
				"country_name_cn": "印度",
				"ab": "IN"
			},
			{
				"country_id": 100080,
				"country_code": 62,
				"country_name_en": "Indonesia",
				"country_name_cn": "印度尼西亚",
				"ab": "ID"
			},
			{
				"country_id": 100081,
				"country_code": 98,
				"country_name_en": "Iran",
				"country_name_cn": "伊朗",
				"ab": "IR"
			},
			{
				"country_id": 100082,
				"country_code": 964,
				"country_name_en": "Iraq",
				"country_name_cn": "伊拉克",
				"ab": "IQ"
			},
			{
				"country_id": 100083,
				"country_code": 353,
				"country_name_en": "Ireland",
				"country_name_cn": "爱尔兰",
				"ab": "IE"
			},
			{
				"country_id": 100084,
				"country_code": 972,
				"country_name_en": "Israel",
				"country_name_cn": "以色列",
				"ab": "IL"
			},
			{
				"country_id": 100085,
				"country_code": 39,
				"country_name_en": "Italy",
				"country_name_cn": "意大利",
				"ab": "IT"
			},
			{
				"country_id": 100086,
				"country_code": 225,
				"country_name_en": "Ivory Coast",
				"country_name_cn": "科特迪瓦",
				"ab": ""
			},
			{
				"country_id": 100087,
				"country_code": 1876,
				"country_name_en": "Jamaica",
				"country_name_cn": "牙买加",
				"ab": "JM"
			},
			{
				"country_id": 100088,
				"country_code": 81,
				"country_name_en": "Japan",
				"country_name_cn": "日本",
				"ab": "JP"
			},
			{
				"country_id": 100089,
				"country_code": 962,
				"country_name_en": "Jordan",
				"country_name_cn": "约旦",
				"ab": "JO"
			},
			{
				"country_id": 100090,
				"country_code": 855,
				"country_name_en": "Kampuchea (Cambodia )",
				"country_name_cn": "柬埔寨",
				"ab": "KH"
			},
			{
				"country_id": 100091,
				"country_code": 327,
				"country_name_en": "Kazakstan",
				"country_name_cn": "哈萨克斯坦",
				"ab": "KZ"
			},
			{
				"country_id": 100092,
				"country_code": 254,
				"country_name_en": "Kenya",
				"country_name_cn": "肯尼亚",
				"ab": "KE"
			},
			{
				"country_id": 100093,
				"country_code": 82,
				"country_name_en": "Korea",
				"country_name_cn": "韩国",
				"ab": "KR"
			},
			{
				"country_id": 100094,
				"country_code": 965,
				"country_name_en": "Kuwait",
				"country_name_cn": "科威特",
				"ab": "KW"
			},
			{
				"country_id": 100095,
				"country_code": 331,
				"country_name_en": "Kyrgyzstan",
				"country_name_cn": "吉尔吉斯坦",
				"ab": "KG"
			},
			{
				"country_id": 100096,
				"country_code": 856,
				"country_name_en": "Laos",
				"country_name_cn": "老挝",
				"ab": "LA"
			},
			{
				"country_id": 100097,
				"country_code": 371,
				"country_name_en": "Latvia",
				"country_name_cn": "拉脱维亚",
				"ab": "LV"
			},
			{
				"country_id": 100098,
				"country_code": 961,
				"country_name_en": "Lebanon",
				"country_name_cn": "黎巴嫩",
				"ab": "LB"
			},
			{
				"country_id": 100099,
				"country_code": 266,
				"country_name_en": "Lesotho",
				"country_name_cn": "莱索托",
				"ab": "LS"
			},
			{
				"country_id": 100100,
				"country_code": 231,
				"country_name_en": "Liberia",
				"country_name_cn": "利比里亚",
				"ab": "LR"
			},
			{
				"country_id": 100101,
				"country_code": 218,
				"country_name_en": "Libya",
				"country_name_cn": "利比亚",
				"ab": "LY"
			},
			{
				"country_id": 100102,
				"country_code": 423,
				"country_name_en": "Liechtenstein",
				"country_name_cn": "列支敦士登",
				"ab": "LI"
			},
			{
				"country_id": 100103,
				"country_code": 370,
				"country_name_en": "Lithuania",
				"country_name_cn": "立陶宛",
				"ab": "LT"
			},
			{
				"country_id": 100104,
				"country_code": 352,
				"country_name_en": "Luxembourg",
				"country_name_cn": "卢森堡",
				"ab": "LU"
			},
			{
				"country_id": 100105,
				"country_code": 853,
				"country_name_en": "Macao",
				"country_name_cn": "澳门",
				"ab": "MO"
			},
			{
				"country_id": 100106,
				"country_code": 261,
				"country_name_en": "Madagascar",
				"country_name_cn": "马达加斯加",
				"ab": "MG"
			},
			{
				"country_id": 100107,
				"country_code": 265,
				"country_name_en": "Malawi",
				"country_name_cn": "马拉维",
				"ab": "MW"
			},
			{
				"country_id": 100108,
				"country_code": 60,
				"country_name_en": "Malaysia",
				"country_name_cn": "马来西亚",
				"ab": "MY"
			},
			{
				"country_id": 100109,
				"country_code": 960,
				"country_name_en": "Maldives",
				"country_name_cn": "马尔代夫",
				"ab": "MV"
			},
			{
				"country_id": 100110,
				"country_code": 223,
				"country_name_en": "Mali",
				"country_name_cn": "马里",
				"ab": "ML"
			},
			{
				"country_id": 100111,
				"country_code": 356,
				"country_name_en": "Malta",
				"country_name_cn": "马耳他",
				"ab": "MT"
			},
			{
				"country_id": 100112,
				"country_code": 1670,
				"country_name_en": "Mariana Is",
				"country_name_cn": "马里亚那群岛",
				"ab": ""
			},
			{
				"country_id": 100113,
				"country_code": 596,
				"country_name_en": "Martinique",
				"country_name_cn": "马提尼克",
				"ab": ""
			},
			{
				"country_id": 100114,
				"country_code": 230,
				"country_name_en": "Mauritius",
				"country_name_cn": "毛里求斯",
				"ab": "MU"
			},
			{
				"country_id": 100115,
				"country_code": 52,
				"country_name_en": "Mexico",
				"country_name_cn": "墨西哥",
				"ab": "MX"
			},
			{
				"country_id": 100116,
				"country_code": 373,
				"country_name_en": "Moldova, Republic of",
				"country_name_cn": "摩尔多瓦",
				"ab": "MD"
			},
			{
				"country_id": 100117,
				"country_code": 377,
				"country_name_en": "Monaco",
				"country_name_cn": "摩纳哥",
				"ab": "MC"
			},
			{
				"country_id": 100118,
				"country_code": 976,
				"country_name_en": "Mongolia",
				"country_name_cn": "蒙古",
				"ab": "MN"
			},
			{
				"country_id": 100119,
				"country_code": 1664,
				"country_name_en": "Montserrat Is",
				"country_name_cn": "蒙特塞拉特岛",
				"ab": "MS"
			},
			{
				"country_id": 100120,
				"country_code": 212,
				"country_name_en": "Morocco",
				"country_name_cn": "摩洛哥",
				"ab": "MA"
			},
			{
				"country_id": 100121,
				"country_code": 258,
				"country_name_en": "Mozambique",
				"country_name_cn": "莫桑比克",
				"ab": "MZ"
			},
			{
				"country_id": 100122,
				"country_code": 264,
				"country_name_en": "Namibia",
				"country_name_cn": "纳米比亚",
				"ab": "NA"
			},
			{
				"country_id": 100123,
				"country_code": 674,
				"country_name_en": "Nauru",
				"country_name_cn": "瑙鲁",
				"ab": "NR"
			},
			{
				"country_id": 100124,
				"country_code": 977,
				"country_name_en": "Nepal",
				"country_name_cn": "尼泊尔",
				"ab": "NP"
			},
			{
				"country_id": 100125,
				"country_code": 599,
				"country_name_en": "Netheriands Antilles",
				"country_name_cn": "荷属安的列斯",
				"ab": ""
			},
			{
				"country_id": 100126,
				"country_code": 31,
				"country_name_en": "Netherlands",
				"country_name_cn": "荷兰",
				"ab": "NL"
			},
			{
				"country_id": 100127,
				"country_code": 64,
				"country_name_en": "New Zealand",
				"country_name_cn": "新西兰",
				"ab": "NZ"
			},
			{
				"country_id": 100128,
				"country_code": 505,
				"country_name_en": "Nicaragua",
				"country_name_cn": "尼加拉瓜",
				"ab": "NI"
			},
			{
				"country_id": 100129,
				"country_code": 227,
				"country_name_en": "Niger",
				"country_name_cn": "尼日尔",
				"ab": "NE"
			},
			{
				"country_id": 100130,
				"country_code": 234,
				"country_name_en": "Nigeria",
				"country_name_cn": "尼日利亚",
				"ab": "NG"
			},
			{
				"country_id": 100131,
				"country_code": 850,
				"country_name_en": "North Korea",
				"country_name_cn": "朝鲜",
				"ab": "KP"
			},
			{
				"country_id": 100132,
				"country_code": 47,
				"country_name_en": "Norway",
				"country_name_cn": "挪威",
				"ab": "NO"
			},
			{
				"country_id": 100133,
				"country_code": 968,
				"country_name_en": "Oman",
				"country_name_cn": "阿曼",
				"ab": "OM"
			},
			{
				"country_id": 100134,
				"country_code": 92,
				"country_name_en": "Pakistan",
				"country_name_cn": "巴基斯坦",
				"ab": "PK"
			},
			{
				"country_id": 100135,
				"country_code": 507,
				"country_name_en": "Panama",
				"country_name_cn": "巴拿马",
				"ab": "PA"
			},
			{
				"country_id": 100136,
				"country_code": 675,
				"country_name_en": "Papua New Cuinea",
				"country_name_cn": "巴布亚新几内亚",
				"ab": "PG"
			},
			{
				"country_id": 100137,
				"country_code": 595,
				"country_name_en": "Paraguay",
				"country_name_cn": "巴拉圭",
				"ab": "PY"
			},
			{
				"country_id": 100138,
				"country_code": 51,
				"country_name_en": "Peru",
				"country_name_cn": "秘鲁",
				"ab": "PE"
			},
			{
				"country_id": 100139,
				"country_code": 63,
				"country_name_en": "Philippines",
				"country_name_cn": "菲律宾",
				"ab": "PH"
			},
			{
				"country_id": 100140,
				"country_code": 48,
				"country_name_en": "Poland",
				"country_name_cn": "波兰",
				"ab": "PL"
			},
			{
				"country_id": 100141,
				"country_code": 689,
				"country_name_en": "French Polynesia",
				"country_name_cn": "法属玻利尼西亚",
				"ab": "PF"
			},
			{
				"country_id": 100142,
				"country_code": 351,
				"country_name_en": "Portugal",
				"country_name_cn": "葡萄牙",
				"ab": "PT"
			},
			{
				"country_id": 100143,
				"country_code": 1787,
				"country_name_en": "Puerto Rico",
				"country_name_cn": "波多黎各",
				"ab": "PR"
			},
			{
				"country_id": 100144,
				"country_code": 974,
				"country_name_en": "Qatar",
				"country_name_cn": "卡塔尔",
				"ab": "QA"
			},
			{
				"country_id": 100145,
				"country_code": 262,
				"country_name_en": "Reunion",
				"country_name_cn": "留尼旺",
				"ab": ""
			},
			{
				"country_id": 100146,
				"country_code": 40,
				"country_name_en": "Romania",
				"country_name_cn": "罗马尼亚",
				"ab": "RO"
			},
			{
				"country_id": 100147,
				"country_code": 7,
				"country_name_en": "Russia",
				"country_name_cn": "俄罗斯",
				"ab": "RU"
			},
			{
				"country_id": 100148,
				"country_code": 1758,
				"country_name_en": "Saint Lueia",
				"country_name_cn": "圣卢西亚",
				"ab": "LC"
			},
			{
				"country_id": 100149,
				"country_code": 1784,
				"country_name_en": "Saint Vincent",
				"country_name_cn": "圣文森特岛",
				"ab": "VC"
			},
			{
				"country_id": 100150,
				"country_code": 684,
				"country_name_en": "Samoa Eastern",
				"country_name_cn": "东萨摩亚(美)",
				"ab": ""
			},
			{
				"country_id": 100151,
				"country_code": 685,
				"country_name_en": "Samoa Western",
				"country_name_cn": "西萨摩亚",
				"ab": ""
			},
			{
				"country_id": 100152,
				"country_code": 378,
				"country_name_en": "San Marino",
				"country_name_cn": "圣马力诺",
				"ab": "SM"
			},
			{
				"country_id": 100153,
				"country_code": 239,
				"country_name_en": "Sao Tome and Principe",
				"country_name_cn": "圣多美和普林西比",
				"ab": "ST"
			},
			{
				"country_id": 100154,
				"country_code": 966,
				"country_name_en": "Saudi Arabia",
				"country_name_cn": "沙特阿拉伯",
				"ab": "SA"
			},
			{
				"country_id": 100155,
				"country_code": 221,
				"country_name_en": "Senegal",
				"country_name_cn": "塞内加尔",
				"ab": "SN"
			},
			{
				"country_id": 100156,
				"country_code": 248,
				"country_name_en": "Seychelles",
				"country_name_cn": "塞舌尔",
				"ab": "SC"
			},
			{
				"country_id": 100157,
				"country_code": 232,
				"country_name_en": "Sierra Leone",
				"country_name_cn": "塞拉利昂",
				"ab": "SL"
			},
			{
				"country_id": 100158,
				"country_code": 65,
				"country_name_en": "Singapore",
				"country_name_cn": "新加坡",
				"ab": "SG"
			},
			{
				"country_id": 100159,
				"country_code": 421,
				"country_name_en": "Slovakia",
				"country_name_cn": "斯洛伐克",
				"ab": "SK"
			},
			{
				"country_id": 100160,
				"country_code": 386,
				"country_name_en": "Slovenia",
				"country_name_cn": "斯洛文尼亚",
				"ab": "SI"
			},
			{
				"country_id": 100161,
				"country_code": 677,
				"country_name_en": "Solomon Is",
				"country_name_cn": "所罗门群岛",
				"ab": "SB"
			},
			{
				"country_id": 100162,
				"country_code": 252,
				"country_name_en": "Somali",
				"country_name_cn": "索马里",
				"ab": "SO"
			},
			{
				"country_id": 100163,
				"country_code": 27,
				"country_name_en": "South Africa",
				"country_name_cn": "南非",
				"ab": "ZA"
			},
			{
				"country_id": 100164,
				"country_code": 34,
				"country_name_en": "Spain",
				"country_name_cn": "西班牙",
				"ab": "ES"
			},
			{
				"country_id": 100165,
				"country_code": 94,
				"country_name_en": "Sri Lanka",
				"country_name_cn": "斯里兰卡",
				"ab": "LK"
			},
			{
				"country_id": 100166,
				"country_code": 1758,
				"country_name_en": "St.Lucia",
				"country_name_cn": "圣卢西亚",
				"ab": "LC"
			},
			{
				"country_id": 100167,
				"country_code": 1784,
				"country_name_en": "St.Vincent",
				"country_name_cn": "圣文森特",
				"ab": "VC"
			},
			{
				"country_id": 100168,
				"country_code": 249,
				"country_name_en": "Sudan",
				"country_name_cn": "苏丹",
				"ab": "SD"
			},
			{
				"country_id": 100169,
				"country_code": 597,
				"country_name_en": "Suriname",
				"country_name_cn": "苏里南",
				"ab": "SR"
			},
			{
				"country_id": 100170,
				"country_code": 268,
				"country_name_en": "Swaziland",
				"country_name_cn": "斯威士兰",
				"ab": "SZ"
			},
			{
				"country_id": 100171,
				"country_code": 46,
				"country_name_en": "Sweden",
				"country_name_cn": "瑞典",
				"ab": "SE"
			},
			{
				"country_id": 100172,
				"country_code": 41,
				"country_name_en": "Switzerland",
				"country_name_cn": "瑞士",
				"ab": "CH"
			},
			{
				"country_id": 100173,
				"country_code": 963,
				"country_name_en": "Syria",
				"country_name_cn": "叙利亚",
				"ab": "SY"
			},
			{
				"country_id": 100174,
				"country_code": 886,
				"country_name_en": "Taiwan",
				"country_name_cn": "台湾省",
				"ab": "TW"
			},
			{
				"country_id": 100175,
				"country_code": 992,
				"country_name_en": "Tajikstan",
				"country_name_cn": "塔吉克斯坦",
				"ab": "TJ"
			},
			{
				"country_id": 100176,
				"country_code": 255,
				"country_name_en": "Tanzania",
				"country_name_cn": "坦桑尼亚",
				"ab": "TZ"
			},
			{
				"country_id": 100177,
				"country_code": 66,
				"country_name_en": "Thailand",
				"country_name_cn": "泰国",
				"ab": "TH"
			},
			{
				"country_id": 100178,
				"country_code": 228,
				"country_name_en": "Togo",
				"country_name_cn": "多哥",
				"ab": "TG"
			},
			{
				"country_id": 100179,
				"country_code": 676,
				"country_name_en": "Tonga",
				"country_name_cn": "汤加",
				"ab": "TO"
			},
			{
				"country_id": 100180,
				"country_code": 1809,
				"country_name_en": "Trinidad and Tobago",
				"country_name_cn": "特立尼达和多巴哥",
				"ab": "TT"
			},
			{
				"country_id": 100181,
				"country_code": 216,
				"country_name_en": "Tunisia",
				"country_name_cn": "突尼斯",
				"ab": "TN"
			},
			{
				"country_id": 100182,
				"country_code": 90,
				"country_name_en": "Turkey",
				"country_name_cn": "土耳其",
				"ab": "TR"
			},
			{
				"country_id": 100183,
				"country_code": 993,
				"country_name_en": "Turkmenistan",
				"country_name_cn": "土库曼斯坦",
				"ab": "TM"
			},
			{
				"country_id": 100184,
				"country_code": 256,
				"country_name_en": "Uganda",
				"country_name_cn": "乌干达",
				"ab": "UG"
			},
			{
				"country_id": 100185,
				"country_code": 380,
				"country_name_en": "Ukraine",
				"country_name_cn": "乌克兰",
				"ab": "UA"
			},
			{
				"country_id": 100186,
				"country_code": 971,
				"country_name_en": "United Arab Emirates",
				"country_name_cn": "阿拉伯联合酋长国",
				"ab": "AE"
			},
			{
				"country_id": 100187,
				"country_code": 44,
				"country_name_en": "United Kiongdom",
				"country_name_cn": "英国",
				"ab": "GB"
			},
			{
				"country_id": 100188,
				"country_code": 1,
				"country_name_en": "United States of America",
				"country_name_cn": "美国",
				"ab": "US"
			},
			{
				"country_id": 100189,
				"country_code": 598,
				"country_name_en": "Uruguay",
				"country_name_cn": "乌拉圭",
				"ab": "UY"
			},
			{
				"country_id": 100190,
				"country_code": 233,
				"country_name_en": "Uzbekistan",
				"country_name_cn": "乌兹别克斯坦",
				"ab": "UZ"
			},
			{
				"country_id": 100191,
				"country_code": 58,
				"country_name_en": "Venezuela",
				"country_name_cn": "委内瑞拉",
				"ab": "VE"
			},
			{
				"country_id": 100192,
				"country_code": 84,
				"country_name_en": "Vietnam",
				"country_name_cn": "越南",
				"ab": "VN"
			},
			{
				"country_id": 100193,
				"country_code": 967,
				"country_name_en": "Yemen",
				"country_name_cn": "也门",
				"ab": "YE"
			},
			{
				"country_id": 100194,
				"country_code": 381,
				"country_name_en": "Yugoslavia",
				"country_name_cn": "南斯拉夫",
				"ab": "YU"
			},
			{
				"country_id": 100195,
				"country_code": 263,
				"country_name_en": "Zimbabwe",
				"country_name_cn": "津巴布韦",
				"ab": "ZW"
			},
			{
				"country_id": 100196,
				"country_code": 243,
				"country_name_en": "Zaire",
				"country_name_cn": "扎伊尔",
				"ab": "ZR"
			},
			{
				"country_id": 100197,
				"country_code": 260,
				"country_name_en": "Zambia",
				"country_name_cn": "赞比亚",
				"ab": "ZM"
			}
		],
		placeholder: '',
		code: '',//验证码
        user_id: 0,
        user_name: "",
        user_url: "",
		CodeBol: false,
		succeedBol: false,
		InterValObj: null, //timer变量，控制时间
		curCount: 0, //当前剩余秒数
		count: 60, //间隔函数，1秒执行
        customer_id: 0,
		country: '+86',
		isClickCode: true
	},
	computed: {

	},
	mounted: function() {
		// this.getCountry();
		this.getUserData();
	},
	methods: {
		getUserData: function () {
			var _this = this;
			this.user_id = this.GetRequest().code;
			this.user_id = parseInt(this.user_id,36).toString(10);
            $.ajax({
                type: "GET", // 用POST方式传输
                dataType: "JSON", // 数据格式:JSON
                url: "https://api.talkpal.com/users/"+_this.user_id, // 目标地址
                data: {

                },
                success: function(data) {
                    console.log(data);
                    _this.user_name = data.data.username;
                    _this.user_url = data.data.profile_image_url;
                },
                error: function(e, b, c) {
                    console.log(e, b, c);
                }
            });
        },
		getCountry: function() {
			var _this = this;
//			$.getJSON('js/countryCode.json', function(data) {
//				// console.log(data);
//				_this.countryList = data;
//				console.log(this.countryList);
//			});
			setTimeout(function() {
				$("#internationalCode").css({
					"right": "0%"
				});
			}, 10);
			$("#internationalCode").css({
				"display": "block"
			});
		},
		getCode: function() {
			this.curCount = this.count;
			var phone_number = document.getElementById("phoneNumber").value;
			var _this = this;
			// var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
			if(this.placeholder === null || this.placeholder === '') {
				alert("请输入手机号码！");
				return
			}
			// else if (!reg.test(phoneNumber.val())) {
			//     alert("请输入有效的手机号码！");
			//     return
			// }
			// 设置button效果，开始计时
			this.isClickCode = false;
			document.getElementById("getCode").innerHTML = "重新获取(" + this.curCount + ")"; //更改按钮文字
			this.InterValObj = window.setInterval(this.SetRemainTime, 1000); // 启动计时器timer处理函数，1秒执行一次
			// this.CodeBol = true;
			// 向后台发送处理数据
			$.ajax({
				type: "POST", // 用POST方式传输
				dataType: "JSON", // 数据格式:JSON
				url: "https://api.talkpal.com/verifications", // 目标地址
				data: {
					"verification": {
						"phone_number": _this.country + _this.placeholder
					}
				},
				success: function(data) {
					console.log(data);
					_this.customer_id = data.data.id;
					alert("验证码已发送");
				},
				error: function(e, b, c) {
					console.log(e, b, c);
				}
			});

		},
		SetRemainTime: function() { //timer处理函数
			if(this.curCount === 0) {
				window.clearInterval(this.InterValObj); // 停止计时器
				this.isClickCode = true;
				// document.getElementById("btnSendCode").removeAttribute("disabled");//移除禁用状态改为可用
				document.getElementById("getCode").innerHTML = "获取验证码";
			} else {
				this.curCount--;
				document.getElementById("getCode").innerHTML = "重新获取(" + this.curCount + ")";
			}
		},
		AcceptTheInvitation: function() { //验证短信验证码
			// var codelast = document.getElementById("code").value; //获取输入的验证码
			var _this = this;
			if(_this.code === null || _this.code === '') {
				alert("验证码不能为空！");
			} else {
				$.ajax({
					type: "POST", // 用POST方式传输
					dataType: "JSON", // 数据格式:JSON
					url: "https://api.talkpal.com/invites", // 目标地址
					data: {
						"phone_number": _this.country + _this.placeholder,
						"verification_code": _this.code,
						"promotion_code": _this.GetRequest().code
					},
					success: function(data) {
						_this.succeedBol = true;
						_this.CodeBol = false;
					},
					error:function (e,b,c) {
						console.log(e,b,c);
                        var errorText = JSON.parse(e.responseText);
                        if (errorText.errors.phone_number) {
                            if(errorText.errors.phone_number[0] === "Registered"){
                                alert("该号码已经注册,请打开或下载 App 直接登陆");
                                _this.succeedBol = true;
                                _this.CodeBol = false;
                            }
                        }
                        if (errorText.errors.invitee_phone_number) {
                            if(errorText.errors.invitee_phone_number[0] === "has already been taken"){
                                alert("您已成功接受邀请");
                                _this.succeedBol = true;
                                _this.CodeBol = false;
                            }
                        }
                        if (errorText.errors.verify) {
                            if (errorText.errors.verify[0] === 'Incorrect verification code') {
                                alert('您输入的验证码有误，请等待重新获取');
                            }
                        }
                    }
				});
				this.AcceptTheInvitation = false;
			}
		},
		country_back: function(item) {
			$("#internationalCode").css({
				"right": "-100%"
			});
			setTimeout(function() {
				$("#internationalCode").css({
					"display": "none"
				});
			}, 500);
			if(item.country_code === undefined) {
				document.body.scrollTop = 0;
				return
			} else {
				this.country = '+' + item.country_code;
				$('html,body').scrollTop(0);
			}
		},
        GetRequest: function () {
            var url = location.search; //获取url中"?"符后的字串
			url = url.split("%20").join("");
            var theRequest = new Object();
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                strs = str.split("&");
                for(var i = 0; i < strs.length; i ++) {
                    theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
                }
            }
            return theRequest;
        }
	}
});