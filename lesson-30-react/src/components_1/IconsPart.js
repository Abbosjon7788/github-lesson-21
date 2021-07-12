import React from 'react';

const IconsPart = () => {
    return (
        <div className="w-100 d-flex">
            <div className="for-icons mr-2 shadow">
                <img src="./icons/book-mark.png" alt=""/>
            </div>
            <div className="for-icons ml-2 shadow">
                <img src="./icons/link-copy.png" alt=""/>
            </div>
            <div className="for-icons mr-2 ml-318 shadow">
                <img src="./icons/facebook.png" alt=""/>
            </div>
            <div className="for-icons mx-2 shadow">
                <img src="./icons/google.png" alt=""/>
            </div>
            <div className="for-icons mx-2 shadow">
                <img src="./icons/telegram.png" alt=""/>
            </div>
            <div className="for-icons mx-2 shadow">
                <img src="./icons/twitter.png" alt=""/>
            </div>
            <div className="ml-auto mr-5 position-relative pointer">
                <img src="./icons/line.png" alt=""/>
                <div className="position-absolute">
                    <img src="./icons/line.png" className="rotate-90" alt=""/>

                </div>
            </div>
        </div>
    );
};

export default IconsPart;