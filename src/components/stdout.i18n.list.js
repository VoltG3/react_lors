import { useTranslation } from 'react-i18next';

export const Content = () => {
    const [t, i18next, ready] = useTranslation(["translation", "footer", "LIST_SERVICES"])

    if (!ready) return 'loading translations...';

    //const list = t('list', { returnObjects: true });

  /*  const l = t("list:list_services", {count: list_services.length})
    console.log("---->", l)*/

    return  (
        <div>
            {i18next.t('LIST_SERVICES:list_services', { returnObjects: true }).map((list_services, key) => (
                <div key={key}>
                    <p>{t(list_services.item)}</p>
                </div>
            ))}
           {/* <p>{i18next.t("list:list_services." + 0 + ".item")}</p>
            <p>{i18next.t("list:list_services." + 1 + ".item")}</p>
            <p>{i18next.t("list:list_services." + 2 + ".item")}</p>*/}
        </div>
    )
}

