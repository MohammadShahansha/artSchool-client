import React from 'react';
import useClass from '../../../Hooks/useClass';

const MyClass = () => {
    const [selectedClass] = useClass();
    console.log(selectedClass)
    return (
        <div>
            <h2>my classes</h2>
        </div>
    );
};

export default MyClass;