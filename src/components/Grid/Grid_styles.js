import { css } from 'styled-components'

const padding = (tipo) => {
    switch(true){
        case tipo.p && tipo.p>=0:
            return `${ tipo.p || 0 }em`
        case tipo.pt && tipo.pt>=0:
        case tipo.pr && tipo.pr>=0:
        case tipo.pb && tipo.pb>=0:
        case tipo.pl && tipo.pl>=0:
           return `${tipo.pt || 0 }em ${tipo.pr || 0}em ${tipo.pb || 0}em ${tipo.pl || 0}em`
        case tipo.px && tipo.px>=0:
        case tipo.py && tipo.py>=0:
            return `${tipo.py||0}em ${tipo.px||0}em ${tipo.py||0}em ${tipo.px||0}em`
        default:
            return '0em'
    }

}

const styles = css``

export const stylesRow = css`
    display: flex;
    flex-wrap:wrap;
    justify-content: ${ props => props.justify };
    width:${ (props) => ( props.w || 100 ) }%;
    margin: ${
        (props)=>{
            switch (props.align) {
                case 'center':
                    return '0 auto'
                case 'left':
                    return '0'
                case 'right':
                    return '0 0 0 auto'
                default:
                    return 0
            }
        }
    };
    padding:${ (props) => (padding(props)) };

    &>div{
        margin-left:${props => props.gutters || 0}em;
        margin-right:${props => props.gutters || 0}em;
    }
`
export const stylesCol = css`
    padding: ${ (props)=> (padding(props))  };
    width:${props=> props.w || 100}%;

`

export default styles
