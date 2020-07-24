import React from 'react';

const Products = (props) => {
    const {products}=props.products;
    const handleClick = (el) => {
        if(props.selected.indexOf(el)===-1){ //jeśli tego kliknietego elementu jeszcze nie ma 
            props.onSelect(prevState => {
                el.selected=true
                return[...prevState, el]
            })
            
        }
    }
    window.scrollTo(0, 0);
    return (
        <>
          <div className="products-container">
              <div className="main-products-page-title">
                  <h1>Produkty</h1>
            </div>
            <h1 className="description"> Możesz wybrać produkty, którymi jesteś zainteresowany. Zostaną one umieszczone w formularzu kontaktowym.</h1>
                <div className="main-products-type-title">
                    <h1>Ziarna</h1>
                </div>
                <div className="products-content">
                    {products.length>0 && products.map((el,i)=>{
                        if(el.category==="Ziarna"){
                            if(i<=2) {
                                return (
                                    <div key={i} className="product-style">
                                        <h2>{el.name}</h2>
                                        <img src={el.img} alt={el.name}></img>
                                        <button  className="product-button" onClick={()=>handleClick(el)}>Wybierz</button>
                                    </div>
                                )
                            }
                        } return null;
                    })}
                </div>
                <div className="products-content">
                    {products.length>0 && products.map((el,i)=>{
                        if(el.category==="Ziarna"){
                            if(i<=5 && i>2) {
                                return (
                                    <div key={i} className="product-style">
                                        <h2>{el.name}</h2>
                                        <img src={el.img} alt={el.name}></img>
                                        <button  className="product-button" onClick={()=>handleClick(el)} >Wybierz</button>
                                    </div>
                                )
                            }
                        }return null;
                    })}
                </div>
                <div className="products-content">
                    {products.length>0 && products.map((el,i)=>{
                        if(el.category==="Ziarna"){
                            if(i<=7 && i>5) {
                                return (
                                    <div key={i} className="product-style">
                                        <h2>{el.name}</h2>
                                        <img src={el.img} alt={el.name}></img>
                                        <button className="product-button" onClick={()=>handleClick(el)}>Wybierz</button>
                                    </div>
                                )
                            }
                        }return null;
                    })}
                </div>
                <div className="main-products-type-title">
                    <h1>Orzechy</h1>
                </div>
                <div className="products-content">
                    {products.length>0 && products.map((el,i)=>{
                        if(el.category==="Orzechy"){
                            if(i<=10) {
                                return (
                                    <div key={i} className="product-style">
                                        <h2>{el.name}</h2>
                                        <img src={el.img} alt={el.name}></img>
                                        <button  className="product-button" onClick={()=>handleClick(el)}>Wybierz</button>
                                    </div>
                                )
                            }
                        }return null;
                    })}
                </div>
                <div className="main-products-type-title">
                    <h1>Migdały</h1>
                </div>
                <div className="products-content">
                    {products.length>0 && products.map((el,i)=>{
                        if(el.category==="Migdały"){
                            if(i<=12) {
                                return (
                                    <div key={i} className="product-style">
                                        <h2>{el.name}</h2>
                                        <img src={el.img} alt={el.name}></img>
                                        <button  className="product-button" onClick={()=>handleClick(el)}>Wybierz</button>
                                    </div>
                                )
                            }
                        }return null;
                    })}
                </div>
                <div className="main-products-type-title">
                    <h1>Owoce suszone</h1>
                </div>
                <div className="products-content">
                    {products.length>0 && products.map((el,i)=>{
                        if(el.category==="Owoce suszone"){
                            if(i<=15) {
                                return (
                                    <div key={i} className="product-style">
                                        <h2>{el.name}</h2>
                                        <img src={el.img} alt={el.name}></img>
                                        <button  className="product-button" onClick={()=>handleClick(el)}>Wybierz</button>
                                    </div>
                                )
                            }
                        }return null;
                    })}
                </div>
            </div>          
        </>
    )
}
export default Products;

