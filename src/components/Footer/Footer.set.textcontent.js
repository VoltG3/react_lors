import NavSetFooter from './Footer.set.navigation'
import { DATA_TEXTCONTENT_HEADERS, DATA_TEXTCONTENT_SECTIONS } from '../../env'

import { STDL } from '../STDCOUT.lists'
import { STDH } from '../STDCOUT.headers'

export default function FooterSetTextcontent() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '47px 40px 47px 40px'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%'
            }}>
                <NavSetFooter />

                <div>
                    <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"company"} />
                    <STDL textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"01"}/>
                    <STDL textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"02"}/>
                </div>

                <div>
                    <STDL textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"03"}/>
                    <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"company"} />
                    <STDL textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"04"}/>
                    <STDL textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"05"}/>
                    <STDL textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"06"}/>
                </div>

                <div>
                    <STDL textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"07"}/>
                    <STDL textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"08"}/>
                    <STDL textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"09"}/>
                    <STDL textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"10"}/>
                    <STDL textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"11"}/>
                </div>
            </div>
        </div>
    )
}
