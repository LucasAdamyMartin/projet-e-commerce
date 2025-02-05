type NavigationPartProps = { text: string, listElementClasses? : string };
export function NavigationPart({ text, listElementClasses }: Readonly<NavigationPartProps>) {
  return (
  <li className={listElementClasses}>{text}</li>
  )
}