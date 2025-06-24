import { NavigationContainer } from "@react-navigation/native";
import { ComponentHeader } from "../components";
import StackRoutes from "./stack.routes";

export function Routes(){
    return(
        <NavigationContainer>
            <ComponentHeader />
            <StackRoutes />
        </NavigationContainer>
    );
};