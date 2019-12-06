

export default {

	data() {
		return {			
			article:{
				title:"比赛",
				summary:"比赛规则额",
				date:"2019.7.2 -- 2019.7.8",
			},
			title:"",
			url:"",
			cover:"",
			webviewStyles: {
				progress: {
					color: '#FF3333'
				}
			}
		};
	},

	
	onShareAppMessage(res) {
		console.log(this.$data.url ,this.$data.title )
		
		var url = encodeURIComponent(this.$data.url)
		var cover = encodeURIComponent(this.$data.cover)
	    return {
	      title: this.$data.title,
		  // imageUrl:"/static/cover/share.jpg",
		  imageUrl:this.$data.cover,
	      path: '/pages/route/route?is_share=1&url=' +url + "&title=" + this.$data.title + "&cover=" + cover
	    }
	},
	
	onLoad(options) {
		// debugger 
		console.log(options)
		
		// this.data.url = options.url
		// this.$set(this.$data,url,options.url)
		var url = decodeURIComponent(options.url)
		var cover = decodeURIComponent(options.cover)
		this.setData({
			url:url,
			title: options.title,
			cover:cover
		})
		
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