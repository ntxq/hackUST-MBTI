import React from "react";

import Sound from "react-native-sound";

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  AppRegistry,
  Text,
  TextInput,
  Pressable,
  Dimensions
} from "react-native";
import { Title } from "react-native-paper"; 

const dimensions = Dimensions.get('window');

const buttonSound = require('E:/ABC/hackUST/sounds/buttonSound.mp3');

export default class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      questionImages: [],
      quesNum: 0,
    };

    this.selectAnswer = this.selectAnswer.bind(this);

    //Randomly select 3 questions from each keyword, then add it to the questions pool.
    for (let i = 0; i < 3; ++i)
      mbtiQuestions.forEach((keyword) => {
        let randQuestion = Math.floor(Math.random() * keyword.questions.length);
        while (this.state.questions.includes(keyword.questions[randQuestion]))
          randQuestion = Math.floor(Math.random() * keyword.questions.length);
        this.state.questions.push(keyword.questions[randQuestion]);
        this.state.questionImages.push(randQuestion)
      });
  }

  selectAnswer() {
    if (this.state.quesNum < 11)
      this.setState({
        quesNum: this.state.quesNum + 1,
      });
    else this.props.startResult();
  }

  
  render() {
    return (
      <View style={pageStyle.screenSection}>
        <View style={pageStyle.questionSection}>
          <Text style ={questionStyle.questionText}>{this.state.questions[this.state.quesNum].question}</Text>
        </View>

        <View style={pageStyle.answerSection}>
          <TouchableOpacity style ={answerStyle.answerButton} onPress={this.selectAnswer}>
          <Image
                source={images[0][0]}
                style={answerStyle.img}
              />
            <View>
              <Text style={answerStyle.answerText}>{this.state.questions[this.state.quesNum].answers[0]}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style ={answerStyle.answerButton} onPress={this.selectAnswer}>
          <Image
                source={images[0][1]} // replace 0 with this.state.questionImages[quesNum] when all images are ready.
                style={answerStyle.img}
              />
            <View>
              <Text style={answerStyle.answerText}>{this.state.questions[this.state.quesNum].answers[1]}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const colors = [
  "#87CEFA", // lightskyblue
  "#E6E6FA", // lavender
  "#F08080", // lightcoral
  "#FFEBCD", // blanchedalmond
  "#98FB98", // palegreen
];

const images = [ // must be an array containing images for all questions.
  [{uri: "https://keystoneacademic-res.cloudinary.com/image/upload/q_auto,f_auto,w_743,c_limit/element/14/144606_Intro.jpg"},
  {uri: "https://keystoneacademic-res.cloudinary.com/image/upload/q_auto,f_auto,w_743,c_limit/element/14/144606_Intro.jpg"}],
  [{uri: "https://keystoneacademic-res.cloudinary.com/image/upload/q_auto,f_auto,w_743,c_limit/element/14/144606_Intro.jpg"},
  {uri: "https://keystoneacademic-res.cloudinary.com/image/upload/q_auto,f_auto,w_743,c_limit/element/14/144606_Intro.jpg"}],
];
// Energy: Extraversion vs Introversion
// Information: Sensing vs Intuition
// Conclusion: Thinking vs Feeling
// Approach: Judging vs Perceiving
const ENERGY = "energy",
  INFORMATION = "information",
  CONCLUSION = "conclusion",
  APPROACH = "approach";

const mbtiQuestions = [
  {
    keyword: ENERGY,
    questions: [
      {
        id: 0,
        question:
          "After a busy week, you finally arrived at your travel destination on Friday night. What should you do?",
        answers: [
          "The moment you arrive is the start of your vacation; go out to the streets and enjoy the night.",
          "Rest in a hotel to recharge energy.",
        ],
      },
      {
        id: 4,
        question: "If you're on a group tour, what kind of person are you?",
        answers: [
          "Actively engage in conversations with other people.",
          "Feels little uncomfortable to be with unfamiliar people.",
        ],
      },
      {
        id: 8,
        question: "What place do you like to travel?",
        answers: [
          "Cities and tourist attractions where people are crowded.",
          "Calm and peaceful places where you can feel the nature.",
        ],
      },
    ],
  },
  {
    keyword: INFORMATION,
    questions: [
      {
        id: 1,
        question: "Which answer best describes your character?",
        answers: [
          "I can remember my past trips even if I traveled only once.",
          "I can't remember my past trips well.",
        ],
      },
      {
        id: 5,
        question: "Which section do you read first in a travel brochure?",
        answers: [
          "The place's popular tourist attractions and restaurants.",
          "The place's history and culture.",
        ],
      },
      {
        id: 6,
        question: "You found an item you must buy. What would you do?",
        answers: [
          "Look around other places to check whether they offer the item at a lower price.",
          "Purchase the item now without hesitation.",
        ],
      },
    ],
  },
  {
    keyword: CONCLUSION,
    questions: [
      {
        id: 2,
        question:
          "If you do not like the travel plan composed by your friend...",
        answers: [
          "Approach your friend directly and discuss how it should be changed",
          "Keep up with the schedule since your friend worked hard on it.",
        ],
      },
      {
        id: 9,
        question: "How do you perceive foreign cultures?",
        answers: [
          "Ponder on reasons why the people developed a such cultures.",
          "Accept them as they are and move on.",
        ],
      },
      {
        id: 10,
        question: "You are travelling alone! What would you do?",
        answers: [
          "Plan ahead objectives you want to gain from the travel.",
          "Great photos to upload on your SNS is what you travel for.",
        ],
      },
    ],
  },
  {
    keyword: APPROACH,
    questions: [
      {
        id: 3,
        question: "How do you check-in your flight?",
        answers: [
          "Pre-check-in and reserve your seat a day before the flight.",
          "Check-in at the kiosk at the airport on the day of departure.",
        ],
      },
      {
        id: 7,
        question: "How do you travel new places?",
        answers: [
          "Travel as planned before.",
          "Enjoy the unfamiliarity; travel as you feel.",
        ],
      },
      {
        id: 11,
        question: "This trip was successful because...",
        answers: [
          "You experienced everything you planned.",
          "You had new experience you didn't expect.",
        ],
      },
    ],
  },
];

const pageStyle = StyleSheet.create({
screenSection:{
  flex:1,
  flexDirection: "column",
  marginVertical: 20,
  alignItems: "center",
  justifyContent: "center",
},
questionSection:{
  flex:1
},
answerSection:{
  flex:8
},
});
const questionStyle = StyleSheet.create({
questionText:{
  marginHorizontal:15,
  fontSize: 25,
  textAlign: "center",
}
});

const answerStyle = StyleSheet.create({
answerButton:{
  flex: 5,
    alignItems: "center",
    backgroundColor: colors[(Math.floor(Math.random()) * 10) % 5],
    margin: 10,
    borderRadius: 10,
    width : '80%'
},
answerText:{
  textAlign: "center",
  fontSize: 20,
},
img: {
  flex : 1,
  width : 0.8*dimensions.width,
  borderRadius: 10,
},
})