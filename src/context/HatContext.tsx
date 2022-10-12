import {createContext, useEffect, useState} from 'react';
import userRequest from '../api/requestMethods';
import {HatProps} from '../interfaces/interface';
import {
  createHatService,
  editHatService,
  getAllHatsService,
  getHatByIdService,
} from '../services';

type HatsContextProps = {
  hats: HatProps[];
  hat: HatProps;
  loadHats: () => Promise<void>;
  addHat: (hat: HatProps) => Promise<HatProps>;
  updateHat: (id: string, hat: HatProps) => Promise<void>;
  deleteProduct?: (id: string) => Promise<void>;
  loadHatById: (id: string) => Promise<void>;
  uploadImage?: (data: any, id: string) => Promise<void>; // TODO: cambiar ANY
};

const initialValueHat = {
  _id: '',
  address: '',
  advancement: '',
  cintillo: '',
  color_hat: '',
  color_tape: '',
  date: '',
  measure: '',
  name: '',
  observations: '',
  price: '',
  size: '',
  state: '',
  state_payment: '',
  tafalete: '',
  pendiente: true,
  __v: 0,
};

export const HatsContext = createContext({} as HatsContextProps);

export const HatsProvider = ({children}: any) => {
  const [hats, setHats] = useState<HatProps[]>([]);
  const [hat, setHat] = useState<HatProps>(initialValueHat);

  useEffect(() => {
    loadHats();
  }, []);

  const loadHats = async () => {
    const data = await getAllHatsService();
    setHats([...data]);
  };

  const addHat = async (hat: HatProps): Promise<HatProps> => {
    const data = await createHatService(hat);
    setHats([...hats, data]);
    return data;
  };

  const updateHat = async (id: string, hat: HatProps) => {
    const data = await editHatService(id, hat);
    setHats(
      hats.map(hat => {
        return hat._id === id ? data : hat;
      }),
    );
  };

  const loadHatById = async (id: string) => {
    const data = await getHatByIdService(id);
    setHat(data);
  };

  return (
    <HatsContext.Provider
      value={{
        hats,
        hat,
        loadHats,
        addHat,
        updateHat,
        loadHatById,
      }}>
      {children}
    </HatsContext.Provider>
  );
};
