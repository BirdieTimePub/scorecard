import { Image } from 'react-bootstrap'
import '../App.css'

const BannerAd = () => {
    const source = 'https://github.com/BirdieTimePub/scorecard/tree/main/src/docs/assets/images/Scorecard-Banner.png'
    
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