import { useEffect, useState } from 'react';

const Temp = (props) => {
    const [isDesktop, setIsDesktop] = useState(false);


    useEffect(() => {
        const desktop = window.matchMedia('(min-width: 700px)');
        const mobile = window.matchMedia('(max-width: 700px)');
        const v = props.variant === "desktop" ? desktop : mobile

        const listener = () => setIsDesktop(v.matches);
        listener();
        window.addEventListener('resize', listener);

        return () => window.removeEventListener('resize', listener);
    }, [isDesktop]);



    return (
        <div >
            {isDesktop ? <h1>Desktop</h1> : <h1>Small screen</h1>}
        </div>
    );
};

export default Temp;