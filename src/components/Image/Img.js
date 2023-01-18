
export default function Img(props){

    return (
        <img src={ props.img } alt="img"
             style={{
                 maxWidth: props.maxWidth != null
                     ? props.maxWidth + 'px'
                     : 'auto',
                 width: '100%',
                 height: props.height === 'auto'
                     ? '100%'
                     : props.height + 'px',
                 paddingTop: props.verticalMargin === "null"
                     ? '0'
                     : `var(${props.verticalMargin})`,
                 paddingBottom: props.verticalMargin === "null"
                     ? '0'
                     : `var(${props.verticalMargin})`,
                 borderRadius: '3px',
                 filter: 'var(--filter--img)'
            }}
        />
    )
}
