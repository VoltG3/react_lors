
export default function STDIMG(props){
    return (
        <img src={ props.img } alt="img"
             style={{
                 width: props.width + 'px',
                 height: props.height,
                 filter: 'var(--filter--img)'
            }}
        />

    )
}
