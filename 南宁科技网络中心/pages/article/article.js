

export default {

	data() {
		return {			
			article:{
				title:"比赛",
				summary:"比赛规则额",
				date:"2019.7.2 -- 2019.7.8",
			},
			url:"",
		};
	},

	onLoad(options) {
		console.log(options)
		
		// this.data.url = options.url
		// this.$set(this.$data,url,options.url)
		this.setData({url:options.url})
		
		uni.setNavigationBarTitle({
			title: options.title
		});
	},
	methods: {
		setData:function(obj){  
			let that = this;  
			let keys = [];  
			let val,data;  
			Object.keys(obj).forEach(function(key){  
				 keys = key.split('.');  
				 val = obj[key];  
				 data = that.$data;  
				 keys.forEach(function(key2,index){  
					 if(index+1 == keys.length){  
						 that.$set(data,key2,val);  
					 }else{  
						 if(!data[key2]){  
							that.$set(data,key2,{});  
						 }  
					 }  
					 data = data[key2];  
				 })  
			});  
		}  
	},
}