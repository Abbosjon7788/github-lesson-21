import React from 'react';
import '../main.css';

const ContentPart = () => {
    return (
        <div className="w-100">
            <h3 className="title mt-5">Bloomberg pledges $70 billion olster black America in new plan</h3>
            <div className="mt-5 d-flex align-items-center">
                <img src="./icons/nature-img.png" className="w-48" alt=""/>
                <span className="ml-5 mr-4 kun-uz">kun.uz</span>
                <img src="./icons/point.png" className="mt-18" alt=""/>
                <span className="ml-5 time">3 hours ago</span>
            </div>
            <div className="mt-5">
                <img src="./icons/bg-img.png" className="w-100" alt=""/>
            </div>
            <div className="my-5 text">
                <p>TULSA, Okla. — Former New York Mayor Bloomberg will announce on Sunday his presidential campaign’s
                    plan aimed at bolstering economic. his presidential campaign’s plan aimed at bolstering economic</p>
            </div>
            <div className="my-5 text-center border rounded-20 pointer">
                <span className="website py-4 d-block">Visit Website</span>
            </div>
        </div>
    );
};

export default ContentPart;