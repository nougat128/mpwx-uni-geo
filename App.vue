<script>
export default {
	/**
	 * 1.加载系统配置
	 * 2.获取持久化样式缓存并加载
	 */
	async onLaunch() {
		const config = require('@/static/configs/conf.json');
		await this.setStorageCfgData(config);
		const themeCfg = uni.getStorageSync('themeCfg');
		if (themeCfg) {
			this.$store.commit('changeValue', { name: 'themeCfg', value: themeCfg });
		}
	},
	onShow() {},
	onHide() {},
	methods: {
		/**
		 * 获取配置中心数据并设置到全局缓存中
		 */
		async setStorageCfgData(config) {
			const data = await this.loginServer.getCfgData(config);
			for (let key in data) {
				uni.setStorageSync(key, data[key]);
			}
		}
	}
};
</script>

<style lang="scss">
@import '@/styles/index.scss';
</style>
