
//Import
import React,{useRef, useEffect, useState, forwardRef} from 'react'
import styled from 'styled-components'
//Components
import BocinaButton from '../BocinaButton'
import styles, {draggableBlock, draggableItemb} from './Draggable_styles'
import { gsap, TweenLite, TweenMax } from 'gsap'
import { Draggable} from 'gsap/Draggable'
// import BocinaButton from '../BocinaButton'

export const DraggableBlock = styled.div`
    ${draggableBlock}
`



// Componente base
const Draggable_base = forwardRef(({ draggingArea, audio, name, target, elementId, info, activeareas, ...props }, ref) => {
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
            liveSnap:{
                x: function(v, s){ // v por defecto devuelve un valor con la posición en vivo del elemento. Si ese valor se retorna, el elemento se pegará a él
                    //console.log('value is', v, s)
                    if(v > 1000) {
                        return 1000
                    } else {
                        return v
                    }
                }
            },
            onDrag: function (e) {
               // console.log(this.x, this.y)
               // console.log('Revisando', e)
            
                
                // console.log(ref[0].current.dataset.target)
            },
            onDragEnd: function (e) {
                console.log(target)
                let isThere = activeareas.map((area, index) => {
                        return this.hitTest(area)
                })

                if (isThere.indexOf(true) !== -1) {
                    console.log(isThere.indexOf(true)+1) // Ojo pendiente acá que está la clave del tesoro
                    return
                } else {
                    TweenLite.to(this.target, 0.3, {x:0, y:0})
                }
            }

        })
    } , [draggingArea, target, ref, elementId, activeareas, info])
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
