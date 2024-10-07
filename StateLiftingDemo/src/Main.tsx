import React, {useState} from "react";
import { StyleSheet, View } from "react-native";
import MyInputBox from "./components/MyInputBox";
import MyCheckBox from "./components/MyCheckBox";
import MyBtn from "./components/MyBtn";
import Output from "./components/Output";

function Main() : React.JSX.Element {


    // Define State Lifting : It is a design pattern that enables us to share data between 
    // different child components by lifting the state from child component to parent component.

    // State Lifting: Lift the states from child component to the parent component.
    // Pass the state variable and change state method as Props to child component from parent.


    // local state from MyInputBox is lifted to parent component.
    const [userInput, setUserInput] = useState('');

    // local state from MyCheckbox is lifted to parent component.
    const [checked, setChecked] = useState(false);

    const [outputState, setOutputState] = useState({
        userInputstr : '',
        checkboxStatus : false,
    });

    function func(stat: boolean) {
        // console.log(stat);
        setChecked(stat);
    }

    function handlePress() {
        setOutputState(
            {
                userInputstr: userInput,
                checkboxStatus : checked,
            }
        );
    }
    return (
        <View>
            <MyInputBox userInput={userInput} setUserInput={setUserInput}/>
            <MyCheckBox checkedStatus={checked} updateCheckedStatus={func} />
            <MyBtn pressHandler={handlePress}/>
            <Output userInputString={outputState.userInputstr} checkboxStatus={outputState.checkboxStatus} />
        </View>
    )
}

const styles = StyleSheet.create({});

export default Main;