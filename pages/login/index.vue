<template>
	<view class="login">
		<u-input v-model="user.appkey" type="text" :border="true" placeholder="appkey" />
		<u-input v-model="user.token" type="text" :border="true" placeholder="token" />
		<u-button @click="navigateTo">connect</u-button>
	</view>
</template>

<script>
	import {
		reactive,
		toRefs
	} from "vue"
	import config from "@/config.js"
	export default {
		onLoad() {

		},

		setup(props, context) {
			// // 透传 Attributes（非响应式的对象，等价于 $attrs）
			// console.log(context.attrs)

			// // 插槽（非响应式的对象，等价于 $slots）
			// console.log(context.slots)

			// // 触发事件（函数，等价于 $emit）
			// console.log(context.emit)

			// // 暴露公共属性（函数）
			// console.log(context.expose)

			const state = reactive({
				user: config.user
			})
			const navigateTo = () => {
				const {
					appkey,
					token
				} = state.user;
				const paramaUrl = `appkey=${appkey}&token=${token}`
				uni.navigateTo({
					url: '/pages/chat/conversationList?' + paramaUrl
				});
			}

			return {
				...toRefs(state),
				navigateTo,
				test: 2
			}
		}
	}
</script>

<style lang="scss">
	.login {
		width: 100%;
		height: 100%;
		margin: auto;
	}
</style>
