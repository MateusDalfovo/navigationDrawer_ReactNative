import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';


import { telaA } from '../screens/telaA';
import { telaB } from '../screens/telaB';
import { telaC } from '../screens/telaC';



const Drawer = createDrawerNavigator();

export function RouterDrawer() {
  return (
    <Drawer.Navigator >

      <Drawer.Screen 
      name="Tela A" 
      component={telaA} 

      options={{
        title: "Home",

        drawerIcon: ({color, size}) => (
            <MaterialIcons
                name="home"
                color={color}
                size={size}
            />
        )  
    }}
/>

      <Drawer.Screen 
      name="Tela B" 
      component={telaB} 
      options={{
        title: "Profile",

        drawerIcon: ({color, size}) => (
            <MaterialIcons
                name="person"
                color={color}
                size={size}
            />
        )
    }}
/>

      <Drawer.Screen 
      name="Tela C" 
      component={telaC} 
      options={{
        title: "Logout",

        drawerIcon: ({color, size}) => (
            <MaterialIcons
                name="logout"
                color={color}
                size={size}
            />
        )
    }}
/>

    </Drawer.Navigator>
  );
}