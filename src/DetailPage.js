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
    console.log(this.props.mbti, this.props.theme);

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

/*
Themes: Relax, Family, Adventure, Local

[x] INTJ - Solo trip to a historical location
[x] INTP - Secluded nature retreat
[x] ENTJ - Backpacking journey
[x] ENTP - Lively city trip
[x] INFJ - Volunteering in a relaxing location
[x] INFP - Creative getaway with a couple of close friends
[x] ENFJ - Off-the-beaten path
[x] ENFP - Mingle with the crowds in a bustling city
[] ISTJ - History-packed excursion with a close friend
[] ISFJ - Organized camping trip with a small group of friends
[] ESTJ - Social city with a big group of friends
[] ESFJ - Picture-perfect vacation with the family
[] ISTP - Hands-on cultural experience
[] ISFP - Road trip with a few close friends
[] ESTP - High-adrenaline adventure
[] ESFP - Luxury getaway
*/

const results = [
  {
    title: "Hong Kong Museum of History",
    keyword: "Solo trip to a historical location",
    mbti: "INTJ",
    theme: ["Relax", "Family"],
    image: "../res/DetailPage/hkmh.jpg",
    body: `The Hong Kong Museum of History is a museum that preserves Hong Kong's historical and cultural heritage. 
    It is located next to the Hong Kong Science Museum, in Tsim Sha Tsui East, Kowloon, Hong Kong.
    The collections of the museum encompass natural history, archaeology, ethnography and local history.`,
    cite: `Hong Kong Museum of History. (2021, March 11). In Wikipedia. https://en.wikipedia.org/wiki/Hong_Kong_Museum_of_History`,
  },
  {
    title: "Lantau Trail",
    keyword: "Secluded nature retreat",
    mbti: "INTP",
    theme: ["Adventure"],
    image: "../res/DetailPage/lt.jpg",
    body: `The Lantau Trail (Chinese: 鳳凰徑), opened on 4 December 1984, is a long-distance footpath on Lantau Island in the New Territories of Hong Kong. 
    The 70 kilometres (43 mi) trail is a loop starting and finishing in Mui Wo. 
    It is the third longest trial in Hong Kong, after MacLehose Trail and Wilson Trail. 
    The Lantau Trail has good visitor facilities along the way, and the route is well marked. 
    There are information boards and maps at junctions between each stage. 
    Distance posts around 500 metres apart help hikers know where they are. 
    At each turning, route signs give instructions about directions, place names, and the distances and times for hiking between various locations.`,
    cite: `Lantau Trail. (2021, January 29). In Wikipedia. https://en.wikipedia.org/wiki/Lantau_Trail`,
  },
  {
    title: "Cheung Chau Island",
    keyword: "Backpacking journey",
    mbti: "ENTJ",
    theme: ["Local", "Adventure"],
    image: "../res/DetailPage/cci.jpg",
    body: `Traditionally the island was a fishing village and there are still fishing fleets working from the harbour. 
    However, in recent years the island has become a major tourist attraction, offering a mixture of sandy swimming beaches, seafood cafés, and traditional Chinese culture.`,
    cite: `Cheung Chau. (2021, March 11). In Wikipedia. https://en.wikipedia.org/wiki/Cheung_Chau`,
  },
  {
    title: "Tsim Sha Tsui",
    keyword: "Lively city trip",
    mbti: "ENTP",
    theme: ["Local", "Family"],
    image: "../res/DetailPage/tst.jpg",
    body: `Tsim Sha Tsui, often abbreviated as TST, is an urban area in southern Kowloon, Hong Kong.
    Tsim Sha Tsui is a major tourist hub in Hong Kong, with many high-end shops, bars, pubs and restaurants that cater to tourists. 
    Many of Hong Kong's museums are located in the area.`,
    cite: `Tsim Sha Tsui. (2021, March 2). In Wikipedia. https://en.wikipedia.org/wiki/Tsim_Sha_Tsui`,
  },
  {
    title: "Kadoorie Farm and Botanical Gardens",
    keyword: "Volunteering in a relaxing location",
    mbti: "INFJ",
    theme: ["Family", "Relax"],
    image: "../res/DetailPage/kfbg.jpg",
    body: `Kadoorie Farm and Botanical Garden is located near Pak Ngau Shek, encompassing Kwun Yam Shan in the central New Territories; 
    The Farm was built in a valley with streams, woodlands and terraces in 1956 by the Kadoorie Agricultural Aid Association. 
    Now it is managed to integrate nature conservation, including a rescue and rehabilitation programme for native animals, 
    along with holistic education and practices in support of a transition to sustainable living.`,
    cite: `Kadoorie Farm and Botanic Garden. (2021, April 3). In Wikipedia. https://en.wikipedia.org/wiki/Kadoorie_Farm_and_Botanic_Garden`,
  },
  {
    title: "MingCha Tea House",
    keyword: "Creative getaway with a couple of close friends",
    mbti: "INFP",
    theme: ["Realx", "Family", "Local"],
    image: "../res/DetailPage/mth.jpg",
    body: `MingCha, established in 1999 with the aim to create an environment for people to understand tea with different angles. 
    Run by artist & designer-turned entrepreneur Vivian Mak, MingCha was awarded Hong Kong Top Brand in 2017 and recognised as one of the ‘The World’s Best Tea Shops’ by FOOD & WINE Magazine.`,
    cite: "",
  },
  {
    title: "Lion Rock",
    keyword: "Off-the-beaten path",
    mbti: "ENFJ",
    theme: ["Adventure"],
    image: "../res/DetailPage/lr.jpg",
    body: `Lion Rock is noted for its shape.
    Its resemblance to a crouching lion is most striking from the Choi Hung and San Po Kong areas in East Kowloon. 
    A trail winds its way up the forested hillside to the top, culminating atop the "lion's head". 
    The trail can be followed across the profile of the lion, eventually linking up with the MacLehose Trail. 
    The rock provides a view of the city and Hong Kong Island in the distance.`,
    cite: `Lion Rock. (2021, February 28). In Wikipedia. https://en.wikipedia.org/wiki/Lion_Rock`,
  },
  {
    title: "Happy Valley Racecourse",
    keyword: "Mingle with the crowds in a bustling city",
    mbti: "ENFP",
    theme: ["Local"],
    images: "../res/DetailPage/hvr.jpg",
    body: `The Happy Valley Racecourse is one of two racecourses in Hong Kong used by the Hong Kong Jockey Club for horse racing meets, the other being the Sha Tin Racecourse. 
    Races in Happy Valley usually take place on Wednesday nights and are open to the public as well as members of the Club.`,
    cite: `Happy Valley Racecourse. (2021, March 3). In Wikipedia. https://en.wikipedia.org/wiki/Happy_Valley_Racecourse`,
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
