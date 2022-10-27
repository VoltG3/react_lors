
export default function STDIMG(props){
    return (
        <img src={ props.img } alt="img"
             style={{
                 maxWidth: props.width + 'px',
                 maxHeight: props.height === "auto"
                     ? 'auto'
                     : props.height + 'px',
                 width: '100%',
                 height: '100%',
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
