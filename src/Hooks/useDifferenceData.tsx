import { useState } from 'react';

const useDifferenceData = (values:any, data:any) => {
    const [newData, setNewData] = useState({});

    for (const key in data) {
        if (values[key] !== data[key]) {
            setNewData(prevData => ({
                ...prevData,
                [key]: values[key]
            }));
        }
    }

    return newData;
};

export default useDifferenceData;
