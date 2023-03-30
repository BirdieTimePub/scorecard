/*The main player component. contains an object for the individual hole
scores as well as the inputs for each summed total score. This includes
a validation check for scores under 0 or NaN and sets scores over 8 to 8
*/
import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import '../App.css'

const Player = () => {
    const [player, setPlayer] = useState({        
        holeOne: '',
        holeTwo: '',
        holeThree: '',
        holeFour: '',
        holeFive: '',
        holeSix: '',
        holeSeven: '',
        holeEight: '',
        holeNine: '',
        finalScore: '',
    })
    const [totalScore, setTotalScore] = useState(0)

        useEffect (() => {
            let updatedScore = 0
            Object.keys(player).map((key) => {
                if (isNaN(parseInt(player[key]))) {
                    return (updatedScore += 0)
                } else {
                return (updatedScore += parseInt(player[key]))
                }
            })
            setTotalScore(updatedScore)
        },[player])


        const handleChange = (event) => {
            let value = event.target.value
            if (event.target.value > 8) {
                value = 8
            }
            setPlayer({
                ...player,
                [event.target.name]: parseInt(value),       
            })
        } 



        return (
            Object.keys(player).map((key, index) => {
                if (key === 'finalScore') {
                    return (
                    <th key={index}>{totalScore}</th>
                    )
                }
                return (
                  <td key={index}
                  >
                    <Form.Control 
                        className='table'
                        id={key}
                        pattern="[0-9]*"
                        type='number'
                        value={player[key]}
                        name={key}
                        onChange={handleChange}
                    />
                  </td>
                )
            })
        )
}

export default Player