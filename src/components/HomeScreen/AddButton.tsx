import { StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, View } from "react-native";
import { colors } from "../../colors";

const AddButton = () => {

    return (
        <TouchableHighlight onPress={() => console.log("hello")}>
            <View style={styles.button}>
                <Text style={styles.text}>
                    &#43;
                </Text>
            </View>
        </TouchableHighlight>
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