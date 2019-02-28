import merge from 'deepmerge'
import ChannelStyle from '../channel/channel1/ChannelStyle'

const DefaultStyle = {
  mainColor: '#1afa29',
  tabBar: {
    color: '#515151',
  }
}

const GlobalStyle = merge(DefaultStyle, ChannelStyle);

export default GlobalStyle
