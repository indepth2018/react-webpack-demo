module.exports = {
  plugins: {
    'autoprefixer': {
			browsers: [
				'last 5 version', //兼容到上五个版本
				'> 1%' //兼容到大于1%的用户
			],
		}
  }
}
