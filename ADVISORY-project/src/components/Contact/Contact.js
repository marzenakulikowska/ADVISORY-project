import React, {useState} from 'react';


const Chosen = ({items}) => {
    const [basket, setBasket]=useState(items);
    const handleChange = (index)=> {
        const newBasket = [...basket]
        newBasket[index].selected=!newBasket[index].selected
        setBasket(newBasket);

    }
    return (
        <div>
            {basket.map((item,i)=> {
                return (
                    <div key={i}>
                        <input type="checkbox" id={item.id} checked={item.selected} onChange={()=>handleChange(i)} ></input>
                            <label htmlFor={item.id}> {item.name}</label>
                    </div>
                        )
                    })}
                    
                </div>
    )
}
const ContactForm = (props) => {
    const [name, setName] = useState("");
    const [surname, setSurname]= useState("");
    const [company, setCompany] = useState("")
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageTitle, setMessageTitle] = useState("");
    const [errors, setErrors] = useState([]);
    
 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length <= 0) {
          setErrors((prevState) => [...prevState, "Imię jest wymagane"]);
        } else if (email.indexOf("@") <1) {
            setErrors((prevState) => [...prevState, "Email musi zawierać znak @"]);
        }
    }
    
    return (

        <form onSubmit ={handleSubmit}>
             <ul>
                {errors.map((error, i) => (
                <li key={i}>{error}</li>
                ))}
            </ul>
            <h1>Formularz zapytań ofertowych</h1>
            <div>
                <label htmlFor="name">Imię</label>
                <input className="normal-input" id="name" type="text" value={name} placeholder={"Imię"} required onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="surname">Nazwisko</label>
                <input className="normal-input" id="surname" type="text" value={surname} placeholder={"Nazwisko"} required onChange={(e) => setSurname(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="company">Nazwa firmy</label>
                <input className="normal-input" id="company" value={company} placeholder={"Nazwa firmy"} onChange={(e) => setCompany(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <input className="normal-input" id="email" type="email" value={email}  placeholder={"twoj@email.pl"} required onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="message-title">Temat wiadomości</label>
                <input className="normal-input" id="message-title" placeholder={"Temat wiadomości"} value={messageTitle} onChange={(e) => setMessageTitle(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="message">Treść wiadomości</label>
                <textarea className="normal-textarea" id="message"  value={message} placeholder={"Tu wpisz treść wiadomości"} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div className="chosen-products">
                <label htmlFor="message-title" >Wybrane produkty</label>
                <Chosen items={props.items}/>
            </div>
            <button className="btn btn-primary" type="submit">Wyślij</button>
        </form>
    )
}
const Contact = (props) => {
    const mapStyles = {
        width:"50rem",
        height:"30rem",
        border:"none",
        boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
        allowFullScreen:"",
        ariaHidden:"false",
        tabIndex:"0",
        borderRadius: "1rem",
        marginBottom: "4.5rem"
    }
    window.scrollTo(0, 0);
    return (
        <>
        <div className="contact-container">
            
            <div className="contact-details">
                <h1>Kontakt</h1>
                <div>
                    <i className="fa fa-phone fa-4x" aria-hidden="true"></i>
                    <p>+48 606 424 027</p>
                </div>
                <div>
                    <i className="fa fa-envelope-o fa-4x" aria-hidden="true"></i>
                    <p>advisory.import@gmail.com</p>
                </div>
            </div>
            <div className="form-details">
                <ContactForm items={props.selectedProd}/>
            </div>
            <div className="adress-details">
                <h1>Adres i mapa dojazdu</h1>
                <p>ul. Słowackiego 33A</p>
                <p>58-371 Boguszów Gorce</p>
                <p>POLAND</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d88646.18348152368!2d16.111820461017025!3d50.79405794485739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e57d54937c625%3A0x795e8508cd7732be!2sAdvisory%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1595593354166!5m2!1spl!2spl" title="contact-map" style={mapStyles}></iframe>
            </div>
        </div>
        </>
    )
}  
  export default Contact

