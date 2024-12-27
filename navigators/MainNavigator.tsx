import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import Pagina1Screen from "../screens/Pagina1Screen";
import Pagina2Screen from "../screens/Pagina2Screen";
import Pagina3Screen from "../screens/Pagina3Screen";
import Calculadora from "../screens/Calculadora";
import Pagina5Screen from "../screens/Pagina5Screen";

const Stack=createStackNavigator();

function MyStack(){
    return (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Drawer" component={MyDrawer}/>
    </Stack.Navigator>
    )

}
const Drawer= createDrawerNavigator();

function MyDrawer(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="" component={Pagina1Screen}/>
            <Drawer.Screen name="" component={Pagina2Screen}/>
            <Drawer.Screen name="" component={Pagina3Screen}/>
            <Drawer.Screen name="" component={Calculadora}/>
            <Drawer.Screen name="" component={Pagina5Screen}/>
        </Drawer.Navigator>            
    )
}

export default function Navigator(){
    return(
<NavigationContainer>
    <MyStack/>
</NavigationContainer>
    )
}