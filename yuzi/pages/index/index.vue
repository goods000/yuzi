<template>
	<view class="content">
		<view class="upIcon-box" v-if="isWeixin">
			<view class="upIcon-wrapper">
				<image class="img" src="@/static/up.png" mode=""></image>
				<view class="upIcon-title">请使用外部浏览器打开</view>
			</view>
		</view>
		
		<view class="">
			<view class="main">
				<view class="">
					<!-- 轮播图 -->
					<uni-swiper-dot :info="info" :current="current" mode="false">
						<view class="swiperBox">
							<view class="swiperBox-wrapper">
								<swiper :indicator-dots="false" :autoplay="true" :interval="2500" :duration="1000" :circular="true" class="swiperBox-swiper" @change="changeSwiper">
									<swiper-item class="swiperBox-swiper__item" v-for="(item, index) in info" :key="index">
										<image :src="item" mode="widthFix" ></image>
									</swiper-item>
								</swiper>
							</view> 
						</view>
					</uni-swiper-dot>
				</view>
			</view>
			
			<view class="middel">
				<view class="middel-top">
					<view class="middel-item" @tap.stop="call('18589041101')">
						<image src="@/static/service.png" mode=""></image>
						<view class="itemBox">
							<view class="title">24小时服务热线</view>
							<view class="tips">185xxxx1101</view>
						</view>
					</view>
					<view class="middel-item" @tap.stop="$tools.jump('./code')">
						<image src="@/static/wechat.png" mode=""></image>
						<view class="itemBox">
							<view class="title">官方微信</view>
							<view class="tips">识别二维码，关注官方微信</view>
						</view>
					</view>
					<view class="middel-item" @tap.stop="getUrl()">
						<image src="@/static/address.png" mode=""></image>
						<view class="itemBox">
							<view class="title">服务网点</view>
							<view class="tips">看看距离服务网点有多远</view>
						</view>
					</view>
				</view>
			</view>
			
			
			<view class="bottom">
				<view class="left">
					联系电话：185xxxx1101
				</view>
				<view class="right" @tap.stop="call('18589041101')">
					<image src="@/static/phone.png" mode=""></image>
					联系我们
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isWeixin: true,
				info: [
					'../../static/1.png','../../static/2.png','../../static/3.png'
				],
				current: 0,
				longitude: '', // 经度
				latitude: '', // 纬度
			}
		},
		onLoad() {
		},
		onShow() {
			this.init();
		},
		methods: {
			init(){
				this.isWx();
				this.getWei();
			},
			isWx(){
				var ua = navigator.userAgent.toLowerCase();
				this.isWeixin = ua.indexOf('micromessenger') != -1;
				console.log("isWeixin:",this.isWeixin);
			},
			// 导航
			getUrl() {
				let that = this;
				uni.openLocation({
					longitude: 114.78826,
					latitude: 25.68058,
					scale: 18,
					name: "SMART公寓",
					address: "江西省赣州市南康区文峰大道SMART公寓",
				})
			},
			// 获取经纬度
			getWei(){
				let that = this;
				uni.getLocation({
					type: 'wgs84',   // gcj02 返回国测局坐标
					success: function (res) {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						that.longitude = res.longitude;
						that.latitude = res.latitude;
					},
					fail(err) {
						//授权失败后，调用，可以在这儿调用下面的例子 再次进行授权
						console.log(err, "eee");
					},
				});
			},
			// 联系我们
			call(phone){
				console.log(phone);
				uni.makePhoneCall({
					phoneNumber: phone //仅为示例
				});
			},
			changeSwiper(e) {
				this.current = e.detail.current;
			},
		}
	}
</script>

<style scoped lang="scss">
	.swiperBox {
		// height: 150rpx;
		// height: 275rpx;
		margin: 0rpx 0 0rpx;
		// padding: 0 30rpx;
		position: relative;
		display: flex;
		align-items: center;
		&-wrapper {
			width: 100%;
		}
		&-swiper {
			// height: 150rpx;
			// height: 275rpx;
			height: 750rpx;
			&__item {
				width: 100%;
				// height: 150rpx;
				// height: 275rpx;
				// padding: 0 24rpx;
				overflow: hidden;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				image {
					width: 100%;
				}
			}
		}
	}
	
	.bottom{
		position: fixed;
		bottom: 0;
		width: 100%;
		background: #fff;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		.left{
			font-size: 28rpx;
			color: pink;
			padding-left: 40rpx;
			background: linear-gradient(to right, #f02d1e87, #ffc1cc);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			animation: text-slide 5s ease-in-out infinite;
			/* 接下来定义动画效果 */
			@keyframes text-slide {
				0%{background-position:0 50%}
				50%{background-position:100% 50%}
				100%{background-position:0 50%}
			}
		}
		.right{
			background: pink;
			padding: 20rpx 40rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
			image{
				width: 60rpx;
				height: 60rpx;
				margin-right: 20rpx;
			}
			font-size: 28rpx;
			color: #fff;
		}
	}
	
	.middel{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		&-top{
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			width: 90%;
			margin: auto;
		}
		&-item{
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			background: #fff;
			border-radius: 20rpx;
			padding: 20rpx;
			width: 100%;
			margin-top: 20rpx;
			image{
				width: 70rpx;
				height: 70rpx;
				margin-right: 20rpx;
			}
			.itemBox{
				border-left: 1px solid #eee;
				padding-left: 20rpx;
				.title{
					font-size: 30rpx;
					font-weight: bold;
					color: #000;
				}
				.tips{
					font-size: 24rpx;
					color: #999;
					margin-top: 15rpx;
				}
			}
		}
	}
	
	.upIcon-box{
		position: absolute;
		right: 5px;
		top: 0;
		right: 0;
		z-index: 99;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
	}
	.upIcon-wrapper{
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: flex-end;
	}
	.upIcon-wrapper .img{
		width: 40px;
		height: 40px;
		text-align: right;
		margin-right: 10px;
		margin-bottom: 5px;
		transform: rotate(90deg);
	}
	.upIcon-title{
		font-size: 1rem;
		color: #fff;
		padding-right: 10px;
	}
	
	
</style>
