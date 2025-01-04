export enum ERoute {
  Home = "home",
  About = "about",
  Contact = "contact",
  Games = "games",
  Partners = "partners",
}

export const ROUTES: { [K in ERoute]: string } = {
  [ERoute.Home]: "/home",
  [ERoute.About]: "/about",
  [ERoute.Contact]: "/contact",
  [ERoute.Games]: "/games",
  [ERoute.Partners]: "/partners",
};
