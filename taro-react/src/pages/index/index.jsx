import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='video-wrap'>
      
			<m-video 
				token="请替换token" 
				id="mVideo" 
				src="https://sucaicdn.xiaoaikeji.net/images/demo.mp4" 
				poster="https://sucaicdn.xiaoaikeji.net/images/demo.jpg"/>
    </View>
  )
}
