
import '../appStyles.css';

export default function Cupon() {
    return (
        <>
        <div className="card" id='coupon'>
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
            <div className="content">
                <h1>Hola mi vida!</h1>
                <p>Te tengo un regalito para que ocupes durante tu viaje. Disfruta y pasalo excelente. Te amo con mi alma!</p>
                <div style={{display: "flex", justifyContent: "center", background: "unset", marginTop: "2rem"}}>
                    <button onClick={()=> window.location.href= "/redeem"}>Usar cupón</button>
                </div>
                
            </div>
        </div>
        <div className="gradient-bg">
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
