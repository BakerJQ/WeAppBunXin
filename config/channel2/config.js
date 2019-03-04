const path = require("path")

module.exports = {
  env: {
    channel: 'channel2'
  },
  defineConstants: {
    MAIN_COLOR: '#1296db',
    DEV_TITLE: 'Channel2DEV'
  },
  alias: {
    '@/theme': path.resolve(__dirname, '..', '../src/theme/theme2'),
    '@/diff': path.resolve(__dirname, '..', '../src/channel/channel2/diff'),
  }
}
