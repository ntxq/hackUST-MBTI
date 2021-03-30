import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import {
  Card,
  Portal,
  Modal,
  Subheading,
  Title,
  Paragraph,
} from "react-native-paper";

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
    return (
      <View>
        <Portal>
          <Modal
            visible={this.state.modalVisible}
            onDismiss={this.hideModal}
            contentContainerStyle={styles.modal}
          >
            <Title>{this.props.title}</Title>
            <Subheading>{this.props.keyword}</Subheading>
            <Paragraph style={styles.modalPar}>
              Placeholder TEXT Placeholder TEXT Placeholder TEXT Placeholder
              TEXT Placeholder TEXT Placeholder TEXT Placeholder TEXT
            </Paragraph>
          </Modal>
        </Portal>
        <Card style={styles.card} onPress={this.showModal}>
          <Card.Cover source={{ uri: this.props.src }} />
          <Card.Title title={this.props.title} subtitle={this.props.keyword} />
        </Card>
      </View>
    );
  }
}

export default class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommended: [0, 1, 2, 3, 4],
    };
  }

  render() {
    let rcmdCards = this.state.recommended.map((i) => (
      <DetailCard
        src={results[i].img}
        title={results[i].title}
        keyword={results[i].keyword}
        key={i}
      />
    ));

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>{rcmdCards}</ScrollView>
      </View>
    );
  }
}

const results = [
  {
    title: "Causeway Bay",
    budget: "high",
    distance: "low",
    activity: "low",
    keyword: "Shopping",
    img:
      "https://a.cdn-hotels.com/gdcs/production187/d798/edf2bf65-a60c-4439-af55-dab3877cd306.jpg",
  },
  {
    title: "HK Disney Land",
    budget: "high",
    distance: "medium",
    activity: "medium",
    keyword: "Family",
    img:
      "https://a.cdn-hotels.com/gdcs/production20/d1311/ad0141fc-0d93-4b93-8bfb-a531f382a5d9.jpg",
  },
  {
    title: "Lantau Island",
    budget: "low",
    distance: "high",
    activity: "medium",
    keyword: "Religion",
    img:
      "https://a.cdn-hotels.com/gdcs/production60/d28/e48a8f85-69fb-4c33-88cd-6029c5ee149e.jpg",
  },
  {
    title: "Temple Street Night Market",
    budget: "low",
    distance: "low",
    activity: "low",
    keyword: "Shopping, Food",
    img:
      "https://a.cdn-hotels.com/gdcs/production147/d1521/ba9d32f9-32ec-4e65-8754-c96f059fe4b2.jpg",
  },
  {
    title: "The Peak",
    budget: "low",
    distance: "medium",
    activity: "medium",
    keyword: "Photo",
    img:
      "https://a.cdn-hotels.com/gdcs/production20/d1381/1cc0edb6-66cb-4008-9e14-2045ea2de31e.jpg",
  },
];

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
    margin: 20,
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
  },
  modalPar: {
    marginTop: 20,
  },
});
