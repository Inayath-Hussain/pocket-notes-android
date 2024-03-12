import { useState } from "react";
import { Button, FlatList, ListRenderItem, ScrollView, StyleSheet, Text, View } from "react-native"

interface INote {
    title: string
    color: string;
}

const NotesList = () => {
    const [notes, setNotes] = useState<INote[]>([]);
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1)
        setNotes(prev => [...prev, { title: `Item ${count}`, color: "red" }])
    }

    return (
        <View style={NotesListStyles.container}>
            <FlatList data={notes} renderItem={Note} scrollEnabled />

            <Button title="Add Note" onPress={handleAdd} />
        </View>
    );
}

const NotesListStyles = StyleSheet.create({
    container: {
        height: 200,
        display: "flex",
        flex: 100
    }
})

export default NotesList;





const Note: ListRenderItem<INote> = ({ item }) => {
    return (
        <View style={NoteStyle.container}>
            {/* dot */}
            <View style={[{ backgroundColor: item.color }, NoteStyle.dot]} />

            <Text style={NoteStyle.text}>{item.title}</Text>
        </View>
    )
}


const NoteStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 40,
        columnGap: 18,

        marginVertical: 10
    },

    dot: {
        width: 24,
        height: 24,
        borderRadius: 50,
    },

    text: {
        fontSize: 24,
        textTransform: "capitalize",
        fontWeight: "500",
        fontFamily: "roboto"
    }
})