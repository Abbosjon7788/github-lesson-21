import React from 'react';
import '../main.css';

const NavbarPart = () => {
    return (
        <div className="border-right-2 pt-5 bg-light">
            <ul className="nav justify-content-center flex-column">
                <li className="nav-item mb-5">
                    <a href="#" className="nav-link font-weight-bold size-24 text-dark d-block text-center">Tasma</a>
                </li>
                <li className="nav-item mt-5 mb-3">
                    <a href="#" className="nav-link text-center">
                        <img src="./icons/documents.png" className="w-24" alt=""/>
                    </a>
                </li>
                <li className="nav-item my-3">
                    <a href="#" className="nav-link text-center">
                        <img src="./icons/share.png" className="w-24" alt=""/>
                    </a>
                </li>
                <li className="nav-item my-3">
                    <a href="#" className="nav-link text-center">
                        <img src="./icons/play.png" className="w-24" alt=""/>
                    </a>
                </li>
                <li className="nav-item my-3">
                    <a href="#" className="nav-link text-center">
                        <img src="./icons/bino.png" className="w-24" alt=""/>
                    </a>
                </li>
                <li className="nav-item mt-1024 mb-4">
                    <a href="#" className="nav-link text-center">
                        <img src="./icons/ad-small.png" className="w-24" alt=""/>
                    </a>
                </li>
            </ul>

        </div>
    );
};

export default NavbarPart;