import React from 'react';
import {Formik} from 'formik';
import {Hat, User} from '../../interfaces/interface';

interface Props {
  initialValues: Hat | User;
  onSubmit: any;
  validationSchema: any;
  children: JSX.Element[];
}

const AppForm = ({
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

export default AppForm;
