import { StyledTimesHeader }from "../times.styles";

import { useTranslation } from 'react-i18next'

export default function HeaderPrivat() {
    const [t] = useTranslation(["times"])

    return (
        <StyledTimesHeader>
            <p className={"textcontent--list--header"}>{ t("times:times02")}</p>
        </StyledTimesHeader>
    )
}
