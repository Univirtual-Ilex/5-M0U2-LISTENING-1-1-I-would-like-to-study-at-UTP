
//Import
import React,{useState, useRef} from 'react'
import styled from 'styled-components'
import styles from './BocinaButton_styles'

// Componente base
const BocinaButton_base = ({type, className, audio ,...props}) => {

    const [type2, playAudio] = useState(false)
    const ilxAudio = useRef()
    const handleAudio = () => {

        if (!type2) {

            ilxAudio.current.play()
            playAudio(true)
        } else {
            ilxAudio.current.load()
            ilxAudio.current.pause()
            playAudio(false)
        }
    }
    return (
        <div style={{display:"inline-block"}}>
            <button className={ (type ? 'type2 ' : '') + 'btn-clean ' + className} onClick={handleAudio}> 
                <i className='ilx-bocina'></i>
            </button>
            <audio ref={ilxAudio} onEnded={handleAudio}>
                    <source src={ audio }/>
                    <span>No se puede reproducir el audio</span>
            </audio>
        </div>

    )
}
const BocinaButton = styled(BocinaButton_base)`
${ styles }`
export default BocinaButton
