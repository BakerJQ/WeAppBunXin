const path = require("path")

module.exports = {
  env: {
    channel: 'channel1'
  },
  defineConstants: {
    MAIN_COLOR: '#1afa29'
  },
  alias: {
    '@/app_style': path.resolve(__dirname, '..', '../src/channel/channel1/app.less'),
  }
}
