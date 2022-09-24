import {useEffect, useState} from 'react';

const useHook = (): string | null => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    runCode;
  }, []);

  // setup code to be run in useEffect, can be async function
  const runCode = () => {
    setValue('Awesome Leonidas!');
  };

  return value;
};

export default useHook;
