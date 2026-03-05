import { Pressable, View } from "react-native";
import { LoginForm } from "../LoginForm/LoginForm";
import { s } from "./AuthModeSwitcherStyles";
import { DefaultText } from "../../../../shared";
import { useState } from "react";
import { RegisterForm } from "../RegisterForm/RegisterForm";

type AuthMode = "login" | "register";

export function AuthModeSwitcher() {
    const [mode, setMode] = useState<AuthMode>("login");

    return (
        <View style={s.container}>
            <View style={s.modeSwitcher}>
                <Pressable
                    style={[s.tab, mode === "login" && s.currentTab]}
                    onPress={() => setMode("login")}
                >
                    <DefaultText
                        style={[s.tabTitle, mode === "login" && s.current]}
                    >
                        Вход
                    </DefaultText>
                </Pressable>
                <Pressable
                    style={[s.tab, mode === "register" && s.currentTab]}
                    onPress={() => setMode("register")}
                >
                    <DefaultText
                        style={[s.tabTitle, mode === "register" && s.current]}
                    >
                        Регистрация
                    </DefaultText>
                </Pressable>
            </View>
            {mode === "login" ? <LoginForm /> : <RegisterForm />}
        </View>
    );
}
