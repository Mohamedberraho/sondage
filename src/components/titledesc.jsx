import React, { useState } from 'react';

const Titledesc = ({ title, description }) => {
    // State to track whether the content is visible
    const [isContentVisible, setIsContentVisible] = useState(false);

    return (
        <div>
            {/* Conditionally render the title and description based on the visibility state */}
            
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
        </div>
    );
};

export default Titledesc;
