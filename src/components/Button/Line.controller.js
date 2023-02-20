import React from 'react'

const lineHr =  <div style={{
    width: '100%',
    height: '2px',
    marginBottom: 'var(--size--padding40)',
    background: 'var(--color--line--lang)',
}}></div>

const line01 = (props) => <div  style={{
    width: '43px',
    height: '4px',
    marginTop: '22px',
    marginBottom: '44px',
    background: props.variant === "line01"
        ? 'var(--color--line--variant--v1)'
        : props.variant === "lien02"
            ? 'var(--color--line--variant--v2)'
            : props.variant === "line03"
                ? 'var(--color--line--variant--v3)'
                : ''
}}></div>

export const LineController = (props) => {
    return (
        <>
            { (() => {
                switch (props.variant) {
                    case 'lineHR': return lineHr
                    case 'line01': return line01
                    case 'line02': return line01
                    case 'line03': return line01
                    default: return ""
                }
            })() }
        </>
    )
}