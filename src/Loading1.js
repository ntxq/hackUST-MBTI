import React from "react";
import { View, StyleSheet,  Text, ImageBackground } from "react-native";
import { ActivityIndicator, } from "react-native-paper";

const blue1 = '#11224D';
const blue2 = '#193A6F';
const blue3 = '#2C599D';
const blue4 = '#5B84C4';
const orange1 = '#F98125';
const orange2 = '#FB9B50';

export default class Loading1 extends React.Component {
  constructor(props) {
    super(props);
  }

  delayQuestion() {
    setTimeout( () => {
      this.props.startQuestion()
    }, 4000)
  };

  render() {
    return (
      <ImageBackground source={require('../res/TitleImage.png')} style={styles.BackgroundImage}>
        <View style={{flex: 2}}>
          <Text style={styles.LoadingText}>Now{'\n'}Loading</Text>
        </View>
        <View style={{flex: 3}}>
          <ActivityIndicator style={styles.LoadingIndicator} animating={true} size={100} color={orange1}/>
        </View>
        <View>{this.delayQuestion()}</View>
      </ImageBackground>
      
    );
  }
}






const styles = StyleSheet.create({
  TitleView: {
    alignItems: "center",
    flex: 1,
  },

  MainView: {
    alignItems: "center",
    flex: 1,
  },
  
  BackgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  LoadingIndicator: {
    top: '30%',
  },

  LoadingText: {
    fontSize: 60,
    fontFamily: 'Ubuntu-Bold',
    color: orange1,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 10,
    textAlign: 'center',
    top: '30%',
  }

});