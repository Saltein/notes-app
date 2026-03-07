import { View } from "react-native";
import { DefaultText } from "../../../../shared";
import { s } from "./NoteCardStyles";
import { invertColorWithBrightness } from "../../utils/invertColorWithBrigtness";
import { Note } from "../../model/types";

interface NoteCardProps {
    data: Note;
}

export function NoteCard({ data }: NoteCardProps) {
    const { color, content, title } = data;

    return (
        <View
            style={[
                s.container,
                {
                    backgroundColor: color,
                    borderColor: invertColorWithBrightness(color, 0.3),
                },
            ]}
        >
            <DefaultText
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[
                    s.title,
                    { color: invertColorWithBrightness(color, 0.3) },
                ]}
            >
                {title}
            </DefaultText>
            <DefaultText
                numberOfLines={16}
                ellipsizeMode="tail"
                style={[
                    s.content,
                    { color: invertColorWithBrightness(color, 0.3) },
                ]}
            >
                {content}
            </DefaultText>
        </View>
    );
}
