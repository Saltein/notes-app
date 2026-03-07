import { Pressable, View } from "react-native";
import { s } from "./NotesPageStyles";
import { NoteCard } from "../../entities";
import { Note } from "../../entities/note/model/types";
import MasonryList from "@react-native-seoul/masonry-list";
import { DefaultText, styles } from "../../shared";
import AddIcon from "../../shared/assets/icons/add.svg";
import { Header } from "../../widgets";
import { useGetMeMutation } from "../../features/auth/model/authApiSlice";
import { Portal } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { useGetMyNotesQuery } from "../../features/notes/model/notesApiSlice";

export function NotesPage() {
    const [getMe, { data }] = useGetMeMutation();
    const {
        data: notesData,
        isLoading,
        isFetching,
        error,
    } = useGetMyNotesQuery();

    useEffect(() => {
        getMe();
    }, []);

    return (
        <View style={s.container}>
            <Portal>
                <Header data={data?.user} />
            </Portal>
            {isFetching || (isLoading && <DefaultText>Loading...</DefaultText>)}
            {notesData && (
                <MasonryList
                    data={notesData.data}
                    numColumns={2}
                    style={{
                        gap: styles.spacing.xs,
                        paddingVertical: 48 + styles.spacing.xs,
                    }}
                    renderItem={({ item }) => {
                        const note = item as Note;
                        return <NoteCard data={note} />;
                    }}
                    keyExtractor={(item) => (item as Note).id.toString()}
                />
            )}
            <LinearGradient
                colors={["transparent", styles.colors.backgroundMain]}
                style={{
                    height: 48,
                    width: "200%",
                    position: "absolute",
                    bottom: 8,
                }}
            />
            <Pressable style={s.newNoteButton}>
                <AddIcon
                    width={48}
                    height={48}
                    color={styles.colors.textBrightMain}
                />
            </Pressable>
        </View>
    );
}
