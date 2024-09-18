import React from "react";
import {
    View,
    Text,
    ScrollView,
} from "react-native";
import ContactListItem from "./components/ContactListItem";
import { contactList } from "./data";
import ContactListFlatlist from "./components/ContactListFlatlist";


function Main() : React.JSX.Element {
    return (
        <View>
            <Text>
                ListDemo
            </Text>

{/*}
            <ScrollView>
                {
                    contactList.map((item,index)=>
                        {
                            return (
                                <View key={index}>
                                    <ContactListItem 
                                    fName={item.firstName}
                                    lName={item.lastName}
                                    mob={item.mobileNumber}
                                    email={item.emailAddress}
                                    />
                                </View>
                            );
                        })
                }
            </ScrollView> 
*/}
            <ContactListFlatlist />
        </View>
    );
}

export default Main;