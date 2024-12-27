
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import Pagina4Screen from '../screens/Pagina4Screen';
import Pagina1Screen from '../screens/Pagina1Screen';
import Calculadora from '../screens/Calculadora';
import AplicacionTemperatura from '../screens/AplicacionTemperatura';
import API from '../screens/API';
import API2 from '../screens/API2';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pagina1" component={Pagina1Screen} />
      <Tab.Screen name="Pagina2" component={Pagina2Screen} />
      <Tab.Screen name="Pagina3" component={Pagina3Screen} />
      <Tab.Screen name="Pagina4" component={Pagina4Screen} />
      <Tab.Screen name="Pagina5" component={Calculadora} />
      <Tab.Screen name="Pagina4" component={AplicacionTemperatura} />
      <Tab.Screen name="Pagina4" component={API} />
      <Tab.Screen name="Pagina4" component={API2} />
    </Tab.Navigator>
  );
}
//////////////////////////////////////////////////////////
const Stack = createStackNavigator()
function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="ventana" component={Pagina1Screen}/>
      <Stack.Screen name="Bottom" component={MyTabs}/>
    </Stack.Navigator>
  )
}

export default function BottomTabNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}
