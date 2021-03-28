import React from "react";
import TitlePage from "./TitlePage";
import QuestionPage from "./QuestionPage";
import ResultPage from "./ResultPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: "Title",
    };

    this.startQuestions = this.startQuestions.bind(this);
    this.startResult = this.startResult.bind(this);
  }

  startQuestions() {
    this.setState({
      progress: "Questions",
    });
  }

  startResult() {
    this.setState({
      progress: "Result",
    });
  }

  render() {
    if (this.state.progress === "Title") {
      return <TitlePage startButton={this.startQuestions} />;
    } else if (this.state.progress === "Questions") {
      return <QuestionPage startResult={this.startResult} />;
    } else if (this.state.progress === "Result") {
      return <ResultPage />;
    }
  }
}

export default App;
