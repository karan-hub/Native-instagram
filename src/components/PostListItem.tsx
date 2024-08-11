import { View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from "react";
import { AdvancedImage } from 'cloudinary-react-native';
import { crop } from "@cloudinary/url-gen/actions/resize";
import { cld } from "../lib/cloudinary";

export default function PostListItem({ post }) {
    const [liked, setLiked] = useState(false);
    const { width } = useWindowDimensions();

    // Use window dimensions to set image size
    const imageSize = width * 0.8;  // Example: 80% of window width

    // Ensure post.user and post.user.avatar_url are defined before using them
    const avatarUrl = post.user && post.user.avatar_url ? post.user.avatar_url : null;
    const imageUrl = post.image ? post.image : null;

    let avatar;
    if (avatarUrl) {
        avatar = cld.image(avatarUrl);
        avatar.resize(crop().width(100).height(100).gravity('face'));
    }

    let image;
    if (imageUrl) {
        image = cld.image(imageUrl);
        image.resize(crop().width(imageSize).height(imageSize).gravity('center'))
             .format('auto')
             .quality('auto');
    }

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <View className="bg-gray-50 mb-2 rounded-lg">
            {/* Header with user info */}
            <View className="flex-row items-center justify-between p-2 border-b border-gray-200">
                <View className="flex-row items-center gap-2">
                    {avatar && (
                        <AdvancedImage
                            cldImg={avatar}
                            className="w-12 h-12 rounded-full"
                        />
                    )}
                    <Text className="font-semibold">{post.user ? post.user.username : 'Unknown'}</Text>
                </View>
                <Entypo name="dots-three-horizontal" size={24} color="black" />
            </View>

            {/* Post image */}
            {image && (
                <AdvancedImage 
                    cldImg={image} 
                    style={{ width: '100%', height: imageSize, resizeMode: 'cover' }} 
                />
            )}

            {/* Footer with interactions and like count */}
            <View className="p-2">
                <View className="flex-row items-center justify-between">
                    <View className="flex-row gap-3 items-center">
                        <TouchableOpacity onPress={toggleLike}>
                            <AntDesign
                                name={liked ? "heart" : "hearto"}
                                size={24}
                                color={liked ? "red" : "black"}
                            />
                        </TouchableOpacity>
                        <Ionicons name="chatbubble-outline" size={24} color="black" />
                        <Feather name="send" size={24} color="black" />
                    </View>
                    <FontAwesome name="bookmark-o" size={24} color="black" />
                </View>
                <View className="mt-2">
                    <Text className="font-semibold">
                        {liked ? `${post.likes + 1} likes` : `${post.likes} likes`}
                    </Text>
                    {post.caption ? (
                        <Text className="mt-1 text-gray-700">{post.caption}</Text>
                    ) : null}
                </View>
            </View>
        </View>
    );
}
