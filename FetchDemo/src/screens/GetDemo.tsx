import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import MyBtn from "../components/MyBtn";
import AppLayout from "../layout/AppLayout";


type Post = {
    id: number,
    userId : number,
    title : string,
    body : string,
}

function GetDemo() : React.JSX.Element {

    const [PostData, setPostData] = useState(new Array<Post>());
    const [refreshCount, updateRefreshCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("effect function");
        // Effect function
        // Do the Get request and update PostData state variable

        /**
         * Fetch api returns a Promise.
         * we are using 'then' and 'catch' methods to handle the promise.
         * 
         * 
         * To do any async operation (like fetch) you can either use async-await keywords
         * or you can resolve the promise using then-catch blocks.
         */

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            // promise is resolved

            if( response.status == 200 ) {
                // success response
                return response.json(); // returns a Promise
            } else {
                console.log("Get Request Server error " + response.status);
                return null;
            }
        })
        .then((json) => {
            if(json === undefined || json === null) {
                console.log("error !!")
            } else {
                console.log("Success Get Request, Post Count : " + json.length);
                setPostData(json);
                setLoading(false);
            }
        })
        .catch(err => {
            // promise is rejected
            console.log(`Error in GetRequest : ${err}`);
        });
    }, [
        /* Dependency Array */
        refreshCount,
    ]);


    return(
        <AppLayout>
            <View>
                <Text style={style.screenTitle}>Get Demo</Text>
                {/* Refresh Button */}
                <MyBtn title="Refresh" onPress={() => {
                    console.log("Refresh UI");
                    updateRefreshCount(refreshCount+1);
                    setLoading(true);
                }} />

                { 
                    loading ? 
                    <ActivityIndicator size='large' /> 
                    : 
                    <FlatList 
                    data={PostData}
                    keyExtractor={item => item.id+""}
                    renderItem={({item}) => (
                        <View style={style.PostView}>
                            <Text style={style.titleTxt}>{item.id} : {item.title}</Text>
                            <Text style={style.bodyTxt}>{item.body}</Text>
                        </View>
                    )}
                    />
                }


                {/* <ScrollView>
                    {
                    PostData.map((post) => (
                        <View key={post.id}>
                            <Text>{post.id} : {post.title}</Text>
                            
                            <Text>{post.body}</Text>
                        </View>
                        ))
                    }
                </ScrollView> */}
                
            </View>
        </AppLayout>
    );
}

const style = StyleSheet.create({
    screenTitle: {
        textAlign: 'center',
        fontSize: 30,
        backgroundColor: 'blue',
        padding: 5,
        color: '#FFF',
    },
    PostView: {
        minHeight: 80,
        padding: 10,
        marginBottom: 5,
        backgroundColor: 'grey',
    },
    titleTxt:  {
        fontSize: 25,
        fontWeight: '600',
        color: '#FFF',
    },
    bodyTxt: {
        fontSize: 20,
        fontWeight: '400',
        color: '#FFF',
    }
});

export default GetDemo;