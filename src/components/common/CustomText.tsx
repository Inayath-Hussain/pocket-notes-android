import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { colors } from "../../config/colors";

interface Iprops {
    style?: StyleProp<TextStyle>
    numberOfLines?: number
    text: string
}

const CustomText: React.FC<Iprops> = ({ style, text, numberOfLines = undefined }) => {
    return (
        <Text numberOfLines={numberOfLines} ellipsizeMode="tail" style={[styles.text, style]}>
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