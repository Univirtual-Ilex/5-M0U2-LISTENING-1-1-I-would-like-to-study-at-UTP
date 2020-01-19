import React from 'react'
//Components
import Container from '../Container'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
import Sentence from '../Sentence'

// Styles
import styled from 'styled-components'
import styles, { ProgressbarContainer, UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'



const Actividad_base =  ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' w={69} h={38.8} {...props}>
            
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

            <IRow w={90} align='center' pt={2}>
                <ICol w={100}> 
                    <Sentence basename='Account/From' words={['your', 'email', 'goes', 'in', 'this', 'part']} />
                    <Sentence basename='To' words={['you', 'write', 'the', 'recipient`s', 'email', 'in', 'this', 'part']} />
                    <Sentence basename='Subject field' words={['you', 'write', 'the', 'purpose', 'of', 'your', 'message', 'in', 'this','part']} />
                    <Sentence basename='Greeting' words={['you', 'say', 'hello', 'or', 'greet', 'the', 'person', 'you', 'write','the','message', 'to']}/>
                    <Sentence basename='Introduction' words={['you', 'introduce', 'the', 'message', 'you', 'want', 'to', 'send', 'on', 'this', 'section']}/>
                    <Sentence basename='Body' words={['the', 'content', 'of', 'your', 'message', 'goes', 'in', 'this', 'part']}/>
                    <Sentence basename='Conclusion' words={['you', 'conclude', 'the', 'message', 'in', 'this', 'section']}/>
                    <Sentence basename='Complimentary close' words={['it', 'is', 'a', 'section', 'of', 'the', 'message', 'that', 'you', 'include', 'before', 'your', 'signature']}/>
                    <Sentence basename='Signature' words={['in', 'this', 'part', 'you', 'write', 'your', 'name', 'to', 'finish', 'the', 'message']}/>
                    <Sentence basename='Attachments' words={['here', 'you', 'include', 'a', 'document', 'or', 'photo', 'to', 'the', 'message', 'email']}/>
                </ICol>
            </IRow>

            
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad