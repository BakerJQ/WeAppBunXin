import merge from 'deepmerge'
import ChannelConfigDiff from '@/diff/ChannelConfigDiff'
//开发页面配置
import DevConfig from './pages/DevConfig'
//合并基本页面配置
const baseConfig = Object.assign({}, DevConfig)
//合并差异页面配置
const config = ChannelConfigDiff(baseConfig, merge.all)
//开发页面最终配置
export const devConfig = config.dev
