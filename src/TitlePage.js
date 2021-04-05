import React, {useRef} from "react";
import { Animated, View, StyleSheet, Dimensions, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Title } from "react-native-paper";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DURATION = 1300

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(
      fadeAnim, 
      {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: true
      }
    ).start();
  })
  return (
    <Animated.View
      style={[
        TitleStyles.TitleView,
        {
          opacity: fadeAnim
        }
      ]}
    >
      {props.children}
    </Animated.View>
  );
}

const FadeInDelayView1 = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.sequence([
      Animated.delay(DURATION),
      Animated.timing(
        fadeAnim, 
        {
          toValue: 1,
          duration: DURATION,
          useNativeDriver: true
        }
      )
    ]).start();
  })
  return (
    <Animated.View
      style={[
        TitleStyles.TitleTextView1,
        {
          opacity: fadeAnim
        }
      ]}
    >
      {props.children}
    </Animated.View>
  );
}

const FadeInDelayView2 = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.sequence([
      Animated.delay(DURATION*2),
      Animated.timing(
        fadeAnim, 
        {
          toValue: 1,
          duration: DURATION,
          useNativeDriver: true
        }
      )
    ]).start();
  })
  return (
    <Animated.View
      style={[
        TitleStyles.TitleTextView2,
        {
          opacity: fadeAnim
        }
      ]}
    >
      {props.children}
    </Animated.View>
  );
}

const FadeInDelayView3 = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.sequence([
      Animated.delay(DURATION*3),
      Animated.timing(
        fadeAnim, 
        {
          toValue: 1,
          duration: DURATION,
          useNativeDriver: true
        }
      )
    ]).start();
  })
  return (
    <Animated.View
      style={[ 
        TitleStyles.TitleTextView3,
        {
          opacity: fadeAnim
        }
      ]}
    >
      {props.children}
    </Animated.View>
  );
}

const FadeInDelayView4 = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.sequence([
      Animated.delay(DURATION*4),
      Animated.timing(
        fadeAnim, 
        {
          toValue: 1,
          duration: DURATION,
          useNativeDriver: true
        }
      )
    ]).start();
  })
  return (
    <Animated.View
      style={[
        TitleStyles.TitleView,
        {
          opacity: fadeAnim
        }
      ]}
    >
      {props.children}
    </Animated.View>
  );
}



export default class TitlePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={TitleStyles.TitleView}>
        <ImageBackground source={require('../res/TitleImage.png')} style={TitleStyles.Image}>
          <View style={{flex: 3}}>
            <FadeInView>
              <Title style={TitleStyles.TitleText1}>Travel{"\n"}Planner</Title>
            </FadeInView>
          </View>
          
          
          <View style={TitleStyles.TitleView2}>
            <FadeInDelayView1>
              <Text style={TitleStyles.TitleText2}>
                Answer the questions{"\n"}
              </Text>
            </FadeInDelayView1>
            <FadeInDelayView2>
              <Text style={TitleStyles.TitleText2}>
                Reveal your personality{"\n"}
              </Text>
            </FadeInDelayView2>
            <FadeInDelayView3>
              <Text style={TitleStyles.TitleText2}>
                Themed travel plan{"\n"}based on your personality{"\n"}will be recommended
              </Text>
            </FadeInDelayView3>
            <View style={{flex: 1}}></View>
          </View>  
          
          <View style={{flex: 1.5}}>
            <FadeInDelayView4>
              <TouchableOpacity style={TitleStyles.ButtonView} onPress={this.props.startButton}>
                <Text style={TitleStyles.ButtonText}>BEGIN{"\n"}YOUR JOURNEY</Text>
              </TouchableOpacity>
            </FadeInDelayView4>
          </View>
        </ImageBackground>
      </View>
    );
  }
}





const TitleStyles = StyleSheet.create({
  TitleView: {
    alignItems: "center",
    flex: 1,
  },

  TitleView2: {
    alignItems: "center",
    flex: 2,
    bottom: "5%",

  },


  TitleText1: {
    textAlign: 'center',
    fontSize: 80,
    top: "5%",
    padding: 50,
    lineHeight: 80,
    color: "#F98125",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 10,
  },

  TitleText2: {
    textAlign: 'center',
    fontSize: 22,
    color: "#F98125",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 10,
  },

  ButtonView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",   
    width: windowWidth,
    height: 100,
    alignSelf: 'stretch',
  },
  ButtonText: {
    fontSize: 40,
    color: "#F98125",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 10,
    textAlign: 'center',
  },

  Image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }

});


