import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/routes/Navigator';
import {GradientProvider} from './src/context/GradientContext';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {AuthProvider} from './src/context/AuthContext';

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <GradientProvider>
            <AppState>
              <Navigator />
            </AppState>
          </GradientProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
