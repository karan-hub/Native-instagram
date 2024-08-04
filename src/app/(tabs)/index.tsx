

import { FlatList } from "react-native";
import posts from "~/assets/data/post.json";
import PostListItem from "~/src/components/PostListItem";


export default function Home() {
    // const post1 = post[0]

    return (
        <FlatList className="w-full sm:w-full    md:max-w-lg  lg:max-w-xl xl:max-w-2xl mx-auto   "
            data={posts}
            contentContainerStyle={{gap :5}}
        showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <PostListItem post={item} />}

        />
    )
}