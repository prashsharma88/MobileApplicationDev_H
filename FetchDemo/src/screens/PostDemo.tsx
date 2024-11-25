import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    TextInput,
} from "react-native";
import MyBtn from "../components/MyBtn";
import AppLayout from "../layout/AppLayout";


function PostDemo() : React.JSX.Element {

    const [titleTxt, setTitleTxt] = useState('');
    const [bodyTxt, setbodyTxt] = useState('');
    const [postResponseStauts, setPostResponseStatue] = useState(false);
    const [loading, setLoading] = useState(true);

    function PostData() {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: titleTxt,
              body: bodyTxt,
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => {
                // check if the response status is 201
                
                setPostResponseStatue(response.status == 201)
                setLoading(false);
                
                return response.json();
            })
            .then((json) => console.log(json));
    }

    return (
        <AppLayout>
            <View>
                {/* Implement the form here */}

                <TextInput 
                maxLength={50}
                numberOfLines={2}
                value={titleTxt}
                onChangeText={setTitleTxt}
                style={style.inputTxtArea}
                placeholder="Title"
                />

                <TextInput 
                maxLength={50}
                numberOfLines={4}
                value={bodyTxt}
                onChangeText={setbodyTxt}
                style={style.inputTxtArea}
                placeholder="Body"
                />

                <MyBtn title="Submit" onPress={() => {
                    console.log("Submit Data");
                    PostData();
                }} />

                {/* {loading == false ? 
                <View>
                    <Text
                    style={[style.responseTxt, {color: postResponseStauts?'green':'red'}]}
                    >Request {postResponseStauts ? "Completed" : "Failed"}</Text>
                </View> 
                :
                <View>
                </View>
                } */}

                <View style={{display: loading==true? 'none':'flex'}}>
                    <Text
                    style={[style.responseTxt, {color: postResponseStauts?'green':'red'}]}
                    >Request {postResponseStauts ? "Completed" : "Failed"}</Text>
                </View> 

                {loading == false &&
                    <View>
                        <Text
                        style={[style.responseTxt, {color: postResponseStauts?'green':'red'}]}
                        >Request {postResponseStauts ? "Completed" : "Failed"}</Text>
                    </View> 

                }
            </View>
        </AppLayout>
    );
}

const style = StyleSheet.create({
    inputTxtArea: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
        fontSize: 25,
        // textAlign: 'center'
        padding: 10,
    },
    responseTxt: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 10,
    }
});

export default PostDemo;