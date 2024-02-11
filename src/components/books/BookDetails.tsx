import { FaCartPlus, FaEye } from "react-icons/fa";
import { TheCard, TheIcon } from "@/UI";

const BookDetails = () => {
  return (
    <TheCard image="https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <div className="flex gap-4">
        <TheIcon
          className="bg-primary rounded-full p-2 flex items-center justify-center"
          icon={<FaCartPlus color="white" size={20} />}
        />
        <TheIcon
          className="bg-primary rounded-full p-2 flex items-center justify-center"
          icon={<FaEye color="white" size={20} />}
        />
      </div>
    </TheCard>
  );
};

export default BookDetails;
