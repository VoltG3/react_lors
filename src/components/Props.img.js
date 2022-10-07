
export default function GetImg(props){
    return (
        <img src={ props.img } alt="img"
             style={{
                 maxWidth: props.width + 'px',
                 maxHeight: props.height,
                 filter: 'var(--filter--img)',
                 width: '100%',
                 height: 'auto'
            }}
        />

    )
}