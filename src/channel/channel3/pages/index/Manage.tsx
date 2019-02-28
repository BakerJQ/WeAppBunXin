import Taro, {Component, Config} from "@tarojs/taro";
import {Text, View} from "@tarojs/components";
import './manage.less'

class Manage extends Component {
  config: Config = {
    navigationBarTitleText: '管理'
  }

  render() {
    return (
      <View className='container'>
        <Text className='main_color_txt'>代码千万行，注释第一行</Text>
        <Text className='main_color_txt'>编程不规范，同事两行泪</Text>
      </View>
    )
  }
}

export default Manage
