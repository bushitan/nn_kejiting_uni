<template>
	<view class="">
		<!-- <page-head :title="title"></page-head> -->
		<swiper indicator-dots="true">
			<swiper-item v-for="(img, key) in imgUrls" :key="key"><image :src="img"  class="swiper_img"/></swiper-item>
		</swiper>
	<!-- 	<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">
				
				<view>本示例为导航栏带搜索框完整功能演示，主要演示有：</view>
				<view>1. 导航栏为 transparent 模式，向上滑动页面，导航栏会从透明变为实色。</view>
				<view>2. 点击搜索框跳转到搜索页面。</view>
				<view>3. 点击导航栏右侧按钮实现关联操作。</view>
				<view>4. 搜索页面为提示词搜索，输入内容实时显示关联词。</view>
				<view>5. 搜索结果根据搜索内容高亮显示文字。</view>
				<view>6. 点击搜索列表或者软键盘搜索按钮，会将结果保存到搜索历史列表。</view>
				<view>7. 点击删除图标，清空历史搜索列表。</view>
				<view>Tips </view>
				<view>1. 本示例目前仅支持 App 端</view>
				<view>2. 所有示例均为演示使用，具体逻辑需要自己实现。</view>

			</view>
		</view> -->
		<view class="title">缩略图居左</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in list" :key="key">
				<view class="uni-media-list">
					<view class="uni-media-list-logo">
						<!-- {{value.img}} -->
						<image v-if="showImg" :src="value.img"></image>
					</view>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{value.title}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{value.content}}</view>
						
						<view class="tag">
							<view class="tag-view">
								<uni-tag :mark="true" text="标签" type="primary" size="small" class="tag_node"/>
								<uni-tag :mark="true" text="标签" type="primary" size="small" class="tag_node"/>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>


<script src="./index.js"></script>

<style src="./index.css"   ></style>
