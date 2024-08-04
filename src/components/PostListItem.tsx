import { Link, Redirect } from "expo-router";
import { Image, View, Text } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
 


export default function  PostListItem({post}) {
 
    
    return (
        <View className="bg-white" >
            <View className="flex-row items-center justify-between ">
                <View className="flex-row p-2  justify-start items-center gap-2">
                    <Image
                        source={{ uri: post.user.image_url }} className=" w-12 aspect-square rounded-full  " />

                    <Text className="font-semibold ">{post.user.username}</Text>
                </View>
                <Entypo name="dots-three-horizontal" size={24} color="black" className="mr-2" />
            </View>
            <Image source={{ uri: post.image_url }} className=" w-full aspect-[4/3]" ></Image>

            <View className="flex-row items-center justify-between p-2 " >
                <View className="flex-row gap-3  items-center ">
                    <AntDesign name="hearto" size={24} color="black" />
                    <Ionicons name="chatbubble-outline" size={24} color="black" className=" " />
                    <Feather name="send" size={24} color="black" />
                </View >

                <FontAwesome name="bookmark-o" size={24} color="black" />

            </View>
        </View>
    );
}