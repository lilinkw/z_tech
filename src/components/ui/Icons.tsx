import {
  IconCalendarCheck,
  IconCaretDownFilled,
  IconCaretUpFilled,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
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
};
type TIconKeys = keyof typeof Icons;

export type { TIconKeys, IconProps };
