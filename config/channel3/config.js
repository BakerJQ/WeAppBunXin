const path = require("path")

module.exports = {
  env: {
    channel: 'channel3'
  },
  defineConstants: {
    MAIN_COLOR: '#d81e06',
    PAGE_MANAGE: 'channel/channel3/pages/index/Manage',
  },
  alias: {
    '@/app_style': path.resolve(__dirname, '..', '../src/channel/channel3/app.less'),
  }
}
