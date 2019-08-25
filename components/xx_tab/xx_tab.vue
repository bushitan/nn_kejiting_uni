
<template>
	<view class='menu' >
		<block v-for="(item, key) in list" :key="key">
			<view class='tab_menu' v-on:click="click(key)" >
				<!-- {{item}} {{key}} -->
				<!-- <view  v-if="key == initindex"  :style="['color: 'colorselect ';  font-size:'sizeselect';line-height:'sizeselect';']"> -->
				<!-- v-bind:style="{ color:colorselect ,font-size:sizeselect, line-height:sizeselect}" -->
				<view  v-if="key == initindex"  >
					{{item}}
				  <!-- <view class="tab__node " >{{item.}} </view>
					<view class='select_line' style="border-bottom: 2px {{colorselect}} solid;"></view> -->
				</view>
				<!-- <view wx:else   style="color: {{colorunselect}};  font-size:{{sizeunselect}} ;line-height: {{sizeunselect}};">
					<view class="tab__node " >{{item.name}} </view>
				</view> -->
			</view>
		</block>  
	</view>
</template>

<script>
	export default {
		name: 'UniTag',
		props: {
			// 改变颜色
			mode: {
			    type: String,
			    value: "",
			    observer: '_changeMode',
			},
			list: {
			    type: Array,
			    value: [],
			    observer: '_changeList',
			},
			initindex: {
			    type: String,
			    value: 0,
			    observer: '_changeIndex',
			},
			// 改变颜色
			colorselect: {
			    type: String,
			    value: "#187bbf",
			},
			colorunselect: {
			    type: String,
			    value: "#000",
			},
			// 改变字体大小
			sizeselect: {
			    type: String,
			    value: "11pt",
			},
			sizeunselect: {
			    type: String,
			    value: "11pt",
			},
		},
		data() {
			return {
				MODE_SCROLL: "scroll",
				MODE_MENU: "menu", 
			}
		},
		methods: {
			_onClick() {
				if (this.disabled) {
					return
				}
				this.$emit('click')
			},
			click(e) {
				console.log(e)
				this.$emit('click',e)
			},
		}
	}
</script>
<style>
	
	.scroll_box{
	    width:750rpx;
	     white-space: nowrap;  
	    overflow:scroll;
	}
	.scroll_content{
	    display: flex;
	}
	
	/* tab选择按钮 */
	.tab_scroll{
	    padding: 0 15px;
	    /* width:100%; */
	}
	.tab_menu{
	    padding: 0 15px;
	     width:100%; 
	}
	.tab__node{
	     padding: 11pt 2px; 
	     text-align: center;
	}
	 
	
	.menu{
	    display: flex;
	    justify-content: space-around;
	    width:750rpx;
	}
	.select_line{
	    width: 10px;
	    margin: auto;
	} 
	
</style>