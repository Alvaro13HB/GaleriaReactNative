import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Galeria</Text>
        </View>
    );
}
