import React from 'react'
import BrandIcon from 'parts/iconText'
import Button from 'elements/Button'

export default function Footer() {
    return (
        <footer>
            
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{width:350}}>
                        <BrandIcon />
                        <p className="brand-tagline">We Kaboom your beauty holiday instanly and memorable</p>
                    </div>
                    <div className="col-auto mr-5">
                        <div className="mt-2">For Beginner</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                            <Button type="link" href="/register">New Account</Button>
                            </li>
                            <li className="list-group-item">
                            <Button type="link" href="/properties">Start Booking a Room</Button>
                            </li>
                            <li className="list-group-item">
                            <Button type="link" href="/use-payments">Use Payment</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto mr-5">
                        <div className="mt-2">Explore Us</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                            <Button type="link" href="/careers">Our Carreers</Button>
                            </li>
                            <li className="list-group-item">
                            <Button type="link" href="/privacy">Privacy</Button>
                            </li>
                            <li className="list-group-item">
                            <Button type="link" href="/terms">Terms & Conditions</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <div className="mt-2">Connect Us</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                            <Button isExternal type="link" href="mailto:odidewangga0697@gmail.com">odidewangga0697@gmail.com</Button>
                            </li>
                            <li className="list-group-item">
                            <Button isExternal type="link" href="tel:081330718283">+62-81330718283</Button>
                            </li>
                            <li className="list-group-item">
                            <span>Surabaya, Jawa Timur, Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyrights 2021. All right reserved. Stayvelling
                    </div>
                </div>
            </div>
        </footer>
        
    )
}
