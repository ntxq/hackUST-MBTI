import React, {useRef} from "react";
import { Animated, View, StyleSheet, Dimensions, Text, ImageBackground, TouchableOpacity, Touchable } from "react-native";
import { Title } from "react-native-paper";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DURATION = 700

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

// const FadeInDelayView4 = (props) => {
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   React.useEffect(() => {
//     Animated.sequence([
//       Animated.delay(DURATION*4),
//       Animated.timing(
//         fadeAnim, 
//         {
//           toValue: 1,
//           duration: DURATION,
//           useNativeDriver: true
//         }
//       )
//     ]).start();
//   })
//   return (
//     <Animated.View
//       style={[
//         TitleStyles.TitleView,
//         {
//           opacity: fadeAnim
//         }
//       ]}
//     >
//       {props.children}
//     </Animated.View>
//   );
// }


const FlashView = (props) => {
  const flashAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.sequence([
      Animated.delay(DURATION*4),
      Animated.timing(
        flashAnim, 
        {
          toValue: 1,
          duration: DURATION,
          useNativeDriver: true
        }
      ),
      Animated.loop(
        Animated.sequence([
          Animated.timing(
            flashAnim, 
            {
              toValue: 0.35,
              duration: 500,
              useNativeDriver: true
            }
          ),
          Animated.timing(
            flashAnim, 
            {
              toValue: 1,
              duration: 500,
              useNativeDriver: true
            }
          )
        ])
      )
    ]).start();
  })
  return (
    <Animated.View
      style={[
        TitleStyles.TitleView,
        {
          opacity: flashAnim
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
                <Title style={TitleStyles.TitleText1}>TRAVEL{"\n"}PLANNER</Title>
              </FadeInView>
            </View>
            
            
            <View style={TitleStyles.TitleView2}>
              <FadeInDelayView1>
                <Text style={TitleStyles.TitleText2}>
                  - Answer the questions{"\n"}
                </Text>
              </FadeInDelayView1>
              <FadeInDelayView2>
                <Text style={TitleStyles.TitleText2}>
                  - Reveal your personality{"\n"}
                </Text>
              </FadeInDelayView2>
              <FadeInDelayView3>
                <Text style={TitleStyles.TitleText2}> 
                  - Themed travel plan{"\n"}   based on your personality{"\n"}   will be recommended
                </Text>
              </FadeInDelayView3>
              <View style={{flex: 1}}></View>
            </View>  
            <View style={{flex: 1.5}}>
              <FlashView>
                <TouchableOpacity style={TitleStyles.ButtonView} onPress={this.props.startButton}>
                  <Text style={TitleStyles.ButtonText}>Begin{"\n"}Your Journey</Text>
                </TouchableOpacity>
              </FlashView>
      </View>
        </ImageBackground>
      </View>
    );
  }
}



const blue1 = '#11224D';
const blue2 = '#193A6F';
const blue3 = '#2C599D';
const blue4 = '#5B84C4';
const orange1 = '#F98125';
const orange2 = '#FB9B50';

const TitleStyles = StyleSheet.create({

  MainContainer :{
 
    // Setting up View inside content in Vertically center.
    justifyContent: 'center',
    flex:1,
    margin: 10
     
    },

  TitleView: {
    alignItems: "center",
    flex: 1,
  },

  TitleView2: {
    alignItems: "center",
    flex: 2,
    bottom: "10%",

  },

  TitleText1: {
    textAlign: 'left',
    fontSize: 85,
    fontFamily: 'NanumBrushScript-Regular',
    top: "5%",
    padding: 50,
    lineHeight: 80,
    color: orange1,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 10,
  },

  TitleText2: {
    textAlign: 'left',
    fontSize: 35,
    fontFamily: 'NanumBrushScript-Regular',
    color: orange1,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 10,
  },

  ButtonView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",   
    width: windowWidth,
    top: '15%',
    alignSelf: 'stretch',
  },
  ButtonText: {
    fontSize: 40,
    fontFamily: 'Ubuntu-Bold',
    color: orange2,
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