import { View, Text, Image, TextInput, Pressable } from 'react-native';
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';

export default function CreatePost() {
    const [caption, setCaption] = useState('');

    const [image, setImage] = useState<String | null>(null);

    useEffect(() => {
        if (!image) {
            pickImage();
        }
    }, [image]);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    return (
        <View className='items-center p-3 flex-1'>
                {image ? (
                <Image
                    source={{ uri: image }}
                    className="w-52 aspect-[3/4] shadow-lg bg-slate-700 rounded-lg"
                />
            ) : (
                <View className='w-52 aspect-[3/4] shadow-lg bg-slate-700 rounded-lg'>
                    {/* Optional: Add a placeholder image or icon here */}
                </View>
            )}
            <Text onPress={pickImage} className='text-blue-500 font-semibold mt-5'>
                Change
            </Text>
            <TextInput value={caption} onChangeText={(newValue) => { setCaption(newValue) }} placeholder='write here !' className='bg-slate-100 w-full p-3 rounded-md  '>
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
