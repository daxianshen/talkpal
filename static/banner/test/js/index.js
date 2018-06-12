"use strict";

var app = new Vue({
	el: "#app",
	data: {
		title: [{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/ally.mp4"
				}],
				options: {
					type: "img",
					src: ["img/1/A.jpg", "img/1/B.jpg", "img/1/C.jpg", "img/1/D.jpg"]
				},
				bol: false
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/ally_1.mp4"
				}],
				options: {
					type: "words",
					texts: ["yellow", "pink", "purple", "red"]
				},
				bol: false
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/ally_2.mp4"
				}],
				options: {
					type: "img",
					src: ["img/3/A.png", "img/3/B.png", "img/3/C.png", "img/3/D.png"]
				},
				bol: false
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/ally_3.mp4"
				}],
				options: {
					type: "img",
					src: ["img/4/A.jpg", "img/4/B.jpg", "img/4/C.jpg", "img/4/D.jpg"]
				},
				bol: false
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/ally_4.mp4"
				}],
				options: {
					type: "img",
					src: ["img/5/A.jpg", "img/5/B.jpg", "img/5/C.jpg", "img/5/D.jpg"]
				},
				bol: false
			},
			{
				topic: "XZE",
				title: [{
					type: "img",
					src: "img/6/timg.jpg"
				}, {
					type: "text",
					texts: "What is the animal in the picture?"
				}],
				options: {
					type: "words",
					texts: ["Zebra", "Giraffe", "Elephant", "Frog"]
				},
				bol: true
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "I like wearing jacket in autumn."
				}],
				options: {
					type: "img",
					src: ["img/7/A.jpg", "img/7/B.jpg", "img/7/C.jpg", "img/7/D.jpg"]
				},
				bol: true
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "When we are hungry, we can go to the ___."
				}],
				options: {
					type: "img",
					src: ["img/8/A.jpg", "img/8/B.jpg", "img/8/C.jpg", "img/8/D.jpg"]
				},
				bol: true
			},
			{
				topic: "XZE",
				title: [{
					type: "img",
					src: "img/9/9.jpg"
				}, {
					type: "text",
					texts: "What is the sport in picture?"
				}],
				options: {
					type: "words",
					texts: ["Basketball", "Football", "Hockey", "Golf"]
				},
				bol: true
			},
			{
				topic: "XZE",
				title: [{
					type: "img",
					src: "img/10/10.jpg"
				}],
				options: {
					type: "words",
					texts: ["go up", "keep up", "come in", "come out"]
				},
				bol: true
			},
			{
				topic: "XCI",
				title: [{
					type: "img",
					src: "img/11/11.jpg"
				}, {
					type: "text",
					texts: "There ______ two balls ______ the table."
				}],
				options: {
					type: "choose",
					texts: ["is", "are", "under", "between"]
				},
				bol: true
			}, 
			{
				topic: "XZE",
				title: [{
					type: "img",
					src: "img/12/12.jpg"
				}, {
					type: "text",
					texts: "The girls are ___ happily."
				}],
				options: {
					type: "words",
					texts: ["laughing", "laughed", "laugh", "laughs"]
				},
				bol: true
			},
			{
				topic: "XZE",
				title: [{
					type: "img",
					src: "img/13/timg.jpg"
				}, {
					type: "text",
					texts: "When you have toothache , you should go to"
				}],
				options: {
					type: "words",
					texts: ["Artist", "Fireman", "Pilot", "Dentist"]
				},
				bol: true
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "Ben: Thank you for helping me with my homework.\nJerry: It’s a piece of cake.\nWhat does Jerry mean?"
				}],
				options: {
					type: "words",
					texts: ["Jerry觉得这是一个蛋糕。 ", "Jerry要Ben请他吃蛋糕。", "Jerry觉得这是小菜一碟。", "Jerry觉得太难了。"]
				},
				bol: true
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "Kara: You are not from America, are you?\nLinda: Yes, I am.\nLinda是美国人吗？"
				}],
				options: {
					type: "words",
					texts: ["Linda是美国人。 ", "Linda不是美国人。", "Linda没有说清楚", "我不知道"]
				},
				bol: true
			}
		],
		dengji: "入门",
		lessonid: 1,
		thisindex: 0,
		loadingBol: false,
		isActive: false,
		chartHeight: {}

	},
	computed: {
		
	},
	mounted: function() {
		
	},
	methods: {
		isIOS: function(lessonid) {
			if (this.thisindex>0) {
				return
			}
			this.thisindex++;
			this.loadingBol = true;
			window.location.href = "talkpal://LessonDetailsViewController?id=" + lessonid;
		}
	}
});

