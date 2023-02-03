import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

import TableHoursDays from './table.hours.days'
import LineShort from '../line.short'
import BTN_variant01 from '../Button/temp/BTN_variant01'
import TableHoursHours from "./table.hours.hours";
import BTNPrimary from "../Button/BTN.primary";
import React from "react";
import {Link01} from "../../env";
import styled from "styled-components";

const TableHours = () => {
    const [t] = useTranslation(["times", "sections", "common"])
    const tableHeader = i18n.language === 'ru' ? 'textcontent--table--header--rus' : 'textcontent--table--header'
    const paragraphTableItem = i18n.language === 'ru' ? 'textcontent--table--item--rus' : 'textcontent--table--item'


    return (
        <StyledContainer>
            <div className={"stInner"}>
                <p className={ tableHeader }>{ t("times:times03") }</p>

                <LineShort color={"colorFirst"}/>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row'

                }}>
                    <TableHoursDays
                        days={[
                            `${ t("times:times04") }`,
                            `${ t("times:times05") }`,
                            `${ t("times:times06") }`,
                            `${ t("times:times07") }`,
                            `${ t("times:times08") }`
                        ]}
                    />

                    <TableHoursHours />
                </div>
                <p className={ paragraphTableItem } style={{ paddingTop: '20px', paddingBottom: '20px'}}>{ t("sections:section_contacts_part02") }</p>

              {/*  <BTN_variant01 style={{ paddingLeft: '0'}}/>*/}


                <a href={ Link01 } target="_blank" rel="noopener noreferrer">
                    <BTNPrimary
                        label={"btn_appointment_l"}
                        minWidth={"218px"}
                        paragraphMarginLeft={"-25%"}
                        paddingVertical={"8px"}
                        justifyContent={"flex-end"}
                    />
                </a>

            </div>



        </StyledContainer>
    )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
    width: auto;
    height: 100%;
  box-sizing: border-box;
  //margin: 40px 40px 40px 40px;
  //border: dotted 1px blue;
  
  .stInner {
    display: flex;
    flex-direction: column;
    width: auto;
    height: 100%;
    box-sizing: border-box;
    margin: 40px 40px 40px 40px;
    border: dotted 1px blue;
  }
`

export default TableHours