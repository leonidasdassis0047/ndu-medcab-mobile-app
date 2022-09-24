import React from 'react';
import {useFormikContext} from 'formik';

import {Button} from '../';

type Props = {
  text: string;
};

const SubmitButton: React.FC<Props> = ({text}) => {
  const {handleSubmit} = useFormikContext();

  return <Button text={text} onPress={handleSubmit} />;
};

export default SubmitButton;
