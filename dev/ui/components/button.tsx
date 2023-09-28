export type TyPropsButton = { title: string };

export function UIButton({ title }: TyPropsButton) {
  return <button className="p-4 bg-black rounded text-white">{title}</button>;
}
