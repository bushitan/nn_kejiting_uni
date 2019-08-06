

export default {

	data() {
		return {			
			article:{
				title:"比赛",
				summary:"比赛规则额",
				date:"2019.7.2 -- 2019.7.8",
			},
			
			title: 'media-list',
			showImg: true,
			list: [{
					title: "幸福",
					content: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？",
					img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90"
				},
				{
					title: "木屋",
					content: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖。",
					img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90"
				},
				{
					title: "CBD",
					content: "烤炉模式的城，到黄昏，如同打翻的调色盘一般。",
					img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90"
				}
			],
			
			showSwiper: false,
			imgUrls: [
				'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
				'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg'
			]
			
		};
	},

	onLoad() {
	},
	methods: {

	},
	onNavigationBarSearchInputClicked(e) {
		console.log('事件执行了')
		uni.navigateTo({
			url: '/pages/detail/detail'
		});
	},
	/**
	 *  点击导航栏 buttons 时触发
	 */
	onNavigationBarButtonTap() {
		uni.showModal({
			title: '提示',
			content: '用户点击了功能按钮，这里仅做展示。',
			success: res => {
				if (res.confirm) {
					console.log('用户点击了确定');
				}
			}
		});
	}
}