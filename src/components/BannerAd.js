import { Image } from 'react-bootstrap'
import '../App.css'

const BannerAd = () => {
    const source = '../docs/assets/images/Scorecard-Banner.png'
    
    return (

        <Image 
            fluid
            key={Date.now()}
            alt="Ad Space"
            id='banner-ad'
            src= {source ? source : null}
        />
    )
}


export default BannerAd