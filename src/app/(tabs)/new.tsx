import { View, Text, Image, TextInput , Pressable } from 'react-native';
import { useState } from "react";

export default function CreatePost() {
    const  [caption, setCaption]= useState('');
    return (
        <View className='items-center p-3 flex-1'>
            <Image
                source={{ uri: "https://img.freepik.com/premium-photo/group-people-sitting-computer-generative-ai_1028863-69030.jpg?w=826" }}
                className="w-52 aspect-[3/4] shadow-lg bg-slate-700 rounded-lg"
            />
            <Text onPress={() => { }} className='text-blue-500 font-semibold mt-5'>
                Change
            </Text>
            <TextInput value={caption} onChangeText={(newValue)=>{setCaption(newValue)}} placeholder='write here !' className='bg-slate-100 w-full p-3 rounded-md  '>
            </TextInput>
          <View className='mt-auto w-full'>
          <Pressable className='bg-blue-500  w-full   items-center rounded-md p-3 '>
                <Text className='text-white  font-semibold  -tracking-wide'>
                    Shere Post
                </Text>
            </Pressable>
          </View>
        </View>
    );
}
