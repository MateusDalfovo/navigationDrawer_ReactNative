import { NavigationContainer } from '@react-navigation/native';
import { RouterDrawer } from './drawer.routes';


export function Routes(){
    return(
        <NavigationContainer>
            <RouterDrawer/>
        </NavigationContainer>

    )
}