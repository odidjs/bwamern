import React, {Component} from 'react'

import Header from 'parts/Header';
import landingPage from 'json/landingPage.json';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer'

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refMostpicked = React.createRef();
    }
    render() {
    return (
        <>
       <Header {...this.props}></Header>
       <Hero refMostpicked={this.refMostpicked} data={landingPage.hero}></Hero>
       <MostPicked refMostpicked={this.refMostpicked} data={landingPage.mostPicked} />
       <Categories data={landingPage.categories} />
       <Testimony data={landingPage.testimonial}/>
       <Footer />
       </>
        )
    }
}
