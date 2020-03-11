import React from 'react'
//Components
import Container from '../Container'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
import ButtonCheck from '../ButtonCheck'

// Styles
import styled from 'styled-components'
import styles, { ProgressbarContainer, UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
import {DraggableItemb} from '../Draggable'
import ImageArea from '../ImageArea'



const Actividad_base =  ({...props}) => {

    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} >
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='slide the sentences to organize them, then press check to verify if it is right or wrong, press hint if you need help   ' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>

            <ProgressbarContainer>
                <ProgressBar progress={0}/>
            </ProgressbarContainer>         


            <MainTitle color={Ilex.violeta2}>
            ORGANIZE THE SENTENCES IN THE CORRECT ORDER 
            </MainTitle>

            <IRow w={85} align='center' py={1.5} id="draggingArea">
                <ICol className='buttons' w={20}>
                    <DraggableItemb w={10} audio='./media/audio.mp3' name='Chemistry' draggingArea='#draggingArea' target="#area4"  activeareas={['#area1', '#area2', '#area3', '#area4', '#area5', '#area6']} />
                    <DraggableItemb w={10} audio='./media/audio.mp3' name='Biology'  draggingArea='#draggingArea' target="#area6" activeareas={['#area1', '#area2', '#area3', '#area4', '#area5', '#area6']} />
                    <DraggableItemb w={10} audio='./media/audio.mp3' name='Physics'  draggingArea='#draggingArea' target="#area3" activeareas={['#area1', '#area2', '#area3', '#area4', '#area5', '#area6']} />
                    <DraggableItemb w={10} audio='./media/audio.mp3' name='Math'   draggingArea='#draggingArea' target="#area5" activeareas={['#area1', '#area2', '#area3', '#area4', '#area5', '#area6']} />
                    <DraggableItemb w={10} audio='./media/audio.mp3' name='Languages'  draggingArea='#draggingArea' target="#area1" activeareas={['#area1', '#area2', '#area3', '#area4', '#area5', '#area6']} />
                    <DraggableItemb w={10} audio='./media/audio.mp3' name='Reading'  draggingArea='#draggingArea' target="#area3" activeareas={['#area1', '#area2', '#area3', '#area4', '#area5', '#area6']} />
                </ICol>
                <ICol className='areas' w={70} pl={2}>

                    <IRow justify='center' gutters={0.25}>
                        <ICol w={30}>
                            <ImageArea img='./src/cell1.png' correctName='Languages' droppablezone={true}  id="area1" />
                        </ICol>

                        <ICol w={30}>
                            <ImageArea img='./src/cell2.png' correctName='Physics' droppablezone={true}   id="area2"/>
                        </ICol>

                        <ICol w={30}>
                            <ImageArea img='./src/cell3.png' correctName='Reading' droppablezone={true}  id="area3"/>
                        </ICol>

                        <ICol w={30}>
                            <ImageArea img='./src/cell4.png' correctName='Chemistry' droppablezone={true}  id="area4"/>
                        </ICol>

                        <ICol w={30}>
                            <ImageArea img='./src/cell5.png' correctName='Math' droppablezone={true}   id="area5"/>
                        </ICol>

                        <ICol w={30}>
                            <ImageArea img='./src/cell6.png' correctName='Biology' droppablezone={true}  id="area6"/>
                        </ICol>

                    </IRow>

                </ICol>
            </IRow>
            <IRow>
                <ICol pt={1.5}><ButtonCheck /></ICol>
            </IRow>

        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad