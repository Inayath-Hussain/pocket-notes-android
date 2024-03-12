import { Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

interface Iprops {
    showModal: boolean
    closeModal: () => void
}

const ModalBase: React.FC<React.PropsWithChildren<Iprops>> = ({ showModal, closeModal, children }) => {
    return (
        <Modal visible={showModal} transparent={true} animationType="fade"
            onRequestClose={closeModal} >

            {/* functionality to close when touched outside modal content element */}
            <TouchableWithoutFeedback onPress={closeModal}>

                {/* modal semi transparent background */}
                <View style={styles.modalBg}>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}


const styles = StyleSheet.create({
    modalBg: {
        backgroundColor: "rgba(0,0,0,0.5)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25
    }
})

export default ModalBase;