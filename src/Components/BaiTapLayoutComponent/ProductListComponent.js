import React, { Component } from "react";
import ProductComponents1 from "./ProductComponents1";

export default class ProductListComponent extends Component {
  render() {
    return (
      <div >
        <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div class="row">
            
            <ProductComponents1/>
            
          
            <ProductComponents1/>
            
           
            <ProductComponents1/>
           
       
            <ProductComponents1/>
           
        
          </div>
        </section>
      </div>
    );
  }
}
