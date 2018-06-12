var app = new Vue({
    el: '#app',
    data: {
        //题库json数据
        questionBank: {
            rumen: [{
                topic: ['eleven', '11', 'twelve', '12', 'thirteen', '13', 'fifteen', '15', 'sixteen']
            },
                {
                    topic: ['sleep', '睡觉', 'walk', '行走', 'drive', '开车', 'paint', '画画', 'cook']
                },
                {
                    topic: ['sweep the floor', '扫地', 'wipe the desk', '擦桌子', 'erase the board', '擦黑板', 'clean the window', '擦窗户', '收拾床铺']
                },
                {
                    topic: ['room', '房间', 'yard', '院子', 'living room', '客厅', 'kitchen', '厨房', 'dining room']
                },
                {
                    topic: ['bedroom', '卧室', 'bathroom', '浴室', 'basement', '地下室', 'garage', '车库', 'garden']
                },
                {
                    topic: ['watermelon', 'img/images1/6/r-a.jpg', 'pineapple', 'img/images1/6/r-b.jpg', 'coconut', 'img/images1/6/r-c.jpg', 'plum', 'img/images1/6/r-d.jpg', 'img/images1/6/r-e.jpg']
                },
                {
                    topic: ['steak', 'img/images1/7/r-a.jpg', 'pasta', 'img/images1/7/r-b.jpg', 'salad', 'img/images1/7/r-c.jpg', 'pizza', 'img/images1/7/r-d.jpg', 'img/images1/7/q-e.jpg']
                },
                {
                    topic: ['pea', 'img/images1/8/r-a.jpg', 'cucumber', 'img/images1/8/r-b-1.png', 'onion', 'img/images1/8/r-c.png', 'mushroom', 'img/images1/8/r-d-1.png', 'img/images1/8/q-e.jpg']
                },
                {
                    topic: ['goat', 'img/images1/9/r-a.jpg', 'donkey', 'img/images1/9/r-b.jpg', 'piglet', 'img/images1/9/r-c-1.jpg', 'cattle', 'img/images1/9/r-d-1.jpg', 'img/images1/9/r-e-1.jpg']
                },
                {
                    topic: ['dog', 'img/images1/10/r-a.jpg', 'cat', 'img/images1/10/r-b.jpg', 'golden fish', 'img/images1/10/r-c.jpg', 'bird', 'img/images1/10/r-d.jpg', 'img/images1/10/q-e.jpg']
                }
            ],
            qimeng: [{
                topic: ['img/images2/1/r13.1.jpg', 'img/images2/1/r13.3.jpg', 'img/images2/1/r13.2.jpg', 'img/images2/1/r13.4.jpg', 'img/images2/1/r13.5.jpg', 'img/images2/1/r13.7.jpg', 'img/images2/1/r13.6.jpg', 'img/images2/1/r13.8.jpg', 'img/images2/1/r13.9.jpg']
            },
                {
                    topic: ['img/images2/2/r1.jpg', 'img/images2/2/r2.jpg', 'img/images2/2/r3.jpg', 'img/images2/2/r4.jpg', 'img/images2/2/r5.jpg', 'img/images2/2/r6.jpg', 'img/images2/2/r7.jpg', 'img/images2/2/r8.jpg', 'img/images2/2/r9.jpg']
                },
                {
                    topic: ['go', 'img/images2/3/r2-go.jpg', 'hey', 'img/images2/3/r2-hey.jpg', 'jay', 'img/images2/3/r2-jay.jpg', 'look', 'img/images2/3/r2-look.jpg', 'f']
                },
                {
                    topic: ['img/images2/4/r1.jpg', 'img/images2/4/r2.jpg', 'img/images2/4/r-m.jpg', 'img/images2/4/r-m2.jpg', 'img/images2/4/r-q.jpg', 'img/images2/4/r-q2.jpg', 'img/images2/4/rt1.jpg', 'img/images2/4/rt2.jpg', 'img/images2/4/rn.jpg']
                },
                {
                    topic: ['img/images2/5/r-qe.jpg', 'img/images2/5/r-qe-2.jpg', 'img/images2/5/r-qf.jpg', 'img/images2/5/r-qf-2.jpg', 'img/images2/5/r-qg.jpg', 'img/images2/5/r-qg-2.jpg', 'img/images2/5/r-qh.jpg', 'img/images2/5/r-qh-1.jpg', 'img/images2/5/r-qd-1.jpg']
                },
                {
                    topic: ['img/images2/6/r1.jpg', 'img/images2/6/r4.jpg', 'img/images2/6/r2.jpg', 'img/images2/6/r3.jpg', 'img/images2/6/r5.jpg', 'img/images2/6/r6.jpg', 'img/images2/6/r7.jpg', 'img/images2/6/r8.jpg', 'img/images2/6/r9.jpg']
                },
                {
                    topic: ['img/images2/7/r1.jpg', 'img/images2/7/r3.jpg', 'img/images2/7/r2.jpg', 'img/images2/7/r4.jpg', 'img/images2/7/r5.jpg', 'img/images2/7/r6.jpg', 'img/images2/7/r7.jpg', 'img/images2/7/r8.jpg', 'img/images2/7/r9.jpg']
                }
            ],
            chuji: [
                {
                topic: ['teacher', '老师', 'classmate', '同学', 'deskmate', '同桌', 'gatekeeper', '门卫', '医生']
                },
                {
                    topic: ['cook', '厨师', 'waiter', '服务员', 'police officer', '警察', 'housewife', '家庭主妇', 'teacher']
                },
                {
                    topic: ['seesaw', '跷跷板', 'monkey bars', '单杆', 'swing', '秋千', 'slide', '滑梯', 'playground']
                },
                {
                    topic: ['playground', '游乐场', 'snack bar', '小卖部', 'pond', '池塘', 'garden', '花园', 'WC']
                },
                {
                    topic: ['in front of', '在...前面', 'behind', '在...后面', 'between', '在...中间', 'in', '在...里面', 'on']
                },
                {
                    topic: ['potato chips', '薯片', 'chilli fish', '辣鱼条', 'lollipop', '棒棒糖', 'raisins', '葡萄干', 'chocolate']
                },
                {
                    topic: ['salty', '咸的', 'sweet', '甜的', 'spicy', '辣的', 'sour', '酸的', '苦的']
                },
                {
                    topic: ['egg', '鸡蛋', 'flour', '面粉', 'butter', '黄油', 'sugar', '砂糖', 'milk']
                },
                {
                    topic: ['towel', '毛巾', 'mirror', '镜子', 'toothbrush', '牙刷', 'toothpaste', '牙膏', 'bathroom']
                },
                {
                    topic: ['taxi', 'img/images3/r-taxi.jpg', 'train', 'img/images3/r-train.jpg', 'bike', 'img/images3/r-bike.jpg', 'boat', 'img/images3/r-boat.jpg', 'img/images3/r-car.jpg']
                }
            ],
            zhongji: [{
                topic: ['plastic', '塑料', 'metal', '金属', 'wood', '木材', 'leather', '皮革', '橡皮']
            },
                {
                    topic: ['tie my shoes', '系鞋带', 'sleep alone', '独自睡觉', 'count to 10', '数到10', 'dress myself', '自己穿衣服', 'do some housework']
                },
                {
                    topic: ['took', 'take', 'saw', 'see', 'spent', 'spend', 'did', 'do', 'had']
                },
                {
                    topic: ['hiking shoes', '登山鞋', 'flashlight', '手电筒', 'compass', '指南针', 'go hiking', '徒步', 'tent']
                },
                {
                    topic: ['thank you', 'receiving something', 'sorry', 'doing something wrong', 'please', 'asking for something', 'hello', 'greeting someone', 'excuse me']
                },
                {
                    topic: ['thirsty', '口渴的', 'tired', '疲劳的', 'hungry', '饥饿的', 'sick', '生病的', 'angry']
                },
                {
                    topic: ['locker', '更衣室', 'staffroom', '教研室', 'ground floor', '底层', 'toilet', '洗手间', 'gym']
                },
                {
                    topic: ['octopus', '章鱼', 'whale', '鲸鱼', 'sea lion', '海狮', 'seahorse', '海马', 'hippo']
                },
                {
                    topic: ['huge', 'whales', 'dangerous', 'sharks', 'cute', 'penguins', 'colorful', 'corals(珊瑚)', 'smooth']
                },
                {
                    topic: ['starfish', '海星', 'puffer fish', '河豚', 'clam', '蛤蜊;蚌', 'lobster', '龙虾', '螃蟹']
                }
            ],
            gaoji: [{
                topic: ['entertaining', '有趣的', 'Broadway', '百老汇大街', 'statue', '雕像', 'entire', '整个', 'theater']
            },
                {
                    topic: ['spaghetti', '意大利面', 'hot dog', '热狗', 'burrito', '墨西哥玉米卷饼', 'curry', '咖喱', 'hamburger']
                },
                {
                    topic: ['sushi', '寿司', 'gravy', '肉汁', 'raw', '生的', 'poutine', '肉质乳酪薯条', 'burrito']
                },
                {
                    topic: ['animation', '动画片', 'comedy', '喜剧片', 'romance', '爱情片', 'fantasy', '奇幻片', 'action movie']
                },
                {
                    topic: ['actor', '男演员', 'actress', '女演员', 'director', '导演', 'extra', '临时演员', '音乐家']
                },
                {
                    topic: ['scene', '场景', 'instrument', '乐器', 'drama club', '戏剧社', 'art club', '美术社', 'cooking club']
                },
                {
                    topic: ['mammal', '哺乳动物', 'reptile', '爬行动物', 'fish', '鱼类', 'bird', '鸟类', 'prey']
                },
                {
                    topic: ['village', '乡村', 'carriage', '马车', 'mansion', '别墅', 'apartment', '公寓', 'house']
                },
                {
                    topic: ['research', '调查', 'Internet', '互联网', 'channel', '频道', 'television', '电视', 'computer']
                },
                {
                    topic: ['outdoor', '户外', 'cabin', '小木屋', 'camping', '野营', 'barbeque', '烧烤', 'campfire']
                }
            ]
        },
        //当前题目数组
        topic: [
            {
            type: 'text',
            group: 1,
            classItem: false,
            display_Bol: 'table',
            textItem: 'eleven',
            img: ''
        },
            {
                type: 'text',
                group: 1,
                classItem: false,
                display_Bol: 'table',
                textItem: '11',
                img: ''
            },
            {
                type: 'text',
                group: 2,
                classItem: false,
                display_Bol: 'table',
                textItem: 'twelve',
                img: ''
            },
            {
                type: 'text',
                group: 2,
                classItem: false,
                display_Bol: 'table',
                textItem: '12',
                img: ''
            },
            {
                type: 'text',
                group: 3,
                classItem: false,
                display_Bol: 'table',
                textItem: 'thirteen',
                img: ''
            },
            {
                type: 'text',
                group: 3,
                classItem: false,
                display_Bol: 'table',
                textItem: '13',
                img: ''
            },
            {
                type: 'text',
                group: 4,
                classItem: false,
                display_Bol: 'table',
                textItem: 'fifteen',
                img: ''
            },
            {
                type: 'text',
                group: 4,
                classItem: false,
                display_Bol: 'table',
                textItem: '15',
                img: ''
            },
            {
                type: 'text',
                group: 5,
                classItem: false,
                display_Bol: 'table',
                textItem: 'sixteen',
                img: ''
            }
        ],
        topicList: [], //当前类型题组数组(入门、启蒙、初中高级或者无尽)
        n: 0, //控制消除项
        index: 0, //当前题目下标
        score: 0, //得分
        currentMode: "", //闯关类型
        shouye: true, //首页页面控制显示
        gameBol: false, //游戏页面控制显示
        gameOver: false, //结果页面控制显示
        helpBol: false, //帮助块控制显示(游戏规则)
        addScore: false,
        successBol: false, //闯关成功与否控制显示
        gifBol: false,
        time: 120000, //倒计时时间
        loading_time: 3
    },
    computed: {

    },
    mounted: function() {
        this.randomArr(this.topic);
    },
    methods: {
        // 游戏规则
        help: function(bol) {
            this.helpBol = !bol;
        },
        eliminate: function(item, parent) {
            var _this = this;
            this.n++;
            $(".click")[0].play();
            if(item.classItem) {
                item.classItem = !item.classItem;
                this.n -= 2;
                return
            }
            if(this.n % 2 === 1) {
                item.classItem = !item.classItem;
            } else if(this.n % 2 === 0) {
                for(var i = 0, len = parent.length; i < len; i++) {
                    var _item = parent[i];
                    if(!item.classItem && _item.classItem) {
                        item.classItem = !item.classItem;
                        if(item.group === _item.group) {
                            item.display_Bol = 'none';
                            _item.display_Bol = 'none';
                            _item.classItem = !_item.classItem;
                            item.classItem = !item.classItem;
                            _this.score += 10;
                            _this.addScore = true;
                            _this.addScoreAnimation();
                        } else {
                            _item.classItem = !_item.classItem;
                            item.classItem = !item.classItem;
                            this.n -= 2;
                            return
                        }
                    }
                }
            }
            if(this.n === 8) {
                this.nextTopic(this.index, this.topicList);
                this.n = 0;
            }
        },
        //开始游戏 num是用户选中模式代号
        startGame: function(num) {
            this.shouye = false;
            this.gameOver = false;
            this.readGo();
            switch(num) {
                case 0:
                    this.currentMode = '简单';
                    this.time = 120 * 1000;
                    this.topicList = this.questionBank.rumen;
                    for (var i = 0; i < this.questionBank.qimeng.length;i++){
                        this.topicList.push(this.questionBank.qimeng[i]);
                    }
                    this.randomArr(this.topicList);
                    this.topicList.splice(1,this.topicList.length-10);
                    break;
                case 1:
                    this.currentMode = '普通';
                    this.time = 120 * 1000;
                    this.topicList = this.questionBank.chuji;
                    break;
                case 2:
                    this.currentMode = '困难';
                    this.time = 120 * 1000;
                    this.topicList = this.questionBank.zhongji;
                    for (var i = 0; i < this.questionBank.gaoji.length;i++){
                        this.topicList.push(this.questionBank.gaoji[i]);
                    }
                    this.randomArr(this.topicList);
                    this.topicList.splice(1,this.topicList.length-10);
                    break;
                case 3:
                    this.currentMode = '无尽';
                    this.time = 300 * 1000;
                    for(var i = 0; i < 10; i++) {
                        this.topicList.push(this.questionBank.qimeng[i]);
                        this.topicList.push(this.questionBank.rumen[i]);
                        this.topicList.push(this.questionBank.chuji[i]);
                        this.topicList.push(this.questionBank.zhongji[i]);
                        this.topicList.push(this.questionBank.gaoji[i]);
                    }
                    break;
            }
            this.randomArr(this.topicList);
            this.initialization(this.topicList[0].topic);
        },
        //客户点击题目类型后的首道题目的遍历
        initialization: function(topic) {
            this.topic.sort(function(a, b) {
                return a.group - b.group
            });
            for(var i = 0, len = topic.length; i < len; i++) {
                if(topic[i].indexOf('img/')) {
                    this.topic[i].type = 'text';
                    this.topic[i].textItem = topic[i];
                } else {
                    this.topic[i].type = 'img';
                    this.topic[i].img = topic[i];
                }
                this.topic[i].display_Bol = 'table';
                this.topic[i].classItem = false;
            }
            this.randomArr(this.topic);
        },
        readGo: function() {
            var _this = this;
            this.loading_time = 3;
            var timer = setInterval(function() {
                _this.loading_time--;
                if(_this.loading_time === 0) {
                    _this.loading_time = "Go!";
                    clearTimeout(timer);
                    setTimeout(function() {
                        _this.loading_time = 0;
						$(".InTheGame")[0].play();
                        _this.dongHua();
                    }, 500)
                }
            }, 1000)
        },
        //倒计时动画
        dongHua: function() {
            var time = this.time;
            var _this = this;
            setTimeout(function() {
                $(".myFirst").eq(0).animate({
                    width: "0%",
                    transform: "translateX(-5%)"
                }, time, 'linear', function() {
                    alert("游戏结束");
                    for(var j = 0; j < _this.topic.length; j++) {
                        _this.topic[j].textItem = '';
                        _this.topic[j].img = '';
                        _this.topic[j].display_Bol = 'none';
                        _this.topic[j].classItem = false;
                        $(".myFirst").eq(0).stop(true);
                    }
                    _this.index = 0;
                    _this.gameOver = true;
                    _this.successBol = false;
                    _this.successOrError();
                })
            }, 1)
        },
        addScoreAnimation: function() {
            var _this = this;
            this.addScore = true;
            setTimeout(function() {
                $("#addScore").animate({
                    opacity: '0',
                    top: '0'
                }, 500, function() {
                    _this.addScore = false;
                    $("#addScore").css("opacity", "1");
                })
            }, 1)
        },
        //下一题
        nextTopic: function(index, parent) {
            var _this = this;
            if(!parent[index + 1]) {
                for(var j = 0; j < _this.topic.length; j++) {
                    _this.topic[j].textItem = '';
                    _this.topic[j].img = '';
                    _this.topic[j].display_Bol = 'none';
                    _this.topic[j].classItem = false;
                    $(".myFirst").eq(0).stop(true);
                }
                _this.index = 0;
                _this.gameOver = true;
                _this.successBol = true;
                _this.successOrError();
                // alert("通关成功");
                return
            }
            this.topic.sort(function(a, b) {
                return a.group - b.group
            });
            for(var i = 0, len = parent[index + 1].topic.length; i < len; i++) {
                if(parent[index + 1].topic[i].indexOf('img/')) {
                    this.topic[i].type = 'text';
                    this.topic[i].textItem = parent[index + 1].topic[i];
                } else {
                    this.topic[i].type = 'img';
                    this.topic[i].img = parent[index + 1].topic[i];
                }
                this.topic[i].display_Bol = 'table';
                this.topic[i].classItem = false;
            }
            this.randomArr(this.topic);
            this.index++;
        },
        successOrError: function() {
            var score = this.score,
                currentMode = this.currentMode;
            // if(currentMode === '无尽' && score > 0 || currentMode !== '无尽' && score >= 240) {
            //     this.gifBol = true;
            //     this.successBol = true;
            //     setTimeout(function() {
            //         $(".succeed")[0].play();
            //     }, 1)
            // } else if(currentMode === '无尽' && score === 0 || currentMode !== '无尽' && score < 240) {
            //     this.gifBol = true;
            //     this.successBol = false;
            //     setTimeout(function() {
            //         $(".failure")[0].play();
            //     }, 1)
            // }
            if(currentMode === '无尽'){
                this.gifBol = false;
            }else{
                this.gifBol = true;
                if(this.successBol){
                    setTimeout(function() {
                        $(".succeed")[0].play();
                    }, 1)
                }else{
                    setTimeout(function() {
                        $(".failure")[0].play();
                    }, 1)
                }
            }
        },
        //返回首页事件
        returnOut: function() {
            this.shouye = true;
            this.gameOver = false;
            this.currentMode = '';
            this.index = 0;
            this.score = 0;
            this.topicList = [];
            this.loading_time = 3;
            $(".myFirst").eq(0).stop(true);
            setTimeout(function() {
                $(".gameRead")[0].play();
            }, 500)
        },
        //数组内部对象随机排列调用
        randomArr: function(arr) {
            arr.sort(function() {
                return(0.5 - Math.random());
            });
        },
        getScore: function() {
            $.ajax({
                type: "GET", // 用POST方式传输
                dataType: "JSON", // 数据格式:JSON
                // url: "https://api.talkpal.com/users/" + this.user_id, // 目标地址
                data: {

                },
                success: function(data) {
                    console.log(data);
                    // _this.user_name = data.data.username;
                    // _this.user_url = data.data.profile_image_url;
                },
                error: function(e, b, c) {
                    console.log(e, b, c);
                }
            })
        }
    }
});