var n = 0;
var arr = []; //答题数组
var Correct_answer = ["C", "A", "B", "D", "D", "B", "A", "A", "C", "A", "23", "A", "D", "C", "A"]; //答案数组
var answer_num = 0;
var choose = undefined;
var grammar_num = 0; //grammar_num         语法
var pronunciation_num = 0; //pronunciation_num   发音
var Listening_num = 0; //Listening_num       听力
var reading_num = 0; //reading_num         阅读
var vocabulary_num = 0; //vocabulary_num      词汇
var reg = /\\+n/g;
app.title[13].title[0].texts.replace(reg,'<br/>');
app.title[14].title[0].texts.replace(reg,'<br/>');
// var lessonid;//课程等级
//$("#first_donghua").css("height", $("#first_donghua").width());
$("#readtest>img").click(function() {
	$("#shouye").hide();
	video_loading($("video").eq(0), 0);
	video[0].play();
	//	console.log($(".foot"));

	video[0].addEventListener("ended", function() {
		daojishi($(".foot").eq(0), 0);
		$(".forbadeclick").eq(0).hide();
	});
});
var video = document.getElementsByTagName("video");

function video_loading($video, index) {
	$('.video_loading').eq(index).show();
	var timer = setInterval(function() {
		var currentTime = $video[0].currentTime; // 检测当前的播放时间

		if(currentTime > 0) {
			$('.video_loading').hide();
			clearInterval(timer);
		}
	}, 100)
}
function picClick() {
	for(var i = 0, len = $(".xuanze .picture").length; i < len; i++) {
		$(".xuanze .picture").eq(i).click(function() {
			var index = arr.length;
			$(".foot").eq(index).children("div").stop(true);
			$(".forbadeclick").eq(index).show();
			$(this).addClass("action");
			$(this).children("span").css("border-right", "none");
			var _this = $(this);
			arr.push($(this).children("span").html());
			if(index < 5) {
				video[index].pause();
				//				setTimeout(function() {
				_this.parent().parent().hide();
				if(index === 4) {
					daojishi($(".foot").eq(index + 1), index + 1);
					$(".forbadeclick").eq(index + 1).hide();
				}
				if(index < 4) {
					video[index + 1].play();
					video[index + 1].addEventListener("ended", function() {
						//						console.log("播放结束");
						daojishi($(".foot").eq(index + 1), index + 1);
						$(".forbadeclick").eq(index + 1).hide();
					})
				}
				//				}, 200);
			} else {
				setTimeout(function() {
					_this.parent().parent().hide();
					daojishi($(".foot").eq(index + 1), index + 1);
					$(".forbadeclick").eq(index + 1).hide();
				}, 200);
			}

		});
	}
}
picClick();
for(var i = 0; i < $(".xuanze .words").length; i++) {
	$(".xuanze .words").eq(i).click(function() {
		var _this = $(this);
		var index = arr.length;
		$(".foot").eq(index).children("div").stop(true);
		$(".forbadeclick").eq(index).show();
		$(this).addClass("action");
		arr.push($(this).children("span").html());
		if(index < 4) {
			video[index].pause();
			//			setTimeout(function() {
			_this.parent().parent().hide();
			video[index + 1].play();
			video[index + 1].addEventListener("ended", function() {
				//					console.log("播放结束");
				daojishi($(".foot").eq(index + 1), index + 1);
				$(".forbadeclick").eq(index + 1).hide();
			})
			//			}, 200);
		} else {
			setTimeout(function() {
				_this.parent().parent().hide();
				daojishi($(".foot").eq(index + 1), index + 1);
				$(".forbadeclick").eq(index + 1).hide();
				lastTitle();
			}, 200);
		}

	});
}

var _loop = function(i) {
	$(".xuanze .choose").eq(i).click(function() {
		var index = arr.length;
		var _this = $(this);
		$(this).addClass("action");
		console.log(n);
		if(n === 0) {
			$(".fill>span").eq(0).html($(this).html());
			choose = i + 1;
			n++;
		} else if(n === 1 && choose !== (i + 1)) {
			n++;
			$(".foot").eq(index).children("div").stop(true);
			$(".forbadeclick").eq(index).show();
			$(".fill>span").eq(1).html($(this).html());
			arr.push(String(choose) + String(i + 1));
			setTimeout(function() {
				_this.parent().parent().hide();
				daojishi($(".foot").eq(index + 1), index + 1);
				$(".forbadeclick").eq(index + 1).hide();
				n = 0;
			}, 300);
		}
	});
};

for(var i = 0; i < $(".xuanze .choose").length; i++) {
	_loop(i);
}
//$("#test_again").click(function() {
//	$("#shouye").show();
//	$(".title").show();
//	$(".action").removeClass("action");
//	$(".foot").css("width", "88%");
//	arr = [];
//	answer_num = 0;
//	grammar_num = 0;
//	pronunciation_num = 0;
//	Listening_num = 0;
//	reading_num = 0;
//	vocabulary_num = 0;
//	$(".fill>span").eq(0).html("");
//	$(".fill>span").eq(1).html("");
//});

