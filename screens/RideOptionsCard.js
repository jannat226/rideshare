// // import React, { useState } from "react";
// // import {
// //   SafeAreaView,
// //   StyleSheet,
// //   Text,
// //   View,
// //   Image,
// //   TouchableOpacity,
// // } from "react-native";
// // import tw from "tailwind-react-native-classnames";
// // import { useNavigation } from "@react-navigation/native";
// // import { FlatList } from "react-native";

// // const data = [
// //   {
// //     id: "Car-123",
// //     location: "CarX",
// //     multiplier: 1,
// //     passengers: 4,
// //     charges: 250,
// //     image:
// //       "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",
// //   },
// //   {
// //     id: "Car-456",
// //     location: "CarY",
// //     multiplier: 1.2,
// //     passengers: 6,
// //     charges: 200,
// //     image:
// //       "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",
// //   },
// //   {
// //     id: "Car-789",
// //     location: "Car-LUX",
// //     multiplier: 1.5,
// //     passengers: 2,
// //     charges: 300,
// //     image:
// //       "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",
// //   },
// // ];

// // const RideOptionsCard = ({ navigation }) => {
// //   const [selected, setSelected] = useState(null);

// //   const handleBook = (item) => {
// //     // Set the selected item
// //     setSelected(item);

// //     // Navigate to LiveScreen and pass selected item data
// //     navigation.navigate("LiveScreen", { selected });
// //   };

// //   return (
// //     <SafeAreaView style={tw`bg-white flex-1`}>
// //       <FlatList
// //         data={data}
// //         keyExtractor={(item) => item.id}
// //         renderItem={({ item }) => (
// //           <TouchableOpacity
// //             onPress={() => handleBook(item)}
// //             style={tw`flex-row justify-between items-center px-4 py-3 border-b border-gray-300`}
// //           >
// //             <View style={tw`flex-row items-center`}>
// //               <Image
// //                 style={tw`w-16 h-16 rounded-full`}
// //                 source={{ uri: item.image }}
// //               />
// //               <View style={tw`ml-4`}>
// //                 <Text style={tw`text-xl font-semibold`}>{item.location}</Text>
// //                 <Text>{item.passengers} Passengers</Text>
// //                 <Text>{item.multiplier}x Multiplier</Text>
// //                 <Text>{item.charges}rs Charges</Text>
// //               </View>
// //             </View>
// //             <Text style={tw`text-xl`}>Book</Text>
// //           </TouchableOpacity>
// //         )}
// //       />
// //     </SafeAreaView>
// //   );
// // };

// // export default RideOptionsCard;

// // const styles = StyleSheet.create({});

// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import tw from "tailwind-react-native-classnames";
// import { useNavigation } from "@react-navigation/native";
// import { FlatList } from "react-native";
// import ImagePicker from "react-native-image-picker";

// const data = [
//   {
//     id: "Car-123",
//     location: "CarX",
//     multiplier: 1,
//     passengers: 4,
//     charges: 200,
//     image: require("../assets/images/Cars/car1.jpg"), // Use a default image
//   },
//   {
//     id: "Car-678",
//     location: "CarZ",
//     multiplier: 1,
//     passengers: 2,
//     charges: 300,
//     image: require("../assets/images/Cars/car3.png"), // Use a default image
//   },
//   {
//     id: "Car-345",
//     location: "CarY",
//     multiplier: 1,
//     passengers: 3,
//     charges: 250,
//     image: require("../assets/images/Cars/car2.jpg"), // Use a default image
//   },

//   // ... (other data entries)
// ];

// const RideOptionsCard = ({ navigation }) => {
//   const [selected, setSelected] = useState(null);

//   const handleBook = (item) => {
//     // Set the selected item
//     setSelected(item);

//     // Navigate to LiveScreen and pass selected item data
//     navigation.navigate("LiveScreen", { selected });
//   };

//   const handleImagePicker = (item) => {
//     const options = {
//       title: "Select Image",
//       storageOptions: {
//         skipBackup: true,
//         path: "images",
//       },
//     };

