import React, { FC } from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  Text,
  TouchableOpacity
} from 'react-native';

const ItemStyle = StyleSheet.create({
  container: {

  },
  highLightBlock: {
    backgroundColor: 'rgba(50,50,50,0.5)',
    borderRadius: 4,
    position: 'absolute',
    top: 0,
    left: 0
  },
});

interface Props {
  url: any;
  index: number;
  lotteryPress?(): void;
  width: number;
  height: number;
  type: 'normal' | 'highLight' | 'lotteryBtn',
  prizeUrl: object,
  prizeImgStyle : object,
  prizeName: string,
  nameStyle: object
}

const LotteryItem: FC<Props> = (props) => {
  const { url, type, lotteryPress, width, height, index,  prizeUrl, prizeImgStyle, prizeName,nameStyle } = props;
  let itemDom = null;
  switch (type) {
    case 'normal':
      itemDom = (
        <ImageBackground source={url} style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={prizeImgStyle} source={prizeUrl} />
          <Text style={nameStyle}>{prizeName}</Text>
        </ImageBackground>
      )
      break;
    case 'highLight':
      itemDom = (
        <ImageBackground source={url} style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={prizeImgStyle} source={prizeUrl} />
          <Text style={nameStyle}>{prizeName}</Text>
          <View style={[ItemStyle.highLightBlock,{width, height}] }></View>
        </ImageBackground>
      );
      break;
    case 'lotteryBtn':
      itemDom = (
        <TouchableOpacity onPress={() => { lotteryPress!(); }}>
          <Image style={{ width, height }} source={url} />
        </TouchableOpacity>
      );
      break;
  }
  return (
    <View style={{ width: width + 2, height: height + 2 }} key={index}>
      {itemDom}
    </View>
  )
}

export default LotteryItem;
