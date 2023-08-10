import { Image } from 'react-bootstrap'
import '../App.css'

const BannerAd = () => {
    const source = 'https://lh3.googleusercontent.com/drive-viewer/AITFw-zT6d'
                    + '9ePFQ0cRL83U_Aq4eZVcdNooz8TaQR4DHDc-25Vp22VO-eugVnFvnc'
                    + 'DLm6ghY_zSSrp8UMU5UdYFjC6199hcAj8A=s1600?' + Date.now()
    return (

        <Image 
            fluid
            key={Date.now()}
            alt="Ad Space"
            id='banner-ad'
            src= {source}
        />
    )
}


export default BannerAd