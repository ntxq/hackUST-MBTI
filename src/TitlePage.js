import React, {useRef} from "react";
import { Animated, View, StyleSheet } from "react-native";
import { Button, Title } from "react-native-paper";


const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(
      fadeAnim, 
      {
        toValue: 1,
        duration: 1000,
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

const FadeInDelayView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.sequence([
      Animated.delay(1000),
      Animated.timing(
        fadeAnim, 
        {
          toValue: 1,
          duration: 1000,
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
      <FadeInView>
        <Title style={TitleStyles.TitleText}>Travel Planner</Title>
      </FadeInView>

      <FadeInDelayView>
        <Button mode="contained" color="blue" style={TitleStyles.ButtonView} onPress={this.props.startButton}>Start!</Button>
      </FadeInDelayView>
      </View>
    );
  }
}





const TitleStyles = StyleSheet.create({
  TitleView: {
    alignItems: "center",
    flex: 1,
  },
  TitleText: {
    // Responsive font size to be implemented
    fontSize: 50,
    top: "35%",
    padding: 25,
  },
  ButtonView: {
    alignItems: "center",
    justifyContent: "center",
    top: "40%",
  },
});


