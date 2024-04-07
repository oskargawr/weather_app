import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions } from '../../api';
import axios from 'axios';


function Search({ onSearchChange}) {
    const [search, setSearch] = useState('')



    const handleChange = (searchData) => {
        setSearch(searchData)
        onSearchChange({
            lat: searchData.value.split(',')[0].trim(),
            lon: searchData.value.split(',')[1].trim()
        })
    }

    const loadOptions = async (input) => {
        try {
            if (input) {
                geoApiOptions.params = { minPopulation: '0', namePrefix: input };
            } else {
                geoApiOptions.params = { minPopulation: '1000000', namePrefix: input };
            }
            const response = await axios.request(geoApiOptions);
            return {
                options: response.data.data.map(city => ({
                    value: `${city.latitude}, ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`
                })),
            }
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <AsyncPaginate 
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
        >

    </AsyncPaginate>
  )
}

export default Search