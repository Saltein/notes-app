import { s } from "./AuthPageStyles";
import { View } from "react-native";
import { AuthModeSwitcher } from "../../features";
import { useKeyboardDidShow } from "../../shared";

export function AuthPage() {
    const { keyboardVisible } = useKeyboardDidShow();

    return (
        <View
            style={[
                s.container,
                { paddingTop: keyboardVisible ? "20%" : "50%" },
            ]}
        >
            <AuthModeSwitcher />
        </View>
    );
}
