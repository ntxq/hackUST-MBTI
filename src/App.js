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
      mbti: "",
      theme: "",
    };

    this.startQuestions = this.startQuestions.bind(this);
    this.startResult = this.startResult.bind(this);
    this.startDetail = this.startDetail.bind(this);
  }

  startQuestions() {
    this.setState({
      progress: "Questions",
    });
  }

  startResult(result) {
    this.setState({
      progress: "Result",
      mbti: result,
    });
  }

  startDetail(theme) {
    this.setState({
      progress: "Detail",
      theme: theme,
    });
  }

  render() {
    if (this.state.progress === "Title") {
      return <TitlePage startButton={this.startQuestions} />;
    } else if (this.state.progress === "Questions") {
      return <QuestionPage startResult={this.startResult} />;
    } else if (this.state.progress === "Result") {
      return (
        <ResultPage mbti={this.state.mbti} startDetail={this.startDetail} />
      );
    } else if (this.state.progress === "Detail") {
      return (
        <DetailPage
          theme={this.state.theme}
          mbti={this.state.mbti}
          startResult={this.startResult.bind(this, this.state.mbti)}
        />
      );
    }
  }
}

export default App;
