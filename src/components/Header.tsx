"use client";
import Image from "next/image";
import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "@/locales/client";
import { ERoute, ROUTES } from "@/routes";
import { Dropdown } from "./ui/Dropdown";
import { TLocale } from "@/middleware";
import { cn } from "@/lib/utils";

type TRouteHeader = { [K in Exclude<ERoute, ERoute.Home>]: string };

type TLanguageOption = React.ComponentProps<
  typeof Dropdown<TLocale>
>["options"];

interface IHeaderProps {
  containers?: Pick<React.InputHTMLAttributes<HTMLHeadElement>, "className">;
}

export default function Header(props: IHeaderProps) {
  const { containers } = props;
  const routesI18n = useScopedI18n("common.routes");
  const languageI18n = useScopedI18n("common.languages");
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const ROUTE_HEADER: TRouteHeader = {
    [ERoute.About]: routesI18n("about"),
    [ERoute.Contact]: routesI18n("contact"),
    [ERoute.Games]: routesI18n("games"),
    [ERoute.Partners]: routesI18n("partners"),
  };

  const LanguageOptions: TLanguageOption = [
    { key: "en", value: languageI18n("en") },
    { key: "vi", value: languageI18n("vi") },
  ];

  const onChangeLanguage = (locale: TLocale) => {
    changeLocale(locale);
  };

  const renderChangeLocal = () => (
    <Dropdown<TLocale>
      options={LanguageOptions}
      onSelect={onChangeLanguage}
      defaultKey={locale}
    />
  );
  const renderRoutes = () => {
    return (
      <nav className="flex flex-row w-[710px] justify-between font-sans items-center">
        {Object.entries(ROUTE_HEADER).map(([key, value]) => (
          <li className="list-none" key={key}>
            <a href={ROUTES[key as ERoute] ?? "/"}>{value}</a>
          </li>
        ))}
        {renderChangeLocal()}
      </nav>
    );
  };

  return (
    <header
      className={cn(
        "flex flex-row justify-between px-12 py-8 items-center bg-transparent",
        containers?.className
      )}
    >
      <Image
        aria-hidden
        src="/white_logo.svg"
        alt="File icon"
        width={108}
        height={64}
      />
      {renderRoutes()}
    </header>
  );
}
