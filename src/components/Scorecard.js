/*the main scorecard component. This comprises 6 players and creates a table
that includes each player as a seperate Component. The player name inputs
are all dummy inputs not connected to any state.
*/

import React from 'react'
import { Table } from 'react-bootstrap'
import Player from './Player'
import ParList from './ParList'
import '../App.css'



const Scorecard = () => {
    return (
        <div>
            <Table 
                responsive
                striped>
                <ParList />
                <tbody>
                    <tr>
                        <th>
                            <input 
                                placeholder='Player 1'
                            />
                        </th>
                        <Player />
                    </tr>
                    <tr>
                    <th>
                            <input 
                                placeholder='Player 2'
                            />
                        </th>
                        <Player />
                    </tr>
                    <tr>
                    <th>
                            <input 
                                placeholder='Player 3'
                            />
                        </th>
                        <Player />
                    </tr>
                    <tr>
                    <th>
                            <input 
                                placeholder='Player 4'
                            />
                        </th>
                        <Player />
                    </tr>
                    <tr>
                    <th>
                            <input 
                                placeholder='Player 5'
                            />
                        </th>
                        <Player />
                    </tr>
                    <tr>
                    <th>
                            <input 
                                placeholder='Player 6'
                            />
                        </th>
                        <Player />
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Scorecard