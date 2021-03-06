import React from 'react'
import Button from 'elements/Button'

import Fade from 'react-reveal/Fade'
import ImageHero from 'assets/images/img-hero.jpg'
import ImageHero_ from 'assets/images/img-hero-frame.jpg'
import IconCities from 'assets/images/icons/icon-cities.svg'
import IconTraveler from 'assets/images/icons/icon-traveler.svg'
import IconTreasure from 'assets/images/icons/icon-treasure.svg'

import numberformat from 'utils/formatNumber'

export default function Hero(props) {

    function showMostPicked () {
        window.scrollTo({
        top: props.refMostpicked.current.offsetTop - 30,
        behavior: "smooth"
    });
    }


    return (
        <Fade bottom>
        <section className="container pt-5">
            <div className="row align-items-center ml-0">
                <div className="col-auto pr-5" style={{width: 530}}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Forget Busy Work, <br />
                        Start Next Vacation  
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75">
                    We Provide what you need to enjoy your holiday with family. Time to make another memorable moments. 
                    </p>
                    <Button className="btn px-5 mb-5" hasShadow isPrimary onClick={showMostPicked}>
                    Show Me Now
                    </Button>
                    <div className="row mt-4">
                        <div className="col-auto mr-4">
                        <img height="36" width="36" src={IconTraveler} alt={`${props.data.travelers}`} />
                        <h6 className="mt-3"> {numberformat(props.data.travelers)}{" "} <span className="text-gray-500 font-weight-light">Travelers</span> </h6>
                        </div>
                    
                    
                    <div className="col-auto mr-4">
                        <img height="36" width="36" src={IconTreasure} alt={`${props.data.treasures}`} />
                        <h6 className="mt-3"> {numberformat(props.data.treasures)}{" "} <span className="text-gray-500 font-weight-light">Treasures</span> </h6>
                    </div>
                    
                    <div className="col-auto">
                        <img height="36" width="36" src={IconCities} alt={`${props.data.cities}`} />
                        <h6 className="mt-3"> {numberformat(props.data.cities)}{" "} <span className="text-gray-500 font-weight-light">Cities</span> </h6>
                    </div>
                    
                    </div> 
                </div>

                <div className="col-6 pl-5">
                    <div style={{width: 540, height:380}}>
                        <img src={ImageHero} alt="Room with Couse" className="img-fluid position-absolute" style={{margin: "-30px 0 0 -30px", zIndex: 1}} />
                        <img src={ImageHero_} alt="Room with Couse frame" className="img-fluid position-absolute" style={{margin: "0 -15px -15px 0"}} />
                    </div>
                </div>

            </div>
        </section>
        </Fade>
    );
};
