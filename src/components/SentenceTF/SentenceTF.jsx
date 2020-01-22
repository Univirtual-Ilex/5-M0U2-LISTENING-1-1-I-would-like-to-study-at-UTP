
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './SentenceTF_styles'

// Componente base
const SentenceTF_base = ({...props}) => {
    return (
        <div {...props}>
            Creado el componente SentenceTF
        </div>
    )
}
const SentenceTF = styled(SentenceTF_base)`${ styles }`
export default SentenceTF
