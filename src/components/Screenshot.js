
import React from "react"
import { Button } from "react-bootstrap"
import ExportAsImage from "../utils/ExportAsImage"


const Screenshot = ({scorecardRef}) => {

    return(
        <div id='screenshot-button'>
            <Button onClick={() => ExportAsImage(scorecardRef.current, "scorecard.jpeg")}>
                Save Scorecard
            </Button>
        </div>
    )
}

export default Screenshot