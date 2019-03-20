<template>
	<view class="content">
		<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="false" circular="true">
			<swiper-item>
                <view class="swiper-item uni-bg-red">A</view>
            </swiper-item>
            <swiper-item>
                <view class="swiper-item uni-bg-green">B</view>
            </swiper-item>
            <swiper-item>
                <view class="swiper-item uni-bg-blue">C</view>
            </swiper-item>
		</swiper>
		<view class="comment">
			<view class="comment-title">
				推荐
			</view>
			<view class="comment-content">
				<image class="photo-image" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/img/ad.png" mode="scaleToFill"></image>
				<view class="comment-article">
					<view class="article-title">
						一切挺好
					</view>
					<text class="comment-text">内容太内容太内容太内容太内容太内容太内容太内容太内容太内容太内容太内容太内容太内容太内容太内容太内容太内容太内容太内容
					太内容太内容太内容太内容太内容太内容太内容太内容太内容太内容太内容太内容太内容太内容太</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		width: 100%;
		color:#dedede;
	}
	.comment {
		padding: 0 20upx;
	}
	.comment-title {
		width: 100%;
		height: 50upx;
		line-height: 50upx;
		padding: 20upx 0;
		border-bottom: 1px solid #eee;
		font-size: 1rem;
	}
	.comment-content {
		display:flex;
		margin-top: 20upx;
	}
	.photo-image {
		display:inline-block;
		flex: 1;
		width: 40upx;
		height: 30upx;
	}
	.comment-text {
		font-size: .5rem;
	}
</style>
