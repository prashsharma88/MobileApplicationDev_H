// Title component to be used in each screen to display title

import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

type TitlePropsType = {
    titleTxt : string,
}

function Title ( props : TitlePropsType ) : React.JSX.Element {
    const titleTxt = props.titleTxt;
    return (
        <View>
            <Text style={styles.titleTxt}>
                {titleTxt}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleTxt:  {
        fontSize: 30,
        fontWeight: '600',
        color: 'orange',
        textAlign: 'center',
    }
});

export default Title;