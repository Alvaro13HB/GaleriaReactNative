import React from "react";
import { View, Image } from "react-native";
import styles from "./style";

export function Imagem({route, navigation}: any) {
    const {img} = route.params;

    return (
        <View style={styles.container}>
            <Image source={img} style={styles.fullImage} resizeMode="contain" />
        </View>
    );
}