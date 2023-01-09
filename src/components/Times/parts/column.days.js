import styled from 'styled-components'
import { StyledThisCell } from "../times.styles";

import { useTranslation } from 'react-i18next'

function ColumnDays() {
    const [t] = useTranslation(["times"])

    return (
        <StyledColumnDays>
            <div className={"thisWeek"}>
                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisWeek"}>
                        <p className={"textcontent--list--item"}>{ t("times:times04")}</p>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_even"}>
                    <div className={"innerThisWeek"}>
                        <p className={"textcontent--list--item"}>{ t("times:times05")}</p>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisWeek"}>
                        <p className={"textcontent--list--item"}>{ t("times:times06")}</p>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_even"}>
                    <div className={"innerThisWeek"}>
                        <p className={"textcontent--list--item"}>{ t("times:times07")}</p>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisWeek"}>
                        <p className={"textcontent--list--item"}>{ t("times:times08")}</p>
                    </div>
                </StyledThisCell>
            </div>
        </StyledColumnDays>
    )
}

const StyledColumnDays = styled.div`

  .thisWeek {
    display: flex;
    flex-direction: column;
    max-width: 160px;
    min-width: 160px;
    width: 100%;
    height: auto;from "../times.styles";

    .innerThisWeek {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      //max-width: 80px;
      //min-width: 120px;
      width: 100%;
      height: auto;
      margin-left: 15px;
      ///  border: solid 1px red;
    }
  }
`

export default ColumnDays