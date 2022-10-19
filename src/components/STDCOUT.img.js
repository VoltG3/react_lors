import PreloadImage from 'react-preload-image'

export default function STDIMG(props){
    return (
        <PreloadImage src={ props.img } alt="img"
             style={{
                 position: 'relative',
                 width: props.width + 'px',
                 height: props.height === "auto"
                     ? 'auto' :
                     props.height + 'px',
                 filter: 'var(--filter--img)',
                 borderRadius: props.variant === "square"
                     ? '0 0 0 0'
                     : '50% 50% 50% 50%',
                 background: `url(${ props.preimg })`
            }}
        />

    )
}
