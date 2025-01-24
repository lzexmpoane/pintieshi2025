// JavaScript Document

var question =new Vue({
	el:"#question",
	data:{
		QONE:[
			{choose:'A',xuanxiang:'A选项'},
			{choose:'b',xuanxiang:'b选项'},
			{choose:'c',xuanxiang:'c选项'},
			{choose:'d',xuanxiang:'d选项'},
		],
		QTWO:[
			{choose:'A',xuanxiang:'A选项2'},
			{choose:'b',xuanxiang:'b选项2'},
			{choose:'c',xuanxiang:'c选项2'},
			{choose:'d',xuanxiang:'d选项2'},
		],
		QTHREE:[
			{choose:'A',xuanxiang:'A选项3'},
			{choose:'b',xuanxiang:'b选项3'},
			{choose:'c',xuanxiang:'c选项3'},
			{choose:'d',xuanxiang:'d选项3'},
		],
		
		
	},
	
	
	
	methods:{
		next:function(){
			this.$refs.q1.style.animation = 'move 5s infinite'
			console.log(123)
			}
		
		
		
		
		
		
		
		},
	
})


