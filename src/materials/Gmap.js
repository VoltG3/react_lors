import { useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next'
import styled from 'styled-components';

const Gmap = () => {
    const { t, i18n } = useTranslation();
    const [googleMapsUrl, setGoogleMapsUrl] = useState('');

    const existingUrl = 'https://maps.google.com/maps?q=New+York&t=&z=13&ie=UTF8&iwloc=&output=embed';

    useEffect(() => {
        setGoogleMapsUrl(`${existingUrl}&language=${i18n.language}`);
    }, [i18n.language]);

    const StyledIframe = styled.iframe`
    width: 800px;
    height: 600px;
    border: 0;
  `;

    return (
        <StyledIframe src={googleMapsUrl} frameborder="0" allowfullscreen></StyledIframe>
    );
}

export default Gmap
