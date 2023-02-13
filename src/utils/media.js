import { useEffect, useState } from 'react'
import useWindowDimension from './useWindowDimension'

const Media = () => {
    const [device, setDevice] = useState('')

    useEffect(() => {
        const extra = window.matchMedia('(min-width: 1441px)');
        const large = window.matchMedia('(min-width: 1201px) and (max-width: 1440))');
        const medium = window.matchMedia('(min-width: 1025px) and (max-width: 1200px)');
        const small = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
        const tablet = window.matchMedia('(min-width: 481px) and (max-width: 768px)');
        const mobile = window.matchMedia('(min-width: 320px) and (max-width: 480px)');

        const handleResize = () => {
            if (extra.matches) {
                setDevice('extra, higher that 1441 ')
            } else if (large.matches) {
                setDevice('large, desktop 1201 / 1440')
            } else if (medium.matches) {
                setDevice('medium, laptops and large tablets 1025 / 1200')
            } else if (small.matches) {
                setDevice('small, medium-sized tablets 769 / 1024')
            } else if (tablet.matches) {
                setDevice('tablet, small tablets 481 / 768')
            } else if (mobile.match) {
                setDevice('mobile 320 / 480')
            } else {
                setDevice('mini, lower that 319')
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
    }, []);

    console.log(useWindowDimension())
    let str = JSON.stringify(useWindowDimension())

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: '345px',
            width: 'auto',
            alignItems: 'center',
            padding: '1em',
            borderRadius: '5px',
            color: '#262626',
        }}>
            <code>{ device }</code>
            <div style={{ width: '100%', height: '1px', margin: '5px 0 5px 0', background: '#262626', opacity: '0.6' }}></div>
            <code>{ str }</code>
        </div>
    )
}

export default Media;