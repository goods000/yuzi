<template>
	<view class="" >
		<!-- @longtap="jieQu()" -->
		<view class="shareBox">
			<view class="share">
				<view class="share-topBox">
					<view class="title">裕子欢迎您</view>
					<view class="en">YU ZI HUAN YING NIN</view>
					<view class="details">
						<view class="qrcode">
							<image v-if="shareImg != ''" :src="shareImg" mode="" class=""/>
						</view>
						<view class="linkBtn" @tap="jieQu()">保存</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import QR from '../../components/qrcode/qrcode';
	export default {
		components:{
		},
		data(){
			return{
				num: '',
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.shareImg = this.creatQrcode('123123');
		},
		methods: {
			creatQrcode(url) {
				if (url == '') {
					return false;
				}
				let img = QR.createQrCodeImg(url);
				return img;
			},
			jieQu() {
				uni.hideNavigationBarLoading()
				this.showBackBtn = false;
				this.baocun();
			},
			baocun() {
				var that = this;
				uni.showLoading({
					title: '加载中',
					mask: true
				});
	
				var ws = null;
				ws = this.$mp.page.$getAppWebview();
	
				var bitmap = null;
				bitmap = new plus.nativeObj.Bitmap('test');
				// 将webview内容绘制到Bitmap对象中
				ws.draw(
					bitmap,
					function() {
						console.log('截屏绘制图片成功');
						var bitmaps = plus.nativeObj.Bitmap.getItems();
						console.log(JSON.stringify(bitmaps), 'Bitmap对象中2');
						bitmap.save(
							'_doc/a.jpg',
							{},
							function(i) {
								console.log('保存图片成功：' + JSON.stringify(i));
	
								uni.saveImageToPhotosAlbum({
									filePath: i.target,
									success: function() {
										bitmap.clear();
										setTimeout(() => {
											uni.hideLoading();
											uni.showToast({
												title: '保存成功',
												icon: 'none'
											});
											that.showBackBtn = true;
										}, 2000);
									}
								});
							},
							function(e) {
								console.log('保存图片失败：' + JSON.stringify(e));
							}
						);
					},
					function(e) {
						console.log('截屏绘制图片失败：' + JSON.stringify(e));
					},
					{
						check: true, // 设置为检测白屏
						clip: {
							top: '0',
							left: '0',
							height: '100%',
							width: '100%'
						} // 设置截屏区域
					}
				);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.shareBox{
		padding: 80rpx 0 0;
	}
	.share{
		background: pink;
		margin: 0 50rpx 0;
		border-radius: 20rpx;
		padding: 20rpx 0 0;
		&-topBox{
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			.title{
				font-size: 88rpx;
				font-family: PangMenZhengDao-3-Regular, PangMenZhengDao-3;
				font-weight: 400;
				color: #FFFFFF;
			}
			.details{
				background: #FFFFFF;
				border-radius: 0 0 20rpx 20rpx;
				margin: 20rpx auto 0;
				padding: 60rpx 48rpx;
				width: calc(100% - 48rpx - 48rpx);
				.qrcode{
					width: 348rpx;
					height: 348rpx;
					margin: 0 auto 40rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.linkBtn{
					font-size: 30rpx;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #FFFFFF;
					text-align: center;
					padding: 22rpx 0;
					width: 402rpx;
					background: pink;
					border-radius: 58rpx;
					margin: auto;
				}
			}
		}
	}
	
</style>