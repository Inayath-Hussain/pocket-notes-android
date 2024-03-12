import { StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, View } from "react-native";
import { colors } from "../../colors";
import AddNoteModal from "../../modal/AddNote";
import { useState } from "react";

const AddButton = () => {

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    return (
        <>
            <TouchableHighlight style={styles.button}
                onPress={() => setShowModal(true)}>
                <Text style={styles.text}>
                    &#43;
                </Text>
            </TouchableHighlight>

            <AddNoteModal showModal={showModal} closeModal={closeModal} />
        </>
    );
}


const styles = StyleSheet.create({
    button: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,

        width: 60,
        height: 60,
        position: "absolute",
        bottom: 20,
        right: 10,

        borderRadius: 30,

        overflow: "hidden"
    },

    text: {
        color: colors.white,
        fontSize: 44,

        alignSelf: "center",
        justifyContent: "center"
    }
})

export default AddButton;