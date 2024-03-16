import { StyleSheet, View, ListRenderItem } from "react-native";
import { colors } from "../../config/colors";
import CustomText from "../common/CustomText";
import React from "react";
import { InoteJSON } from "../../utilities/localStorage/notes";
import { getDate } from "../../utilities/dateTime/date";
import { getTime } from "../../utilities/dateTime/time";


const Note: ListRenderItem<InoteJSON> = ({ item }) => {
    const { content, creationDate } = item

    const date = new Date(creationDate)

    return (
        <View style={styles.container}>
            {/* text content */}
            <CustomText text={content} style={styles.text} />

            {/* creation date */}
            <View style={styles.dateContainer}>
                <CustomText text={getDate(date)} style={styles.date} />

                <View style={styles.dot} />

                <CustomText text={getTime(date)} style={styles.date} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 5,
        padding: 16,
        paddingTop: 24,
        elevation: 5,

        marginBottom: 20
    },

    text: {
        textAlign: "left",
        marginBottom: 40
    },

    dateContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        columnGap: 10
    },

    date: {
        fontWeight: "600"
    },

    dot: {
        backgroundColor: colors.black,
        width: 7,
        height: 7,
        borderRadius: 3.5
    }

})

export default Note;