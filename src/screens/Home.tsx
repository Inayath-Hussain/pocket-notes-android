import { StyleSheet, View, Text } from "react-native";
import { colors } from "../colors";
import NotesList from "../components/HomeScreen/NotesList";
import AddButton from "../components/HomeScreen/AddButton";

const HomeScreen = () => {
    return (
        <View style={styles.layout}>

            <Text style={styles.headerText}>
                Pocket Notes
            </Text>

            <NotesList />

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

        backgroundColor: colors.white
    },


    layout: {
        height: "100%"
    }
})