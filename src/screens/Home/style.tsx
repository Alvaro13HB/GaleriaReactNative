import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    galleryContainer: {
        padding: 2,
    },
    imageWrapper: {
        width: width / 3 - 4,
        height: width / 3 - 4,
        margin: 2,
        overflow: 'hidden',
        borderRadius: 4,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default styles;