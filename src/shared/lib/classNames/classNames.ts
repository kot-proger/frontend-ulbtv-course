type Mod = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mod = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, val]) => Boolean(val))
      .map(([className, val]) => className),
  ].join(' ');
}
