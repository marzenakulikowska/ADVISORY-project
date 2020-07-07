import React from 'react';

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
                             <img src="images/michal2.jpg" alt="Michał Kulikowski"></img>
                             <h1>Michał Kulikowski</h1>
                             <p>Prezes zarządu</p>
                             <p>Specjalista ds. sprzedaży</p>
                             <b>tel: +48 606 424 027</b>
                        </div>
                        <div>
                             <img src="images/waldemar.jpg" alt="Waldemar Kulikowski"></img>
                             <h1>Waldemar Kulikowski</h1>
                             <p>Vice Przezes Zarządu</p>
                             <p>Specjalista ds. logistyki</p>
                             <b>tel: +48 601 844 872</b>
                        </div>
                       <div>
                            <img src="images/ewa.jpg" alt="Ewa Kulikowska"></img>
                            <h1>Ewa <br></br>Kulikowska</h1>
                            <p>Główna księgowa</p>
                            <p>Doradca podatkowy</p>
                            <b>tel: +48 600 899 960</b>
                        </div>
                        <div>
                            <img src="images/marzena.jpg" alt="Marzena Kulikowska"></img>
                            <h1>Marzena Kulikowska</h1>
                            <p>Junior Sales Manager</p>
                            <p>Asystentka ds. sprzedaży</p>
                            <b>tel: +48 666 315 684</b>
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