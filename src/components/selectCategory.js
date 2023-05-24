import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../redux/actions';
import Select from 'react-select';

//component that show the modal of select category
function SelectCategory(props) {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);


    const [value, setValue] = useState(''); // category value

    const handleChange = (event) => {
        console.log(event.value);
        setValue(event.value);
        console.log(value);
        dispatch(fetchCategory(event.value));
        props.close();
    };

    return (
        <div className='w-64 text-center'>
            <Select
                className='text-black'
                defaultValue={value}
                onChange={handleChange}
                options={categories}
            />
        </div>
    );
}

export default SelectCategory;
