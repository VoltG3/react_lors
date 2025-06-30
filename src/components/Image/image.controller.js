import React from 'react'
import config from '../../config'

import ImgCollective4 from './img.collective4'
import ImgCollective3 from './img.collective3'
import ImgEachPerson from './img.eachPerson'
import ImgEquipment from './img.equipment'
import ImgOffice from './img.office'
import ImgContacts from './img.contacts'
import ImgBuilding from './img.building'

const URL_img01 = config.images.URL_img01
const URL_img02 = config.images.URL_img02
const URL_img08 = config.images.URL_img08
const URL_img10 = config.images.URL_img10
const URL_SET_1 = [config.images.URL_img03, config.images.URL_img04, config.images.URL_img05, config.images.URL_img11]
const URL_SET_2 = [config.images.URL_img06, config.images.URL_img07]

const URL_SET_3 = [config.images.URL_img09, config.images.URL_img02]

export const ImageController = (props) => {
    const collective4 = <ImgCollective4 variant={ URL_img01 } />
    const collective3 = <ImgCollective3 variant={ URL_img02 } />
    const eachPerson = <ImgEachPerson variant={ URL_SET_1 } />
    const equipment = <ImgEquipment variant={ URL_SET_2 } />
    const office = <ImgOffice variant={ URL_img08 } />
    const contacts = <ImgContacts variant={ URL_SET_3 } />
    const building = <ImgBuilding variant={ URL_img10} />

    return (
        <>
            { (() => {
                switch (props.variant) {
                    case 'collective4': return collective4
                    case 'collective3': return collective3
                    case 'eachPerson': return eachPerson
                    case 'equipment': return equipment
                    case 'office': return office
                    case 'contacts': return contacts
                    case 'building': return building
                    default: return ""
                }
            })() }
        </>
    )
}