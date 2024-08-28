
import React from "react"
import { Button } from "react-bootstrap"
import ExportAsImage from "../utils/ExportAsImage"


const Screenshot = ({scorecardRef}) => {

    return(
        <div >
            <Button 
                onClick={() => ExportAsImage(scorecardRef.current, "scorecard.jpeg")}
                id='screenshot-button'
            >
                Save Scorecard
            </Button>
        </div>
    )
}

export default Screenshot