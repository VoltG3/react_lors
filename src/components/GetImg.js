
export default function GetImg(props){
    return (
        <img src={ props.img } alt="img"
             style={{
                 maxWidth: props.width + 'px',
                 width: '100%',
                 height: props.height === 'auto'
                     ? '100%'
                     : props.height + 'px',
                 marginTop: props.verticalMargin === "null"
                     ? '0'
                     : `var(${props.verticalMargin})`,
                 marginBottom: props.verticalMargin === "null"
                     ? '0'
                     : `var(${props.verticalMargin})`,
                 filter: 'var(--filter--img)',
                 background: `url(${ props.imgPreview })`,
            }}
        />

    )
}
