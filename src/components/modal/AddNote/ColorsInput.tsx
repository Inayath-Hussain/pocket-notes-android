import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { colorOptions } from "../../../modal/AddNote.interface";
import CustomText from "../../common/CustomText";
import { colors } from "../../../colors";

type ISingleColorValue = typeof colorOptions[number]

interface Iprops {
    colors: typeof colorOptions
    selectedColor: ISingleColorValue
    handleChange: (c: ISingleColorValue) => void
}

const ColorsInput: React.FC<Iprops> = ({ colors, selectedColor, handleChange }) => {

    const applySelectedStyle = (c: typeof colors[number]) => c === selectedColor ? styles.selectedColor : {}

    return (
        <View style={styles.buttonsContainer}>
            {colors.map(c => (
                <TouchableWithoutFeedback key={c} onPress={() => handleChange(c)}>
                    <View style={[buttonStyle(c).button, applySelectedStyle(c)]} />
                </TouchableWithoutFeedback>
            ))}
        </View>
    );
}

const buttonStyle = (color: string) => StyleSheet.create({
    button: {
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: color
    }
})

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        flex: 1,
        columnGap: 10
    },

    selectedColor: {
        borderWidth: 2,
        borderColor: colors.black
    }
})

export default ColorsInput;