import React from "react";
import TitlePage from "./TitlePage";
import QuestionPage from "./QuestionPage";
import ResultPage from "./ResultPage";
import DetailPage from "./DetailPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: "Title",
    };

    this.startQuestions = this.startQuestions.bind(this);
    this.startResult = this.startResult.bind(this);
    this.startDetail = this.startDetail.bind(this);
  }

  startQuestions() {
    console.log("questions started");
    this.setState({
      progress: "Questions",
    });
  }

  startResult() {
    console.log("result is executed");
    this.setState({
      progress: "Result",
    });
  }

  startDetail() {
    console.log("start detail is executed");
    this.setState({
      progress: "Detail"
    });
  }

  render() {
    if (this.state.progress === "Title") {
      return <TitlePage startButton={this.startQuestions} />;
    } else if (this.state.progress === "Questions") {
      return <QuestionPage startResult={this.startResult} />;
    } else if (this.state.progress === "Result") {
      return <ResultPage startDetail={this.startDetail} />;
    } else if (this.state.progress === "Detail") {
      return <DetailPage />;
    }
  }
}

export default App;
