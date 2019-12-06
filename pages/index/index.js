


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
			
			showList:[],
			list: [
				
			  {
				"id": 1,
				"report_title": "R&D情报",
				"download_url": "https://bigdata.kejicloud.cn/gxsti/20190804/20190804.html",
				"report_cate": "科技项目",
				"create_at": "2019-07-11 12:00:00",
				"tag": ["全国", "科技预算"],
				"hot": 1,
				"src": "/static/self/10.jpg"
			  },
			   {
				"id": 2,
				"report_title": "2019年已经下达计划项目情况统计",
				"download_url": "https://bigdata.kejicloud.cn/gxsti/20190730/index.html",
				"report_cate": "科技项目",
				"create_at": "2019-07-11 12:00:00",
				"tag": ["科技项目", "立项经费"],
				"hot": 1,
				// "src": "https://bigdata.kejicloud.cn/gxsti/20190730/20190730.png"
				"src": "/static/self/11.jpg"
			  },
			  {
				"id": 3,
				"report_title": "项目合同签订情况统计报告",
				"download_url": "https://bigdata.kejicloud.cn/gxsti/20190803/20190803.html",
				"report_cate": "科技项目",
				"create_at": "2019-08-03 12:00:00",
				"tag": ["项目", "合同签订", "报告"],
				"hot": 0,
				// "src": "https://bigdata.kejicloud.cn/gxsti/20190803/image002.gif"
				"src": "/static/self/12.jpg"
			  },
			  {
				"id": 4,
				"report_title": "项目结题（验收）情况统计报告",
				"download_url": "https://bigdata.kejicloud.cn/gxsti/20190731/20190731.html",
				"report_cate": "科技项目",
				"create_at": "2019-08-03 12:00:00",
				"tag": ["项目", "验收","结题"],
				"hot": 0,
				// "src": "https://bigdata.kejicloud.cn/gxsti/20190731/thumb.png"
				"src": "/static/self/13.jpg"
			  }, {
				"id": 4,
				"report_title": "科技厅处长（单位负责人）在岗信息",
				"download_url": "https://bigdata.kejicloud.cn/gxsti/20190807/20190807.html",
				"report_cate": "科技项目",
				"create_at": "2019-08-03 12:00:00",
				"tag": ["人员", "在岗", "考勤"],
				"hot": 0,
				// "src": "https://bigdata.kejicloud.cn/gxsti/20190807/20190807.png"
				"src": "/static/self/14.jpg"
			  }
							
				
				
				
				
				
				
				
				// {
				//   "id": 1,
				//   "report_title": "2019年全国各省，自治区，直辖市科技厅预算分析简报",
				//   "download_url": "https://bigdata.kejicloud.cn/gxsti/20190804/20190804.html",
				//   "report_cate": "科技项目",
				//   "create_at": "2019-07-11 12:00:00",
				//   "tag": ["全国", "科技预算"],
				//   "hot": 1,
				//   "src": "/static/self/1.jpg",			
				//   // "img": "https://bigdata.kejicloud.cn/gxsti/20190804/data/img0.png"
				// },
				// {
				//   "id": 2,
				//   "report_title": "2019年已经下达计划项目经费统计",
				//   "download_url": "https://bigdata.kejicloud.cn/gxsti/20190730/index.html",
				//   "report_cate": "科技项目",
				//   "create_at": "2019-07-11 12:00:00",
				//   "tag": ["科技项目", "立项经费"],
				//   "hot": 1,
				//   "src": "https://bigdata.kejicloud.cn/gxsti/20190730/data/img6.png"
				// },
				// {
				//   "id": 3,
				//   "report_title": "项目合同签订情况统计报告",
				//   "download_url": "https://bigdata.kejicloud.cn/gxsti/20190803/20190803.html",
				//   "report_cate": "科技项目",
				//   "create_at": "2019-08-03 12:00:00",
				//   "tag": ["项目", "合同签订", "报告"],
				//   "hot": 0,
				//   "src": "https://bigdata.kejicloud.cn/gxsti/20190803/image002.gif"
				// },
				// {
				//   "id": 4,
				//   "report_title": "项目结题（验收）情况统计报告",
				//   "download_url": "https://bigdata.kejicloud.cn/gxsti/20190731/20190731.html",
				//   "report_cate": "科技项目",
				//   "create_at": "2019-08-03 12:00:00",
				//   "tag": ["项目", "验收","结题"],
				//   "hot": 0,
				//   "src": "https://bigdata.kejicloud.cn/gxsti/20190731/thumb.png"
				// }, {
				//   "id": 5,
				//   "report_title": "科技厅主要人员在岗情况",
				//   "download_url": "https://bigdata.kejicloud.cn/gxsti/20190807/20190807.html",
				//   "report_cate": "科技项目",
				//   "create_at": "2019-08-03 12:00:00",
				//   "tag": ["人员", "在岗", "考勤"],
				//   "hot": 0,
				//   "src": "https://bigdata.kejicloud.cn/gxsti/20190807/20190807.png"
				// }
				
				
				// {
				// 	title: "2019年已经下达计划项目经费统计",
				// 	content: "项目的研究成果展示？",
				// 	img: "/static/self/1.jpg",					
				// 	download_url: "https://bigdata.kejicloud.cn/gxsti/20190730/index.html",
				// },
				// {
				// 	title: "2019年度广西新型研发机构申报工作的通知",
				// 	content: "请各单位尽快申报",
				// 	download_url: "https://bigdata.kejicloud.cn/gxsti/20190804/20190804.html",
				// 	img: "/static/self/2.jpg"
				// },
				// {
				// 	title: '2019年广西"十佳科普"获奖名单公布',
				// 	content: "获奖名单公示报告",
				// 	download_url: "https://bigdata.kejicloud.cn/gxsti/20190803/20190803.html",
				// 	img: "/static/self/3.jpg"
				// }
			],
			
			tabID:0,
			tabList:[
				{name:"全部",tab_id:0},
				{name:"项目",tab_id:1},
				{name:"全国",tab_id:2},
				{name:"科技",tab_id:3},
				{name:"考勤",tab_id:4},
			],
			
			showSwiper: false,
			imgUrls: [
				'/static/self/bg-poster-xs-2.png',
				// 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
				// 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg'
			],
			
			// footer
			status: 'more',
			contentText:{
				contentdown: '暂无更多信息',
				contentrefresh: '正在加载...',
				contentnomore: '没有更多数据了'
			},
			
			swiperList:[],
			articleList:[],
			displayList:[],
			
			
			isShare:false, // 默认不是分享的
		};
	},

	onLoad(options) {
		
		this.onInit()
		
		// this.setData({
		// 	showList:this.$data.list
		// })
		
		// this.$db.getIndex()
		// .then(res=>{
		// 	console.log(res)			
		// 	this.onInit(res)
		// 	
		// })
		// .catch(res=> {
		// 	this.onInit(res)
		// 	console.log(res)
		// })
		
		
		// 若是分享
		if (options.hasOwnProperty('is_share'))
		{
			 this.setData({
				isShare:true,
				shareUrl:options.url,
				shareTitle:options.title,
			})
			if(options.is_share == 1)
				uni.navigateTo({
					url:"/pages/article/article?url=" + options.url + "&title=" + options.title+ "&cover=" + options.cover
				})
			else
				uni.navigateTo({
					url:"/pages/log/log"
				})
		}
	},
	
	methods: {
		
		onInit(res){
			
			// this.$db.getIndex().then(res=>{
			this.$db.getMainInfo().then(res=>{
				// console.log(res)			
				// this.onInit(res)
				var swiperList = res.data.swiper_list
				var articleList = res.data.article_list
				this.setData({
					swiperList:swiperList,
					displayList:articleList
				})
			})
			.catch(res=> {
				// this.onInit(res)
				// console.log(res)
			})
			// debugger
			// var swiperList = res.data.swiper_list
			// var articleList = res.data.article_list
			// this.setData({
			// 	swiperList:swiperList,
			// 	displayList:articleList
			// })
		},
		
		/**
		 * @method 查看考情详情
		 */
		clickLog(){
			uni.navigateTo({
				url:"/pages/log/log"
			})
		},
		
		clickArticle(url,title,cover){
			// debugger
			// console.log("clickArticle:",e)
			// var index = e 
			// var list = this.$data.displayList
			// var url = list[index].url || "https://bigdata.kejicloud.cn/gxsti/20190803/20190803.html"
			// var title = list[index].title
			// var cover = list[index].cover
			url = encodeURIComponent(url)
			cover = encodeURIComponent(cover)
			uni.navigateTo({
				url:"/pages/article/article?url=" + url + "&title=" + title + "&cover=" + cover
			})
		},
		
		
		
		
		// 获取tab的事件
		getTab(e){
			console.log("fater:",e)
		},
		
		onClickTag(e){
			console.log("fater:",e)
			this.setData({tabID:e})
			var list = this.$data.list
			var temp = []
			
			switch (e){
				case 0:
					this.setData({showList:list})
					break;
				case 1:
					temp = [ list[1],list[2],list[3]]
					this.setData({showList:temp})
					break;
				case 2:
					temp = [ list[0]]
					this.setData({showList:temp})
					break;
				case 3:
					temp = [ list[0],list[1]]
					this.setData({showList:temp})
					break;
				case 4:
					temp = [ list[4]]
					this.setData({showList:temp})
					break;
				default:
					break;
			}
		},
		
		// 搜索框
		confirm(e){
			console.log(e.target.value)
		},
		
		
		
	},
	
	onShareAppMessage(res) {
	    return {
	      title: '科技大数据',
		  imageUrl:"/static/cover/share.jpg",
	      path: '/pages/route/route'
	    }
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