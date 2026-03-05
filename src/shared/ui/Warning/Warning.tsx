import { View } from "react-native";
import { DefaultText } from "../DefaultText/DefaultText";
import { s } from "./WarningStyles";

type WarningType = "error" | "warning" | "info";

interface WarningProps {
    type: WarningType;
    content: string;
}

export function Warning({ type, content }: WarningProps) {
    let containerStyle;
    let textStyle;

    if (type === "error") {
        containerStyle = s.error;
        textStyle = s.errorText;
    } else if (type === "warning") {
        containerStyle = s.warning;
        textStyle = s.warningText;
    } else {
        containerStyle = s.info;
        textStyle = s.infoText;
    }

    return (
        <View style={[s.container, containerStyle]}>
            <DefaultText style={[s.text, textStyle]}>{content}</DefaultText>
        </View>
    );
}
