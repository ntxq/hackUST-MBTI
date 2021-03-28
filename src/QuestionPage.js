import React from "react";
import { StyleSheet, View } from "react-native";
import { Headline, Button } from "react-native-paper";

export default class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quesNum: 0,
    };

    this.selectAnswer = this.selectAnswer.bind(this);
  }

  selectAnswer() {
    if (this.state.quesNum < questions.length - 1)
      this.setState({
        quesNum: this.state.quesNum + 1,
      });
    else this.props.startResult();
  }

  render() {
    return (
      <View style={questionStyles.questionScreen}>
        <Headline style={questionStyles.questionText}>
          {questions[this.state.quesNum]}
        </Headline>
        <View style={questionStyles.questionAnswers}>
          <Button style={questionStyles.answerBox} onPress={this.selectAnswer}>
            {answers[this.state.quesNum][0]}
          </Button>
          <Button style={questionStyles.answerBox} onPress={this.selectAnswer}>
            {answers[this.state.quesNum][1]}
          </Button>
          <Button style={questionStyles.answerBox} onPress={this.selectAnswer}>
            {answers[this.state.quesNum][2]}
          </Button>
          <Button style={questionStyles.answerBox} onPress={this.selectAnswer}>
            {answers[this.state.quesNum][3]}
          </Button>
        </View>
      </View>
    );
  }
}

const questions = [
  "How much money should I spend on this trip?",
  "How far away should this trip be?",
  "How active do I want this trip to be?",
  "With whom should I go travel with?",
  "What do I want to learn from this trip?",
];

const answers = [
  ["Lot", "Average", "Little", "Don't Care"],
  ["Far", "Average", "Close", "Don't Care"],
  ["Active", "Average", "Lazy", "Don't Care"],
  ["Family", "Couple", "Alone", "Don't Care"],
  ["History", "Nightlife", "Religion", "Don't Care"],
];

const questionStyles = StyleSheet.create({
  questionScreen: {
    flex: 1,
    flexDirection: "column",
  },

  questionText: {
    flex: 2,
  },

  questionAnswers: {
    flex: 6,
    alignItems: "center",
  },

  answerBox: {
    padding: 20,
    margin: 10,
  },
});
