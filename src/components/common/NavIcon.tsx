import { StyleSheet, View } from "react-native";
import CustomText from "./CustomText";
import { colors } from "../../config/colors";

export interface INavIconProps {
    groupName: string
    bgColor: string
}

const NavIcon: React.FC<INavIconProps> = ({ groupName, bgColor }) => {

    const [firstWord, secondWord] = groupName.split(" ");

    const displayText = firstWord[0] + (secondWord ? secondWord[0] : "")

    return (

        <View style={[styles.container, customStyles(bgColor).bgColor]}>
            <CustomText text={displayText} style={styles.text} />
        </View>
    );
}




// styles
const customStyles = (color: string) => StyleSheet.create({
    bgColor: {
        backgroundColor: color
    }
})

const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontSize: 22,
        color: colors.white,
        fontWeight: "600"
    }
})

export default NavIcon;