import Taro from "@tarojs/taro";

const dev = {
  dev: {
    items: {
      item1: {
        img: require('@/assets/java.png'),
        txt: 'Java',
        onItemClick: () => {
          toPage('Java', require('@/assets/java.png'))
        }
      },
      item2: {
        img: require('@/assets/jsx.png'),
        txt: 'JSX',
        onItemClick: () => {
          toPage('JSX', require('@/assets/jsx.png'))
        }
      },
      item5: null,
      item8: {
        onItemClick: () => {
          Taro.switchTab({url: '/'+PAGE_MANAGE})
        }
      }
    }
  }
}

function toPage(title, img) {
  Taro.navigateTo({url: '/pages/dev/DevInfo?title=' + title + '&img=' + img})
}

export default (config, merge) => {
  return merge([{}, config, dev])
}
