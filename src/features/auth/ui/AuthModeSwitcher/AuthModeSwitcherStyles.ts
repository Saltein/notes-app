import { StyleSheet } from "react-native";
import { styles } from "../../../../shared";
import { current } from "@reduxjs/toolkit";

export const s = StyleSheet.create({
    container: {
        width: "100%",
        padding: styles.spacing.xl,
    },

    modeSwitcher: {
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: styles.colors.backgroundSurface,
        borderRadius: styles.radius.xxl,
    },

    tab: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 48,
        borderRadius: styles.radius.xxl,
    },

    currentTab: {
        backgroundColor: styles.colors.button,
    },

    current: {
        color: styles.colors.textBrightMain,
        fontWeight: 600,
    },

    tabTitle: {
        fontSize: 20,
    },
});
