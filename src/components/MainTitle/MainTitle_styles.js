// import React from 'react'
import {css } from 'styled-components'

const styles = css`
    color: ${ props => props.color };
    text-transform : uppercase;
    text-align: center;
    padding: 0.1em 5em;
    font-size: ${ props => props.size ||  1.75}em ;
`

export default styles