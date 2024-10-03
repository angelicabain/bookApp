import React from "react";
import { Image, StyleSheet, View , Text} from "react-native";
import { IBook } from "../types";

const BookItem = (props: IBook) => 
{
    const { id, volumeInfo} = props; 
    const {imageLinks, title, authors} = volumeInfo;
    return ( <View style = {styles.container}> 
    <Image
    source = {{
        uri: 
        imageLinks?.thumbnail ||
        "https://terracehospice.org/wp-content/uploads/2024/05/default_book_cover_2015.jpg"
    }}
    style = {styles.image}
    />
     <View style ={styles.info}> 
        <Text style = {styles.title}> {title} </Text>

        <Text style={styles.author}> {authors?.join(", ")} </Text>
        
        </View> 


    </View>
    );
};

export default BookItem; 

const styles = StyleSheet.create(
    {
        container:
        {
            padding: 10,
            flexDirection: 'column',
            gap: 5,
            display: "flex",
            justifyContent: 'center',
           
            
        },
        image:
        {
            width: 140,
            height: 200,
            borderRadius: 5
        },
        info:
        {},
        title:
        {
            fontSize:16,
            fontWeight: '500',
            textTransform: 'capitalize',
            color: '#ECE7E2',
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
        },
        author:
        {
            fontSize: 13,
            color: '#ECE7E2',
            textTransform: 'capitalize',

        }
    }
)