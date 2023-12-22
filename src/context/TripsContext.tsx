import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState} from "react";
import {Locations} from "../api/locations";


interface TripsContextValue {
  selectedCountry: string;
  setSelectedCountry: Dispatch<SetStateAction<string>>;
  selectedCity: City | undefined;
  setSelectedCity: Dispatch<SetStateAction<City | undefined>>;
  setLocations: Dispatch<SetStateAction<Locations | undefined>>;
  allCounties: string[];
  citiesByCountry: City[];
  availableDates: string[];
  setAvailableDates: Dispatch<SetStateAction<string[]>>;
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
}

const TripsContext = createContext({} as TripsContextValue);

export const useTripsContext = () => useContext(TripsContext);

type City = {
  id: number;
  name: string;
  country: string;
}

type Props = {
  children: ReactNode;
}
export const TripsContextProvider = ({children}: Props) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState<City | undefined>();
  const [selectedDate, setSelectedDate] = useState('');
  const [locations, setLocations] = useState<Locations | undefined>();
  const [availableDates, setAvailableDates] = useState<string[]>([]);

  const allCities = useMemo(() => {
    const loadedCities: City[] = [];
    for (const key in locations) {
      const countryCities: [number, string][] = locations[key];
      countryCities.forEach(([id, name]) => loadedCities.push({
        id,
        name,
        country: key
      }))
    }
    return loadedCities;
  }, [locations])

  const citiesByCountry = useMemo(() => {
    return allCities.filter(city => city.country === selectedCountry)
  }, [allCities, selectedCountry])

  const allCounties = useMemo(() => {
    const loadedCountries: string[] = [];
    for (const country in locations) {
      loadedCountries.push(country);
    }
    return loadedCountries;
  }, [locations])

  const initialValue: TripsContextValue = {
    selectedCountry,
    setSelectedCountry,
    selectedCity,
    setSelectedCity,
    setLocations,
    allCounties,
    citiesByCountry,
    availableDates,
    setAvailableDates,
    selectedDate,
    setSelectedDate,
  }
  return <TripsContext.Provider value={initialValue}>{children}</TripsContext.Provider>;
}
