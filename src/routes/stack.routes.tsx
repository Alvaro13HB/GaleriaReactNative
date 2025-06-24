import { createStackNavigator } from "@react-navigation/stack";
import { ScreenHome, ScreenImage } from "../screens";

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
                name={"Image"}
                component={ScreenImage}
                options={{
                    headerShown: false,
                }}
            />
        </Navigator>
    );
};