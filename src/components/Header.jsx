import React, { useEffect } from 'react'
import icon1 from '../assets/pokeheader.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <header id='home' className={` flex-col md:flex-row flex justify-center items-center mx-auto px-4 py-2 `}>
                <div className=" flex flex-grow justify-center md:mt-[-120px]">
                    <div className="text-left" style={{ lineHeight: '1.2' }}>
                        <h5 className={`fw-bold mt-5 ms-2`} style={{ fontSize: '50px', fontFamily: 'sans-serif' }} >
                            <span data-aos="fade-up"
                                data-aos-duration="1000" style={{ color: '#B5C18E' }}> Pokédex Universe  <br /> <b style={{ color: '#feba5b' }} data-aos="fade-down"
                                    data-aos-duration="1000">Explore the world of Pokémon through exciting adventures</b> </span>
                        </h5>
                        <p data-aos="fade-up"
                            data-aos-duration="1000" className={`ms-2 mt-2 fw-bold`} style={{ fontSize: '16px', color: '#496989' }}>Embark on a journey to catch, train, and battle Pokémon in different regions.</p>
                    </div>
                </div>
                <div className="justify-center md:bg-none md:block hidden">
                    <div className="text-right mt-[10px]">
                        <img
                            style={{
                                marginBottom: "55px",
                                borderRadius: "35px",
                                width: '1300px',
                                height: '530px',
                            }}
                            className="animated-image"
                            src={icon1}
                            alt="hero"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                        />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
