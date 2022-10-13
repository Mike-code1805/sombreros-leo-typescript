import {HatProps} from '../interfaces/interface';

export interface DetailHatDataProps {
  id: string;
  name: string;
}

export const detailHatData = (hat: HatProps) => {
  const object: DetailHatDataProps[] = [
    {
      id: 'Nombre',
      name: hat.name,
    },
    {
      id: 'Fecha',
      name: hat.date,
    },
    {
      id: 'Color de Sombrero',
      name: hat.color_hat,
    },
    {
      id: 'Cintillo',
      name: hat.cintillo,
    },
    {
      id: 'Tafalete',
      name: hat.tafalete,
    },
    {
      id: 'Medida',
      name: `${hat.measure}cm`,
    },
    {
      id: 'Color de Cinta',
      name: hat.color_tape,
    },
    {
      id: 'Tamaño',
      name: hat.size,
    },
    {
      id: 'Estado',
      name: hat.state,
    },
    {
      id: 'Precio',
      name: hat.price,
    },
    {
      id: 'Adelanto',
      name: hat.advancement,
    },
    {
      id: 'Domicilio',
      name: hat.address,
    },
    {
      id: 'Observaciones',
      name: hat.observations,
    },
  ];
  return object;
};