function myFunction(item, index) {
	console.log(index, item)
}

function daojishi(obj, index) {
	var index = index;
	//	console.log(index);
	obj.children("div").animate({
		width: "0%",
		backgroundPositionX: "-2000px"
	}, 15000, function() {
		$(this).parent().parent().hide();
		if(arr.length < 15) {
			arr.push("");
			if(index < 5) {
				if(index === 4) {
					daojishi($(".foot").eq(index + 1), index + 1);
					$(".forbadeclick").eq(index + 1).hide();
				} else {
					video[index + 1].play();
					video[index + 1].addEventListener("ended", function() {
						//					console.log("播放结束");
						daojishi($(".foot").eq(index + 1), index + 1);
						$(".forbadeclick").eq(index + 1).hide();
					});
				}
			} else {
				daojishi($(".foot").eq(index + 1), index + 1);
				$(".forbadeclick").eq(index + 1).hide();
			}
		}
		//		console.log(arr);
		lastTitle();
	});
}
var lastTitle_num = 0;

function lastTitle() {
	if($(".title").eq($(".title").length - 1).css("display") === "none" && lastTitle_num === 0) {
		//		console.log(arr);
		$("#next").show();
		$(".logo").show();
		dengji();
		lastTitle_num++;
	}
}

function dengji() {
	arr.forEach(function(item, index) {
		if(item === Correct_answer[index]) {
			//1~5题，评听力
			if(index < 5 && Listening_num !== 5) {
				Listening_num++;
			}
			//6~10题，评发音
			if(index > 4 && index < 10 && pronunciation_num !== 5) {
				pronunciation_num++;
			}
			//10~15题，评语法
			if(index > 9 && index < 15 && grammar_num !== 5) {
				grammar_num++;
			}
			//1~10题，评词汇
			if(index < 10 && vocabulary_num !== 10) {
				vocabulary_num++;
			}
			//6~15题，评阅读
			if(index > 4 && index < 15 && reading_num !== 10) {
				reading_num++;
			}
			//所有题目，评ABC级
			if(index < 15 && answer_num < 15) {
				answer_num++;
			}
		}
	});
	if(answer_num < 5) {
		app.dengji = "入门";
		app.lessonid = 1;
	} else if(answer_num > 4 && answer_num < 9) {
		app.dengji = "初级";
		app.lessonid = 2;
	} else if(answer_num > 8 && answer_num < 13) {
		app.dengji = "中级";
		app.lessonid = 3;
	} else if(answer_num > 12 && answer_num < 16) {
		app.dengji = "高级";
		app.lessonid = 4;
	}
	//	console.log(answer_num, grammar_num, pronunciation_num, Listening_num, reading_num, vocabulary_num);
	var myChart = echarts.init(document.getElementById('cnd'));
	var option = {
		radar: [{
			indicator: [{
				text: '语法',
				max: 5,
				min: 0
			}, {
				text: '发音',
				max: 5,
				min: 0
			}, {
				text: '听力',
				max: 5,
				min: 0
			}, {
				text: '阅读',
				max: 5,
				min: 0
			}, {
				text: '词汇',
				max: 5,
				min: 0
			}],
			name: {
				textStyle: {
					formatter: '【{value}】',
					color: '#ffffff'
				}
			},
			center: ['50%', '50%'],
			radius: 80,
			splitNumber: 5,
			shape: 'circle',
			splitArea: {
				areaStyle: {
					color: ['rgba(255, 255, 255, 0.5)'],
					shadowColor: 'rgba(0, 0, 0, 0.3)',
					shadowBlur: 10
				}
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.5)'
				}
			},
			splitLine: {
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.5)'
				}
			}

		}],
		series: [{
			name: '成绩单',
			type: 'radar',
			radarIndex: 0,
			itemStyle: {
				normal: {
					color: {
						colorStops: [{
							offset: 1,
							color: 'rgba(47,199,239,1)'
						}]
					}
				}
			},
			data: [{
				value: [5, 5, 5, 5, 5],
				name: '神话',
				symbol: 'rect',
				areaStyle: {
					normal: {
						opacity: 0.5,
						color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
							color: '#5fd4f3',
							offset: 0
						}])
					}
				}
			}]
		}]
	};
	option.series[0].data[0].value = [grammar_num, pronunciation_num, Listening_num, reading_num / 2, vocabulary_num / 2];
	myChart.setOption(option);
	if (document.body.clientWidth === 768 || document.body.clientWidth === 1024) {
		$("#cnd").css({"width":"480px","height":"480px"});
		$("#cnd").children("div").css({"width":"480px","height":"480px"});
		$("#cnd").children("div").children("canvas").css({"width":"480px","height":"480px"});
	}
}