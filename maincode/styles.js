import {StyleSheet, Dimensions} from 'react-native'
import {Colors} from 'react-native-paper'

export const backgroundcolor = Colors.pink600;
export const headertextcolor = Colors.cyan500;

export default styles = StyleSheet.create({
    tag: {
            fontFamily: "monospace",
            fontWeight: "bold",
            color: headertextcolor,
            fontSize: 20,
            marginLeft: 10,
            marginTop: 60,
    },
    start: {
            borderRadius: 30,
            padding: 5,
            overflow: "hidden",
            width: 150,
            elevation: 5,
    },
    front: {
            flex: 0.85,
            width: Dimensions.get("window").width * 1.4,
            borderBottomRightRadius: 1000,
            elevation: 3,
    },
    loader: {flex: 1, justifyContent: 'center', alignItems: 'center'}
    
});
