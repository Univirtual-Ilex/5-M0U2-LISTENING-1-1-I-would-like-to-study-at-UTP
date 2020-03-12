
//Import
import React,{useRef, useEffect,  forwardRef} from 'react'
import styled from 'styled-components'
//Components
import BocinaButton from '../BocinaButton'
import styles, {draggableBlock, draggableItemb} from './Draggable_styles'
import { gsap } from 'gsap'
import { Draggable} from 'gsap/Draggable'
// import BocinaButton from '../BocinaButton'

export const DraggableBlock = styled.div`
    ${draggableBlock}
`



// Componente base
const Draggable_base = forwardRef(({ draggingArea, audio, name, target, send, info, activeareas, index, ...props }, ref) => {
    const itemDraggable = useRef()
    
    
    useEffect ( () => {

        gsap.registerPlugin(Draggable)
        Draggable.create( itemDraggable.current , { 
            type: 'x,y',
            edgeResistance:0.65,
            bounds:draggingArea,
            throwProps:true,
            zIndex:500,
            // liveSnap: { points:[{x:100, y:100}], radius: 50}, // {x:100, y:100}, {x:50, y:50}, {x:100, y:100} Puntos en la posición 0x y 0y tambien en la 50x y 50y
            inertia:true,
            /*liveSnap:{
                x: function(v, s){ // v por defecto devuelve un valor con la posición en vivo del elemento. Si ese valor se retorna, el elemento se pegará a él
                    //console.log('value is', v, s)
                    if(v > 1000) {
                        return 1000
                    } else {
                        return v
                    }
                }
            },*/
            onDrag: function (e) {
               // console.log(this.x, this.y)
               // console.log('Revisando', e)
            
                
                // console.log(ref[0].current.dataset.target)
            },
            onDragEnd: function (e) {


                let isThere = activeareas.map((area, index) => {
                        return this.hitTest(area, '80%')
                })

                const isMatching = () => {
                    const isCorrect = `#area${isThere.indexOf(true)+1}` === target
                    send( {result:isCorrect, index: index})
                }

                if (isThere.indexOf(true) !== -1) {
                    // Envia la validación de si este elemento está en la celda correcta
                        isMatching()
                        //const isCorrect = `#area${isThere.indexOf(true)+1}` === target
                        //send( {result:isCorrect, index: index})
                        //send(`#area${isThere.indexOf(true)+1}` === target)
                        
                    } else {                       
                       
                    gsap.to(this.target, 0.3, {x:0, y:0,onComplete:isMatching})
        

                }



                
            }

        })
    } , [draggingArea, target, ref, send, index, activeareas, info])
    return (
        <div {...props} ref={itemDraggable}>
            <BocinaButton audio={ audio } type />
            <span>{ name }</span>
        </div>
    )
})
const DraggableItem = styled(Draggable_base)`${ styles }`


export const DraggableItemb =styled(DraggableItem)`
    ${draggableItemb}

`


export default DraggableItem
