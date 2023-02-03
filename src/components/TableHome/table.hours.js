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
    // const tableHeader = i18n.language === 'ru' ? 'textcontent--table--header--rus' : 'textcontent--table--header'
    // const paragraphTableItem = i18n.language === 'ru' ? 'textcontent--table--item--rus' : 'textcontent--table--item'
    const tableHeader = "textcontent--tabledata--header"
    const tItem = "textcontent--tabledata--item"
    const tItemSmal = "textcontent--tabledata--item--small"

    return (
        <StyledContainer>
            <div className={"stInner"}>
                <p className={ tableHeader }>{ t("times:times03") }</p>

                <LineShort color={"colorFirst"}/>

               {/* <div style={{
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
                </div>*/}

                <div className={"timetable"}>
                    <div className={"t_days"}>
                        <div className={"cell"}><p className={tItem}>{ t("times:times04") }</p></div>
                        <div className={"cell"}><p className={tItem}>{ t("times:times05") }</p></div>
                        <div className={"cell"}><p className={tItem}>{ t("times:times06") }</p></div>
                        <div className={"cell"}><p className={tItem}>{ t("times:times07") }</p></div>
                        <div className={"cell"}><p className={tItem}>{ t("times:times08") }</p></div>
                    </div>

                    <div className={"t_hours"}>
                        <TableHoursHours />
                    </div>
                </div>

                <p className={ tItem } style={{ paddingTop: '44px', paddingBottom: '22px'}}>{ t("sections:section_contacts_part02") }</p>

                {/*  <BTN_variant01 style={{ paddingLeft: '0'}}/>*/}

                <a  style={{paddingBottom: '22px'}} href={ Link01 } target="_blank" rel="noopener noreferrer">
                    <BTNPrimary
                        label={"btn_appointment_l"}
                        minWidth={"190px"}
                        paragraphMarginLeft={"-25%"}
                        paddingVertical={"5px"}
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
    margin: 60px 40px 40px 40px;
    //border: dotted 1px blue;
    border-bottom: solid 1px var(--color--tabledata--border);
  }
  
  .timetable {
    display: flex;
    flex-direction: row;
      width: auto;
      height: auto;
    //border: solid 2px blue;
    
  }
  
  .t_days {
    display: flex;
    flex-direction: column;
      max-width: 180px;
    width: 100%;
    height: auto;
    //border: dotted 1px red;
    
    & p {
      padding-left: 25px;
    }


    & div:nth-child(even) {
      background: var(--color--list--even);
    }

    & div:nth-child(odd) {
      background: var(--color--list--odd);
    }
  }
  
  .t_hours {
    display: flex;
    flex-direction: column;
     max-width: 200px;
    width: 100%;
    height: auto;
   // border: dotted 1px brown;


    
    
  }
  
  .cell {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 177px;
    height: 40px;

   // border: dotted 1px black;

  }
`

export default TableHours