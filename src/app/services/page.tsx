import Image from "next/image";
import customerServices from "@/customer-services.png";

export default function ServicesPage() {
  return (
    <section className="grid auto-cols-auto lg:grid-cols-[50%_50%] h-screen">
      <figure className="h-full flex justify-center items-center">
        <Image src={customerServices} alt="customer" />
      </figure>

      <article>
        <h2>Nuestro servicios cuenta con</h2>
      </article>
    </section>
  );
}
