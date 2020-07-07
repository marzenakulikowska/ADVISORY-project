import React from 'react';

const MainPage = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <div className="mainpage-container">
            <div className="main-photo">
                <div className="title-banner">
                    <div>Jesteśmy liderem w hurtowej sprzedaży ziaren i bakalii</div>
                </div>
            </div>
            </div>
            <div className="container-2-background">
            <div className="container-2">
            <div className="content-container">
                <div>
                    <i className="fa fa-line-chart fa-4x" aria-hidden="true"></i>
                    <h1>Rozwój</h1>
                    <p>ADVISORY Sp. z o.o. to prężnie rozwijające się i innowacyjne przedsiębiorstwo funkcjonujące na hurtowym rynku ziaren i dodatków dla przemysłu piekarniczego. Duże doświadczenie i znajomość rynku zaowocowała dynamiką rozwoju spółki w ostatnich kilku latach. Jesteśmy producentem wysokogatunkowych produktów spełniających wymagania naszych Odbiorców.</p>
                </div>
                <div>
                    <i className="fa fa-flag-o  fa-4x" aria-hidden="true"></i>
                    <h1>Jakość i profesjonalizm</h1>
                    <p>Spółka przyjęła realizację konsekwentnej polityki handlowej, stawiającej na zaspokojenie wymagań Klientów i dostarczenie produktów wysokiej jakości o unikalnych wartościach odżywczych. Dokładamy największych starań, aby dostarczane przez nas produkty pochodziły ze sprawdzonych źródeł.</p>
                </div>
                <div>
                    <i className="fa fa-globe  fa-4x" aria-hidden="true"></i>
                    <h1>Zagraniczne rynki</h1>
                    <p>ADVISORY Sp. z o.o. współpracuje z wyselekcjowanymi polskimi i zagranicznymi dostawcami m.in. z Czech, Rosji, Kazachstanu, Chin, Indii, Pakistanu, Stanów Zjednoczonych, Węgier, Bułgarii. Nasz dział jakości skrupulatnie kontroluje każdy produkt opuszczający zakład.</p>
                </div>
            </div>
            </div>
            </div>
            <div className="container-3">
                <img src="images/pumpkin-seeds.jpg" alt="Pestki dyni"className="main-page-photo"></img>
                <div>
                    <p>Ciągły rozwój i poszerzanie oferty produktów zapewniło nam już ugruntowaną pozycję na rynku ziaren i dodatków dla piekarnictwa. </p>
                    <br></br>
                    <p>Najważniejsze produkty z oferty asortymentowej to m.in. mak niebieski, mak biały, siemie lniane brązowe oraz złociste, słonecznik, pestka dyni, sezam. </p>
                    <br></br>
                    <p>Od 2011 roku w ofercie pojawiły się również orzechy i suszone owoce. Konkurencyjność oferty zapewnia bezpośredni import surowców. Inwestując w innowacyjną linię technologiczną do oczyszczania, sortowania i pakowania ziaren uzyskaliśmy gwarancję jakości produktów i możliwość oferowania ich w atrakcyjnych cenach. </p>
                    <br></br>
                    <p>Towary dostarczamy własnym, nowoczesnym taborem transportowym. Główną bazę naszych Klientów stanowią firmy działające w przemyśle piekarniczym, cukierniczym oraz konfekcyjnym. Dywersyfikacja oferty pozwoliła jednak w ostatnich latach na pozyskanie odbiorców z branży olejarskiej, medycznej oraz farmaceutycznej. Oferowane przez nas produkty trafiają na rynki Polski, Europy zachodniej i środkowo-wschodniej oraz Rosji.</p>
                </div>
            </div>
        </>
    )
}
export default MainPage;