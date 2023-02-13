import React, { useState } from 'react'
import Media from './media'

const MovableBlock = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)

    const handleMouseDown = (event) => {
        setIsDragging(true);
    }

    const handleMouseUp = () => {
        setIsDragging(false);
    }

    const handleMouseMove = (event) => {
        if (!isDragging) return;
        setPosition({
            x: position.x + event.movementX,
            y: position.y + event.movementY,
        })
    }

    return (
        <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{
                position: 'absolute',
                zIndex: '9999',
                left: position.x,
                top: position.y,
                width: 'auto',
                height: 'auto',
                borderRadius: '5px',
                border: 'solid 1px brown',
                backgroundColor: 'lightblue'
            }}><Media /></div>
    )
}

export default MovableBlock;
