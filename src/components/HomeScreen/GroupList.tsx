import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"
import { useMMKVString } from "react-native-mmkv";

import { IGroup, groupKey } from "../../utilities/localStorage/group";
import CustomText from "../common/CustomText";
import { routes } from "../../routes";
import CustomLink from "../React-Native-Navigation/CustomLink";
import NavIcon from "../common/NavIcon";


const GroupList = () => {
    const [groups] = useMMKVString(groupKey)
    const parsedGroups = groups ? JSON.parse(groups) : []

    return (
        <View style={GroupListStyles.container}>
            <FlatList data={parsedGroups} renderItem={Group} scrollEnabled />
        </View>
    );
}

const GroupListStyles = StyleSheet.create({
    container: {
        height: 200,
        display: "flex",
        flex: 100
    }
})

export default GroupList;





const Group: ListRenderItem<IGroup> = ({ item }) => {
    return (
        <CustomLink to={{ screen: routes.note, params: { id: item.id, groupName: item.groupName, bgColor: item.bgColor } }}
            style={GroupStyle.verticalSpacing}>

            <View style={GroupStyle.container}>
                {/* group icon */}
                <NavIcon bgColor={item.bgColor} groupName={item.groupName} />
                {/* group name */}
                <CustomText style={GroupStyle.text} text={item.groupName} />
            </View>

        </CustomLink>
    )
}


const GroupStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 40,
        columnGap: 18
    },

    dot: {
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontSize: 24,
        textTransform: "capitalize",
        fontWeight: "500",
        fontFamily: "roboto"
    },

    verticalSpacing: {
        marginVertical: 15
    }
})