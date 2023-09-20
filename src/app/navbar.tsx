import docs from "@/docs/docs.json";

export default function Navbar() {
  return (
    <nav className="px-16 lg:px-36 flex flex-col lg:flex-row justify-between items-center gap-4">
      <div>
        <h2 className="text-purple uppercase font-bold text-xl">{docs.title}</h2>
      </div>
      <div className="flex-none lg:flex-1 flex justify-end lg:px-16">
        <ul className="flex gap-2 items-center">
          {docs.navigations.map((lnk) => (
            <li key={lnk.id}>
              <a href={lnk.href} className="text-xl lg:text-base text-black hover:text-purple">
                {lnk.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:block">
        <a href="#" className="px-4 rounded bg-purple text-white py-4">FREE TRIAL</a>
      </div>
    </nav>
  );
}
