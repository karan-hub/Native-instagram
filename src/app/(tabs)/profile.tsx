import { ScrollView, Text, View, Image, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { supabase } from '~/src/lib/supabase';

export default function ProfileScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [username, setUsername] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="p-3 flex-1 justify-between">
      {/* Avatar image picker */}
      <View>
        <View className="flex flex-row justify-between items-center mt-10">
          <View className="relative">
            <Ionicons
              onPress={pickImage}
              className="absolute -top-2 -right-1 z-50"
              name="add"
              size={24}
              color="black"
            />
            {image ? (
              <Image
                source={{ uri: image }}
                className="w-28 h-28 aspect-square rounded-full bg-slate-300"
              />
            ) : (
              <View className="w-28 h-28 aspect-square rounded-full bg-slate-300" />
            )}
          </View>
          <View className="items-center mx-2">
            <Text className="font-serif font-black text-black mb-1 text-lg">14</Text>
            <Text className="font-serif font-black text-black text-sm">posts</Text>
          </View>
          <View className="items-center mx-2">
            <Text className="font-serif font-black text-black mb-1 text-lg">617</Text>
            <Text className="font-serif font-black text-black text-sm">followers</Text>
          </View>
          <View className="items-center mx-2">
            <Text className="font-serif font-black text-black mb-1 text-lg">158</Text>
            <Text className="font-serif font-black text-black text-sm">following</Text>
          </View>
        </View>

        {/* User Info Inputs */}
        <View className="mt-4">
          <TextInput
            placeholder="Username"
            value={username}
            placeholderTextColor="#888"
            onChangeText={setUsername}
            className="pl-2 mb-4 text-lg text-black border-b border-gray-300"
          />

          <TextInput
            placeholder="About You..."
            placeholderTextColor="#888"
            multiline
            className="w-full pl-2 py-2 mb-4 text-sm border-b border-gray-300"
          />

          <View className="flex flex-row justify-evenly mt-4 gap-2 items-center">
            <View className="bg-gray-200 p-3 flex-1 rounded-lg">
              <Text className="text-center font-bold">Update Profile</Text>
            </View>
            <View className="bg-gray-200 p-3 flex-1 rounded-lg">
              <Text className="text-center font-bold">Share Profile</Text>
            </View>
            <Ionicons
              className="bg-gray-200 p-1 rounded-lg"
              name="person-add-outline"
              size={30}
              color="black"
            />
          </View>

          <View className="flex flex-row justify-around mt-8">
            <MaterialCommunityIcons name="dots-grid" size={35} color="black" />
            <MaterialCommunityIcons name="movie-outline" size={35} color="black" />
            <MaterialIcons name="account-box" size={35} color="black" />
          </View>
        </View>
      </View>

      <ScrollView className="p-3 flex-1 "
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {/* Image Grid */}

        <View className="flex flex-row flex-wrap justify-between">
          {[...Array(10)].map((_, index) => (
            <View key={index} className="w-[30%] h-40 mb-4">
              <Image
                source={{ uri: 'https://via.placeholder.com/150' }}
                className="w-full h-full rounded-lg"
                resizeMode="cover"
              />
            </View>
          ))}
        </View>
      </ScrollView>


      {/* Sign-Out Button */}
      <View className="bg-gray-200  rounded-lg items-center">
        <Octicons name="sign-out" size={24} color="black" />
        <Text onPress={() => supabase.auth.signOut()} className="text-black font-bold mt-2">Sign Out</Text>
      </View>
    </View>
  );
}
