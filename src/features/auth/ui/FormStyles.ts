import { StyleSheet } from "react-native";
import { styles } from "../../../shared";

export const s = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: styles.spacing.sm,
        paddingVertical: styles.spacing.sm,
    },

    title: {
        fontSize: 24,
    },

    input: {
        borderRadius: styles.radius.xl,
    },
});
