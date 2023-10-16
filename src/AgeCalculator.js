import React, { useState } from 'react';
import './AgeCalculator.css'; // Import the CSS file



const AgeCalculator = () => {
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState('');

    const handleBirthDateChange = (event) => {
        setBirthDate(event.target.value);
    };

    const calculateAge = () => {
        const birthYear = new Date(birthDate).getFullYear();
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        setAge(age);
    };

    return (
        <div className="centered-content">
            <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Age Calculator</h1>
            <p style={{ fontSize: '18px' }}>Enter your date of birth:</p>
            <input type="date" value={birthDate} onChange={handleBirthDateChange} />
            <br />
            <button style={{ backgroundColor: 'blue', color: 'white', fontSize: '18px' }} onClick={calculateAge}>Calculate Age</button>
            {age && <p style={{ fontSize: '24px', fontWeight: 'bold' }}>You are {age} years old</p>}
        </div>
    );
};

export default AgeCalculator;
