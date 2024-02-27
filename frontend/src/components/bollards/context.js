import React, { createContext, useState } from 'react';
import useSWR from 'swr';

import axios from 'axios';

const API_BASE_URL = '/api/bollards';

export const BollardContext = createContext();

const fetcher = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
}

export function BollardProvider({children}) {


    const contextObject = {
        selectedCountries,
        validCountries,
        getCountryObject,
        addSelectedCountry,
        removeSelectedCountry,
        countryNameMapping
    }

    return (
        <BollardContext.Provider value={contextObject}>
            {children}
        </BollardContext.Provider>
    )
}