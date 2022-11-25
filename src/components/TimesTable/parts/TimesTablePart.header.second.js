import {StyledTimesTable_header} from "../TimeTable.Styles";

import { useTranslation } from 'react-i18next'

export default function TimesTablePartHeaderSecond() {
    const [t] = useTranslation(["times"])

    return (
        <StyledTimesTable_header>
            <p className={"textcontent--list--header"}>{ t("times:times02")}</p>
        </StyledTimesTable_header>
    )
}
