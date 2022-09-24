import React from 'react';

import authApi from '../apis/auth';

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = React.useState<any>();

  React.useEffect(() => {
    fetUserDetails();
  }, []);

  const fetUserDetails = async () => {
    const response = await authApi.getCurrentUser();
    if (!response.ok) {
      return;
    }
    setCurrentUser(response.data);
  };

  return currentUser;
};

export default useCurrentUser;
