import {createStackNavigator} from '@react-navigation/stack';
import {AddHat, Hats, Login, Recicle, Register} from '../screens';
import * as color from '../shared/theme/color';
import * as font from '../shared/theme/font';
import {Welcome} from '../screens/Welcome';

export type RootStackParams = {
  Hats: undefined;
  Recicle: undefined;
  AddHat: undefined;
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: color.brown_light,
        },
        headerTitleStyle: {
          fontFamily: font.font,
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Login"
        options={{title: 'Ingresar'}}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{title: 'Registrarse'}}
        component={Register}
      />
      <Stack.Screen
        name="Welcome"
        options={{title: 'Bienvenido...'}}
        component={Welcome}
      />
      <Stack.Screen
        name="Hats"
        options={{title: 'Sombreros'}}
        component={Hats}
      />
      <Stack.Screen
        name="Recicle"
        options={{title: 'Reciclaje'}}
        component={Recicle}
      />
      <Stack.Screen
        name="AddHat"
        options={{title: 'Añadir Sombrero'}}
        component={AddHat}
      />
    </Stack.Navigator>
  );
};
