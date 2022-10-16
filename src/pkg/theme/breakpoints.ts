import { screens } from './screens';

const breakpoint = (width: string) => `@media (min-width: ${width})`;

const sm = breakpoint(screens.sm);
const md = breakpoint(screens.md);
const lg = breakpoint(screens.lg);
const xl = breakpoint(screens.xl);
const xxl = breakpoint(screens.xxl);

export const breakpoints = { sm, md, lg, xl, xxl };
