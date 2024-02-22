import React, { createContext, useState } from 'react';
import useSWR from 'swr';

import axios from 'axios';

const API_BASE_URL = '/api/countries';

export const CountryContext = createContext();

const fetcher = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
}

export function CountryProvider({children})  {
    ///////////////////////////////////////////////////
    ///// State //////////////////////////////////////
    /////////////////////////////////////////////////

    const [countryNameMapping, setcountryNameMapping] = useState({});
    const [selectedCountries, setSelectedCountries] = useState([]);

    const setMapping = (data) => {
        if (data.length > 0 && data.lenth != Object.keys(countryNameMapping).length ) {
            let mapping = {};
            for ( let i in data ) {
                let country = data[i];
                mapping[country.alpha2code] = {
                    'name': country.name,
                    'id': country.id
                }
            }
            setcountryNameMapping(mapping);
        }
    }

    // TODO: Move into globalconfig
    const swrConfig = { 
        fallbackData: [], 
        refreshInterval: 1000 * 60 * 60, // We don't really need refreshes...or SWR in general but here we are.
        revalidateOnFocus: false,
        onSuccess: setMapping
    }
    
    const {data: validCountries, error: countryError} = useSWR(API_BASE_URL, fetcher, swrConfig);


    ///////////////////////////////////////////////////
    ///// Setup //////////////////////////////////////
    /////////////////////////////////////////////////



    ///////////////////////////////////////////////////
    ///// Update functions ///////////////////////////
    /////////////////////////////////////////////////

    const addSelectedCountry = (countryCode) => {
        if ( selectedCountries.indexOf(countryCode) >= 0 ) { return; } // Don't add if it's already there...
        if ( countryNameMapping[countryCode] == undefined ) { return; }  // but only add valid countries..

        let countries = selectedCountries.slice();
        countries.push(countryCode);
        setSelectedCountries(countries);
    }

    const removeSelectedCountry = (countryCode) => {
        let countries = selectedCountries.filter((c) => c != countryCode )
        setSelectedCountries(countries);
    }

    const getCountryObject = (countryCode) => {
        if(!validCountries) { return {}; }

        for( let i in validCountries ) {
            if ( validCountries[i].alpha2code == countryCode ) { return validCountries[i]; }
        }

        return {};
    }

    const contextObject = {
        selectedCountries,
        validCountries,
        getCountryObject,
        addSelectedCountry,
        removeSelectedCountry,
        countryNameMapping
    }

    return (
        <CountryContext.Provider value={contextObject}>
            {children}
        </CountryContext.Provider>
    )
    
}


