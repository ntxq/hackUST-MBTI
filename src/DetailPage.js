import React from "react";
import { StyleSheet, ScrollView, View, ImageBackground } from "react-native";
import {
  Button,
  Card,
  Portal,
  Modal,
  Snackbar,
  Subheading,
  Title,
  Text,
  Paragraph,
} from "react-native-paper";
import GestureRecognizer from "react-native-swipe-gestures";
import { results } from "./Places.js";
import Icon from "react-native-vector-icons/FontAwesome5";

class SwipeText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <Snackbar
        visible={this.state.visible}
        onDismiss={this.onDismiss}
        action={{ label: "Close", onPress: this.onDismiss }}
      >
        Swipe left to return to the previous page.
      </Snackbar>
    );
  }
}
class DetailCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ modalVisible: true });
  }

  hideModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    const iconsMap = {
      Relax: "couch",
      Adventure: "hiking",
      Family: "child",
      Local: "language",
      Attraction: "landmark",
      Backpacking: "hiking",
      Friends: "users",
      History: "book-open",
      Luxury: "coins",
      Nature: "leaf",
    };

    const icons = this.props.place.theme.map((theme) => {
      return (
        <Icon
          name={iconsMap[theme]}
          color="grey"
          key={theme}
          style={{ marginRight: 10, marginBottom: 3 }}
        >
          {" " + theme}
        </Icon>
      );
    });

    return (
      <View>
        <Portal>
          <Modal
            visible={this.state.modalVisible}
            onDismiss={this.hideModal}
            contentContainerStyle={styles.modal}
          >
            <Title style={styles.modalTitle}>{this.props.place.title}</Title>
            <Subheading style={styles.modalSubtitle}>
              {this.props.place.keyword}
            </Subheading>
            <View style={{ flexDirection: "row" }}>{icons}</View>
            <Paragraph style={styles.modalPar}>
              {this.props.place.body}
            </Paragraph>
          </Modal>
        </Portal>
        <Card style={styles.card} onPress={this.showModal}>
          <Card.Cover source={this.props.place.image} />
          <Card.Title
            title={this.props.place.title}
            titleStyle={styles.cardTitle}
            subtitle={this.props.place.keyword}
            subtitleStyle={styles.cardSubtitle}
          />
        </Card>
      </View>
    );
  }
}

export default class DetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  onSwipeLeft(state) {
    console.log(state);
    this.props.startResult();
  }

  render() {
    console.log(this.props.mbti, this.props.theme);

    let rcmdCards = results
      .filter((place) => {
        let score = 0;
        for (let i = 0; i < 4; ++i)
          if (this.props.mbti[i] === place.mbti[i]) ++score;
        if (place.theme.includes(this.props.theme)) score += 2;

        return score > 3;
      })
      .map((place) => {
        return <DetailCard place={place} key={place.title} />;
      });

    return (
      <ImageBackground
        source={require("../res/TitleImage.png")}
        style={{ flex: 1 }}
      >
        <GestureRecognizer
          style={styles.container}
          config={{
            directionalOffsetThreshold: 20,
            gestureIsClickThreshold: 50,
          }}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
        >
          <ScrollView style={styles.scroll}>{rcmdCards}</ScrollView>
          <SwipeText />
        </GestureRecognizer>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  scroll: {
    flex: 1,
  },
  card: {
    flex: 1,
    margin: 15,
    borderWidth: 5,
    borderColor: "#F98125",
  },
  cardTitle: {
    fontFamily: "Ubuntu-Bold",
  },
  cardSubtitle: {
    fontFamily: "Ubuntu-Regular",
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
  },
  modalTitle: {
    fontFamily: "Ubuntu-Bold",
  },
  modalSubtitle: {
    fontFamily: "Ubuntu-Medium",
  },
  modalPar: {
    marginTop: 5,
    textAlign: "left",
    fontFamily: "Ubuntu-Regular",
  },
});
