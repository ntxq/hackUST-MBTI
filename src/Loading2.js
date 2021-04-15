import React, { useRef } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";

const blue1 = "#11224D";
const blue2 = "#193A6F";
const blue3 = "#2C599D";
const blue4 = "#5B84C4";
const orange1 = "#F98125";
const orange2 = "#FB9B50";

const DURATION = 500;

const LoadingAnimation1 = (props) => {
  const loading = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.sequence([
      Animated.loop(
        Animated.sequence([
          Animated.timing(loading, {
            toValue: 1,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.delay(DURATION),
          Animated.timing(loading, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.delay(DURATION * 3),
        ])
      ),
    ]).start();
  });
  return (
    <Animated.View
      style={[
        styles.MainView,
        {
          opacity: loading,
        },
      ]}
    >
      {props.children}
    </Animated.View>
  );
};

const LoadingAnimation2 = (props) => {
  const loading = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.sequence([
      Animated.delay(DURATION),
      Animated.loop(
        Animated.sequence([
          Animated.timing(loading, {
            toValue: 1,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.delay(DURATION),
          Animated.timing(loading, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.delay(DURATION * 3),
        ])
      ),
    ]).start();
  });
  return (
    <Animated.View
      style={[
        styles.MainView,
        {
          opacity: loading,
        },
      ]}
    >
      {props.children}
    </Animated.View>
  );
};

const LoadingAnimation3 = (props) => {
  const loading = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.sequence([
      Animated.delay(DURATION * 2),
      Animated.loop(
        Animated.sequence([
          Animated.timing(loading, {
            toValue: 1,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.delay(DURATION),
          Animated.timing(loading, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.delay(DURATION * 3),
        ])
      ),
    ]).start();
  });
  return (
    <Animated.View
      style={[
        styles.MainView,
        {
          opacity: loading,
        },
      ]}
    >
      {props.children}
    </Animated.View>
  );
};

const LoadingAnimation4 = (props) => {
  const loading = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.sequence([
      Animated.delay(DURATION * 3),
      Animated.loop(
        Animated.sequence([
          Animated.timing(loading, {
            toValue: 1,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.delay(DURATION),
          Animated.timing(loading, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.delay(DURATION * 3),
        ])
      ),
    ]).start();
  });
  return (
    <Animated.View
      style={[
        styles.MainView,
        {
          opacity: loading,
        },
      ]}
    >
      {props.children}
    </Animated.View>
  );
};

export default class Loading2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainText: "Anaylzing",
      subText: "your personality"
    };
  }

  delayQuestion() {
    setTimeout(() => {
      this.setState({
        mainText: "Suggesting",
        subText: "themes and destinations"
      })
    }, 2000);

    setTimeout(() => {
      this.props.startResult();
    }, 4000);
  }

  render() {
    return (
      <ImageBackground
        source={require("../res/TitleImage.png")}
        style={styles.BackgroundImage}
      >
        <View style={{ flex: 2 }}>
          <Text style={styles.LoadingText}>{this.state.mainText}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.LoadingSubText}>{this.state.subText}</Text>
        </View>
        <View style={styles.ColumnView}>
          <LoadingAnimation1>
            <Text style={styles.DotText}>.</Text>
          </LoadingAnimation1>
          <LoadingAnimation2>
            <Text style={styles.DotText}>.</Text>
          </LoadingAnimation2>
          <LoadingAnimation3>
            <Text style={styles.DotText}>.</Text>
          </LoadingAnimation3>
          <LoadingAnimation4>
            <Text style={styles.DotText}>.</Text>
          </LoadingAnimation4>
        </View>
        {this.delayQuestion()}
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
    justifyContent: "center",
  },

  LoadingIndicator: {
    top: "30%",
  },

  LoadingText: {
    fontSize: 50,
    fontFamily: "Ubuntu-Bold",
    color: orange1,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
    textAlign: "center",
    top: "30%",
  },

  LoadingSubText: {
    fontSize: 40,
    fontFamily: "Ubuntu-Bold",
    color: orange1,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
    textAlign: "center",
    // top: "30%",
  },

  DotText: {
    fontSize: 100,
    fontFamily: "Ubuntu-Bold",
    color: orange1,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
    textAlign: "center",
    bottom: "15%",
  },

  ColumnView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
    flexDirection: "row",
  },
});
