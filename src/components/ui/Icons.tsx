import {
  IconCaretDownFilled,
  IconCaretUpFilled,
  IconCheck,
  IconProps,
} from "@tabler/icons-react";

export const Icons = {
  Check: IconCheck,
  Down: IconCaretDownFilled,
  Up: IconCaretUpFilled,
};
type TIconKeys = keyof typeof Icons;

export type { TIconKeys, IconProps };
