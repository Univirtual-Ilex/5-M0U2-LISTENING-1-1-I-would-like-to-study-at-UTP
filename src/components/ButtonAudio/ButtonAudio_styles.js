import { css } from 'styled-components'
import Ilex from '../../App/variables'
// import Ilex from '../../App/variables'
const styles = css`
button{
    background: linear-gradient(90deg, #1B1E5A, #863FFD);
    box-shadow: 0 0.5em 0 0 ${Ilex.verde};
    color: #fff;
    padding: 0.615em 3em;
    border-radius:1em;
    transition: all 0.4s ease-out;
    cursor:pointer;
    &:hover{
        background-image: linear-gradient(90deg, ${Ilex.color_amarilloOscuro}, ${Ilex.rosa});
        box-shadow: 0 0.5em 0 0 ${Ilex.violeta}; 
    }
    img.img-play{
        width:0.78em;
        height:auto;
    }
    &.running{
        background-image: linear-gradient(90deg, ${Ilex.color_amarilloOscuro}, ${Ilex.rosa});
        box-shadow: 0 0.5em 0 0 ${Ilex.violeta}; 
    }

}
`

export default styles
    