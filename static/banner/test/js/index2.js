"use strict";

var app = new Vue({
	el: "#app",
	data: {
		title: [

			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/QMvideo/QM_1.mp4"
				}],
				options: {
					type: "words",
					texts: ["e", "t", "F", "L"]
				},
				titleBol: true,
				anBol: false,
				answer: "C"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/QMvideo/QM_2.mp4"
				}],
				options: {
					type: "words",
					texts: ["Q", "y", "M", "g"]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/QMvideo/QM_3.mp4"
				}],
				options: {
					type: "img",
					src: ["img/banner_pic_done_QM/p_qm_3_A.png", "img/banner_pic_done_QM/p_qm_3_B.jpg"]
				},
				titleBol: true,
				anBol: false,
				answer: "B"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/QMvideo/QM_4.mp4"
				}],
				options: {
					type: "img",
					src: ["img/banner_pic_done_QM/p_qm_4_A.png", "img/banner_pic_done_QM/p_qm_4_B.jpg"]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/QMvideo/QM_5.mp4"
				}],
				options: {
					type: "words",
					texts: ["pit", "dim", "big"]
				},
				titleBol: true,
				anBol: false,
				answer: "C"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/QMvideo/QM_6.mp4"
				}],
				options: {
					type: "words",
					texts: ["van", "jog", "but"]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/QMvideo/QM_7.mp4"
				}],
				options: {
					type: "words",
					texts: ["no", "me"]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/QMvideo/QM_8.mp4"
				}],
				options: {
					type: "words",
					texts: ["go", "come"]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "bee"
				}],
				options: {
					type: "img",
					src: ["img/banner_pic_done_QM/p_qm_9_A.jpg", "img/banner_pic_done_QM/p_qm_9_B.jpg"]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "cat"
				}],
				options: {
					type: "img",
					src: ["img/banner_pic_done_QM/p_qm_10_A.jpg", "img/banner_pic_done_QM/p_qm_10_B.jpg"]
				},
				titleBol: true,
				anBol: false,
				answer: "B"
			},

			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/RMvideo/RM_1.mp4"
				}],
				options: {
					type: "img",
					src: ["img/banner_pic_done_RM/p_rm_1_A.jpg", "img/banner_pic_done_RM/p_rm_1_B.jpg", "img/banner_pic_done_RM/p_rm_1_C.jpg", "img/banner_pic_done_RM/p_rm_1_D.jpg"]
				},
				titleBol: true,
				anBol: false,
				answer: "C"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/RMvideo/RM_2.mp4"
				}],
				options: {
					type: "img",
					src: ["img/banner_pic_done_RM/p_rm_2_A.jpg", "img/banner_pic_done_RM/p_rm_2_B.jpg", "img/banner_pic_done_RM/p_rm_2_C.jpg", "img/banner_pic_done_RM/p_rm_2_D.jpg"]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/RMvideo/RM_3.mp4"
				}],
				options: {
					type: "img",
					src: ["img/banner_pic_done_RM/p_rm_3_A.jpg", "img/banner_pic_done_RM/p_rm_3_B.jpg", "img/banner_pic_done_RM/p_rm_3_C.jpg", "img/banner_pic_done_RM/p_rm_3_D.jpg"]
				},
				titleBol: true,
				anBol: false,
				answer: "D"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/RMvideo/RM_4.mp4"
				}],
				options: {
					type: "img",
					src: ["img/banner_pic_done_RM/p_rm_4_A.jpg", "img/banner_pic_done_RM/p_rm_4_B.jpg", "img/banner_pic_done_RM/p_rm_4_C.jpg", "img/banner_pic_done_RM/p_rm_4_D.jpg"]
				},
				titleBol: true,
				anBol: false,
				answer: "C"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "a blue kite"
				}],
				options: {
					type: "img",
					src: ["img/banner_pic_done_RM/p_rm_5_A.jpg", "img/banner_pic_done_RM/p_rm_5_B.jpg", "img/banner_pic_done_RM/p_rm_5_C.jpg", "img/banner_pic_done_RM/p_rm_5_D.jpg"]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "four chairs"
				}],
				options: {
					type: "img",
					src: ["img/banner_pic_done_RM/p_rm_6_A.jpg", "img/banner_pic_done_RM/p_rm_6_B.jpg", "img/banner_pic_done_RM/p_rm_6_C.jpg", "img/banner_pic_done_RM/p_rm_6_D.jpg"]
				},
				titleBol: true,
				anBol: false,
				answer: "B"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "What’s your name?"
				}],
				options: {
					type: "words",
					texts: ["I’m Peter.", "I’m a boy."]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "How old are you?"
				}],
				options: {
					type: "words",
					texts: ["I’m tall.", "I’m 3."]
				},
				titleBol: true,
				anBol: false,
				answer: "B"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "What color are the apples?"
				}],
				options: {
					type: "words",
					texts: ["They are two.", "They are red."]
				},
				titleBol: true,
				anBol: false,
				answer: "B"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "What do you have?"
				}],
				options: {
					type: "words",
					texts: ["I have crayons.", "I like cakes."]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},

			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/CJvideo/CJ_1.mp4"
				}],
				options: {
					type: "img",
					src: ["img/banner_pic_done_CJ/p_cj_1_A.jpg", "img/banner_pic_done_CJ/p_cj_1_B.jpg", "img/banner_pic_done_CJ/p_cj_1_C.jpg", "img/banner_pic_done_CJ/p_cj_1_D.jpg"]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/CJvideo/CJ_2.mp4"
				}],
				options: {
					type: "img",
					src: ["img/banner_pic_done_CJ/p_cj_2_A.jpg", "img/banner_pic_done_CJ/p_cj_2_B.jpg", "img/banner_pic_done_CJ/p_cj_2_C.jpg", "img/banner_pic_done_CJ/p_cj_2_D.jpg"]
				},
				titleBol: true,
				anBol: false,
				answer: "C"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/CJvideo/CJ_3.mp4"
				}],
				options: {
					type: "words",
					texts: ["She’s an English teacher.", "She’s from America.", "She likes drawing pictures."]
				},
				titleBol: true,
				anBol: false,
				answer: "B"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/CJvideo/CJ_4.mp4"
				}],
				options: {
					type: "words",
					texts: ["I can see fifteen parrots.", "Yes, they are lovely.", "I don’t have any parrots."]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "What are these?"
				}],
				options: {
					type: "words",
					texts: ["They are sheep.", "It is a sheep.", "No, they aren’t."]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "What’s in her glass?"
				}],
				options: {
					type: "words",
					texts: ["There are some juice.", "There is any juice.", "There is some juice."]
				},
				titleBol: true,
				anBol: false,
				answer: "C"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "What does Peter have?"
				}],
				options: {
					type: "words",
					texts: ["He have a computer.", "He has a computer.", "He don’t have a computer."]
				},
				titleBol: true,
				anBol: false,
				answer: "B"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "Whose trousers are those?"
				}],
				options: {
					type: "words",
					texts: ["It is my trousers.", "They are my trousers.", "They are in my bag."]
				},
				titleBol: true,
				anBol: false,
				answer: "B"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "What can you do?"
				}],
				options: {
					type: "words",
					texts: ["You can climb trees.", "I can climbing trees.", "I can climb trees."]
				},
				titleBol: true,
				anBol: false,
				answer: "C"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "What does your mother like doing?"
				}],
				options: {
					type: "words",
					texts: ["She likes reading books.", "She likes read books.", "She likes to reading books."]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},

			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/ZJvideo/ZJ_1.mp4"
				}],
				options: {
					type: "words",
					texts: ["Yes, it’s very near.", "I am reading a book in the library.", "I go there twice a week.", "We go there by bus."]
				},
				titleBol: true,
				anBol: false,
				answer: "D"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/ZJvideo/ZJ_2.mp4"
				}],
				options: {
					type: "words",
					texts: ["She is swimming now.", "She goes swimming every day.", "She likes swimming on Sunday.", "She can swim very fast."]
				},
				titleBol: true,
				anBol: false,
				answer: "C"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/ZJvideo/ZJ_3.mp4"
				}],
				options: {
					type: "words",
					texts: ["He sleeps in his bedroom.", "He goes to sleep at eight.", "He gets up at eight.", "He is sleeping now."]
				},
				titleBol: true,
				anBol: false,
				answer: "B"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/ZJvideo/ZJ_4.mp4"
				}],
				options: {
					type: "words",
					texts: [" They can make a snowman.", "They like playing chess.", "They have picnic on weekends.", "They are cooking in the kitchen."]
				},
				titleBol: true,
				anBol: false,
				answer: "D"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "Anna needs a pair of glasses, ________."
				}],
				options: {
					type: "words",
					texts: ["because she can’t see clearly", "because she likes watching movies", "but she is watching a movie", "but she doesn’t like movies"]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "Whose room is this?"
				}],
				options: {
					type: "words",
					texts: ["They’re Anna and Kate.", "It’s Anna and Kate.", "They’re Anna and Kate’s.", "It’s Anna and Kate’s."]
				},
				titleBol: true,
				anBol: false,
				answer: "D"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "Listen, _____."
				}],
				options: {
					type: "words",
					texts: ["your grandpa plays the piano", "your grandpa needs a new piano", "your grandpa is playing the piano", "your grandpa is next to the piano"]
				},
				titleBol: true,
				anBol: false,
				answer: "C"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "What can you find in the fridge?"
				}],
				options: {
					type: "words",
					texts: ["There are some meat and some carrots.", "There are some strawberry and some meat.", "There is some tomatoes and some butter.", "There is some milk and some sandwiches."]
				},
				titleBol: true,
				anBol: false,
				answer: "D"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "Which sentence is NOT right?"
				}],
				options: {
					type: "words",
					texts: ["Some deer are eating grass over there.", "The sisters like to taking some photos.", "Jane, don’t pick flowers in the park.", "They need to clean the classroom after school."]
				},
				titleBol: true,
				anBol: false,
				answer: "B"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "Which sentence is right?"
				}],
				options: {
					type: "words",
					texts: ["Does Betty goes skating on Sundays?", "There isn’t some jam in the bottle.", "I’d like to having some bread for breakfast.", "John is playing on the beach with his friend."]
				},
				titleBol: true,
				anBol: false,
				answer: "D"
			},

			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/GJvideo/GJ_1.mp4"
				}],
				options: {
					type: "words",
					texts: ["It’s about twenty-minute walk.", "I go there by subway.", "I’ve been here since last year.", "I go there twice a year."]
				},
				titleBol: true,
				anBol: false,
				answer: "C"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/GJvideo/GJ_2.mp4"
				}],
				options: {
					type: "words",
					texts: ["She is going to practice playing the piano.", "She never gets up early on weekends.", "She visited the History Museum last week.", "She has gone to Beijing with her parents."]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/GJvideo/GJ_3.mp4"
				}],
				options: {
					type: "words",
					texts: ["Because she has read this book.", "Because she hasn’t read this book.", "Because I haven’t finished my homework.", "Because I have finished my homework."]
				},
				titleBol: true,
				anBol: false,
				answer: "C"
			},
			{
				topic: "XZE",
				title: [{
					type: "video",
					mp4: "https://www.talkpal.com/static/banner/test/video/GJvideo/GJ_4.mp4"
				}],
				options: {
					type: "words",
					texts: ["I played basketball with my uncle yesterday.", "Oh, I love that basketball game a lot.", "We’re playing basketball in the playground.", "We will play basketball tomorrow morning."]
				},
				titleBol: true,
				anBol: false,
				answer: "B"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "What’s on the shelf?"
				}],
				options: {
					type: "words",
					texts: ["There are some bottles of water.", "There is a packet of sweet.", "There are a pair of glasses.", "There is some cups of tea."]
				},
				titleBol: true,
				anBol: false,
				answer: "A"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "What will the Lees do next week?"
				}],
				options: {
					type: "words",
					texts: ["He will do some shopping downtown.", "He is preparing for his final exam at home.", "They are planting trees in the yard.", "They will travel around France and Italy."]
				},
				titleBol: true,
				anBol: false,
				answer: "D"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "Which is right?"
				}],
				options: {
					type: "words",
					texts: ["Both Zac and Jim has studied English for three years.", "He put the gift under a Christmas tree just now.", "Many people is having dinner in the restaurant.", "Ms. Black will going to look after the baby."]
				},
				titleBol: true,
				anBol: false,
				answer: "B"
			},
			{
				topic: "XZE",
				title: [{
					type: "text",
					texts: "Which is NOT right?"
				}],
				options: {
					type: "words",
					texts: ["They have been here since two days ago.", "Our teacher going to buy a new car.", "Karen didn’t do her best in the match.", "I wait Henry for nearly twenty minutes."]
				},
				titleBol: true,
				anBol: false,
				answer: "B"
			},
			{
				topic: "XZE",
				title: [{
					type: "img",
					src: "img/banner_pic_done_GJ/p_gj_9.jpg"
				}, {
					type: "text",
					texts: "Why is Jenny so sad?"
				}],
				options: {
					type: "words",
					texts: ["Because she doesn’t like her watch.", "Because she lost her birthday gift.", "Because she can’t find the computer room.", "Because her father didn’t buy her a watch."]
				},
				titleBol: true,
				anBol: false,
				answer: "B"
			},
			{
				topic: "XZE",
				title: [{
					type: "img",
					src: "img/banner_pic_done_GJ/p_gj_10.jpg"
				}, {
					type: "text",
					texts: "What does “surprising” mean?"
				}],
				options: {
					type: "words",
					texts: ["Important", "Noisy", "Exciting", "Different"]
				},
				titleBol: true,
				anBol: false,
				answer: "C"
			}

		],
		pingjia: [
			{
				dengji: "启蒙",
				list: [{
						skills: "听力",
						details: ["掌握26个英文字母（发音，大小写）", "掌握部分常见高频词汇", "能根据所听单音节单词进行拼写"]
					},
					{
						skills: "词汇",
						details: ["具备370个词汇基础，例如26个字母的首字母单词，高频sight words，水果类、动物类单词等"]
					},
					{
						skills: "阅读",
						details: ["能够识读90%的单音节词汇", "能够识读85%不符合发音规则的词汇"]
					},
					{
						skills: "技能",
						details: ["自然拼读技能，即见词能读，听词能拼", "sight word技能，即掌握英语使用中85%单词"]
					}
				]
			},
			{
				dengji: "入门",
				list: [{
						skills: "听力",
						details: ["依据所学关键词能够听懂较慢语速句子", "掌握常见语用，并能够进行简单的对答"]
					},
					{
						skills: "词汇",
						details: ["具备512个词汇基础，例如数字；动作；文具等"]
					},
					{
						skills: "阅读",
						details: ["能够通过配图以及句中关键词理解单句"]
					},
					{
						skills: "语法",
						details: ["能够根据使用规律组合自己的表达 例如表达自己以及他人的姓名、年龄以及喜好，描述事物数量以及方位，表达道歉以及感谢等"]
					},
					{
						skills: "技能",
						details: ["能够对所学知识进行判断", "能够运用词汇以及常见语法规则的惯用就日常话题展开描述"]
					}
				]
			},
			{
				dengji: "初级",
				list: [{
						skills: "听力",
						details: ["能够听懂较慢语速的简单句", "能够根据问题给出具体的答案"]
					},
					{
						skills: "词汇",
						details: ["具备683个词汇基础，例如饮食，形状，乐器等"]
					},
					{
						skills: "阅读",
						details: ["能够完成小学短篇阅读", "在教师的帮助下，能够根据阅读材料进行简单回答"]
					},
					{
						skills: "语法",
						details: ["掌握小学阶段基础语法 例如主系表结构，指示代词、like、can情态动词以及连词的使用等"]
					},
					{
						skills: "技能",
						details: ["能够对所学知识进行归类", "能够借助语法规则理解句子，初步具备阅读能力", "以简单句为单位，能够较为准确的表达自己的想法"]
					}
				]
			},
			{
				dengji: "中级",
				list: [{
						skills: "听力",
						details: ["不影响准确性的情况下，能够听懂正常语速下的句子含义"]
					},
					{
						skills: "词汇",
						details: ["具备768的词汇基础，例如生活用品，月份，国家城市等"]
					},
					{
						skills: "阅读",
						details: ["能够完成小学中篇阅读", "能够在文章中找出自己所需要信息", "能够根据阅读内容独立处理明显的问答"]
					},
					{
						skills: "语法",
						details: ["掌握小学阶段中阶语法，例如一般现在时，现在进行时，there be就近原则等"]
					},
					{
						skills: "技能",
						details: ["能够对所学知识进行简单分析", "能够较为自主的表达自己的观点", "能够根据同一个问题进行不同的或相反的阐述"]
					}
				]
			},
			{
				dengji: "高级",
				list: [{
						skills: "听力",
						details: ["在正常语速中能够正确理解对方的表达含义"]
					},
					{
						skills: "词汇",
						details: ["具备896个词汇基础，例如节日，频率副词，自然等"]
					},
					{
						skills: "阅读",
						details: ["能够独立完成小学较长篇幅阅读", "能够根据阅读内容替换信息", "能够根据阅读内容反向处理信息", "能够根据关键词以及其他提示简单复述阅读内容"]
					},
					{
						skills: "语法",
						details: ["掌握小学阶段高阶语法，例如一般过去时，现在完成时，比较级以及最高级，倒装句，被动句等"]
					},
					{
						skills: "技能",
						details: ["能够通过上下句语境分析判断不认识单词的词义", "能够独立表述自己的观点并给出解释，即表述具有逻辑性，批判性"]
					}
				]
			}
		],
		MeshFigure: [
			{
				dengji: "启蒙",
				Listening: [1, 6, 2, 7, 3, 8, 4, 9],
				vocabulary: [2, 7, 5, 10],
				reading: [5, 10],
				grammar: [],
				skills: [3, 8, 4, 9]
			},
			{
				dengji: "入门",
				Listening: [4, 8, 9, 10, 6],
				vocabulary: [5, 8, 9, 6, 11, 12],
				reading: [5, 13, 14, 15, 7],
				grammar: [13, 14, 15, 7],
				skills: [4, 13, 14, 15, 7]
			},
			{
				dengji: "初级",
				Listening: [6, 10, 11, 12, 8],
				vocabulary: [6, 10, 11, 12, 8],
				reading: [7, 12, 8, 13, 14, 15, 16, 17, 9],
				grammar: [7, 14, 15, 16, 17, 9],
				skills: [7, 14, 15, 16, 17, 9]
			},
			{
				dengji: "中级",
				Listening: [8, 12, 13, 14, 10],
				vocabulary: [8, 10, 18, 19, 11],
				reading: [9, 12, 13, 14, 10, 15, 16, 17, 18, 19, 11],
				grammar: [8, 10, 15, 16, 17, 18, 19, 11],
				skills: [8, 10, 17, 18, 19, 11]
			},
			{
				dengji: "高级",
				Listening: [10, 12, 13, 14, 15],
				vocabulary: [11, 16, 17, 18, 19],
				reading: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
				grammar: [11, 12, 13, 15, 16, 18, 19],
				skills: [11, 16, 18, 19, 20, 21]
			}
		],
		dengji: "启蒙",
		lessonid: 1,
		thisindex: 0,
		loadingBol: false,
		isActive: false,
		shouyeBol: true,
		weiyeBol: false,
		assessmentObj: {
			Listening: 0,
			vocabulary: 0,
			reading: 0,
			grammar: 0,
			skills: 0
		},
		titleAction: [],
		Listening_num: 0,
		vocabulary_num: 0,
		reading_num: 0,
		grammar_num: 0,
		skills_num: 0

	},
	computed: {

	},
	created: function() {
		this.changeAnswer();
		this.firstTitle();
	},
	mounted: function() {

	},
	methods: {
		isIOS: function(lessonid) {
			if(this.thisindex > 0) {
				return
			}
			this.thisindex++;
			this.loadingBol = true;
			window.location.href = "talkpal://LessonDetailsViewController?id=" + lessonid;
		},
		changeAnswer:function(){
			var answer_num = 0;
			this.title.forEach(function (item,index) {
				switch (item.answer){
					case "A":
						answer_num = 0;
						break;
					case "B":
						answer_num = 1;
						break;
					case "C":
						answer_num = 2;
						break;
					case "D":
						answer_num = 3;
						break;
				}
				if (item.options.type === "words") {
					item.answer = item.options.texts[answer_num];
				}else if(item.options.type === "img"){
					item.answer = item.options.src[answer_num];
				}
			})
		},
		actionWords: function(item, index, indexW) {
			$(".foot").eq(0).children("div").stop(true);
			item.titleBol = false;
			var answer, _this = this;
			if (item.options.type === "words") {
				answer = item.options.texts[indexW];
			}else if(item.options.type === "img"){
				answer = item.options.src[indexW];
			}
			if(answer === item.answer) {
				item.anBol = true;
			}
			if((index + 1) === _this.titleAction.length) {
				switch(_this.titleAction.length) {
					case 5:
						if (!_this.titleAction[0].anBol && !_this.titleAction[1].anBol && !_this.titleAction[2].anBol && !_this.titleAction[3].anBol && !_this.titleAction[4].anBol) {
							for(var i = 1; i < 10; i += 2) {
								_this.titleAction.push(_this.title[i]);
							}
							for(var k = 5; k < 10; k++) {
								_this.titleAction[k].titleBol = false;
								_this.titleAction[k].answer = "";
							}
							_this.dengji = "启蒙";
							_this.lessonid = 1;
							_this.assessment();
						} else if(_this.titleAction[0].anBol && _this.titleAction[1].anBol && _this.titleAction[2].anBol && _this.titleAction[3].anBol && _this.titleAction[4].anBol) {
							_this.titleAction.push(_this.title[10 + 4 - 1]);
							_this.titleAction.push(_this.title[10 + 10 - 1]);
						} else {
							for(var i = 1; i < 10; i += 2) {
								_this.titleAction.push(_this.title[i]);
							}
							_this.dengji = "启蒙";
							_this.lessonid = 1;
						}
						_this.randomTitle();
						break;
					case 7:
						_this.dengji = "入门";
						_this.lessonid = 2;
						_this.isNextTitle(5, 6);
						break;
					case 9:
						_this.dengji = "初级";
						_this.lessonid = 3;
						_this.isNextTitle(7, 8);
						break;
					case 11:
						_this.dengji = "中级";
						_this.lessonid = 4;
						_this.isNextTitle(9, 10);
						break;
					default:
						_this.assessment();
						break;
				}
			}
			if(this.titleAction[index + 1]) {
				var time_num = 15000;
				if (index + 1 >19) {
					time_num = 30000;
				}else if (index + 1 >16 && this.dengji === "高级"){
                    time_num = 25000;
				}else if (index + 1 >14 && this.dengji === "中级"){
                    time_num = 25000;
                }
				if(this.titleAction[index + 1].title[0].type === "video") {
						this.$nextTick(function () {
	                    	var video = document.getElementsByTagName("video");
                    		video[0].play();
                    		document.addEventListener("WeixinJSBridgeReady", function () {//微信
						        video[0].play();
						  	}, false);
	                        video[0].addEventListener("ended", function() {
	                            daojishi($(".foot").eq(0), index + 1,time_num);
	                            $(".forbadeclick").eq(0).hide();
	                        });
						})
                } else {
					this.$nextTick(function () {
                        daojishi($(".foot").eq(0), index + 1,time_num);
                        $(".forbadeclick").eq(0).hide();
                  })
				}

			}
		},
		isNextTitle: function(min, max) {
			var _this = this;
			if(_this.titleAction[min].anBol && _this.titleAction[max].anBol) {
				if(max + 1 === 11) {
					for(var i = 1; i < 11; i++) {
						_this.titleAction.push(_this.title[(max / 2 - 1) * 10 + i - 1]);
					}
					_this.dengji = "高级";
					_this.lessonid = 5;
					return
				}
				_this.titleAction.push(_this.title[(max / 2 - 1) * 10 + 4 - 1]);
				_this.titleAction.push(_this.title[(max / 2 - 1) * 10 + 10 - 1]);
			} else {
				for(var i = 1; i < 10; i++) {
					if(i !== 4) {
						_this.titleAction.push(_this.title[(max / 2 - 2) * 10 + i - 1]);
					}
				}
			}
			this.randomTitle();
			$('video').bind('play', function () {
			    $(this).prev().css("z-index","1");
			    $(this).removeAttr("controls");
			})
		},
		firstTitle: function() {
			for(var i = 0; i < 9; i += 2) {
				this.titleAction.push(this.title[i]);
			}
			this.randomTitle();
		},
		randomTitle:function(){
			var _this = this;
			this.titleAction.forEach(function (item) {
				if (item.options.type === "words") {
					_this.randomArr(item.options.texts);
				}else if(item.options.type === "img"){
					_this.randomArr(item.options.src);
				}
			})
		},
		readVideo: function() {
			this.shouyeBol = !this.shouyeBol;
			var video = document.getElementsByTagName("video");
			if (this.titleAction[0].title[0].type === "video"){
                video[0].play();
                video[0].addEventListener("ended", function() {
                    daojishi($(".foot").eq(0), 0,15000);
                    $(".forbadeclick").eq(0).hide();
                });
			}else{
                daojishi($(".foot").eq(0), 0,15000);
                $(".forbadeclick").eq(0).hide();
			}
		},
		assessment: function() {
			var _this = this;
			this.MeshFigure.forEach(function(item, index) {
				if(item.dengji === _this.dengji) {
					for(var key in item) {
						if(typeof(item[key]) === "object") {
							for(var i = 0; i < item[key].length; i++) {
								if(item[key].length > 0) {
									if(_this.titleAction[item[key][i] - 1].anBol) {
										_this.assessmentObj[key]++;
										//										console.log(_this.titleAction[item[key][i]]);
										//										console.log(_this.titleAction);
									}
								}
							}
							_this.assessmentObj[key] = _this.assessmentObj[key] * 5 / item[key].length;
							if(!_this.assessmentObj[key]) {
								_this.assessmentObj[key] = 0;
							}
						}
					}
				}
			})
			if (this.dengji === "启蒙" || this.dengji === "入门" || this.dengji === "初级") {
				for(var k in this.assessmentObj){
					this.assessmentObj[k] = this.assessmentObj[k] * 0.6;
				}
			} else if (this.dengji === "中级") {
				for(var k in this.assessmentObj){
					this.assessmentObj[k] = this.assessmentObj[k] * 0.8;
				}
			}
			this.myChart(this.assessmentObj.Listening,this.assessmentObj.vocabulary,this.assessmentObj.reading,this.assessmentObj.grammar,this.assessmentObj.skills);
		},
		//数组内部对象随机排列调用
		randomArr: function(arr) {
			arr.sort(function() {
				return(0.5 - Math.random());
			});
		},
		myChart: function(Listening_num, vocabulary_num, reading_num, grammar_num, skills_num) {
			var myChart = echarts.init(document.getElementById('cnd'));
			var option = {
				radar: [{
					indicator: [{
						text: '语法',
						max: 5,
						min: 0
					}, {
						text: '技能',
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
			option.series[0].data[0].value = [grammar_num, skills_num, Listening_num, reading_num, vocabulary_num];
			myChart.setOption(option);
			if (document.body.clientWidth === 768 || document.body.clientWidth === 1024) {
				$("#cnd").css({"width":"360px","height":"360px"});
				$("#cnd").children("div").css({"width":"360px","height":"360px"});
				$("#cnd").children("div").children("canvas").css({"width":"360px","height":"360px"});
			}
			else if(document.body.clientWidth < 414 || document.body.clientWidth === 414) {
				$("#cnd").css({"width":"200px","height":"200px"});
				$("#cnd").children("div").css({"width":"200px","height":"200px"});
				$("#cnd").children("div").children("canvas").css({"width":"200px","height":"200px"});
			}
			this.weiyeBol = true;
		}
	}
});

function daojishi(obj, index, num) {
	var index = index;
	//	console.log(index);
	obj.children("div").animate({
		width: "0%",
		backgroundPositionX: "-2000px"
	}, num, function() {
		app.actionWords(app.titleAction[index], index, null);
	});
}
app.$watch("titleAction",function () {
    $('video').bind('play', function () {
        $(this).prev().css("z-index","1");
        $(this).removeAttr("controls");
    })
});
app.$watch("weiyeBol",function () {
    var pingjia = document.getElementById("pingjia");
    $('#pingjia').animate({"scrollTop":pingjia.scrollHeight},5000);
});
$('video').bind('play', function () {
    $(this).prev().css("z-index","1");
    $(this).removeAttr("controls");
});
