import { useEffect } from 'react';
import './redeem.css';
import DolarImage from '../assets/Dolar.png';

export default function Redeem() {
    useEffect(() => {
        const envelope = document.querySelector('.envelope');

        if (envelope && !envelope.classList.contains('open')) {
            envelope.addEventListener('click', () => {
                envelope.classList.remove('new');
                envelope.classList.add('open');
            });
        }

        // Cleanup function to remove the event listener
        return () => {
            if (envelope) {
                envelope.removeEventListener('click', () => {
                    envelope.classList.remove('new');
                    envelope.classList.add('open');
                });
            }
        };
    }, []);

    return (
        
        <>

        <svg 
            viewBox="0 0 100% 100%"
            xmlns='http://www.w3.org/2000/svg'
            className="noise"
            >
            <filter id='noiseFilter'>
            <feTurbulence 
                            type='fractalNoise' 
                            baseFrequency='0.85' 
                            numOctaves='6' 
                            stitchTiles='stitch' />
            </filter>

            <rect
                width='100%'
                height='100%'
                preserveAspectRatio="xMidYMid meet"
                filter='url(#noiseFilter)' />
        </svg>
        <div className="content" >
            <div className="envelope new">
                <div className="front" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="mail" style={{background: "none"}}>
                        <p style={{marginTop: "5rem"}}>Bienvenida a Europa</p>
                        <p style={{color: "rosybrown", marginTop: "5rem"}}>Pulsa aquí</p>
                    </div>
                </div>
                <div className="back" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="letter" style={{flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
                        <p>Dale el uso que keras </p>
                        <img src={DolarImage} alt="" style={{background: "none", position: "relative", marginTop: "3.5rem", height: "5rem", width: "5rem"}}/>
                        <p style={{color: 'black', position: 'absolute', marginTop: "17rem"}}>Valido por $50 USD</p>
                    </div>
                    <div className="flip left-flip" style={{background: "none"}}></div>
                    <div className="flip right-flip" style={{background: "none"}}></div>
                    <div className="flip bottom-flip" style={{background: "none"}}></div>
                    <div className="flip top-flip" style={{background: "none"}}></div>
                </div>
            </div>
        </div>
        <div className="gradient-bg" style={{position: 'absolute'}}>
            <svg 
                viewBox="0 0 100vw 100vw"
                xmlns='http://www.w3.org/2000/svg'
                className="noiseBg"
                >
                <filter id='noiseFilterBg'>
                <feTurbulence 
                                type='fractalNoise'
                                baseFrequency='0.6'
                                stitchTiles='stitch' />
                </filter>

                <rect
                    width='100%'
                    height='100%'
                    preserveAspectRatio="xMidYMid meet"
                    filter='url(#noiseFilterBg)' />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="svgBlur">
                <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
                </defs>
            </svg>
            <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive"></div>
            </div>
        </div>
        </>
    );
}
