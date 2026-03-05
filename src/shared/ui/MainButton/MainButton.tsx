import { Pressable, View } from "react-native";
import { s } from "./MainButtonStyles";
import { DefaultText } from "../DefaultText/DefaultText";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../app/providers/navigation/types";

interface MainButtonProps {
    onPress?: () => void;
    title?: string;
}

export function MainButton({ onPress, title = "Button" }: MainButtonProps) {
    return (
        <Pressable style={s.authButton} onPress={onPress}>
            <DefaultText style={s.authButtonText}>{title}</DefaultText>
        </Pressable>
    );
}
