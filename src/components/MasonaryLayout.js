import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../utils/sanity";

const MasonaryLayout = ({ data }) => {
  return (
    <MasonryList
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <CardItem data={item} />}
    />
  );
};

const CardItem = ({ data }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate("Item", { param: data.id })}
      className="bg-[#121212] m-1 rounded-md relative overflow-hidden"
    >
      <Image
        source={{ uri: urlFor(data.image).url() }}
        style={{ height: Math.round(Math.random() * 120 + 250) }}
        className="w-full h-full  object-cover"
      />
    </TouchableOpacity>
  );
};

export default MasonaryLayout;
