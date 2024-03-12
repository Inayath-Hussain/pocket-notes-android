import { useState } from "react";
import { Button, FlatList, ListRenderItem, ScrollView, StyleSheet, Text, View } from "react-native"
import { useMMKVString } from "react-native-mmkv";
import { IGroup, getGroupsFromLS, groupKey } from "../../utilities/localStorage/group";
import CustomText from "../common/CustomText";


const NotesList = () => {
    const [groups, setGroups] = useMMKVString(groupKey)
    const notes = groups ? JSON.parse(groups) : []

    return (
        <View style={NotesListStyles.container}>
            <FlatList data={notes} renderItem={Note} scrollEnabled />
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





const Note: ListRenderItem<IGroup> = ({ item }) => {
    return (
        <View style={NoteStyle.container}>
            {/* dot */}
            <View style={[NoteStyle.dot, dotColor(item.bgColor).dotColor]} />

            <CustomText style={NoteStyle.text} text={item.groupName} />
        </View>
    )
}


const dotColor = (color: string) => StyleSheet.create({ dotColor: { backgroundColor: color } })

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
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontSize: 24,
        textTransform: "capitalize",
        fontWeight: "500",
        fontFamily: "roboto"
    }
})