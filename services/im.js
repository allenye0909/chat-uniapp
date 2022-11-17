import * as RongIMLib from '@rongcloud/imlib-next'

const connect = async (user) => {
	RongIMLib.init({
		appkey: user.appkey
	});
	return await RongIMLib.connect(user.token)
}

const watcher = () => {

}

export default {
	connect
}
