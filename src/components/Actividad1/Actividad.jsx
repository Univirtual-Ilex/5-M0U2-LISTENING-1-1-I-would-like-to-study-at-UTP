import React,{useState} from 'react'
//Components
import Container from '../Container'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
import ButtonCheck from '../ButtonCheck'
import Modal from '../Generales/Modal'
// Styles
import styled from 'styled-components'
import styles, { ProgressbarContainer, UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
import {DraggableItemb} from '../Draggable'
import ImageArea from '../ImageArea'



const Actividad_base =  ({staticContext,...props}) => {
    const [visible, setVisible] = useState(false)
    const [results, setresults] = useState(false)
    let [values, setValues] = useState([])
    
    const check = (val) => {
        if(val.indexOf(false)===-1 && val.length > 1){
            setVisible(true)
            setresults(true)
            
        } else {
            setVisible(true)
            setresults(false)
        }
    }
    
    
    

    const feedback = (result) => {
        let resultCollection = [...values]
        resultCollection[result.index] = result.result
        setValues(resultCollection)
        console.log(values)
    }

 
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} >
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='slide the sentences to organize them, then press check to verify if it is right or wrong, press hint if you need help   ' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={() => window.location.reload()} />
            </UiButtonsContainer>

            <ProgressbarContainer>
                <ProgressBar progress={0}/>
            </ProgressbarContainer>         


            <MainTitle color={Ilex.violeta2}>
            ORGANIZE THE SENTENCES IN THE CORRECT ORDER 
            </MainTitle>

            <IRow w={85} align='center' py={1.5} id="draggingArea">
                <ICol className='buttons' w={20}>
                    <DraggableItemb w={10} audio='./media/chemistry.mp3' name='Chemistry' draggingArea='#draggingArea' target="#area4"  activeareas={['#area1', '#area2', '#area3', '#area4', '#area5', '#area6']}  send={(result, index) => feedback(result)} index={0}/>
                    <DraggableItemb w={10} audio='./media/biology.mp3' name='Biology'  draggingArea='#draggingArea' target="#area6" activeareas={['#area1', '#area2', '#area3', '#area4', '#area5', '#area6']}  send={(result) => feedback(result)} index={1}/>
                    <DraggableItemb w={10} audio='./media/physics.mp3' name='Physics'  draggingArea='#draggingArea' target="#area2" activeareas={['#area1', '#area2', '#area3', '#area4', '#area5', '#area6']}  send={(result) => feedback(result)} index={2}/>
                    <DraggableItemb w={10} audio='./media/math.mp3' name='Math'   draggingArea='#draggingArea' target="#area5" activeareas={['#area1', '#area2', '#area3', '#area4', '#area5', '#area6']}  send={(result) => feedback(result)} index={3}/>
                    <DraggableItemb w={10} audio='./media/languages.mp3' name='Languages'  draggingArea='#draggingArea' target="#area1" activeareas={['#area1', '#area2', '#area3', '#area4', '#area5', '#area6']}  send={(result) => feedback(result)} index={4}/>
                    <DraggableItemb w={10} audio='./media/reading.mp3' name='Reading'  draggingArea='#draggingArea' target="#area3" activeareas={['#area1', '#area2', '#area3', '#area4', '#area5', '#area6']}  send={(result) => feedback(result)} index={5}/>
                </ICol>
                <ICol className='areas' w={70} pl={2}>

                    <IRow justify='center' gutters={0.25}>
                        <ICol w={30}>
                            <ImageArea img='./src/cell1.png' correctName='Languages' id="area1"/>
                        </ICol>

                        <ICol w={30}>
                            <ImageArea img='./src/cell2.png' correctName='Physics'  id="area2" />
                        </ICol>

                        <ICol w={30}>
                            <ImageArea img='./src/cell3.png' correctName='Reading' id="area3" />
                        </ICol>

                        <ICol w={30}>
                            <ImageArea img='./src/cell4.png' correctName='Chemistry' id="area4" />
                        </ICol>

                        <ICol w={30}>
                            <ImageArea img='./src/cell5.png' correctName='Math'  id="area5" />
                        </ICol>

                        <ICol w={30}>
                            <ImageArea img='./src/cell6.png' correctName='Biology' id="area6" />
                        </ICol>
                    </IRow>
                </ICol>
            </IRow>
            <IRow>

                <ICol pt={1.5}> <ButtonCheck onClick={() => check(values)} /> </ICol>
            </IRow>
            <Modal visible={visible} ok={results} err={!results} nxtUrl='#/actividad2' repeatUrl='#/actividad1' />

        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad