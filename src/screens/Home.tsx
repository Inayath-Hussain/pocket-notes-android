import { StyleSheet, View, Text } from "react-native";
import { colors } from "../config/colors";
import GroupList from "../components/HomeScreen/GroupList";
import AddButton from "../components/HomeScreen/AddButton";

const HomeScreen = () => {
    return (
        <View style={styles.layout}>

            <Text style={styles.headerText}>
                Pocket Notes
            </Text>

            <GroupList />

            <AddButton />
        </View>
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    headerText: {
        color: colors.black,
        fontSize: 30,
        paddingHorizontal: 40,
        paddingTop: 25,
        marginBottom: 20
    },


    layout: {
        height: "100%"
    }
})