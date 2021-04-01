import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  SectionList,
  StatusBar,
} from "react-native";
import Swiper from "react-native-swiper";
import Item from "./ResultItem.js";

export default class ResultPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Swiper paginationStyle={{ bottom: 1 }}>
        <View style={styles.container}>
          <Text style={styles.header1}>Your Preference{"\n"}Analysis</Text>
          <View style={styles.result}>
            <Image
              resizeMode={"center"}
              style={{ flex: 5, aspectRatio: 1 }}
              source={require("../res/dummy-word-cloud.jpg")}
            />
          </View>
          <Text style={styles.footer}>Swipe to see suggestions➟➟</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles2.header1}>
            Suggestion{"\n"}(tap to see detail)
          </Text>
          <SafeAreaView style={styles2.container}>
            <SectionList
              sections={DATA}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => <Item data={item} />}
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
    backgroundColor: "lightgrey",
  },
  header2: {
    textAlign: "center",
    fontSize: 20,
    textAlignVertical: "center",
    flex: 1,
    backgroundColor: "skyblue",
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
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
  },
  footer: {
    flex: 1,
    backgroundColor: "ivory",
    textAlignVertical: "bottom",
    textAlign: "right",
    fontSize: 20,
    paddingBottom: 8,
  },
});

const styles2 = StyleSheet.create({
  header1: {
    textAlign: "center",
    fontSize: 20,
    textAlignVertical: "center",
    flex: 1,
    backgroundColor: "lightgrey",
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
