<template>
    <view class="container">
		

		<!-- <view class="sys_title">
			广西科技项目管理APP
		</view> -->
		<!-- <view class="page_edu_header">
			<view class="header_content">
				<view class="left">
					<text class="title">{{header.title}}</text>
					<text class="sub_title">{{header.subTitle}}</text>
				</view>
				<view>
					<image src="/static/right.png" style="width: 131px;height: 122px;"></image>
				</view>
			</view>
		</view> -->
		
		<swiper indicator-dots="true">
			<swiper-item ><image src="https://kjxcx.kejicloud.cn/gxsti/images/20190827/bg-poster-xs-2.png"  class="swiper_img" /></swiper-item>
		</swiper>
		
		

		<form @submit="formSubmit" >
			<view class="component ">
				<!-- <login></login> -->
				<view class="content_login ">
					<view class="detail">
						<view class="title">账号密码输入</view>
						<view class="summary">
							<view class="name">账号:</view>
							<view class="input_content">
								<input class="input" placeholder-style="input_pla"  
								value="" placeholder="请输入账号" name="username" />
							</view>
						</view>	
						<view class="summary">
							<view class="name">密码:</view>
							<view class="input_content">
								<input class="input" placeholder-style="input_pla"  
								password="true"
								value="" placeholder="请输入密码"  name="password"/>
							</view>
						</view>
						<view class="footer">
							特别提示：系统账号由管理员下发，请没有账号的用户与管理员联系
						</view>
					</view>
				</view>
			</view>
			<view class="btn-area">
				<button class="btn" type="primary" formType="submit">下一步</button>
				<!-- <button formType="reset">Reset</button> -->
			</view>
		</form>
		<!-- <btn-next @onClick="onClick"></btn-next> -->
    </view>
	
</template>

<script src="./x_login.js"></script>

<style src="./x_login.css" ></style>

<style lang="scss" >


	/*********登陆按钮**********/

	.btn-area{
		// color: #fff;
		// background-color: $sys-color-base ;
		font-size: 13pt;
		// justify-content: center;
		text-align: center;
		padding: 0 20px 50px;
		// align-items: center;
	}
	.btn{
		// background-color:$sys-color-base !important;
		// color:#fff !important;
		font-size: 11pt !important;
	}
	
	
	.page_edu_header {
		padding-top: var(--status-bar-height);
		background-color: #0bc99d;
		width: 100%;
		padding-top:realSize(30px);
		// height: realSize(415px);
		height: realSize(330px);
	
		.header {
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: realSize(20px);
	
			.btn {
				width: realSize(36px);
				height: realSize(30px);
			}
	
			.input {
				height: realSize(59px);
				width: 100%;
				margin-left: realSize(20px);
				margin-right: realSize(20px);
				
				background: rgba(255, 255, 255, 1);
				border-radius: realSize(30px);
				display: flex;
				flex-direction: row;
				align-items: center;
	
				.search {
					width: realSize(30px);
					height: realSize(30px);
					margin-left: realSize(20px);
					margin-right: realSize(20px);
				}
			}
		}
	
		.header_content {
			display: flex;
			flex-direction: row;
	
			.left {
				display: flex;
				flex-direction: column;
				width: 57%;
				margin-top: 10px;
				margin-left: 15px;
				margin-right: 15px;
				padding:15px 0;
	
				.title {
					width: realSize(419px);
					height: realSize(59px);
					font-size: 17pt;
					font-weight: bold;
					color: rgba(255, 255, 255, 1);
				}
	
				.sub_title {
					margin-top: 3px;
					font-size: 11pt;
					font-weight: 400;
					color: rgba(255, 255, 255, 1);
	
					background: linear-gradient(0deg, rgba(120, 255, 224, 1) 0%, rgba(255, 255, 255, 1) 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
	
				.btn {
					margin-top: 3px;
					width: realSize(198px);
					height: realSize(60px);
					background: linear-gradient(-30deg, rgba(252, 135, 29, 1), rgba(246, 185, 9, 1));
					box-shadow: 0px 4px 10px 0px rgba(255, 121, 0, 0.5);
					border-radius: realSize(30px);
					color: rgba(255, 255, 255, 1);
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
</style>