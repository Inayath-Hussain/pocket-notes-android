import { FlatList, StyleSheet, View } from "react-native";
import { useMMKVString } from "react-native-mmkv";
import { colors } from "../../config/colors";
import { InoteJSON } from "../../utilities/localStorage/notes";
import Note from "./Note";


interface Iprops {
    id: string
}

const Body: React.FC<Iprops> = ({ id }) => {

    const [notes] = useMMKVString(id);

    const parsedNotes = notes ? JSON.parse(notes) as InoteJSON[] : [];

    return (
        <View style={styles.container}>

            <FlatList data={parsedNotes} renderItem={Note} scrollEnabled />

        </View>
    );
}


// styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        flex: 1,
        paddingHorizontal: 18,
        paddingVertical: 19
    }
})

export default Body;