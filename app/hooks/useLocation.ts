import {useEffect, useState} from 'react';
import Persmissions from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

export const useLocation = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>();

  const getLocation = async () => {
    try {
      const permission = await Persmissions.check(
        Persmissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
      if (permission !== Persmissions.RESULTS.GRANTED) {
        const result = await Persmissions.request(
          Persmissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        if (result !== Persmissions.RESULTS.GRANTED) {
          return;
        }
      }

      // only call this after permissions are granted
      Geolocation.getCurrentPosition(
        data => {
          setLocation({
            latitude: data.coords.latitude,
            longitude: data.coords.longitude,
          });
        },
        error => {
          console.log(error.message);
        },
        {
          distanceFilter: 100,
        },
      );

      // setLocation({latitude, longitude});
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
