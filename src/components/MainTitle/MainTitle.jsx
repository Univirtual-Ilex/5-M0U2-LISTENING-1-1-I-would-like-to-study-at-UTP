import React from 'react'
import styled from 'styled-components'
import styles from './MainTitle_styles'

const MainTitle_base = ({children, color, ...props}) => {
    return (
        <h1 {...props}>
            { children }
        </h1>
    )
}

const MainTitle = styled(MainTitle_base)`
    ${ styles }
`

export default MainTitle