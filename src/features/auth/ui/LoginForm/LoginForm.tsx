import { View } from "react-native";
import { DefaultTextInput, MainButton } from "../../../../shared";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../app/providers/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { s } from "../FormStyles";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Auth">;

export function LoginForm() {
    const navigation = useNavigation<NavigationProp>();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        navigation.navigate("Notes");
    }

    return (
        <View style={s.container}>
            <DefaultTextInput
                textContentType="emailAddress"
                maxLength={32}
                style={s.input}
                placeholder="Почта"
                value={email}
                onChangeText={setEmail}
            />
            <DefaultTextInput
                textContentType="password"
                secureTextEntry={true}
                maxLength={32}
                style={s.input}
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
            />

            <MainButton onPress={handleLogin} title="Войти"/>
        </View>
    );
}
