import React from "react";
import { View, Image, TouchableOpacity, FlatList } from "react-native";
import styles from "./style";

export function Home({navigation}: any){
    var imagens = [
        require("../../../assets/1.jpeg"),
        require("../../../assets/2.jpeg"),
        require("../../../assets/3.jpeg"),
        require("../../../assets/4.jpeg"),
        require("../../../assets/5.jpeg"),
        require("../../../assets/6.jpeg"),
    ];
    
    const renderItem = ({ item }: any) => (
            <TouchableOpacity style={styles.imageWrapper} onPress={() => {navigation.navigate("Image"), {img: item};}}>
                <Image source={item} style={styles.image} />
            </TouchableOpacity>
    )


    return(
        <View style={styles.container}>
            <FlatList 
                data={imagens}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                contentContainerStyle={styles.galleryContainer}
            />
        </View>
    );
};