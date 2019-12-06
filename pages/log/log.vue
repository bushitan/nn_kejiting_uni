<template>
	<view class="container">
		<view class="box">
			<view class="content">
				<image class="logo" src="https://kjxcx.kejicloud.cn/gxsti/images/bg1.png" mode="widthFix"></image>
								
				<view class="date_btn">
					<button :type="isToday?'primary':'default'" size="mini" @click="selectToday(true)">今天</button>
					<button :type="isToday?'default':'primary'"  size="mini" @click="selectToday(false)">明天</button>
				</view>
				<view class="tool">
					<view class="node">
						日期：<view class="num">{{total.date_1}}</view>
					</view>
					<view class="node">
						在邕：<view class="num">{{total.inNanNingCount_2 || 0}}</view> 位
					</view>
					<view class="node">
						请假：<view class="num">{{total.leaveCount_3 || 0}}</view> 位
					</view>
					<view class="node">
						出差：<view class="num">{{total.travelCount_4 || 0}}</view> 位
					</view>
				</view>
				
				<view class="table">					
					<view class="row">
						<view class="col">序号</view>
						<view class="col">处室/单位职务</view>
						<view class="col">姓名</view>
						<view class="col">是否在邕</view>
						<view class="col">请假类型/去向</view>
						<view class="col">出差去向</view>
					</view>					
					<!-- businessTrip_7: ""
					dep_2: "厅领导"
					isInnn_4: true
					leaveDesc_6: ""
					leaveType_5: -1
					name_3: "曹坤华"
					sort_1: 1 -->
					<view class="row" v-for="(item,key) in logList" >
						<view class="col">{{item.sort_1}}</view>
						<view class="col">{{item.dep_2}}</view>
						<view class="col">{{item.name_3}}</view>
						<view class="col">{{item.isInnn_4 ? "是":"否"}}</view>
						<view class="col">{{item.leaveType_5 == -1 ? "":item.leaveType_5 }}</view>
						<view class="col">{{item.leaveDesc_6}}</view>
					</view>
					<view class="none" v-if="logList.length==0">
						暂无记录
					</view>
				</view>
			</view>
			<view class="footer">
				注：数据采集自科技厅OA，仅供参考，如有变动，请告知我们改正
			</view>
		</view>
		
	</view>
</template>

<script>

export default {
	data() {
		return {
			total:{},
			logList:[],
			isToday:true,
		};
	},
	onLoad() {
		this.onInit()
	},
	methods: {
		onInit(){
			
			this.$db.getTotal({
				strdate:"",
			}).then(res=>{
				this.setData({
					total:res.data
				})
			})
			
			this.$db.getLog({
				pageIndex:1,
				pageSize:100,
			}).then(res=>{
				this.setData({
					logList:res.data
				})
			})
		},
		
		/**
		 * @method  选择今天
		 */
		selectToday(isToday){
			this.setData({
				isToday:isToday,
			})
			
			var strdate = ""
			if (isToday == false){
				var tomorrow = new Date();
				tomorrow.setTime(tomorrow.getTime()+24*60*60*1000);
				strdate = tomorrow.getFullYear()+"-" + (tomorrow.getMonth()+1) + "-" + tomorrow.getDate();	
			}
			this.$db.getTotal({
				strdate:strdate,
			}).then(res=>{
				this.setData({
					total:res.data
				})
			})
		},
		
	},
	
	onShareAppMessage(res) {
	    return {
	      title: '出勤情况',
		  imageUrl:"/static/cover/share.jpg",
	      path: '/pages/route/route?is_share=2&url=1&title=1&cover=1'
	    }
	},
};
</script>

<style>
	page{
		background-color: #1e3e61;
	}
	.container{
		padding: 15px;
	}
	.box{
		background-color: #fff;
		padding: 15px;
	}
	.content{
		padding: 10px;
		position: relative;
		border-radius: 3px;
		background: #ffffff;
		border: 1px solid #d2d6de;
		/* margin-bottom: 20px; */
		/* width: 100%; */
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
	}
	.logo {
		width: 100%;
	}
	
	.date_btn{
		display: flex;
		justify-content: center;
	}
	.date_btn button{
		margin: 5px;
	}
	
	.tool{
		display: flex;
		justify-content: center;
		padding: 5px 0;
	}
	.node{
		display: flex;	
		margin: 0 5px;
		font-size: 7pt !important;
	}
	.num{
		font-size: 7pt !important;		
		color: red;
	}
	
	.table{
		
	}
	.table .row{
		display: flex;
		/* justify-content: ; */		
	}
	.table .col{
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		flex: 0 0 1;
		width: 16.6%;
		font-size: 7pt;
		padding: 2px;
		border: 1rpx solid #d2d6de;
	}
	
	.none{
		border: 1rpx solid #d2d6de;
		text-align: center;
		font-size: 9pt;
		color: #888;
		
	}
	
	.footer{
		font-size: 8pt;
		color: #888;
	}
</style>
