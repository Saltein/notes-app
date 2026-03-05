import { StyleSheet } from "react-native";
import { styles } from "../../styles/styles";

export const s = StyleSheet.create({
    container: {
        position: "absolute",
        paddingHorizontal: styles.spacing.sm,
        paddingVertical: styles.spacing.xs,
        borderWidth: 3,
        borderRadius: styles.radius.xxl,
        maxWidth: "90%",
    },

    text: {
        fontWeight: 600,
        fontSize: 18,
    },

    error: {
        borderColor: styles.colors.error,
        backgroundColor: styles.colors.errorBack,
    },

    warning: {
        borderColor: styles.colors.warning,
        backgroundColor: styles.colors.warningBack,
    },

    info: {
        borderColor: styles.colors.info,
        backgroundColor: styles.colors.infoBack,
    },

    errorText: {
        color: styles.colors.error,
    },

    warningText: {
        color: styles.colors.warning,
    },

    infoText: {
        color: styles.colors.info,
    },
});
