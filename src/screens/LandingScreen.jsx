import { View, Text, Image, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import { bg } from '../../assets'
import { useNavigation } from '@react-navigation/native'

const LandingScreen = () => {
  const { navigate } = useNavigation()
  return (
    <ImageBackground source={bg} className="flex-1">
      <SafeAreaView className="flex-1">
        <View className="px-5 mt-24 flex-1">
          <Text className="text-xl text-white">Mobile</Text>
          <Text className="text-[54px] font-semibold  text-white">4K Wallpaper</Text>
        </View>
        <View className="px-16 flex-2 mb-12 justify-end">
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigate("HomeScreen")}>
            <View className="w-full bg-white px-4 py-2 justify-center items-center rounded-full ">
              <Text className="text-xl text-gray-900 font-bold italic ">Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default LandingScreen