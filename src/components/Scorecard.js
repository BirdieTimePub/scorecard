/*the main scorecard component. This comprises 6 players and creates a table
that includes each player as a seperate Component. The player name inputs
are all dummy inputs not connected to any state.
*/

import React from 'react'
import { useRef } from 'react'
import { Table } from 'react-bootstrap'
import Player from './Player'
import ParList from './ParList'
import Screenshot from './Screenshot'
import '../App.css'


const Scorecard = () => {
    const scorecardRef = useRef(null)

    return (
        <div>
            <div id='scorecard' >
                <Table 
                    ref={scorecardRef}
                    responsive
                    striped>
                    <ParList />
                    <tbody>
                        <tr id='player1'>
                            <th>
                                <input 
                                    placeholder='Player 1'
                                />
                            </th>
                            <Player />
                        </tr>
                        <tr id='player2'>
                            <th>
                                <input 
                                    placeholder='Player 2'
                                />
                            </th>
                            <Player />
                        </tr>
                        <tr id='player3'>
                            <th>
                                <input 
                                    placeholder='Player 3'
                                />
                            </th>
                            <Player />
                        </tr>
                        <tr id='player4'>
                            <th>
                                <input 
                                    placeholder='Player 4'
                                />
                            </th>
                            <Player />
                        </tr>
                        <tr id='player5'>
                            <th>
                                <input 
                                    placeholder='Player 5'
                                />
                            </th>
                            <Player />
                        </tr>
                        <tr id='player6'>
                            <th>
                                <input 
                                    placeholder='Player 6'
                                />
                            </th>
                            <Player />
                        </tr>
                    </tbody>
                </Table>
            </div >
            <div id='screenshot'>
                <Screenshot 
                    scorecardRef={scorecardRef }
                />
            </div>
        </div>
    )
}

export default Scorecard