import { View, Text, Image, TextInput, Pressable } from 'react-native';
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import Button from "~/src/components/Button";
import { upload } from 'cloudinary-react-native';
import { cld } from '~/src/lib/cloudinary';

export default function CreatePost() {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState<String | null>(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    const uploadImage = async () => {
        if (!image) {
            return;
        }

        const options = {
            upload_preset: 'default',
            tag: 'sample',
            unsigned: true
        }

        await upload(cld, {
            file: image , options: options, callback: (error: any, response: any) => {
                //.. handle response
            }
        })
    };

    
    const createPost = async () => {
        // upload
        await uploadImage()
        // save post DB
    }

    return (
        <View className="flex-1 p-3 items-center mx-auto w-full max-w-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-slate-50">
            {image ? (
                <Image
                    source={{ uri: image }}
                    className="w-56 aspect-[3/4] shadow-lg bg-slate-300 rounded-lg"
                />
            ) : (
                <View className="w-52 aspect-[3/4] shadow-lg bg-slate-300 rounded-lg">
                    {/* Optional: Add a placeholder image or icon here */}
                </View>
            )}
            <Text onPress={pickImage} className="text-blue-500 font-semibold m-5">
                Change
            </Text>
            <TextInput
                value={caption}
                onChangeText={(newValue) => setCaption(newValue)}
                placeholder="Write here!"
                className="bg-slate-100 w-full p-3 rounded-md mb-3"
            />
            <View className="mt-auto w-full">
                <Button title="Share post" onPress={createPost} />
            </View>
        </View>
    );
}
