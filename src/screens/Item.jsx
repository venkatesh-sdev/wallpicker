import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, Fragment } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { bg } from "../../assets";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Item = ({ route }) => {
  const { navigate } = useNavigation();
  console.log(route.params.param);
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <View className="flex-1 bg-[#04020d] relative justify-center items-center">
      {isLoading ? (
        <View className="  mt-11 justify-center items-center ">
          <ActivityIndicator color="#ff0000" size={"large"} />
        </View>
      ) : (
        <Fragment>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2018/03/01/06/53/outdoors-3189876_960_720.jpg",
            }}
            className="w-full h-full object-cover"
          />
        </Fragment>
      )}
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.5)", "transparent"]}
        className=" w-full h-full absolute z-20 inset-0 justify-start items-center"
      >
        <SafeAreaView className=" w-full h-full  justify-start items-center">
          <TouchableOpacity
            onPress={() => navigate("HomeScreen")}
            className="w-full px-5 pt-11"
          >
            <Ionicons name="ios-arrow-back" size={32} color="white" />
          </TouchableOpacity>
          <View
            className="w-full h-full
           relative "
          >
            <View className="justify-between items-center flex-row bg-[#0000007c] p-4 mx-8 absolute inset-x-0 bottom-36 rounded-lg">
              <View>
                <Text className="text-2xl font-bold text-white">Kittens</Text>
                <Text className="text-md text-white">Cute Kittens</Text>
              </View>
              <TouchableOpacity>
                <Entypo name="thunder-cloud" size={34} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default Item;
