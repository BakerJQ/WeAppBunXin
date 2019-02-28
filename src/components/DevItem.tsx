import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import PropTypes from 'prop-types';

import "@/app_style"
import "@/theme/dev_item.less"

class DevItem extends Component {
  static propTypes = {
    img: PropTypes.string,
    txt: PropTypes.string,
    onItemClick: PropTypes.func
  }

  render() {
    return (
      <View className='dev_item_body' onClick={this.props.onItemClick}>
        <Image className='dev_item_img' src={this.props.img}/>
        <Text className='dev_item_text main_color_txt'>{this.props.txt}</Text>
      </View>
    )
  }
}

export default DevItem
