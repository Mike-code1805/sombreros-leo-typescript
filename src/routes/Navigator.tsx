import {createStackNavigator} from '@react-navigation/stack';
import {
  AddHat,
  DetailsHat,
  EdiHat,
  Hats,
  Login,
  Profile,
  Recicle,
  Register,
} from '../screens';
import * as color from '../shared/theme/color';
import * as font from '../shared/theme/font';
import {Welcome} from '../screens/Welcome';
import {useSelector} from 'react-redux';
import {PropsRedux} from '../interfaces/state';
import {HatProps} from '../interfaces/interface';

export type RootStackParams = {
  Hats: undefined;
  Recicle: undefined;
  AddHat: undefined;
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Profile: undefined;
  DetailsHat: HatProps;
  EdiHat: HatProps;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  const stateUser = useSelector((state: PropsRedux) => state.user.currentUser);
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
      {stateUser == null ? (
        <>
          <Stack.Screen
            name="Login"
            options={{title: 'Bienvenido...!'}}
            component={Login}
          />
          <Stack.Screen
            name="Register"
            options={{title: 'Registrate...!'}}
            component={Register}
          />
        </>
      ) : (
        <>
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
          <Stack.Screen
            name="Profile"
            options={{title: 'Tu Perfil!'}}
            component={Profile}
          />
          <Stack.Screen
            name="DetailsHat"
            options={{title: 'Detalles'}}
            component={DetailsHat}
          />
          <Stack.Screen
            name="EdiHat"
            options={{title: 'Editar Sombrero'}}
            component={EdiHat}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
