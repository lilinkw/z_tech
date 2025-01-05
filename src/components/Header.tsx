"use client";
import Image from "next/image";
import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "@/locales/client";
import { ERoute, ROUTES } from "@/routes";
import { Dropdown, IDropDownOption } from "./ui/Dropdown";
import { TLocale } from "@/middleware";
import { cn } from "@/lib/utils";
import { useCallback, useMemo } from "react";
import { useIsScroll, useMediaQuery } from "@/hooks";
import { Icons } from "./ui";
import { EScreenSize } from "@/lib/screen";

type TRouteHeader = { [K in Exclude<ERoute, ERoute.Home>]: string };

type TLanguageOption = IDropDownOption<TLocale> & {
  // url point to flag image
  value: "en" | "vi";
  flag: string;
};

interface IHeaderProps {
  containers?: Pick<React.HTMLAttributes<HTMLElement>, "className">;
}

const LANGUAGE_OPTION: Array<TLanguageOption> = [
  { key: "en", value: "en", flag: "/flag_us.png" },
  { key: "vi", value: "vi", flag: "/flag_vn.png" },
];

export default function Header(props: IHeaderProps) {
  const { containers } = props;
  const routesI18n = useScopedI18n("common.routes");
  const languageI18n = useScopedI18n("common.languages");
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const mdWidth = useMediaQuery(`(min-width: ${EScreenSize.MD})`);
  const { isScrolled } = useIsScroll();

  const ROUTE_HEADER: TRouteHeader = useMemo(
    () => ({
      [ERoute.About]: routesI18n("about"),
      [ERoute.Contact]: routesI18n("contact"),
      [ERoute.Games]: routesI18n("games"),
      [ERoute.Partners]: routesI18n("partners"),
    }),
    [routesI18n]
  );

  const onChangeLanguage = useCallback(
    (locale: TLocale) => {
      changeLocale(locale);
    },
    [changeLocale]
  );

  const renderChangeLocal = useCallback(() => {
    const LanguageOptions: Array<IDropDownOption<TLocale>> =
      LANGUAGE_OPTION.map((lang) => ({
        key: lang.key,
        value: (
          <div className="flex flex-row items-center gap-2">
            <Image
              src={lang.flag}
              alt={`${lang.value} flag`}
              width={20}
              height={20}
            />
            <span>{languageI18n(lang.value)}</span>
          </div>
        ),
      }));
    const onRenderSelectedOption = (key: IDropDownOption<TLocale>["key"]) => {
      const option = LANGUAGE_OPTION.find((lang) => lang.key === key);
      return option ? (
        <div className="flex flex-row items-center gap-2">
          <Image
            src={option.flag}
            alt={`${option.value} flag`}
            width={20}
            height={20}
          />
        </div>
      ) : (
        <></>
      );
    };
    return (
      <Dropdown<TLocale>
        options={LanguageOptions}
        defaultKey={locale}
        menuProps={{ className: "right-0" }}
        onSelect={onChangeLanguage}
        onRenderSelectedOption={onRenderSelectedOption}
      />
    );
  }, [languageI18n, locale, onChangeLanguage]);

  const renderRoutes = useCallback(
    () =>
      mdWidth ? (
        <nav className="flex flex-row w-[710px] justify-between font-sans items-center">
          {Object.entries(ROUTE_HEADER).map(([key, value]) => (
            <li className="list-none" key={key}>
              <a href={ROUTES[key as ERoute] ?? "/"}>{value}</a>
            </li>
          ))}
          {renderChangeLocal()}
        </nav>
      ) : (
        <span className="pointer-events-auto">
          <Icons.Menu width={40} height={40} />
        </span>
      ),
    [ROUTE_HEADER, mdWidth, renderChangeLocal]
  );

  return (
    <header
      className={cn(
        "flex flex-row justify-between px-xs sm:px-12 py-8 items-center bg-transparent",
        isScrolled
          ? "text-black backdrop-blur-md bg-white/20"
          : "text-white bg-transparent",
        containers?.className
      )}
    >
      <Image
        aria-hidden
        src="/white_logo.svg"
        alt="File icon"
        width={mdWidth ? 108 : 68}
        height={mdWidth ? 64 : 40}
      />
      {renderRoutes()}
    </header>
  );
}
