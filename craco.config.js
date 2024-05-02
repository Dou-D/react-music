const path = require('path')
const CracoCSSModules = require('craco-css-modules');

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
	webpack: {
		alias: {
			'@': resolve('src')
		}
	},
  plugins: [
    { plugin: CracoCSSModules },
  ]
}
