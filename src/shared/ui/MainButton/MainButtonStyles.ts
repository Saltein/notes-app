import { StyleSheet } from "react-native";
import { styles } from "../../styles/styles";

export const s = StyleSheet.create({
    authButton: {
        justifyContent: "center",
        alignItems: "center",
        borderColor: styles.colors.border,
        borderWidth: 3,
        borderRadius: styles.radius.xxl,
        height: 48,
        width: "100%",
    },

    authButtonText: {
        fontSize: 20,
        fontWeight: 600,
    },
});
