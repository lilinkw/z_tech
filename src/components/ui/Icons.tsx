import { IconCaretDownFilled, IconCheck, IconProps } from "@tabler/icons-react";

export const Icons = {
  Check: IconCheck,
  Down: IconCaretDownFilled,
};
type TIconKeys = keyof typeof Icons;

export type { TIconKeys, IconProps };
