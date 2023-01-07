import { useState, useRef } from 'react';

import { image01 } from '../env'
const ImageWithHoverMessage = () => {
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const area1Ref = useRef(null);
    const area2Ref = useRef(null);
    const area3Ref = useRef(null);
    const area4Ref = useRef(null);

    const handleMouseMove = (e) => {
        const x = e.clientX;
        const y = e.clientY;

        const area1Rect = area1Ref.current.getBoundingClientRect();
        if (x >= area1Rect.left && x <= area1Rect.right && y >= area1Rect.top && y <= area1Rect.bottom) {
            setMessage('This is area 1');
            setShowMessage(true);
            return;
        }

        const area2Rect = area2Ref.current.getBoundingClientRect();
        if (x >= area2Rect.left && x <= area2Rect.right && y >= area2Rect.top && y <= area2Rect.bottom) {
            setMessage('This is area 2');
            setShowMessage(true);
            return;
        }

        const area3Rect = area3Ref.current.getBoundingClientRect();
        if (x >= area3Rect.left && x <= area3Rect.right && y >= area3Rect.top && y <= area3Rect.bottom) {
            setMessage('This is area 3');
            setShowMessage(true);
            return;
        }

        const area4Rect = area4Ref.current.getBoundingClientRect();
        if (x >= area4Rect.left && x <= area4Rect.right && y >= area4Rect.top && y <= area4Rect.bottom) {
            setMessage('This is area 4');
            setShowMessage(true);
            return;
        }

        setShowMessage(false);
    };

    return (
        <div onMouseMove={handleMouseMove}>
            <img src={image01} alt="image" width={'1440px'} height={'auto'} />
            <div ref={area1Ref} className="area area1" style={{width:'300px', height: '100px',border: 'solid 1px red'}}></div>
            <div ref={area2Ref} className="area area2"></div>
            <div ref={area3Ref} className="area area3"></div>
            <div ref={area4Ref} className="area area4"></div>
            {showMessage && <div>{message}</div>}
        </div>
    )
}

export default ImageWithHoverMessage