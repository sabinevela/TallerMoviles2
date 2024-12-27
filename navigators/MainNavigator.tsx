import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import Pagina1Screen from "../screens/Pagina1Screen";
import Pagina2Screen from "../screens/Pagina2Screen";
import Pagina3Screen from "../screens/Pagina3Screen";
import Calculadora from "../screens/Calculadora";
import AplicacionTemperatura from "../screens/AplicacionTemperatura";
import Pagina4Screen from "../screens/Pagina4Screen";
import API from "../screens/API";
import API2 from "../screens/API2";

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
            <Drawer.Screen name="" component={Pagina4Screen}/>
            <Drawer.Screen name="" component={Calculadora}/>
            <Drawer.Screen name="" component={AplicacionTemperatura}/>
            <Drawer.Screen name="" component={API}/>
            <Drawer.Screen name="" component={API2}/>
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