import React, { useState } from 'react';
import DarkMode from './components/DarkMode';



const All = () => {
    const [dark, setDark] = useState(true);

    return (
        <div>
            <DarkMode isDark={dark} count={0} />

            <button onClick={() => setDark(!dark)} >change theme</button>
        </div>
    );
};

export default All;