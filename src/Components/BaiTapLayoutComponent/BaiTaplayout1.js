import React, { Component } from 'react'
import Header from './Header'
import SliderComponent from './SliderComponent'
import ProductListComponent from './ProductListComponent'
import FooterComponents from './FooterComponents'

export default class BaiTaplayout1 extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SliderComponent/>
                <ProductListComponent/>
                <FooterComponents/>
            </div>
        )
    }
}
