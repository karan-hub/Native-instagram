import { Redirect, SplashScreen, Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useAuth } from '~/src/providers/AuthProvider';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import Feather from '@expo/vector-icons/Feather';
import { View } from 'react-native';
import { Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';
import Entypo from '@expo/vector-icons/Entypo';
export default function TabsLayout() {
  const { isAuthenticated } = useAuth();
  const [loaded, error] = useFonts({
    'Inter-Black': require('../../../assets/font/Grandista.ttf'), // Adjust path based on your file structure
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null; // You might want to show a loading spinner here instead of `null`
  }

  if (!isAuthenticated) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2E2D47',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 60,
          backfaceVisibility: 'hidden',
          borderTopColor: '#72989f',
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontFamily: 'Inter-Black',
          fontSize: 16,
        },
      }}
    >




      <Tabs.Screen
        name="index"

        options={{
          headerTitle: () => {
            return <View className="w-full flex flex-row justify-between items-center  ">
              <Text className="  " style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>Instagram</Text>
              <View className="flex flex-row gap-4">
                <AntDesign name="hearto" size={30} color="black" />
                <Feather name="send" size={30} color="black" />
              </View>
            </View>
          },
          headerStyle: {
            height: 120, // Header height
            borderBottomWidth: 1,
            borderBottomColor: '#72989f',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={30} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="new"
        options={{
          headerTitle: () => {
            return <View className="w-full flex flex-row justify-between items-center ">
              <View className='flex flex-row justify-between items-center gap-4'>
                <Entypo name="cross" size={30} color="black" />
                <Text className=" font-bold text-2xl ">Cretae Post</Text>
              </View>
              <MaterialIcons name="navigate-next" size={36} color="blue" />
            </View>
          },

          headerStyle: {
            height: 120, // Header height
            borderBottomWidth: 1,
            borderBottomColor: '#72989f',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plus-square-o" size={30} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"

        options={{
          headerTitle: () => {
            return <View className="w-full flex flex-row justify-between items-center">
              <Text className="font-bold text-2xl ">Profile</Text>
              <View className='flex flex-row justify-between items-center gap-4'>
                <Octicons name="diff-added" size={24} color="black" />
                <FontAwesome5 name="at" size={24} color="black" />
                <Octicons name="three-bars" size={24} color="black" />
              </View>
            </View>
          },
          headerStyle: {
            height: 120, // Header height
            borderBottomWidth: 1,
            borderBottomColor: '#72989f',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
