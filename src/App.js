import React from "react";
import TitlePage from "./TitlePage";
import QuestionPage from "./QuestionPage";
import ResultPage from "./ResultPage";
import DetailPage from "./DetailPage";
import Loading1 from "./Loading1"
import Loading2 from "./Loading2"

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
    this.startLoading1 = this.startLoading1.bind(this);
    this.startLoading2 = this.startLoading2.bind(this);
  }

  startLoading1() {
    this.setState({
      progress: "Loading1",
    });
  }

  startLoading2() {
    this.setState({
      progress: "Loading2",
    });
  };


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
      return <TitlePage startButton={this.startLoading2} />;
    } else if (this.state.progress === "Loading2") {
      return <Loading2 startQuestion={this.startQuestions} />;
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
