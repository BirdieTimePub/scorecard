import React, { useState } from 'react'
//import { useDispatch } from 'react-redux'
import { Table, Form } from 'react-bootstrap'




const Scorecard = () => {
        const [val, setVal] = useState("")
        const scoreCardStyle = {
            paddingTop: 10,
            
        }
        

    return (
        <div style={scoreCardStyle}>
            
            <input
                type='number'
                mode='numeric'
                pattern='[0-9]*'
                value={val}
                onChange={(e) =>
                    setVal((v) => (e.target.validity.valid ? e.target.value : v))
                }
            />
        </div>
    )
}

export default Scorecard