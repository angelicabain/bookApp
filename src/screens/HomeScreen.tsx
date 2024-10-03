import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";

import useSearch from "../hooks/useSearch";
import BookItem from "../components/BookItem";

const HomeScreen = () => {
    const [query, setQuery] = useState('');

    //Data fetching through useSearch hook
    const { data, refetch } = useSearch(query);
      

    console.log(data);

    //Data rendering in BookItem
    return (
        <View style={styles.container}>
            <SearchBar value={query} setValue={setQuery} onPress={refetch} />
            <FlatList 
        
            data = {data}
            renderItem={({item}) => <BookItem {...item} />}
            
            //each element in data must have unique key so react can provide the caching functionality 
            keyExtractor={item=>item.id}

            contentContainerStyle= {{
                padding:10,
                gap: 5,
            }}
            horizontal = {true}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4A7766',
        
    },
});



