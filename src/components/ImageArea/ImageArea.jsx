
//Import
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import styles from './ImageArea_styles'

// Componente base
const ImageArea_base = forwardRef(({id, droppablezone, correctName, img, ...props}, ref) => {
    return (
        <div {...props} ref={ref}>
            <figure>
                <img src={ img } alt='zone' />
            </figure>

            <div className='droparea' id={id} data-droppablezone={droppablezone}>
                
            </div>

        </div>
    )
})
const ImageArea = styled(ImageArea_base)`${ styles }`
export default ImageArea
