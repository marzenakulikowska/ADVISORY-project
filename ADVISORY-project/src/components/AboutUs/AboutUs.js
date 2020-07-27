import React from 'react';
import person from '../../assets/person.png';
const AboutUs = () => {
    window.scrollTo(0, 0);
    return (
    <div className="aboutus-container">
        <div className="main-photo">
                <div className="title-banner">
                    <div>Nasza nowoczesna hala magazynowo-przetwórcza</div>
                </div>
        </div>
                <div className="aboutus-content">
                    <h1>Nasz zespół</h1>
                    <div className="our-staff-photos">
                        <div>
                             <img src={person} alt="Michał Kulikowski"></img>
                             <h1>Imię nazwisko</h1>
                             <p>Prezes zarządu</p>
                             <p>Specjalista ds. sprzedaży</p>
                             <b>tel: +48 123 456 789</b>
                        </div>
                        <div>
                             <img src={person} alt="Waldemar Kulikowski"></img>
                             <h1>Imię nazwisko</h1>
                             <p>Vice Przezes Zarządu</p>
                             <p>Specjalista ds. logistyki</p>
                             <b>tel: +48 123 456 789</b>
                        </div>
                       <div>
                            <img src={person} alt="Ewa Kulikowska"></img>
                            <h1>Imię nazwisko</h1>
                            <p>Główna księgowa</p>
                            <p>Doradca podatkowy</p>
                            <b>tel: +48 123 456 789</b>
                        </div>
                        <div>
                            <img src={person} alt="Marzena Kulikowska"></img>
                            <h1>Imię nazwisko</h1>
                            <p>Asystentka księgowej</p>
                            <p>Asystentka ds. sprzedaży</p>
                            <b>tel: +48 123 456 789</b>
                        </div>
                    </div>
                    <div className="about-us-movie">
                        <h1>Akademia przedsiębiorcy w ADVISORY Sp. z o.o.</h1>
                        <iframe title="yt-content" width="560" height="315" src="https://www.youtube.com/embed/oNAshAB8SGI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
        </div>
    
    )
}
export default AboutUs