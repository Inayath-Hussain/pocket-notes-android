import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { colors } from "../../colors";

interface Iprops {
    style?: StyleProp<TextStyle>
    text: string
}

const CustomText: React.FC<Iprops> = ({ style, text }) => {
    return (
        <Text style={[styles.text, style]}>
            {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Roboto",
        fontSize: 16,
        color: colors.black
    }
})

export default CustomText;