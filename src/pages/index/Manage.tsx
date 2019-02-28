import Taro, {Component, Config} from "@tarojs/taro";
import {View} from "@tarojs/components";

class Manage extends Component {
  config: Config = {
    navigationBarTitleText: '管理'
  }

  render() {
    return (
      <View>管理页面</View>
    )
  }
}

export default Manage
