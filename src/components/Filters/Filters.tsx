import React, {ChangeEvent, useEffect} from 'react';
import Dropdown from "../Dropdown/Dropdown";
import styled from "styled-components";
import getLocations from "../../api/locations";
import {useTripsContext} from "../../context/TripsContext";
import getAvailableDates from "../../api/dates";
import DatePicker from "../DatePicker/DatePicker";

const Wrapper = styled.section`
  min-width: 688px;

  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media(max-width: 720px) {
    min-width: unset;
  }
`

const WrapperCountryCity = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  
  @media(max-width: 425px) {
    flex-direction: column;
  }
`

const Filters = () => {
  const {
    selectedCountry,
    setSelectedCountry,
    setSelectedCity,
    setLocations,
    allCounties,
    citiesByCountry,
    setAvailableDates,
    availableDates,
    selectedCity,
    setSelectedDate,
  } = useTripsContext();
  useEffect(() => {
    getLocations()
      .then(locations => {
        setLocations(locations);
      })
      .catch((e) => {
        console.error(e)
      });
    getAvailableDates()
      .then(dates => {
        setAvailableDates(dates)
      })
      .catch((e) => {
        console.error(e)
      })
  }, []);
  return (
    <Wrapper>
      <WrapperCountryCity>
        <Dropdown
          label="Country"
          options={allCounties}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            setSelectedCountry(event.target.value)
          }}
        />
        <Dropdown
          label="City"
          options={citiesByCountry.map(city => city.name)}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            const city = citiesByCountry.find(city => city.name === event.target.value)
            setSelectedCity(city)
          }}
          disabled={!selectedCountry}
        />
      </WrapperCountryCity>
      <DatePicker
        label="Date"
        dates={availableDates}
        disabled={!selectedCity}
        onDateSelect={(date: string) => {
          setSelectedDate(date)
        }}
      />
    </Wrapper>
  );
};

export default Filters;
