//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad2_styles'
import Ilex from '../../App/variables'
// styles from styled
import { ProgressbarContainer, UiButtonsContainer } from '../Actividad1/Actividad_styles'
// Data
import data from './Actividad2_data'
// Components
import Container from '../Container'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import { IRow, ICol } from '../Grid'
import ButtonUi from '../ButtonControlUI'
import ButtonAudio from '../ButtonAudio/ButtonAudio'
import SentenceTF from '../SentenceTF'
// Componente base
const Actividad2_base = ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props}>

            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='listen carefully to the conversation and then answer if the following sentences are true or false' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>

            <ProgressbarContainer>
                <ProgressBar progress={50}/>
            </ProgressbarContainer>

            <IRow w={90} align='center' justify='center'>
                <ICol w={100}>
                        <MainTitle color={Ilex.violeta2} size={1.2}> LISTEN TO THE CONVERSATION BETWEEN AN ASSISTANT AND A STUDENT. AFTER THAT, CHOOSE TRUE OR FALSE FOR THE SENTENCES ACCORDING TO THE AUDIO  </MainTitle>
                </ICol>
            </IRow>
            
            <IRow align='center' justify='center' w={80} pt={1}>
                <ButtonAudio src='ojo/ruta/audio.mp3'></ButtonAudio>
            </IRow>

            <IRow w={85} align='center' py='2'>
                <ICol className='bloque-columnas'>
                    <ol>
                        { data.map(item => {
                            return(
                                <li key={item.id}>
                                    <SentenceTF> {item.pregunta} </SentenceTF>
                                </li>
                            )
                        }) }
                    </ol>
                </ICol>

                
            </IRow>
        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
