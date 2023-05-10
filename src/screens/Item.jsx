import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, Fragment, useEffect } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { getItem, urlFor } from "../utils/sanity";

import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import moment from 'moment';

const Item = ({ route }) => {
  const { navigate } = useNavigation();
  const [item, setItem] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItem(route.params.param).then(data => {
      setItem(data);
      setIsLoading(false)
    }).catch(err => alert(err))
  }, [])


  const handleDownload = async (imageUrl) => {
    let date = moment().format('YYYYMMDDhhmmss')
    let fileUri = FileSystem.documentDirectory + `${date}.jpg`;
    try {
      const res = await FileSystem.downloadAsync(imageUrl.uri, fileUri)
      saveFile(res.uri)
    } catch (err) {
      console.log("FS Err: ", err)
    }
  }

  const saveFile = async (fileUri) => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      try {
        const asset = await MediaLibrary.createAssetAsync(fileUri);
        const album = await MediaLibrary.getAlbumAsync('Download');
        if (album == null) {
          await MediaLibrary.createAlbumAsync('Download', asset, false);
          alert('Downloaded Successfully')
        } else {
          await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
        }
      } catch (err) {
        console.log("Save err: ", err)
      }
    } else if (status === "denied") {
      alert("please allow permissions to download")
    }
  }

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
              uri: urlFor(item?.image).url(),
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
            <View className="justify-between items-center flex-row bg-[#3535357c] p-4 mx-8 absolute inset-x-0 bottom-36 rounded-lg">
              <View>
                <Text className="text-2xl font-bold text-white">{item?.title}</Text>
                <Text className="text-md text-white">{item?.description}</Text>
              </View>
              <TouchableOpacity onPress={() => handleDownload({ uri: urlFor(item?.image).url() })}>
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
