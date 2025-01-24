// JavaScript Document


var QHSJ =new Vue({
	el:"#QHSJ",
	data:{
		windowWidth: document.documentElement.clientWidth,
		windowHeight: document.documentElement.clientHeight,
		ChooseLine:[
			{page:"哇哈111",img:"1"},
			{page:"哇哈222",img:"2"},
			{page:"哇哈336",img:"3"},
			{page:"哇哈44",img:"4"},
			{page:"哇哈55",img:"5"},
			{page:"哇哈666",img:"6"},
			{page:"哇哈777",img:"7"},
			{page:"哇哈888",img:"8"},
			{page:"哇哈999",img:"9"},
			{page:"哇哈1010",img:"10"},
		],
		
		Choosing:[{}],
		pageone:"分析世界",
		pagetwo:"我爱福州八中",
		pagethree:"love",
		pagefour:"444555世界"
	},
	
	mounted(){
			
			
		},
	
	methods:{
		choose:function(item){
			console.log(item)
			var cesh = item.page
			console.log(cesh)
			
			
			
//			添加数组
			var newchooselist = this.Choosing.concat(cesh)
			this.Choosing= newchooselist
//			console.log(this.Choosing)
			},
		
		
		handleScreenshot(){
			drawToPic(this.$refs.screenshotDOM)
		}
		
		
		
		
		},
	
})
