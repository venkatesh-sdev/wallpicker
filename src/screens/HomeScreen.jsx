import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { } from 'react-native';
import { MasonaryLayout } from '../components';
import { getCategory } from '../utils/sanity'   
const HomeScreen = () => {

    const [category, setCategory] = useState(null)

    useEffect(() => {
        getCategory()
            .then(data => setCategory(data) )
            .catch(err => alert(err))
    }, [])

    return (
        <View className="flex-1 bg-[#04020d]">
            <SafeAreaView>
                <View className="px-8 py-4 pt-11 flex-row items-center justify-between">
                    <Text className="text-xl text-white">4K Wallpapers</Text>
                    <TouchableOpacity><Entypo name="dots-three-vertical" size={24} color="white" /></TouchableOpacity>
                </View>

                <ScrollView className="w-full h-full px-4">
                    {
                        category ? <MasonaryLayout data={category} screen={"Items"} /> : <ActivityIndicator color={'#FF005C'} size={"large"} />
                    }
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen