import {
  IconCalendarCheck,
  IconCaretDownFilled,
  IconCaretUpFilled,
  IconCheck,
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
};
type TIconKeys = keyof typeof Icons;

export type { TIconKeys, IconProps };
