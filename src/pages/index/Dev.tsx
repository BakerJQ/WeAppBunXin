import Taro, {Component, Config} from "@tarojs/taro";
import {View} from "@tarojs/components";

import "@/theme/dev.less"
import {devConfig} from "../../config/MultiChannelConfig";
import DevItem from "../../components/DevItem";


class Dev extends Component {
  config: Config = {
    navigationBarTitleText: DEV_TITLE
  }

  constructor() {
    super(...arguments)
    this.state = {
      devItems: []
    }
  }

  componentDidMount() {
    const devItems = []
    for (let key in devConfig.items) {
      const item = devConfig.items[key]
      if (item) {
        devItems.push(item)
      }
    }
    this.setState({devItems: devItems})
  }

  render() {
    const items = this.state.devItems.map((item) => {
      return <View key={item.txt}>
        <DevItem
          img={item.img}
          txt={item.txt}
          onItemClick={() => {
            item.onItemClick()
          }
          }
        />
      </View>
    })
    return (
      <View className='dev_list'>
        {
          items
        }
      </View>
    )
  }
}

export default Dev
