import { Text, View, Image, TextInput } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from "react";
import Button from "~/src/components/Button";
import Animated, { Easing, useSharedValue, useAnimatedStyle, withSpring, withDelay } from 'react-native-reanimated';

export default function Home() {
    const [image, setImage] = useState<String | null>(null);
    const [username, setUsername] = useState('');

    const imageScale = useSharedValue(0.8);
    const textOpacity = useSharedValue(0);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    // Animate on image change
    useEffect(() => {
        imageScale.value = withSpring(1, { damping: 2, stiffness: 80 });
        textOpacity.value = withDelay(500, withSpring(1, { damping: 2, stiffness: 80 }));
    }, [image]);

    // Animated styles
    const animatedImageStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: imageScale.value }],
        };
    });

    const animatedTextStyle = useAnimatedStyle(() => {
        return {
            opacity: textOpacity.value,
        };
    });

    return (
        <View className="flex-1 p-3 items-center mx-auto w-full max-w-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-slate-50">
            {image ? (
                <Animated.View style={[animatedImageStyle]}>
                    <Image
                        source={{ uri: image }}
                        className="w-56 aspect-square shadow-lg self-center bg-slate-300 rounded-full"
                    />
                </Animated.View>
            ) : (
                <View className='w-52 aspect-square shadow-lg self-center bg-slate-300 rounded-full'>
                    {/* Optional: Add a placeholder image or icon here */}
                </View>
            )}

            <Animated.Text onPress={pickImage} style={[animatedTextStyle]} className='text-blue-500 font-semibold mt-5 self-center'>
                Change
            </Animated.Text>

            <View className="mb-2 text-gray-400 w-full font-semibold">
                <TextInput placeholder="Username" value={username} onChangeText={setUsername} className="border border-gray-500 p-2 mt-2 rounded-md shadow-fuchsia-300 w-full " />
            </View>

            <View className="gap-2 mt-auto w-full">
                <Button title='Update Profile' />
                <Button title='Sign Out' />
            </View>
        </View>
    );
}
