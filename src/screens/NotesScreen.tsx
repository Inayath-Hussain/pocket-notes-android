import { useEffect, useState } from "react";
import { Button, View } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Body from "../components/NoteScreen/Body";
import CustomText from "../components/common/CustomText";
import Header from "../components/NoteScreen/Header";
import { RootStackParamList } from "../config/interface";
import { routes } from "../routes";
import { storage } from "../utilities/localStorage/storageInstance";
import { Inote } from "../utilities/localStorage/notes";
import Footer from "../components/NoteScreen/Footer";


const NoteScreen: React.FC<NativeStackScreenProps<RootStackParamList, "Note">> = ({ navigation, route }) => {
    const { groupName, bgColor, id } = route.params

    const [note, setNote] = useState<Inote | null>(null);

    useEffect(() => {
        storage.getString(id)
    }, [id])

    return (
        <>
            <Header groupName={groupName} bgColor={bgColor} />

            <Body id={id} />

            <Footer id={id} />
        </>
    );
}

export default NoteScreen;