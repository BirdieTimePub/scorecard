//component for displays the rules and logo

import React from 'react'
import  Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

const Rules = () => {

    return (
        <Container id='rules' fluid>
            <Row>
                <Col>
                    <Image id='main-logo'
                        fluid 
                        alt="Birdie Time Pub, Mini Golf Pub & Sports Bar in Portland, Oregon" 
                        src="https://fh-sites.imgix.net/sites/6109/2022/12/16111619/Vectorized-logo-4-e1672226239606.png?auto=compress%2Cformat&w=600&fit=auto"></Image>
                    <p>
                        <b>Rule 1:</b> All players will hit their first ball.
                    </p>
                    <p>
                        <b>Rule 2:</b> The person closest to the hole will hit next.
                    </p>
                    <p>
                        <b>Rule 3:</b> Max score per hole is 8.
                    </p>
                    <p>
                        <b>Rule 4:</b> If the ball is against a wall, you may move it the length of 1 putter heard.
                    </p>
                    <p>
                        <b>Rule 5:</b> An "out of bounds" ball counts as a 1 stroke penalty.
                    </p>
                    <p>
                        <b>Rule 6:</b> Please be courteous of other groups playing in front or behind you.
                    </p>
                    <p>
                        <b>Rule 7:</b> Chipping the ball over obstacles is not allowed.
                    </p>
                    <p>
                        <b>Rule 8:</b> When you reach a hole that features a wheel, spin the wheel for an added challenge!
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Rules