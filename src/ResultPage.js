import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  SectionList,
  StatusBar,
  Share,
  TouchableOpacity,
} from "react-native";
import ImageModal from 'react-native-image-modal';

import Swiper from "react-native-swiper";
import Item from "./ResultItem.js";

export default class ResultPage extends React.Component {
  constructor(props) {
    super(props);
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `[Share button test] My personality type: ${this.props.mbti.toLowerCase()}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch(error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <Swiper paginationStyle={{ bottom: 1 }} autoplay={false}>
        <View style={styles.container}>
          <Text
            style={styles.header1}
            onPress={(e) =>
              console.log(
                `https://www.traitlab.com/blog/static_assets/images/words_describing_${this.props.mbti.toLowerCase()}.png`
              )
            }
          >
            Your Preference{"\n"}Analysis
          </Text>
          <View style={styles.result}>
            
            <View style={{flex: 3, width: "100%", backgroundColor: "skyblue", alignItems: "center", justifyContent: "center"}}>
              <Text>My Personality Type: {this.props.mbti}</Text>
              <ImageModal
                swipeToDismiss={false}
                resizeMode="contain"
                imageBackgroundColor="#000000"
                style={{
                  height: "100%",
                  width: 300
                }}
                source={{
                  uri: `https://www.traitlab.com/blog/static_assets/images/words_describing_${this.props.mbti.toLowerCase()}.png`
                }}
              />
            </View>
            <View style={{flex: 1, width: "100%", backgroundColor: "#2C599D", alignItems: "center", justifyContent: "center"}}><Text style={{color: "white", fontSize: 22}}>Related Theme</Text></View>
            <View style={{flex: 2, width: "100%", backgroundColor: "ivory", flexDirection: "row"}}>
              <View style={{backgroundColor: "#5B84C4", flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text style={{color: "#f7f2f2"}}>{characterToType[this.props.mbti][0]}</Text>
                <Image
                  resizeMode={"center"}
                  style={{ flex: 1, width: "100%" }}
                  source={
                    require(`../res/theme/solotrip.jpg`)
                }/>
              </View>
              <View style={{backgroundColor: "#5B84C4", flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text style={{color: "#f7f2f2"}}>{characterToType[this.props.mbti][1]}</Text>
                <Image
                  resizeMode={"center"}
                  style={{ flex: 1, width: "100%" }}
                  source={
                    require(`../res/theme/relax.jpg`)
                }/>
              </View>
            </View>
            <View style={{flex: 2, width: "100%", backgroundColor: "ivory", flexDirection: "row"}}>
              <View style={{backgroundColor: "#5B84C4", flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text style={{color: "#f7f2f2"}}>{characterToType[this.props.mbti][2]}</Text>
                <Image
                  resizeMode={"center"}
                  style={{ flex: 1, width: "100%" }}
                  source={
                    require(`../res/theme/attraction.jpg`)
                }/>
              </View>
              <View style={{backgroundColor: "#5B84C4", flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text style={{color: "#f7f2f2"}}>{characterToType[this.props.mbti][3]}</Text>
                <Image
                  resizeMode={"center"}
                  style={{ flex: 1, width: "100%" }}
                  source={
                    require(`../res/theme/nature.jpg`)
                }/>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={{flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}} onPress={this.onShare}>
              <Image
                source={require('../res/share_logo.png')}
                style={styles.buttonImageIconStyle}
              />
              <Text style={{color: "#fff", fontSize: 14}}>Share your result!</Text>
            </TouchableOpacity>
            <Text style={{textAlign: "center", paddingTop: 5}}>Swipe to see suggestions➟➟</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles2.header1}>
            Suggestion{"\n"}(tap to see detail)
          </Text>
          <SafeAreaView style={styles2.container}>
            <SectionList
              sections={DATA}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item, section }) => (
                <Item
                  data={item}
                  onPress={this.props.startDetail.bind(this, section.theme)}
                />
              )}
              renderSectionHeader={({ section: { theme } }) => (
                <Text style={styles2.header}>{theme}</Text>
              )}
            />
          </SafeAreaView>
        </View>
      </Swiper>
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
[x] ISTJ - History-packed excursion with a close friend
[x] ISFJ - Organized camping trip with a small group of friends
[x] ESTJ - Social city with a big group of friends
[x] ESFJ - Picture-perfect vacation with the family
[x] ISTP - Hands-on cultural experience
[x] ISFP - Road trip with a few close friends
[x] ESTP - High-adrenaline adventure
[x] ESFP - Luxury getaway
*/
const characterToType = {
  "INTJ": ["History", "Solo Trip", "Local", ],
  "INTP": ["Nature", "Family", "Local", ""],
  "ENTJ": ["Backpacking", "Adventure", "Nature", "Friends"],
  "ENTP": ["City", "Adventure", "Attractions", "Local"],
  "INFJ": ["Family", "Nature", "Volunteer"],
  "INFP": ["Friends", "City", "Attractions", "Family"],
  "ENFJ": ["Solo Trip", "Nature", "Adventure", ""],
  "ENFP": ["City", "Friends", "Festival", "Local"],
  "ISTJ": ["City", "Adventure", "Attractions", ""],
  "ISFJ": ["Family", "Nature", ""],
  "ESTJ": ["History", "Solo Trip", "Local", ],
  "ESFJ": ["Family", "Nature", "City", ""],
  "ISTP": ["Nature", "Family", "Local", ""],
  "ISFP": ["Nature", "Adventure", "Friends", ""],
  "ESTP": ["Adventure", "Nature", "Attractions", ""],
  "ESFP": ["Luxury", "City", "Attractions", "Relax"],
}

const theme = {

}

const DATA = [
  {
    theme: "Relax",
    data: [
      {
        name: "Package 1",
        duration: "✔️Two-day trip",
        destinations: [
          "Wan Cai",
          "Lantau Island",
          "Causeway Bay",
          "HK Disney Land",
          "Temple Street",
          "The Peak",
        ],
        cost: 1500,
        uri:
          "https://www.theinvisibletourist.com/wp-content/uploads/2018/02/featured_96-1.jpg",
      },
      {
        name: "Package 2",
        duration: "✔️One-day trip",
        destinations: ["Wan Cai", "Lantau Island"],
        cost: 800,
        uri:
          "https://hoponworld.com/wp-content/uploads/2020/04/hong-kong-victoria-peak-tram.jpg",
      },
      {
        name: "Package 3",
        duration: "✔️Two-day trip",
        destinations: [
          "Wan Cai",
          "Lantau Island",
          "Causeway Bay",
          "HK Disney Land",
          "Temple Street",
          "The Peak",
          "Wan Cai",
          "Lantau Island",
          "Causeway Bay",
        ],
        cost: 3300,
        uri:
          "https://3o7tpx32lt6v2lcovs4a53lb-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/hong-kong-day-trips-whats-on.png",
      },
    ],
  },
  {
    theme: "Family",
    data: [
      {
        name: "Package 1",
        duration: "✔️Two-day trip",
        destinations: [
          "Wan Cai",
          "Lantau Island",
          "Causeway Bay",
          "HK Disney Land",
          "Temple Street",
          "The Peak",
        ],
        cost: 1500,
        uri:
          "https://hoponworld.com/wp-content/uploads/2020/04/hong-kong-ferris-wheel.jpg",
      },
      {
        name: "Package 2",
        duration: "✔️One-day trip",
        destinations: ["Wan Cai", "Lantau Island"],
        cost: 800,
        uri:
          "https://www.theinvisibletourist.com/wp-content/uploads/2018/02/featured_96-1.jpg",
      },
    ],
  },
  {
    theme: "Adventure",
    data: [
      {
        name: "Package 1",
        duration: "✔️Two-day trip",
        destinations: [
          "Wan Cai",
          "Lantau Island",
          "Causeway Bay",
          "HK Disney Land",
          "Temple Street",
          "The Peak",
        ],
        cost: 1500,
        uri:
          "https://hoponworld.com/wp-content/uploads/2020/04/hong-kong-victoria-peak-tram.jpg",
      },
      {
        name: "Package 2",
        duration: "✔️One-day trip",
        destinations: ["Wan Cai", "Lantau Island"],
        cost: 800,
        uri:
          "https://3o7tpx32lt6v2lcovs4a53lb-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/hong-kong-day-trips-whats-on.png",
      },
      {
        name: "Package 3",
        duration: "✔️Two-day trip",
        destinations: [
          "Wan Cai",
          "Lantau Island",
          "Causeway Bay",
          "HK Disney Land",
          "Temple Street",
          "The Peak",
          "Wan Cai",
          "Lantau Island",
          "Causeway Bay",
        ],
        cost: 3300,
        uri:
          "https://www.theinvisibletourist.com/wp-content/uploads/2018/02/featured_96-1.jpg",
      },
    ],
  },
  {
    theme: "Local",
    data: [
      {
        name: "Package 1",
        duration: "✔️Two-day trip",
        destinations: [
          "Wan Cai",
          "Lantau Island",
          "Causeway Bay",
          "HK Disney Land",
          "Temple Street",
          "The Peak",
        ],
        cost: 1500,
        uri:
          "https://www.chinadiscovery.com/assets/images/hongkong/tour/hong-kong-walking-exploration-512.jpg",
      },
    ],
  },
];

const styles = StyleSheet.create({
  header1: {
    textAlign: "center",
    fontSize: 20,
    textAlignVertical: "center",
    flex: 1,
    backgroundColor: "#faa564",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  header2: {
    textAlign: "center",
    fontSize: 20,
    textAlignVertical: "center",
    flex: 1,
    backgroundColor: "#faa564",
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 6,
    paddingBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    // alignItems: "center"
  },
  result: {
    flex: 6,
    alignItems: "center",
    width: "100%"
  },
  footer: {
    flex: 1,
    backgroundColor: "#6c8ec4",
    fontSize: 20,
    width: "100%",
    paddingBottom: 8,
    justifyContent: "flex-end",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  }
});

const styles2 = StyleSheet.create({
  header1: {
    textAlign: "center",
    fontSize: 20,
    textAlignVertical: "center",
    flex: 1,
    backgroundColor: "#faa564",
    borderBottomEndRadius: 5,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "lightblue",
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  theme: {
    fontSize: 24,
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  detail: {
    fontSize: 15,
  },
  container: {
    flex: 7,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 3,
    marginBottom: 20,
    // alignItems: "center"
  },
});
