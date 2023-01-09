import { StyledTimesHeader } from "../times.styles";

import { useTranslation } from 'react-i18next'

export default function HeaderPublic() {
    const [t] = useTranslation(["times"])

    return (
        <StyledTimesHeader>
            <p className={"textcontent--list--header"}>{ t("times:times03")}</p>
        </StyledTimesHeader>
    )
}
