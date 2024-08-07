import { Pressable, Text } from "react-native";
type ButtonProps={
    title:string;
    onPress:()=>void;

};
export default function Button({title, onPress}:ButtonProps) {
    return (
        <Pressable className='bg-blue-500  w-full   items-center rounded-md p-3 ' onPress={onPress}>
            <Text className='text-white  font-semibold  -tracking-wide'>
               {title}
            </Text>
        </Pressable>
    );
}