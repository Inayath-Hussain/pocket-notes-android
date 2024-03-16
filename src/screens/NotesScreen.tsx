import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Body from "../components/NoteScreen/Body";
import Header from "../components/NoteScreen/Header";
import { RootStackParamList } from "../config/interface";
import Footer from "../components/NoteScreen/Footer";


const NoteScreen: React.FC<NativeStackScreenProps<RootStackParamList, "Note">> = ({ navigation, route }) => {
    const { groupName, bgColor, id } = route.params

    return (
        <>
            <Header groupName={groupName} bgColor={bgColor} />

            <Body id={id} />

            <Footer id={id} />
        </>
    );
}

export default NoteScreen;