//Import
import React,{useState} from 'react'
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
import Modal from '../Generales/Modal'
import ButtonCheck from '../ButtonCheck'
import PreguntaResultado from '../PreguntaResultado'
// Componente base
const Actividad2_base = ({staticContext,...props}) => {
    const [values, setValues] = useState([])
    const [results, setResults] = useState(false)
    const [visible, setVisible] = useState(false)

    const check = (feedback) => {
        let result = feedback.indexOf(false)
        if (result === -1 && feedback.length === data.length) {
            setVisible(true)
            setResults(true)
        } else {
            setVisible(true)
            setResults(false)
        }
    }

    const registerAnswer = (value) => {
        let valueArray = [...values]
        valueArray[value.index] = value.feedback
        setValues(valueArray)
        console.log(values)
    }
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props}>

            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Listen carefully to the conversation and select true or false, according to what you hear in the audio. ' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={() => window.location.reload()} />
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
                <ButtonAudio src='media/welcome.mp3'></ButtonAudio>
            </IRow>

            <IRow w={85} align='center' py='2'>
                <ICol className='bloque-columnas'>
                    <ol>
                        { data.map((item, index) => {
                            return(
                                <li key={item.id}>
                                    <SentenceTF answer={(answer)=>registerAnswer(answer)} correct={item.respuesta} index={index} > {item.pregunta} </SentenceTF>
                                </li>
                            )
                        }) }
                    </ol>
                </ICol>

            </IRow>

            <IRow>
            <ICol pt={3}> <ButtonCheck onClick={() => check(values)} /> </ICol>
            </IRow>
            <Modal visible={visible} ok={results} err={!results} w={30} nxtUrl='#/' repeatUrl='#/actividad2' finishUrl={results}>
                {

                values.map((value, index) => {
                    return(
                    <PreguntaResultado key={'id'+index} ok={value} err={!value} > {index+1} </PreguntaResultado>
                    )
                })
                
                }
            
            </Modal>

        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
