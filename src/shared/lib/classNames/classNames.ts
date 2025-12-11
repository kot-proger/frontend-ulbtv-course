export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, val]) => Boolean(val))
      .map(([className, val]) => className),
  ].join(' ');
}
