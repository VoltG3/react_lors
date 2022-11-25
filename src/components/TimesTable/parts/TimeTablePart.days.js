import {
    StyledThisCell,
    StyledthisCellColor_odd,
    StyledthisSection
} from '../TimeTable.Styles'

import { useTranslation } from 'react-i18next'

export default function TimeTablePart_days() {
    const [t] = useTranslation(["times"])

    return (
        <StyledthisSection>
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
        </StyledthisSection>
    )
}
