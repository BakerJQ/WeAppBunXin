import merge from 'deepmerge'
import ChannelConfigDiff from '@/diff/ChannelConfigDiff'

import DevConfig from './pages/DevConfig'

const baseConfig = Object.assign({}, DevConfig)
const config = ChannelConfigDiff(baseConfig, merge.all)

export const devConfig = config.dev
