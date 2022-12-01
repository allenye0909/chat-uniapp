<template>
	<view class="content">
		<view class="conversation-list">
			<view class="conversation-list-item clearfix" v-for="(item, index) in conversationList" :key="index">
				<view class="avatar fl">
					{{item.targetId[0]}}
					<view class="type">{{item.conversationType}}</view>
				</view>
				<view class="fl">
					<view class="name">
						{{item.targetId}}
					</view>
					<view class="msg" v-if="item.latestMessage">
						{{item.latestMessage.content.content}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		reactive,
		toRefs
	} from "vue";
	const {
		connect,
		getConversationList
	} = getApp().globalData.IM;
	const state = reactive({
		conversationList: []
	})
	const handleConnect = async (user) => {
		const {
			code,
			data
		} = await connect(user);
		const res = await getConversationList();
		state.conversationList = res.data;
		console.log(res)
	}
	export default {
		onPageScroll(e) {},
		async onLoad(user) {
			handleConnect(user)
		},
		setup(props, context) {
			return {
				...toRefs(state)
			}
		},

		methods: {

		},
	}
</script>

<style lang="scss">
	.conversation-list-item {
		border-bottom: 1px solid $uni-border-color;
		padding: 8px;

		.avatar {
			width: 40px;
			height: 40px;
			line-height: 30px;
			text-align: center;
			border: 1px solid $uni-text-color-grey;
			margin-right: 10px;
			position: relative;
			font-size: 30px
		}

		.name {
			font-size: $uni-font-size-lg;
			font-weight: 600;
			line-height: 20px;
		}
		.msg {
			font-size: $uni-font-size-sm;
			color: $uni-text-color-grey;
			line-height: 20px;
		}
		.type {
			height: 14px;
			line-height: 14px;
			width: 14px;
			position: absolute;
			font-size: 10px;
			bottom: 0;
			right: 0;
			border-radius: 100%;
			background: $uni-text-color-grey;
		}
	}
</style>
