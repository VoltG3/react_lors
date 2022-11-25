import React from 'react'
import MobileMeny from "./MomileMeny";

export default function Hamburger(props) {
    const [open, setOpen] = React.useState({
        isOpen : false,
    })

    function toggleIsActiv() {
        setOpen(prevOpen => ({
            ...prevOpen,
            isOpen: !prevOpen.isOpen
        }))

        if(open.isOpen) {
            window.temp = open.isOpen
            console.log("click - isOpen", open.isOpen)
            return <MobileMeny getMobile={"true"} />
        } else {
            window.temp = open.isOpen
            console.log("click - isClose", open.isOpen)
            return <MobileMeny getMobile={"false"} />
        }
    }

    console.log(window.temp)

    return (
        <div
            className={"hamburgerDiv"}
            onClick={() => toggleIsActiv()}
        >
            <div style={{ fill: props.color }}>
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="10"></rect>
                    <rect y="20" width="100" height="10"></rect>
                    <rect y="40" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            </div>
        </div>
    )
}
