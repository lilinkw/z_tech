import {
  IconArrowRight,
  IconBrandFacebookFilled,
  IconBrandLinkedinFilled,
  IconBrandTwitterFilled,
  IconCalendarCheck,
  IconCaretDownFilled,
  IconCaretUpFilled,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconDeviceMobileFilled,
  IconMapPinFilled,
  IconMenu2,
  IconProps,
  IconToolsOff,
  IconUsers,
} from "@tabler/icons-react";

export const Icons = {
  Check: IconCheck,
  Down: IconCaretDownFilled,
  Up: IconCaretUpFilled,
  CalenderTick: IconCalendarCheck,
  PenTool: IconToolsOff,
  People: IconUsers,
  ChevronLeft: IconChevronLeft,
  ChevronRight: IconChevronRight,
  ChevronUp: IconChevronUp,
  ArrowRight: IconArrowRight,
  TwitterFilled: IconBrandTwitterFilled,
  FacebookFilled: IconBrandFacebookFilled,
  LinkedInFilled: IconBrandLinkedinFilled,
  Menu: IconMenu2,
  MapPin: IconMapPinFilled,
  PhoneFilled: IconDeviceMobileFilled,
};
type TIconKeys = keyof typeof Icons;

export type { TIconKeys, IconProps };
