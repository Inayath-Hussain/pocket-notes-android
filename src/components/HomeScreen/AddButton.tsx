import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { colors } from "../../config/colors";
import AddNoteModal from "../../modal/AddNote";
import { useState } from "react";

const AddButton = () => {

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    return (
        <>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#ffffff50", false)}
                onPress={() => setShowModal(true)}>

                <View style={styles.button}>
                    <Text style={styles.text}>
                        &#43;
                    </Text>
                </View>

            </TouchableNativeFeedback>

            {showModal && <AddNoteModal showModal={showModal} closeModal={closeModal} />}
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