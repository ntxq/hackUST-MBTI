import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Title } from "react-native-paper";

export default class TitlePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={TitleStyles.TitleView}>
        <View style={TitleStyles.TitleText}>
          <Title>Placeholder Title</Title>
        </View>
        <View style={TitleStyles.ButtonView}>
          <Button mode="contained" onPress={this.props.startButton}>
            Start!
          </Button>
        </View>
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
    top: "15%",
  },
  ButtonView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
