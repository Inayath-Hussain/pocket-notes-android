import { useEffect, useState } from "react";
import { StyleSheet, TextInput, TouchableWithoutFeedback, TouchableNativeFeedback, View } from "react-native";
import { colors } from "../config/colors";
import ModalBase from "./ModalBase";
import CustomText from "../components/common/CustomText";
import ColorsInput from "../components/modal/AddNote/ColorsInput";
import { colorOptions } from "./AddNote.interface";
import { saveNewGroupToLS } from "../utilities/localStorage/group";

interface Iprops {
    showModal: boolean
    closeModal: () => void
}

type IColorState = typeof colorOptions[number]

const AddNoteModal: React.FC<Iprops> = ({ showModal, closeModal }) => {

    useEffect(() => {
        return () => {
            console.log("Add Note Modal unmount")
        }
    }, [])

    const [groupName, setGroupName] = useState("");
    const [color, setColor] = useState<IColorState>(colorOptions[0]);
    const [groupNameError, setGroupNameError] = useState("");

    const handleColorChange = (c: IColorState) => setColor(c)

    const handleSubmit = () => {
        if (groupName.trim() === "") return setGroupNameError("group name is required");

        const id = Date.now().toString()
        saveNewGroupToLS(groupName, color, id)
        closeModal();
        setGroupName("");
        setGroupNameError("");
        setColor(colorOptions[0])
    }

    return (
        <ModalBase showModal={showModal} closeModal={closeModal}>

            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()} style={styles.contentContainer}>
                <View style={styles.contentContainer}>

                    {/* Header */}
                    <CustomText text="Create New Group" style={styles.headerText} />

                    {/* group name input */}
                    <CustomText text={groupNameError} style={styles.errorMessage} />
                    <View style={styles.inputContainer}>
                        <CustomText text="Group Name" />
                        <TextInput autoFocus value={groupName} onChangeText={(text) => setGroupName(text)}
                            placeholder="Enter group name" autoCapitalize="sentences" style={styles.nameInput} />
                    </View>


                    {/* group color input */}
                    <View style={styles.inputContainer}>
                        <CustomText text="Choose colour" />
                        <ColorsInput colors={colorOptions} selectedColor={color}
                            handleChange={handleColorChange} />
                    </View>


                    {/* Submit button */}
                    <TouchableNativeFeedback style={styles.createButton} onPress={handleSubmit}
                        background={TouchableNativeFeedback.Ripple("#ffffff50", false)}>
                        <View style={styles.createButton}>
                            <CustomText text="Create" style={styles.createButtonText} />
                        </View>
                    </TouchableNativeFeedback>

                </View>
            </TouchableWithoutFeedback>

        </ModalBase>
    );
}


const styles = StyleSheet.create({

    contentContainer: {
        backgroundColor: colors.white,
        width: "100%",
        padding: 16,
        borderRadius: 8
    },

    createButton: {
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 32,

        width: "50%",
        marginTop: 22
    },

    createButtonText: {
        color: colors.white
    },

    errorMessage: {
        color: "red",
        fontSize: 14
    },

    headerText: {
        fontSize: 24,
        marginBottom: 20
    },

    inputContainer: {
        flexDirection: "row",
        columnGap: 14,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 28
    },

    nameInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: colors.black,
        padding: 0
    }
})

export default AddNoteModal;