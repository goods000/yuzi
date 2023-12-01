<template>
	<view class="" >
		<!-- @longtap="jieQu()" -->
		<view class="shareBox">
			<view class="share">
				<view class="share-topBox">
					<view class="title">裕子欢迎您</view>
					<view class="en">YU ZI HUAN YING NIN</view>
					<view class="details">
						<view class="qrcode" v-if="needLongTapSaveImg == false">
							<canvas :style="{ width: picWidth + 'px', height: picHight + 'px' }"
							canvas-id="myCanvas" id="myCanvas"></canvas>
						</view>
						<view class="qrcode qrcodeImg" v-if="needLongTapSaveImg">
							<image v-if="hbUrl != ''" :src="hbUrl" mode="" />
						</view>
						<view class="linkBtn" @tap="saveHB()">保存</view>
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
				canvasW: 0, // 画布宽
				canvasH: 0, // 画布高
				picWidth: '', //图片宽
				picHight: '', //图片高
				SystemInfo: {}, // 设备信息
				goodsImg: {}, // 主图
				ewmW: 200, // 二维码大小
				hbUrl: ''  ,// 保存的图片地址
				needLongTapSaveImg: false,
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.getMyCanvas();
			this.shareImg = this.creatQrcode('123123');
		},
		methods: {
			async getMyCanvas(){
				let that = this;
				// 获取设备信息，获取设备的宽高，画布做一样的高度
				that.SystemInfo = await that.getSystemInfo();
				console.log('that.SystemInfo', that.SystemInfo)
				that.canvasW = that.SystemInfo.windowWidth; // 画布宽度
				that.canvasH = that.SystemInfo.windowHeight - 150; //画布高度
				that.picWidth = that.canvasW - 900;
				that.picHight = that.picWidth - 900;
				// uni.showLoading({
				// 	title: "二维码生成中"
				// })
				setTimeout(() => {
					var ctx = uni.createCanvasContext('myCanvas');
					// 填充背景色，白色
					// ctx.setFillStyle('#fff'); // 默认白色
					// ctx.fillRect(0, 0, that.canvasW, that.canvasH) // fillRect(x,y,宽度，高度)
					// 绘制二维码
					ctx.drawImage(that.shareImg, 70, 0, 160, 200)
					ctx.draw(true, (ret) => { // draw方法 把以上内容画到 canvas 中。
						// uni.hideLoading();
						uni.canvasToTempFilePath({ // 保存canvas为图片
							canvasId: 'myCanvas',
							quality: 1,
							complete: (res) => {
								// console.log("保存的图片：",res.tempFilePath);
								that.hbUrl = res.tempFilePath;
								//#ifdef H5
								that.needLongTapSaveImg = true;
								//#endif
								console.log('ok---二维码生成中',that.needLongTapSaveImg);
							},
						})
					});
				}, 1000)
			},
			saveHB() {
				console.log('点击了图片');
				let that = this;
				if(that.tempFilePath == ''){
					uni.showToast({
						title: '图片未生成',
						icon: 'none'
					})
					return;
				}
				//#ifndef H5
				uni.saveImageToPhotosAlbum({
					filePath: that.tempFilePath,
					success: function() {
						uni.showToast({
							title: '已保存至相册',
							icon: 'none'
						})
					}
				});
				//#endif
				//#ifdef H5
				uni.showToast({
					title: '请长按图片-保存至相册'
				})
				//#endif
				return;
				uni.saveImageToPhotosAlbum({
					filePath: that.hbUrl,
					success: function(res2) {
						uni.showToast({
							title: '保存成功，请从相册选择再分享',
							icon: "none",
							duration: 5000
						})
					},
					fail: function(err) {
						// console.log(err.errMsg);
					}
				})
			},
			// 获取设备信息
			getSystemInfo() {
				return new Promise((req, rej) => {
					uni.getSystemInfo({
						success: function(res) {
							req(res)
						}
					});
				})
			},
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
				font-size: 70rpx;
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
				.qrcodeImg{
					width: 100%;
					height: 300rpx;
					margin: 0 auto 40rpx;
					image{
						width: 100%;
						height: 100%;
						margin: auto;
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