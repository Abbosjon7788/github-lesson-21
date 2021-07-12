import React, {Component} from 'react';

class NavbarPart extends Component {
    render() {
        return (
            <div>
                <section id="navbar-part">
                    <div className="container py-3">
                        <div className="row">
                            <ul className="nav w-100">
                                <li className="nav-item mr-4">
                                    <div className="home-logo cursor-pointer d-flex align-items-center justify-content-center">
                                        <img src="../icons/home.png" alt=""/>
                                    </div>

                                </li>
                                <li className="nav-item mr-4">
                                    <a className="nav-link" href="#">Jamiyat haqida</a>
                                    <div className="sub-items">
                                        <table className="table cursor-pointer">
                                            <tbody>
                                            <tr>
                                                <td>Korxona yangiliklari</td>
                                            </tr>
                                            <tr>
                                                <td>Tadbirlar</td>
                                            </tr>
                                            <tr>
                                                <td>Mamlakat xabarlari</td>
                                            </tr>
                                            <tr>
                                                <td>Axborot</td>
                                            </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                </li>
                                <li className="nav-item mr-4">
                                    <a className="nav-link" href="#">Struktura</a>
                                </li>
                                <li className="nav-item mr-4">
                                    <a className="nav-link" href="#">Yangiliklar</a>
                                </li>
                                <li className="nav-item mr-4">
                                    <a className="nav-link" href="#">Elektron murojaatlar</a>
                                </li>
                                <li className="nav-item mr-4">
                                    <a className="nav-link" href="#">Interaktiv xizmatlar</a>
                                </li>
                                <li className="nav-item mr-4">
                                    <a className="nav-link" href="#">Aloqa</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default NavbarPart;