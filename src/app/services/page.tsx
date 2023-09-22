import Image from "next/image";
import customerServices from "@/customer-services.png";

export default function ServicesPage() {
  const data = [
    {
      title: "Ultra fast & secure",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, dolor! Nihil harum quos unde asperiores mollitia libero dolorem labore voluptatum!",
    },
    {
      title: "Ultra fast & secure",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, dolor! Nihil harum quos unde asperiores mollitia libero dolorem labore voluptatum!",
    },
    {
      title: "Ultra fast & secure",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, dolor! Nihil harum quos unde asperiores mollitia libero dolorem labore voluptatum!",
    },
  ];
  return (
    <section className="grid auto-cols-auto lg:grid-cols-[50%_50%] h-screen mb-8">
      <figure className="h-full flex justify-center items-center">
        <Image src={customerServices} alt="customer" />
      </figure>

      <article className="h-full flex justify-center items-center flex-col">
        <h2 className="font-bold font-inter text-4xl mb-4">
          Nuestro servicios cuenta con
        </h2>
        <article>
          <ul>
            {data.map((dt) => (
              <li className="px-8 py-2">
                <span></span>
                <span>
                  <b>{dt.title}</b>
                  <blockquote cite="#">{dt.description}</blockquote>
                </span>
              </li>
            ))}
          </ul>
        </article>
      </article>
    </section>
  );
}
