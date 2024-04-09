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
            lon: searchData.value.split(',')[1].trim(),
            city: searchData.label.split(',')[0].trim(),
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
        styles={{
            control: (provided, state) => ({
                ...provided,
                backgroundColor: 'transparent',
                color: '#fff',
                border: state.isFocused ? '1.5px solid #fff' : '1.5px solid #fff',
                width: '300px',
            }),
            singleValue: (provided) => ({
                ...provided,
                color: '#fff',
            }),
            placeholder: (provided) => ({
                ...provided,
                color: '#fff',
            }),
            dropdownIndicator: (provided) => ({
                ...provided,
                color: '#fff',
            }),
            indicatorSeparator: (provided) => ({
                ...provided,
                backgroundColor: '#fff',
            }),
            input: (provided) => ({
                ...provided,
                color: '#fff',
            }),
            menu: (provided) => ({
                ...provided,
                backgroundColor: '#333',
            }),
            option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isFocused ? '#555' : '#333',
                color: state.isFocused ? '#fff' : '#fff',
            }),

        }}
    />
  )
}

export default Search