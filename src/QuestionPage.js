import React from "react";
import Sound from "react-native-sound";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import ProgressBar from "react-native-progress/Bar";
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
  Dimensions,
  PushNotificationIOS,
} from "react-native";
import { Title } from "react-native-paper";
import { left } from "@popperjs/core";

const dimensions = Dimensions.get("window");
var buttonSound = "../sounds/buttonSound.mp3";

export default class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      questionImages: [],
      quesNum: 0,
      answers: [0,0,0,0,0,0,0,0,0,0,0,0],
      mbtiResult: [0, 0, 0, 0],
    };

    this.selectAnswerOne = this.selectAnswerOne.bind(this);
    this.selectAnswerTwo = this.selectAnswerTwo.bind(this);
    this.back = this.back.bind(this);

    //Randomly select 3 questions from each keyword, then add it to the questions pool.
    for (let i = 0; i < 3; ++i)
      mbtiQuestions.forEach((keyword) => {
        let randQuestion = Math.floor(Math.random() * keyword.questions.length);
        while (this.state.questions.includes(keyword.questions[randQuestion]))
          randQuestion = Math.floor(Math.random() * keyword.questions.length);
        this.state.questions.push(keyword.questions[randQuestion]);
        this.state.questionImages.push(randQuestion);
      });
    }


  selectAnswerOne() {
    this.state.answers[this.state.quesNum] = 1;

    if (this.state.quesNum === 11) this.finishQuestion();
    else this.setState({ quesNum: this.state.quesNum + 1 }); 
  }

  selectAnswerTwo() {
    this.state.answers[this.state.quesNum] = 0;
    if (this.state.quesNum === 11) this.finishQuestion();
    else this.setState({ quesNum: this.state.quesNum + 1 });
  }

  finishQuestion() {
    const firstMbti = "ESTJ";
    const secondMbti = "INFP";
    let mbtiResult = "";
    for(let i = 0; i < 4; ++i){
      for(let j = 0; j < 3; ++j){
        if(this.state.answers[i*3 + j] == 1){
          this.state.mbtiResult[i]++;
        }
        else if (this.state.answers[i*3 + j] == 0){
          this.state.mbtiResult[i]--;
        }
      }
    }
    for (let i = 0; i < 4; ++i)
      if (this.state.mbtiResult[i] > 0)
        mbtiResult = mbtiResult.concat(firstMbti[i]);
      else mbtiResult = mbtiResult.concat(secondMbti[i]);

    this.props.startResult(mbtiResult);
  }

  back() {
    if (this.state.quesNum == 0){
      return 0;
    }
    this.setState({quesNum : this.state.quesNum -1 });
    this.state.answers[this.state.quesNum] = 0;
  }

  render() {
    return (
      <View style={pageStyle.screenSection}>
        <View style={pageStyle.topSection}>
        <TouchableOpacity
          style={topSectionStyle.backButton}
          onPress={this.back}>
            <Text style={topSectionStyle.backText}>
            &#8592;
            </Text>
          </TouchableOpacity> 
          <View style={topSectionStyle.progressSection}>
          <ProgressBar progress={this.state.quesNum / 12} width={200} />
          </View>
          <View style={topSectionStyle.numberSection}>
            <Text style={topSectionStyle.numberText}>
            {this.state.quesNum+1} {" / 12"}
            </Text>
          </View>
          
        </View>
        <View style={pageStyle.questionSection}>
          <Text style={[questionStyle.questionText, { fontSize: RFValue(23) }]}>
            {this.state.quesNum + 1}.{" "}
            {this.state.questions[this.state.quesNum].question}
          </Text>
        </View>
        <View style={pageStyle.answerSection}>
          <TouchableOpacity
            style={[answerStyle.answerButton, { backgroundColor: "#FB9B50" }]}
            onPress={this.selectAnswerOne}
          >
            <Image
              source={this.state.questions[this.state.quesNum].images[0]}
              style={answerStyle.img}
            />
            <View>
              <Text style={answerStyle.answerText}>
                {this.state.questions[this.state.quesNum].answers[0]}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[answerStyle.answerButton, { backgroundColor:"#FB9B50" }]}
            onPress={this.selectAnswerTwo}
          >
            <Image
              source={this.state.questions[this.state.quesNum].images[1]} // replace 0 with this.state.questionImages[quesNum] when all images are ready.
              style={answerStyle.img}
            />
            <View>
              <Text style={answerStyle.answerText}>
                {this.state.questions[this.state.quesNum].answers[1]}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const images = [
  // must be an array containing images for all questions.
  [
    {
      uri:
        "https://keystoneacademic-res.cloudinary.com/image/upload/q_auto,f_auto,w_743,c_limit/element/14/144606_Intro.jpg",
    },
    {
      uri:
        "https://keystoneacademic-res.cloudinary.com/image/upload/q_auto,f_auto,w_743,c_limit/element/14/144606_Intro.jpg",
    },
  ],
  [
    {
      uri:
        "https://keystoneacademic-res.cloudinary.com/image/upload/q_auto,f_auto,w_743,c_limit/element/14/144606_Intro.jpg",
    },
    {
      uri:
        "https://keystoneacademic-res.cloudinary.com/image/upload/q_auto,f_auto,w_743,c_limit/element/14/144606_Intro.jpg",
    },
  ],
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
        images: [
          {
            uri:
              "https://live.staticflickr.com/8384/8515281675_52a52db478_b.jpg",
          },
          {
            uri: "https://live.staticflickr.com/2194/2253659828_09e51a6850.jpg",
          },
        ],
      },
      {
        id: 4,
        question: "If you're on a group tour, what kind of person are you?",
        answers: [
          "Actively engage in conversations with other people.",
          "Feels little uncomfortable to be with unfamiliar people.",
        ],
        images: [
          {
            uri: "https://live.staticflickr.com/104/268964189_d6558c118c_b.jpg",
          },
          {
            uri:
              "https://live.staticflickr.com/6093/7025676187_94300199d4_b.jpg",
          },
        ],
      },
      {
        id: 8,
        question: "What place do you like to travel?",
        answers: [
          "Cities and tourist attractions where people are crowded.",
          "Calm and peaceful places where you can feel the nature.",
        ],
        images: [
          {
            uri:
              "https://live.staticflickr.com/5266/5578052904_7da75c837a_b.jpg",
          },
          {
            uri:
              "https://live.staticflickr.com/3931/15386964336_0aff31eef5_b.jpg",
          },
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
        images: [
          {
            uri:
              "https://live.staticflickr.com/3213/2749387908_03c7184262_b.jpg",
          },
          {
            uri:
              "https://live.staticflickr.com/3804/13442542235_a0b6a8b988_b.jpg",
          },
        ],
      },
      {
        id: 5,
        question: "Which section do you read first in a travel brochure?",
        answers: [
          "The place's popular tourist attractions and restaurants.",
          "The place's history and culture.",
        ],
        images: [
          {
            uri:
              "https://live.staticflickr.com/2356/2178780826_1257d9a8a2_b.jpg",
          },
          {
            uri:
              "https://live.staticflickr.com/6020/6195316620_7f283c5ed5_b.jpg",
          },
        ],
      },
      {
        id: 6,
        question: "You found an item you must buy. What would you do?",
        answers: [
          "Look around other places to check whether they offer the item at a lower price.",
          "Purchase the item now without hesitation.",
        ],
        images: [
          {
            uri:
              "https://live.staticflickr.com/2759/4285080931_929f15bae2_b.jpg",
          },
          {
            uri: "https://media3.giphy.com/media/3oKIPa2TdahY8LAAxy/giphy.gif",
          },
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
        images: [
          {
            uri:
              "https://live.staticflickr.com/3870/14252302357_58716c3285_b.jpg",
          },
          {
            uri:
              "https://live.staticflickr.com/5461/8755479568_50583cc089_b.jpg",
          },
        ],
      },
      {
        id: 9,
        question: "How do you perceive foreign cultures?",
        answers: [
          "Ponder on reasons why the people developed a such cultures.",
          "Accept them as they are and move on.",
        ],
        images: [
          { uri: "https://live.staticflickr.com/21/26992597_9337f70168_b.jpg" },
          {
            uri:
              "https://live.staticflickr.com/8568/28198573581_f320be5522_b.jpg",
          },
        ],
      },
      {
        id: 10,
        question: "You are travelling alone! What would you do?",
        answers: [
          "Plan ahead objectives you want to gain from the travel.",
          "Great photos to upload on your SNS is what you travel for.",
        ],
        images: [
          { uri: "https://live.staticflickr.com/186/467087455_e90b880c92.jpg" },
          {
            uri: "https://live.staticflickr.com/173/420563241_b41c8cabcf_b.jpg",
          },
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
        images: [
          {
            uri:
              "https://live.staticflickr.com/3086/2808836318_3eb7e80381_b.jpg",
          },
          {
            uri:
              "https://live.staticflickr.com/3700/12335975115_f28168f502_b.jpg",
          },
        ],
      },
      {
        id: 7,
        question: "How do you travel new places?",
        answers: [
          "Travel as planned before.",
          "Enjoy the unfamiliarity; travel as you feel.",
        ],
        images: [
          {
            uri: "https://live.staticflickr.com/142/317952268_14e96a11bb_b.jpg",
          },
          {
            uri:
              "https://live.staticflickr.com/65535/50403887282_59b075c8ec_b.jpg",
          },
        ],
      },
      {
        id: 11,
        question: "This trip was successful because...",
        answers: [
          "You experienced everything you planned.",
          "You had new experience you didn't expect.",
        ],
        images: [
          {
            uri:
              "https://live.staticflickr.com/8330/8395558118_eff23cf9b6_b.jpg",
          },
          {
            uri: "https://live.staticflickr.com/225/489175320_e8da42206e_b.jpg",
          },
        ],
      },
    ],
  },
];

const pageStyle = StyleSheet.create({
  screenSection: {
    backgroundColor: "#11224D",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  //  backgroundColor: "#11224D"
  },
  topSection: {
    flex: 1.3,
    flexDirection: "row",
    backgroundColor: "#FB9B50",
    justifyContent: "flex-end"
  },
  questionSection: {
    flex: 2,
    alignItems: "center",
  },
  answerSection: {
    flex: 14,
    alignItems: "center",
  },
});
const questionStyle = StyleSheet.create({
  questionText: {
    marginHorizontal: 15,
    textAlign: "center",
    paddingTop: 15,
    color: 'white',
    fontFamily: 'NanumBrushScript-Regular',
  },
});

const answerStyle = StyleSheet.create({
  answerButton: {
    flex: 5,
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    width: "80%",
  },
  answerText: {
    textAlign: "center",
    fontSize: 26,
    fontFamily: 'NanumBrushScript-Regular',
  },
  img: {
    flex: 1,
    width: 0.8 * dimensions.width,
    borderRadius: 10,
    borderColor:"#FB9B50",
    borderWidth: 10,
  },
});

const topSectionStyle = StyleSheet.create({
  progressSection:{
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  numberSection:{
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  backButton:{
    flex: 1.5,
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "center",
    textAlignVertical: "center",
  },
  backText: {
    color: "white",
    fontSize: RFValue(30),
    fontWeight:"bold",
    justifyContent: "center",
  },
  numberText: {
    color: "white",
    fontSize: RFValue(17),
    fontWeight: "bold",
  }
})