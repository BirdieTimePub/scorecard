    import React from 'react'
    import { Image } from 'react-bootstrap'
    import '../App.css'

    const BannerAd = () => {
        const Banner = 'https://github.com/BirdieTimePub/scorecard/blob/main/src/docs/assets/images/Scorecard-Banner.png?raw=true'


        return (

            <Image 
                fluid
                key={Date.now()}
                type="png"
                alt="Ad Space"
                id='banner-ad'
                header='content-type:"image/png'
                src= {Banner}
            />
        )
    }


    export default BannerAd