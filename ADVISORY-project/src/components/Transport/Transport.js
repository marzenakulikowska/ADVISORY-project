import React from 'react';
import transportImg from '../../assets/transport2.jpg'
const Transport = () => {
    window.scrollTo(0, 0);
    return (
        <>
             <div className="transport-container">
            <div className="main-photo">
                <div className="title-banner">
                    <div>Usługi transportowe</div>
                </div>
            </div>
            <div className="why-us">
                <h1>Dlaczego właśnie my?</h1>
                <div className="why-us-icons">
                    <div>
                        <i className="fa fa-clock-o fa-5x" aria-hidden="true"></i>
                        <h1>Czasowa realizacja</h1>
                    </div>
                    <div>
                        <i className="fa fa-handshake-o fa-5x" aria-hidden="true"></i>
                        <h1>Rzetelność</h1>
                    </div>
                    <div>
                        <i className="fa fa-cubes fa-5x" aria-hidden="true"></i>
                        <h1>Wszechstronność</h1>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:"#f4f4f4"}}>
                <div className="transport-content-container">
                        <img src={transportImg} alt="transport-pic2" ></img>
                        <div>
                            <h1>Transport</h1>
                            <p>ADVISORY Sp. z o.o. świadczy również usługi transportowo-spedycyjne w ruchu krajowym i międzynarodowym. Nasze doświadczenie jest poparte wieloletnią praktyką, która przekłada się na rzetelność i pełen profesjonalizm.</p>
                            <br></br>
                            <p>Oferujemy Państwu usługi transportu towarów w ruchu krajowym i międzynarodowym przede wszystkim na terenie Unii Europejskiej. Preferowane przez nas kierunki obejmują swym zasięgiem kraje: Niemcy, Belgia, Holandia, Anglia, Francja, Hiszpania, Czechy, Słowacja, Węgry, Austria, Włochy. Do Państwa dyspozycji pozostawiamy własne zestawy naczepowe typu plandeka.</p>
                            <br></br>
                            <p>Wszystkie przewozy wykonywane są nowoczesnymi pojazdami spełniającymi normy EURO 5 i EURO 6.Posiadamy ubezpieczenie OC przewoźnika na sumę 200.000 EURO. Stały kontakt z kierowcami umożliwia ciągłe monitorowanie statusu wykonania zlecenia i efektywne działanie w przypadku wystąpienia sytuacji awaryjnych. Wszystkie pojazdy posiadają system GPS.</p>
                        </div>
                </div>
                </div>
                <div className="cooperation">
                    <h1>Zapraszamy do współpracy</h1>
                </div>
            
        </div> 
        </>
    )
}
export default Transport;