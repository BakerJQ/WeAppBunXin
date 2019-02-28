import Taro, {Component, Config} from "@tarojs/taro";
import {View, Text, Image} from "@tarojs/components";
import '@/theme/dev_info.less'

export default class DevInfo extends Component {
  config: Config = {
    navigationBarTitleText: '',
  }

  componentWillMount(): void {
    Taro.setNavigationBarTitle({title: this.$router.params.title})
  }

  render() {
    return (
      <View className='container'>
        <Image className='dev_info_img' src={this.$router.params.img} />
        <View className='dev_padding_view'/>
        <Text className='main_color_txt'>{this.$router.params.title}</Text>
      </View>
    )
  }
}
