import PreloadImage from 'react-preload-image'

export default function STDIMG(props){
    return (
        <img src={ props.img } alt="img"
             style={{
                 maxWidth: props.width + 'px',
                 maxHeight: props.height === "auto"
                     ? 'auto' :
                     props.height + 'px',
                 width: '100%',
                 height: '100%',
                 filter: 'var(--filter--img)',
                 borderRadius: props.variant === "square"
                     ? '0 0 0 0'
                     : '50% 50% 50% 50%',
                 background: `url(${ props.preimg })`
            }}
        />

    )
}
