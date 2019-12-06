<template>
	<view class="container">
		<!-- <image src="/static/cover/bg-poster-xs-2.png" mode="widthFix"></image> -->
		科技大数据
	</view>
</template>

<script>

export default {
	data() {
		return {
			isShare:false,
			shareUrl:'',
		};
	},
	onLoad(option) {
		// this.onInit()
		var that = this
		uni.showLoading({
			title: '登录检测中',
		});
		
		this.checkShare(option) //检测是否分享的
		setTimeout(function(){
			uni.hideLoading()
			that.checkLoginStatus(option)
		},2000)
		
	},
	methods: {
		onInit(){
			
		
		},
		checkShare(options){
					// 若是分享
			if (options.hasOwnProperty('is_share'))
			{
				 this.setData({
					isShare:true,
					shareUrl:"/pages/index/index?is_share="+ options.is_share +"&url=" + options.url + "&title=" + options.title+ "&cover=" + options.cover,
				})
				// uni.navigateTo({
				// 	url:"/pages/article/article?is_share=1&url=" + options.url + "&title=" + options.title+ "&cover=" + options.cover
				// })
			}
		},
		
		/**
		 * @method 检测登陆状态
		 * @return
		 * 		true 已登录，跳转x_detail
		 * 		fasle 保持现有页面
		 */
		checkLoginStatus(){							
			var username = uni.getStorageSync(this.$db.KEY_USERNAME) || ""
			var password = uni.getStorageSync(this.$db.KEY_PASSWORD) || ""				
			this.$db.login({
				accout:username,
				password:password,
			}).then(res=>{
				console.log(res)
				if(res.code == 0){ //登录成功	
					var url = "/pages/index/index"		
					if(this.$data.isShare )
						url = this.$data.shareUrl
					uni.redirectTo({
						url:url			
					})
				}else{//未登录登录
					uni.redirectTo({
						url:"/pages/x_login/x_login"						
					})					
				}
			}).catch(res=>{
				uni.redirectTo({
					url:"/pages/x_login/x_login"						
				})					
			})
		},
	},
};
</script>

<style>
	page{
		background-color: #061936;
	}
	.container{
		/* padding: 15px; */
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50vh;
		font-size: 20pt;
		color: white;
		font-weight: bold;
		letter-spacing:10px
	}
	.box{
		background-color: #fff;
		padding: 15px;
	}
</style>
