
//Import
import React,{useState, useRef} from 'react'
import styled from 'styled-components'
import styles from './ButtonAudio_styles'

// Componente base
const ButtonAudio_base = ({src, ...props}) => {

    const [running, playAudio] = useState(false)
    const ilxAudio = useRef()
    const handleAudio = () => {

        if (!running) {

            ilxAudio.current.play()
            playAudio(true)
        } else {
            ilxAudio.current.load()
            ilxAudio.current.pause()
            playAudio(false)
        }
    }
    return (
        <div {...props}>
            <button className={(running ? 'running' : '') + 'btn-clean '} onClick={handleAudio}> 
                <i className='ilx-bocina'></i>
            </button>
            <audio ref={ilxAudio} onEnded={handleAudio}>
                    <source src={ src }/>
                    <span>No se puede reproducir el audio</span>
            </audio>
        </div>
    )
}
const ButtonAudio = styled(ButtonAudio_base)`${ styles }`
export default ButtonAudio
