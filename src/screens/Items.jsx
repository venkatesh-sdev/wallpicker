import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getItems } from "../utils/sanity";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { MasonaryLayout } from "../components";
import { useNavigation } from "@react-navigation/native";

const Items = ({ route }) => {
  const [items, setItems] = useState(null);
    const {navigate} = useNavigation()
  const [isNotContent, setIsNotContent] = useState(false);
  useEffect(() => {
    getItems(route.params.param)
      .then((data) => setItems(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <View className="flex-1 bg-[#04020d]">
      <SafeAreaView>
        <View className="px-8 py-4 pt-11 flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => navigate("HomeScreen")}
            className="w-full"
          >
            <Ionicons name="ios-arrow-back" size={32} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView className="w-full h-full  px-4 relative">
          {items ? (
            items.length === 0 ? (
              <View className="justify-center items-center gap-5 mt-[80%]">
                <Text className=" flex-1 w-full h-full text-center justify-center items-center text-white text-3xl">
                  No Images
                </Text>
                <TouchableOpacity onPress={() => navigate("HomeScreen")}>
                  <Text className="text-xl bg-white px-5 py-2 rounded-lg">
                    Back
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <MasonaryLayout data={items} screen={"Item"} />
            )
          ) : (
            <ActivityIndicator color={"#FF005C"} size={"large"} />
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Items;
