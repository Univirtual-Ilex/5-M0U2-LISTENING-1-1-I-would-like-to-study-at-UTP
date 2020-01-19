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
import { DraggableItemb } from '../Draggable'
import ImageArea from '../ImageArea'



const Actividad_base =  ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props}>
            
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

            <IRow w={85} align='center' py={1.5}>
                <ICol className='buttons' w={20}>
                    <DraggableItemb w={10} audio='./media/audio.mp3' name='Chemistry' />
                    <DraggableItemb w={10} audio='./media/audio.mp3' name='Biology' />
                    <DraggableItemb w={10} audio='./media/audio.mp3' name='Physics' />
                    <DraggableItemb w={10} audio='./media/audio.mp3' name='Math' />
                    <DraggableItemb w={10} audio='./media/audio.mp3' name='Languages' />
                    <DraggableItemb w={10} audio='./media/audio.mp3' name='Reading' />
                </ICol>
                <ICol className='areas' w={70} pl={2}>

                    <IRow justify='center' gutters={0.25}>
                        <ICol w={30}>
                            <ImageArea img='./src/cell1.png' dropzone='_test' />
                        </ICol>

                        <ICol w={30}>
                            <ImageArea img='./src/cell2.png' dropzone='_test' />
                        </ICol>

                        <ICol w={30}>
                            <ImageArea img='./src/cell3.png' dropzone='_test' />
                        </ICol>

                        <ICol w={30}>
                            <ImageArea img='./src/cell4.png' dropzone='_test' />
                        </ICol>

                        <ICol w={30}>
                            <ImageArea img='./src/cell5.png' dropzone='_test' />
                        </ICol>

                        <ICol w={30}>
                            <ImageArea img='./src/cell6.png' dropzone='_test' />
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