import React from 'react';
import {Formik} from 'formik';
import {HatProps, User} from '../../interfaces/interface';

interface Props {
  initialValues: HatProps | User;
  onSubmit: any;
  validationSchema: any;
  children: JSX.Element[];
}

export const AppForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
};
