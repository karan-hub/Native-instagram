import { Slot, Stack, Tabs } from "expo-router";
import { useFonts } from "expo-font";
import React from "react";
import AppLoading from 'expo-app-loading';

import AntDesign from '@expo/vector-icons/AntDesign';

// import * as from "expo-slash-screen";
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View, Text } from 'react-native';
// import { tailwind } from 'nativewind';



export default function RootLayout() {

    // const [fontsLoaded] = useFonts({
    //     'Grandista': require(' ../../assets/font/Grandista.otf'),
    //   });
    

      let [fontsLoaded] = useFonts({
        'Grandista': require(' ../../assets/font/Grandista.otf'),

      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }

    return (



        <Tabs screenOptions={{ tabBarActiveTintColor: 'pink', tabBarShowLabel: false }}>
            <Tabs.Screen name="index" 
            
                options={{
                    
                    headerTitle: () => (
                    
                        <View  className="flex-row items-center justify-center h-32 gap-64  " >
                            <Text style={{ lineHeight: 64 }} className="font-Grandista text-3xl  text-center text-black" >Instagram</Text>
                            {/* <Foundation name="home" size={27} color="black" className=" sm:hidden" /> */}
                            <AntDesign name="hearto" size={24} color="black" className=" sm:hidden"/>
                        </View>
                    ),
            
                    
                     
                    tabBarIcon: () => <Foundation name="home" size={27} color="black" />,
                }} />


            <Tabs.Screen name="Create"
                options={{
                    headerTitle: ' Create Post',
                    

                    tabBarIcon: () => <FontAwesome6 name="square-plus" size={27} color="black" />,
                }} />





            <Tabs.Screen name="profile"
                options={{
                    headerTitle: 'user',
                     

                    tabBarIcon:  () => <MaterialCommunityIcons name="account-circle-outline" size={27} color="black" />,
                }} />
        </Tabs>



    )
}