const path = require("path")
const channelInfo = require('./channel')

const config = {
  projectName: 'WeAppBunXin',
  date: '2019-2-25',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist_' + channelInfo.channel,
  alias: {
    '@/channel': path.resolve(__dirname, '..', 'src/channel/' + channelInfo.channel),
    '@/assets': path.resolve(__dirname, '..', 'src/channel/' + channelInfo.channel + '/assets'),
    '@/theme': path.resolve(__dirname, '..', 'src/theme/theme1'),
    '@/diff': path.resolve(__dirname, '..', 'src/config/diff'),
    '@/app_style': path.resolve(__dirname, '..', 'src/app.less'),
  },
  defineConstants: {
    ASSETS_PATH: 'channel/'+channelInfo.channel+'/assets',
    MAIN_COLOR: '#000000',
    PAGE_MANAGE: 'pages/index/Manage',
  },
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        ['env', {
          modules: false
        }]
      ],
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties',
        'transform-object-rest-spread'
      ]
    }
  },
  copy: {
    patterns: [
      {
        from: 'config/' + channelInfo.channel + '/project.config.json',
        to: 'dist_' + channelInfo.channel + '/project.config.json'
      }
    ],
    options: {}
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        pxtransform: {
          enable: true,
          config: {}
        },
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  }
}

module.exports = function (merge) {
  let envConfig
  if (process.env.NODE_ENV === 'development') {
    envConfig = require('./dev')
  } else {
    envConfig = require('./prod')
  }
  return merge({}, config, envConfig, require('./' + channelInfo.channel + "/config"))
}
