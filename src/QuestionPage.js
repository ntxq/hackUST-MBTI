import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, ImageBackground, AppRegistry, Text, TextInput } from "react-native";
import { Headline, Button } from "react-native-paper";


export default class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quesNum: 0,
      color: 0,
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
    // 4 selections
    if(answers[this.state.quesNum].length == 4){
    return (
      //<TouchableOpacity style={questionStyles.touchable}>
      <View style={questionStyles.questionScreen}>
        <Text style={questionStyles.questionText}>
          {questions[this.state.quesNum]}
        </Text>
        <View style={questionStyles.questionAnswers}>
           <TouchableOpacity style={questionStyles.button} onPress={this.selectAnswer}>
           <Image source={{uri: 'https://keystoneacademic-res.cloudinary.com/image/upload/q_auto,f_auto,w_743,c_limit/element/14/144606_Intro.jpg'}}
       style={questionStyles.img}/>
              <Text style={questionStyles.answerText}>  
              {answers[this.state.quesNum][0]} 
             </Text>
            </TouchableOpacity>
          <TouchableOpacity style={questionStyles.button} onPress={this.selectAnswer}>
          <Image source={{uri: 'https://files.klgates.com/images/office/107906_image.png'}}
       style={questionStyles.img}/>
            <Text style={questionStyles.answerText}>  
            {answers[this.state.quesNum][1]} 
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={questionStyles.button} onPress={this.selectAnswer}>
          <Image source={{uri: 'https://eturbonews.com/wp-content/uploads/2020/04/lvmh-prada-hong-kong-luxury-retail-rents.jpg'}}
       style={questionStyles.img}/>
            <Text style={questionStyles.answerText}>  
            {answers[this.state.quesNum][2]} 
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={questionStyles.button} onPress={this.selectAnswer}>
          <Image source={{uri: 'https://static01.nyt.com/images/2020/06/03/world/03hongkong-damages-1/03hongkong-damages-1-mediumSquareAt3X.jpg'}}
       style={questionStyles.img}/>
            < Text style={questionStyles.answerText}>  
            {answers[this.state.quesNum][3]} 
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      //</TouchableOpacity>
    );
  }
  // 5 selections
  /*

  else if(answers[this.state.quesNum].length == 5){
    
    return (
      <View style={questionStyles.questionScreen}>
        <Headline style={questionStyles.questionText}>
          {questions[this.state.quesNum]}
        </Headline>
        <View style={questionStyles.questionAnswers}>
        <Button style={[questionStyles.answerBox, colorStyles]} onPress={this.selectAnswer}>
            <Text style={questionStyles.answerText}>  
            {answers[this.state.quesNum][0]} 
            </Text>
          </Button>
          <Button style={questionStyles.answerBox} onPress={this.selectAnswer}>
            <Text style={questionStyles.answerText}>  
            {answers[this.state.quesNum][1]} 
            </Text>
          </Button>
          <Button style={questionStyles.answerBox} onPress={this.selectAnswer}>
            <Text style={questionStyles.answerText}>  
            {answers[this.state.quesNum][2]} 
            </Text>
          </Button>
          <Button style={questionStyles.answerBox} onPress={this.selectAnswer}>
            < Text style={questionStyles.answerText}>  
            {answers[this.state.quesNum][3]} 
            </Text>
          </Button>
          <Button style={questionStyles.answerBox} onPress={this.selectAnswer}>
            < Text style={questionStyles.answerText}>  
            {answers[this.state.quesNum][4]} 
            </Text>
          </Button>
        </View>
      </View>
    );
   }
   */
  }
}



const colors = [
  '#87CEFA', // lightskyblue
  '#E6E6FA', // lavender
  '#F08080', // lightcoral
  '#FFEBCD', // blanchedalmond
  '#98FB98', // palegreen
]

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
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    },

  questionText: {
    marginHorizontal : 30,
    flex: 1,
    textAlign: "center",
    fontSize:25,
    color: `#9932cc`,
    backgroundColor: `#fffacd` 
  },

  questionAnswers: {
    flex : 8,
    alignItems: 'center',
  },

  button:{
    flex: 5,
    alignItems: "center",
    backgroundColor : colors[(Math.floor(Math.random())*10) % 5],
    margin:10,
  },

  answerText :{
    fontSize : 30,
    textTransform: 'capitalize',
  },
  img: {
    width : 300,
    height : 100,
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center'
  },
}); 