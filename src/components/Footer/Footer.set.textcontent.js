import NavSetFooter from './Footer.set.navigation'
import { DATA_TEXTCONTENT_HEADERS, DATA_TEXTCONTENT_SECTIONS } from '../../env'

import { STDS } from '../STDCOUT.sections'
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
                    <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"HEADER company"} />
                    <STDS textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"01"}/>
                    <STDS textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"02"}/>
                </div>

                <div>
                    <STDS textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"03"}/>
                    <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"HEADER company"} />
                    <STDS textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"04"}/>
                    <STDS textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"05"}/>
                    <STDS textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"06"}/>
                </div>

                <div>
                    <STDS textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"07"}/>
                    <STDS textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"08"}/>
                    <STDS textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"09"}/>
                    <STDS textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"10"}/>
                    <STDS textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"footer"} partId={"11"}/>
                </div>
            </div>
        </div>
    )
}
