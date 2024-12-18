import Banner from "@/components/banner";
import Hero from "@/components/Hero";
import Progress from "@/components/Progress";
import Button from "@/components/Button";
import { services } from "@/constants/data";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <section className="relative bg-green-50 pb-[40px] ">
        <Progress />
        <div className="container py-[100px] mx-auto flex gap-4 font-instrumentSans space-x-10 max-lg:space-x-0 max-lg:py-2 max-lg:flex-col-reverse max-md:px-6">
          <div className="w-[70%] max-lg:w-auto max-lg:mt-4 ">
            <div>
              <h4 className="text-md font-bold">Our Services</h4>
              <h1 className="text-4xl font-bold">
                Professional Services We Offer
              </h1>
              <p className="text-lg">
                We offer a variety of services for your home or business, and
                offer discounts for customers who purchase multiple services.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-10 max-lg:grid-cols-1">
              {services.map(({ label, id, description }) => (
                <div
                  key={id}
                  className="col-span-1 bg-white px-8 py-8 shadow-md rounded-lg"
                >
                  <h3 className="text-center font-bold text-2xl">{label}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md flex-1 bg-white h-fit px-6 py-4 shadow-md">
            <h2 className="text-2xl font-semibold">Get a Free Quote</h2>
            <p className="text-sm text-gray-400">
              All quotes are estimates and are not guarantees of the final
              price.
            </p>
            <form action="">
              <div className="flex flex-col my-3">
                <label htmlFor="" className="text-lg font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="bg-gray-100 px-4 py-2 rounded-md mt-2"
                />
              </div>
              <div className="flex flex-col my-3">
                <label htmlFor="" className="text-lg font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Smith"
                  className="bg-gray-100 px-4 py-2 rounded-md mt-2"
                />
              </div>
              <div className="flex flex-col my-3">
                <label htmlFor="" className="text-lg font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john.smith@gmail.com"
                  className="bg-gray-100 px-4 py-2 rounded-md mt-2"
                />
              </div>
              <div className="flex flex-col my-3">
                <label htmlFor="" className="text-lg font-semibold">
                  First Name
                </label>
                <textarea
                  placeholder="Describe the project details..."
                  className="bg-gray-100 px-4 py-2 rounded-md mt-2"
                />
              </div>
              <Button>Submit</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
