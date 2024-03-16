import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

import { colors } from "../../config/colors";
import MemoGoBackIcon from "../Icons/GoBack";
import { RootStackParamList } from "../../config/interface";
import NavIcon from "../common/NavIcon";
import CustomText from "../common/CustomText";
import { IGroup } from "../../utilities/localStorage/group";



type Iprops = Pick<IGroup, "groupName" | "bgColor">

const Header: React.FC<Iprops> = ({ groupName, bgColor }) => {

    const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>

            {/* Go Back Button */}
            <TouchableWithoutFeedback onPress={() => navigate.navigate("Home")}>
                <MemoGoBackIcon width={25} height={25} />
            </TouchableWithoutFeedback>

            <NavIcon bgColor={bgColor} groupName={groupName} />

            <CustomText text={groupName}
                style={styles.text} numberOfLines={1} />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: colors.primary,

        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        columnGap: 15
    },

    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "600",
        flex: 1
    }
})

export default Header;