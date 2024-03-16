import { useState } from "react";
import { StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { colors } from "../../config/colors";
import MemoSendIcon from "../Icons/Send";
import { addNoteToLS } from "../../utilities/localStorage/notes";


interface Iprop {
    id: string
}

const Footer: React.FC<Iprop> = ({ id }) => {

    const [noteText, setNoteText] = useState("")

    const handleSend = () => {
        addNoteToLS(id, { content: noteText, creationDate: new Date() })

        setNoteText("");
    }

    return (
        <View style={styles.mainContainer}>

            {/* white container */}
            <View style={styles.subContainer}>
                <TextInput value={noteText} onChangeText={(text) => setNoteText(text)}
                    multiline numberOfLines={4} style={styles.input} />

                {/* send button */}
                <TouchableWithoutFeedback onPress={handleSend}>
                    <View style={styles.sendContainer}>
                        <MemoSendIcon width={20} height={20} fill={colors.primary} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.primary,
        padding: 18
    },

    subContainer: {
        backgroundColor: colors.white,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "stretch",
        columnGap: 10,

        paddingRight: 10,
        borderRadius: 6,
    },

    input: {
        paddingLeft: 10,
        overflow: "scroll",

        flex: 1,

        textAlignVertical: "top",
        height: 100
    },

    sendContainer: {
        justifyContent: "flex-end",
        marginBottom: 15
    }
})


export default Footer;