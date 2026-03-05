import { View } from "react-native";
import { useState } from "react";
import { s } from "../FormStyles";
import { DefaultTextInput, MainButton, Warning } from "../../../../shared";
import { comparePasswords } from "./utils/comparePasswords";
import { Portal } from "react-native-paper";

export function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [textError, setTextError] = useState("");

    function handleRegister() {
        if (!name || !email || !password || !passwordCheck) {
            setTextError("Заполните все поля");
        } else if (!comparePasswords(password, passwordCheck)) {
            setTextError("Пароли не совпадают");
        }
    }

    function handleChange(
        value: string,
        setValue: React.Dispatch<React.SetStateAction<string>>,
    ) {
        setTextError("");
        setValue(value);
    }

    return (
        <View style={s.container}>
            <DefaultTextInput
                textContentType="nickname"
                maxLength={16}
                style={s.input}
                placeholder="Имя"
                value={name}
                onChangeText={(text: string) => handleChange(text, setName)}
            />
            <DefaultTextInput
                textContentType="emailAddress"
                maxLength={32}
                style={s.input}
                placeholder="Почта"
                value={email}
                onChangeText={(text: string) => handleChange(text, setEmail)}
            />
            <DefaultTextInput
                textContentType="password"
                secureTextEntry={true}
                maxLength={32}
                style={s.input}
                placeholder="Пароль"
                value={password}
                onChangeText={(text: string) => handleChange(text, setPassword)}
            />
            <DefaultTextInput
                textContentType="password"
                secureTextEntry={true}
                maxLength={32}
                style={s.input}
                placeholder="Повторите пароль"
                value={passwordCheck}
                onChangeText={(text: string) =>
                    handleChange(text, setPasswordCheck)
                }
            />

            <MainButton onPress={handleRegister} title="Зарегистрироваться" />

            {textError && (
                <Portal>
                    <View
                        style={{
                            width: "100%",
                            alignItems: "center",
                        }}
                    >
                        <Warning type="error" content={textError} />
                    </View>
                </Portal>
            )}
        </View>
    );
}
