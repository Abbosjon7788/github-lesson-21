import React, {Component} from 'react';

class InformationDescription extends Component {
    render() {
        return (
            <div className="w-100">
                <section id="information-description">
                    <div className="info-icons">
                        <a href="#" className="text-decoration-none mr-5">Jamiyat haqida</a>
                        <span className="icons icon-calendar cursor-pointer mr-2"/>
                        <span className="color-grey mr-5">16:48 / 12.11.20</span>
                        <span className="icons icon-views cursor-pointer m-top-3 mr-2"/>
                        <span className="color-grey mr-5">321</span>
                        <span className="icons icon-message m-top-3 cursor-pointer mr-2"/>
                        <span className="color-grey mr-5">100</span>


                    </div>
                    <h2 className="info-description-text">Eksport qiluvchi tadbirkorlik subektlariga!!!</h2>
                    <p className="info-content-text">“O‘zdonmaxsulot” aksiyadorlik kompaniyasi tizim korxonalari
                        tomonidan istisno tariqasida maxalliy
                        tadbirkorlik sub'ektlariga eksport qilish sharti bilan birja savdolari orqali bug’doy
                        sotilmoqda.
                        Bug’doy 2019 yil 1 sentyabrgacha 1 tonnasining boshlangich narxi qo‘shilgan qiymat solig’isiz 1
                        610 000 so‘mdan, qo‘shilgan qiymat solig’ini xisobga olgan xolda 1 932 000 so‘mdan sotiladi.
                        Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat soligi stavkasini qo‘llash
                        natijasida xosil bo‘lgan qo‘shilgan qiymat soligining ortiqcha summasi Adliya vazirligi
                        tomonidan 2016 yil 7 aprelda 2775-son bilan ro‘yxatga olingan Nizomga asosan qaytarib
                        beriladi.</p>
                    <div className="comments-title">
                        <span className="text-name">Mavzuga izohlar</span>
                        <span className="opinion-number">2 ta fikr</span>
                    </div>
                    <div className="comment-area">
                        <img src="../icons/user-photo.png" alt=""/>
                        <textarea placeholder="izoh qoldirishingiz mumkin"/>
                    </div>
                    <div className="comments">
                        <img src="../icons/comment-user-1.png" alt=""/>
                        <div className="user-info">
                            <h3 className="name">Nigina Karimova</h3>
                            <p className="comment-text">Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat
                                soligi stavkasini qo‘llash natijasida xosil bo‘lgan qo‘shilgan qiymat soligining
                                ortiqcha <a href="#" className="text-decoration-none">batafsil</a>  </p>
                            <div className="like">
                                <span className="icons cursor-pointer icon-open-heart mr-5"/>
                                <span className="color-grey">Javob qaytarish</span>
                                <span className="color-grey ml-auto">2 soat avval</span>
                            </div>
                        </div>
                    </div>
                    <div className="comments">
                        <img src="../icons/comment-user-1.png" alt=""/>
                        <div className="user-info">
                            <h3 className="name">Nigina Karimova</h3>
                            <p className="comment-text">Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat
                                soligi stavkasini qo‘llash natijasida xosil bo‘lgan qo‘shilgan qiymat soligining
                                ortiqcha <a href="#" className="text-decoration-none">batafsil</a>  </p>
                            <div className="like">
                                <span className="icons cursor-pointer icon-open-heart mr-5"/>
                                <span className="color-grey">Javob qaytarish</span>
                                <span className="color-grey ml-auto">2 soat avval</span>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

export default InformationDescription;