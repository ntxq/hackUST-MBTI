import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// class Item extends React.Component {
//   constructor(props, data) {
//     super(props);
//   }
  
//   render(data) {
//     return (
//       <View style={styles2.item}>
//         <View style={{ flex: 1 }}>
//           <Image
//             resizeMode={"contain"}
//             style={{ aspectRatio: 1 }}
//             source={{ uri: data.uri }}
//           />
//         </View>
//         <View style={{ flex: 2, paddingLeft: 10 }}>
//           <Text style={styles2.theme}>{data.name}</Text>
//           <Text style={styles2.detail}>{data.duration}</Text>
//           <Text style={styles2.detail}>
//             ✔️{data.destinations.slice(0, 2).join(", ") + "..."}
//             {data.destinations.length - 2 > 0
//               ? "\n(" + (data.destinations.length - 2) + " more places)"
//               : ""}
//           </Text>
//           <Text style={styles2.detail}>✔️Cost: HK${data.cost}(estimated)</Text>
//         </View>
//       </View>
//     );
//   }
// }

const Item = ({ onPress, data }) => {

  return (
    <TouchableOpacity style={styles2.item} onPress={e => onPress()}>
      <View style={{ flex: 1 }}>
        <Image
          resizeMode={"contain"}
          style={{ aspectRatio: 1 }}
          source={{ uri: data.uri }}
        />
      </View>
      <View style={{ flex: 2, paddingLeft: 10 }}>
        <Text style={styles2.theme}>{data.name}</Text>
        <Text style={styles2.detail}>{data.duration}</Text>
        <Text style={styles2.detail}>
          ✔️{data.destinations.slice(0, 2).join(", ") + "..."}
          {data.destinations.length - 2 > 0
            ? "\n(" + (data.destinations.length - 2) + " more places)"
            : ""}
        </Text>
        <Text style={styles2.detail}>✔️Cost: HK${data.cost}(estimated)</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles2 = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "lightblue",
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  detail: {
    fontSize: 15,
  },
});

export default Item;
