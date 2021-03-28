import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Title } from "react-native-paper";

class TitlePage extends React.Component {
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
          <Button mode="contained">Start!</Button>
        </View>
      </View>
    );
  }
}

class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: "Title",
      questionNum: 0,
    };
  }

  render() {
    if (this.state.progress === "Title") {
      return <TitlePage />;
    } else if (this.state.progress === "Question") {
      return <QuestionPage questionNum={this.state.questionNum} />;
    }
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

export default App;
