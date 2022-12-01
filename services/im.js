import * as RongIMLib from '@rongcloud/imlib-next'

const connect = async (user) => {
	RongIMLib.init({
		appkey: user.appkey
	});
	return await RongIMLib.connect(user.token)
}

const getConversationList = async () => {

	const startTime = 0;
	const count = 1000;
	const order = 0;

	return await RongIMLib.getConversationList({
		count: count,
		startTime: startTime,
		order: order
	})
}

const watcher = () => {

}

export default {
	connect,
	getConversationList
}
