var app = new Vue({
	el:"#app",
	data:{
		leaderboard:[
			{name:"weibooooo",score:11232,picture:"",ranking:8},
			{name:"Choice",score:32145,picture:"",ranking:1},
			{name:"weiboo",score:25222,picture:"",ranking:9},
			{name:"wibooooo",score:11232,picture:"",ranking:10},
			{name:"weiboooo",score:2542,picture:"",ranking:4},
			{name:"lilith",score:22145,picture:"",ranking:2},
			{name:"weibooo",score:11232,picture:"",ranking:6},
			{name:"2013qq",score:12145,picture:"",ranking:3},
			{name:"weibooooo",score:25452,picture:"",ranking:5},
			{name:"weiboo",score:88783,picture:"",ranking:7}
		],
		userIdData:{
			name:"CHIASD",score:32145,picture:"",ranking:134
		}
	},
	computed: {

	},
	mounted: function() {
		this.lb_sort(this.leaderboard);
	},
	methods:{
		lb_sort: function(array){ 
			return array.sort(function(a, b){
				return b.score - a.score;
			});
		}
	}
})