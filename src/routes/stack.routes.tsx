import { createStackNavigator } from "@react-navigation/stack";
import { ScreenHome, ScreenImage } from "../screens";
import { Image } from "react-native"
import styles from "../components/Header/style";

const {Screen, Navigator} = createStackNavigator();

export default function StackRoutes(){
    return(
        <Navigator initialRouteName="Home">
            <Screen
                name={"Home"}
                component={ScreenHome}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name={"Imagem"}
                component={ScreenImage}
                options={{
                    animation: "fade",
                    headerStyle: styles.container,
                    headerBackTitleStyle: styles.title,
                    headerTitleStyle: styles.title,
                    headerBackImage: () => (<Image source={require("../../assets/left-arrow.png")} />),
                }}
            />
        </Navigator>
    );
};