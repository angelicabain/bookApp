import React, {useState, useRef, useEffect} from "react";
import HomeScreen from "../screens/HomeScreen";
import { Pressable, StyleSheet,Text, TextInput, View , Animated, TouchableOpacity} from "react-native";

interface ISearchBar{
    value: string;
    setValue:React.Dispatch<React.SetStateAction<string>>;
    onPress: () => void;
}
const SearchBar = (props: ISearchBar) =>
{
    const {value, setValue, onPress} = props; 

    return(<View style = {styles.container}> 
        <TextInput style = {styles.input} placeholder="Enter Search:" 
        placeholderTextColor="#9BAFA4"
        value = {value}
        onChangeText={setValue}
        onSubmitEditing={onPress}
        />


        <Pressable style = {styles.btn} onPress={onPress}> 
        <Text style = {styles.btnText}>Search</Text>

        </Pressable>
    </View>);
}

export default SearchBar;



const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        gap: 20,
    },
    input: {
        backgroundColor: '#ECE7E2',
        padding: 15,
        fontSize: 15,
        color: "#4A7766",
        flex: 1,
        borderRadius: 20,
        textAlign: "left",
        textAlignVertical: "center", 
        borderWidth: 0, 
        borderColor: 'transparent'
    },
    btn: {
        paddingHorizontal: 15,
        backgroundColor: '#9BAFA4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    btnText: {   
        fontSize: 15,
        fontWeight: '500',
    },
});
