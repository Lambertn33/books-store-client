import { Link } from "react-router-dom";

import { Button } from "flowbite-react";

const Home = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Find a good book for your health.
            </h2>
            <p className="mb-8 font-light text-gray-500 text-sm dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              praesentium a inventore repellat nisi sunt ad! Ratione sequi
              assumenda recusandae eos cum hic sunt, eligendi at veniam voluptas
              voluptatum maiores! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Maiores, veniam hic. Quo, nostrum facere eius
              reiciendis voluptates veritatis beatae dolor iusto reprehenderit
              adipisci architecto quae ad sit esse aut exercitationem.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button pill as={Link} to="/auth">
                Get Started
              </Button>
              <Button outline pill as={Link} to="/books">
                Available Books
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0e7470] rounded-lg mb-16">
        <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-white sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Newest available books
            </h2>
            <p className="mb-4 text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              blanditiis laborum, libero fuga ut ullam error debitis quam hic
              animi veniam ratione dignissimos sint voluptatibus ex quia eius
              assumenda totam! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cumque consectetur quo corrupti exercitationem
              ipsam sit quod rerum tenetur dolore necessitatibus, eius autem
              quas asperiores magni dolorem repellendus ipsum voluptatibus
              fugiat.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;