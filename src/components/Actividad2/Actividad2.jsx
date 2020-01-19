//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad2_styles'
import Ilex from '../../App/variables'
// styles from styled
import { ProgressbarContainer, UiButtonsContainer } from '../Actividad1/Actividad_styles'
// Components
import Container from '../Container'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import { IRow, ICol } from '../Grid'
import { DraggableBlock } from '../Draggable'
import ButtonUi from '../ButtonControlUI'
// Componente base
const Actividad2_base = ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props}>

            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='slide the sentences to organize them, then press check to verify if it is right or wrong, press hint if you need help   ' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>

            <ProgressbarContainer>
                <ProgressBar progress={50}/>
            </ProgressbarContainer>

            <IRow w={90} align='center' justify='center'>
                <ICol w={100}>
                        <MainTitle color={Ilex.violeta2}> ORGANIZE THE EMAIL IN THE CORRECT ORDER  </MainTitle>
                </ICol>
            </IRow>
            
            <IRow align='center' justify='flex-start' w={80} pt={1}>
                    <DraggableBlock>
                    From: Pedroaguirre98@gmail.com 
                    </DraggableBlock>

                    <DraggableBlock>
                    To: Jennifermartinez27@yahoo.com
                    </DraggableBlock>

                    <DraggableBlock>
                    Subject: My new academic life 
                    </DraggableBlock>

                    <DraggableBlock>
                    Hi, Jen! 
                    </DraggableBlock>

                    <DraggableBlock>
                    How’s life treating you? I hope you’re doing well in New York. I have some news for you, I started studying Early Childhood Education at “Universidad Tecnologica de Pereira” last month. I am in 1st semester.  It is a little stressful sometimes because I have to do oral presentations for most of the classes. So, I sometimes get nervous but I try to do my best. 
                    </DraggableBlock>

                    <DraggableBlock>
                    Most of the classes are at “La Julita” building, it is a bit away from the university campus, so I have to walk a lot when I have other classes in other buildings.
                    </DraggableBlock>


                    <DraggableBlock>
                    My classmates are fun and kind. They are mostly girls, there aren’t many male students studying this career though so I try to get along with everyone.
                    </DraggableBlock>


                    <DraggableBlock>
                    I can also tell you that one of the most difficult subjects for me right now is Mathematical abilities because as you know, I have always had problems with understanding math. However, my professor always explains to me the topics again. He is a very collaborative teacher.
                    </DraggableBlock>


                    <DraggableBlock>
                    I want to contribute to future generations by educating children to build a better future. That’s why I’m happy studying this program because teaching is one of my passions.
                    </DraggableBlock>


                    <DraggableBlock>
                    That’s all for now. Please write soon.
                    </DraggableBlock>


                    <DraggableBlock>
                    Love,Pedro
                    </DraggableBlock>
           
            </IRow>
        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
