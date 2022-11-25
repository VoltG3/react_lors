import {StyledTimesTable_header} from "../TimeTable.Styles";

import { useTranslation } from 'react-i18next'

export default function TimesTablePartHeaderFirst() {
    const [t] = useTranslation(["times"])

    return (
        <StyledTimesTable_header>
            <p className={"textcontent--list--header"}>{ t("times:times03")}</p>
        </StyledTimesTable_header>
    )
}
