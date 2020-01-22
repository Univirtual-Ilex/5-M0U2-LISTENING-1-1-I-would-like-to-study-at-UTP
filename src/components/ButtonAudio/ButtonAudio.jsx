
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ButtonAudio_styles'

// Componente base
const ButtonAudio_base = ({...props}) => {
    return (
        <div {...props}>
            <button className='btn-clean'> Play Audio </button>
        </div>
    )
}
const ButtonAudio = styled(ButtonAudio_base)`${ styles }`
export default ButtonAudio
