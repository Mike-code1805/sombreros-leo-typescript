import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";

export const data = [
  {
    id: "afsf123231rg1g111",
    name: "Miguel Enrique Saca Accostupa",
    color_hat: "Rojo",
    cintillo: "si",
    tafalete: "si",
    measure: "1/4",
    color_tape: "blanco",
    size: "12",
    state: "2",
    price: parseFloat("15.25").toFixed(2),
    advancement: parseFloat("2.1").toFixed(2),
    address: "su casa",
    observations: "1/4/54",
    state_payment: "c",
    date: format(new Date(), "yyyy-MM-dd, H:mma"),
    pendiente: false,
  },
  {
    id: "afsf123231rg1g112",
    name: "Jhon",
    color_hat: "Rojo",
    cintillo: "si",
    tafalete: "si",
    measure: "1/4",
    color_tape: "blanco",
    size: "12",
    state: "2",
    price: "15",
    advancement: "2",
    address: "su casa",
    observations: "1/4/54",
    state_payment: "p",
    date: format(new Date(), "yyyy-MM-dd, H:mma"),
    pendiente: false,
  },
  {
    id: "afsf123231rg1g113",
    name: "Pablo",
    color_hat: "Rojo",
    cintillo: "si",
    tafalete: "si",
    measure: "1/4",
    color_tape: "blanco",
    size: "12",
    state: "2",
    price: "15",
    advancement: "2",
    address: "su casa",
    observations: "1/4/54",
    state_payment: "p",
    date: format(new Date(), "yyyy-MM-dd, H:mma"),
    pendiente: true,
  },
  {
    id: "afsf123231rg1g114",
    name: "Enrique",
    color_hat: "rojo",
    cintillo: "si",
    tafalete: "si",
    measure: "1/4",
    color_tape: "blanco",
    size: "12",
    state: "2",
    price: "15",
    advancement: "2",
    address: "su casa",
    observations: "1/4/54",
    state_payment: "p",
    date: format(new Date(), "yyyy-MM-dd, H:mma"),
    pendiente: true,
  },
  {
    id: "afsf123231rg1g115",
    name: "Juanjo",
    color_hat: "Rojo",
    cintillo: "si",
    tafalete: "si",
    measure: "1/4",
    color_tape: "blanco",
    size: "12",
    state: "2",
    price: "15",
    advancement: "2",
    address: "su casa",
    observations: "1/4/54",
    state_payment: "p",
    date: format(new Date(), "yyyy-MM-dd, H:mma"),
    pendiente: true,
  },
  {
    id: "afsf123231rg1g116",
    name: "Juanjo",
    color_hat: "Rojo",
    cintillo: "si",
    tafalete: "si",
    measure: "1/4",
    color_tape: "blanco",
    size: "12",
    state: "2",
    price: "15",
    advancement: "2",
    address: "su casa",
    observations: "1/4/54",
    state_payment: "p",
    date: format(new Date(), "yyyy-MM-dd, H:mma"),
    pendiente: false,
  },
];

const tokenUser = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const token = tokenUser("token")
  .then((res) => {
    return res;
  })
  .catch((err) => {
    console.log(err);
  });

export const TOKEN = token._W;