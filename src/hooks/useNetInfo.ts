import {useState, useEffect} from 'react';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';

export const useNetInfo = () => {
  const [network, setNetwork] = useState<boolean>(false);

  useEffect(() => {
    NetInfo.fetch().then((state: NetInfoState) => {
      setNetwork(state.isConnected!);
    });
  }, [network]);

  return {
    network,
    setNetwork,
  };
};