//     ImagePicker.showImagePicker(options, (response) => {
//       if (response.didCancel) {
//         console.log("User cancelled image picker");
//       } else if (response.error) {
//         console.log("ImagePicker Error: ", response.error);
//       } else {
//         // Update the image URI in the data array
//         const newData = data.map((d) =>
//           d.id === item.id ? { ...d, image: { uri: response.uri } } : d
//         );

//         // Set the updated data
//         setData(newData);
//       }
//     });
//   };

//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         <FlatList
//           data={data}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               onPress={() => handleBook(item)}
//               style={tw`flex-row justify-between items-center px-4 py-3 border-b border-gray-300`}
//             >
//               <View style={tw`flex-row items-center`}>
//                 <TouchableOpacity onPress={() => handleImagePicker(item)}>
//                   <Image
//                     style={tw`w-16 h-16 rounded-full`}
//                     source={item.image}
//                   />
//                 </TouchableOpacity>
//                 <View style={tw`ml-4`}>
//                   <Text style={tw`text-xl font-semibold`}>{item.location}</Text>
//                   <Text>{item.passengers} Passengers</Text>
//                   <Text>{item.multiplier}x Multiplier</Text>
//                   <Text>{item.charges}rs Charges</Text>
//                 </View>
//               </View>
//               <Text style={tw`text-xl`}>Book</Text>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default RideOptionsCard;

// const styles = StyleSheet.create({
//   container: {
//     // style={tw`bg-white flex-1`}
//     // backgroundColor: "white",
//     // flex: 1,
//     borderColor: "gray",
//     borderWidth: 10,

//     marginTop: 40,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     // shadowColor
//   },
// });

import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import ImagePicker from "react-native-image-picker";

const data = [
  {
    id: "Car-123",
    location: "CarX",
    multiplier: 1,
    passengers: 4,
    charges: 200,
    image: require("../assets/images/Cars/car1.jpg"), // Use a default image
  },
  {
    id: "Car-678",
    location: "CarZ",
    multiplier: 1,
    passengers: 2,
    charges: 300,
    image: require("../assets/images/Cars/car3.png"), // Use a default image
  },
  {
    id: "Car-345",
    location: "CarY",
    multiplier: 1,
    passengers: 3,
    charges: 250,
    image: require("../assets/images/Cars/car2.jpg"), // Use a default image
  },
  // ... (other data entries)
];

const RideOptionsCard = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

  const handleBook = (item) => {
    // Set the selected item
    setSelected(item);

    // Navigate to LiveScreen and pass selected item data
    navigation.navigate("LiveScreen", { selected });
  };

  const handleImagePicker = (item) => {
    const options = {
      title: "Select Image",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        // Update the image URI in the data array
        const newData = data.map((d) =>
          d.id === item.id ? { ...d, image: { uri: response.uri } } : d
        );

        // Set the updated data
        setData(newData);
      }
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleBook(item)}
              style={tw`flex-row justify-between items-center px-4 py-3 border-b border-gray-300`}
            >
              <View style={tw`flex-row items-center`}>
                <TouchableOpacity onPress={() => handleImagePicker(item)}>
                  <Image
                    style={tw`w-16 h-16 rounded-full`}
                    source={item.image}
                  />
                </TouchableOpacity>
                <View style={tw`ml-4`}>
                  <Text style={tw`text-xl font-semibold`}>{item.location}</Text>
                  <Text>{item.passengers} Passengers</Text>
                  <Text>{item.multiplier}x Multiplier</Text>
                  <Text>{item.charges}rs Charges</Text>
                </View>
              </View>
              <View style={styles.book}>
                <Text style={tw`text-xl`}>Book</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({
  container: {
    borderColor: "gray",
    borderWidth: 10,
    marginTop: 40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 3, // Added border radius
  },
  book: {
    backgroundColor: "green",

    margin: 5,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
  },
});
