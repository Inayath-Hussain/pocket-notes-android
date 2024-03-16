import { useState } from "react";
import { Button, FlatList, ListRenderItem, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import { useMMKVString } from "react-native-mmkv";
import { Link } from "@react-navigation/native"

import { IGroup, groupKey } from "../../utilities/localStorage/group";
import CustomText from "../common/CustomText";
import { routes } from "../../routes";
import CustomLink from "../React-Native-Navigation/CustomLink";


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
        <CustomLink to={{ screen: routes.note, params: { id: item.id, groupName: item.groupName, bgColor: item.bgColor } }}
            style={NoteStyle.verticalSpacing}>

            <View style={NoteStyle.container}>
                {/* dot */}
                <View style={[NoteStyle.dot, dotStyle(item.bgColor).color]} />

                <CustomText style={NoteStyle.text} text={item.groupName} />
            </View>

        </CustomLink>
    )
}


const dotStyle = (color: string) => StyleSheet.create({ color: { backgroundColor: color } })

const NoteStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 40,
        columnGap: 18
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
    },

    verticalSpacing: {
        marginVertical: 15
    }
})