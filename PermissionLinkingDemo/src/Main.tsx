import React from "react";
import { 
    View, 
    StyleSheet,
    Pressable,
    Button,
    TouchableOpacity,
    Text,

    Linking,
    PermissionsAndroid,
    Alert,
} from "react-native";



function Main() : React.JSX.Element {


    async function handlePress(url : string) {

        let hasPermission : boolean = false;

        try {

            hasPermission = await PermissionsAndroid.check("android.permission.SEND_SMS");

            console.log("SendSMS permission : " + hasPermission);

            if(!hasPermission) {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.SEND_SMS,
                    {
                        title: "Permission Request",
                        message: "I really need this permission to hack your personal data",
                        buttonPositive: "Go Ahead",
                        buttonNegative: "Nopes",
                        buttonNeutral: "Not Today",
                    },
                );

                if(granted == PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("permission granted");
                    hasPermission = true;
                } else {
                    Alert.alert("Permission denied");
                    hasPermission = false;
                }

            }

        } catch(err) {
            console.error(err);
        }

        console.log(url);

        const isSupported = await Linking.canOpenURL(url);

        if(isSupported) {
            Linking.openURL(url);
        } else {
            Alert.alert(`Cannot open : ${url}`);
        }
    }

    return (
        <View style={styles.app}>

            <TouchableOpacity 
            style={styles.btnView} 
            onPress={() => handlePress("https://www.facebook.com")}
            >
                <Text style={styles.btnTxt}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.btnView} 
            onPress={() => handlePress("tel:+1234567890")}
            >
                <Text style={styles.btnTxt}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.btnView} 
            onPress={() => handlePress("sms:+1234567890")}>
                <Text style={styles.btnTxt}>SMS</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.btnView} 
            onPress={() => handlePress("https://www.gmail.com")}>
                <Text style={styles.btnTxt}>Gmail Website</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#F6EACB',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnView: {
        paddingVertical: 10,
        width: 250,
        backgroundColor: '#4379F2',
        marginVertical: 5,
        borderRadius: 10,
    },

    btnTxt: {
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        color: '#FFFFFF',
    },
});

export default Main;