import { useEffect } from "react";

import { FaArrowLeft } from "react-icons/fa";

import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/store/store";

import { fetchSingleBook } from "@/store/books/bookSlice";

import { RootState } from "@/store/store";

import { TheCard, TheIcon, TheSpinner, TheBadge } from "@/UI";

import { useParams } from "react-router-dom";

interface Params {
  bookId: string;
}

const Book = () => {
  const { bookId } = useParams<Params>();

  const dispatch = useAppDispatch();

  const { book, error, status } = useAppSelector(
    (state: RootState) => state.book
  );

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSingleBook(bookId));
    };

    fetchData();
  }, [dispatch, bookId]);

  if (error) return <p>Error</p>;

  if (status === "idle" || status === "loading")
    return (
      <div className="flex justify-center items-center">
        <TheSpinner />
      </div>
    );

  return (
    <div>
      <div className="mb-8 w-full flex items-center">
        <Link to={"/books"}>
          <TheIcon icon={<FaArrowLeft size={24} />} className="" />
        </Link>
        <div className="flex-grow text-center">
          <span className="text-xl md:text-4xl font-bold underline">
            {book?.title}
          </span>
        </div>
      </div>
      <div className="justify-center flex">
        <TheCard
          image={book?.cover_image}
          isHorizontal={false}
          cardClasses="w-[100%] md:w-[500px] h"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {book?.title}
          </h5>
          <p className="text-justify">
            Random book description, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Necessitatibus soluta explicabo earum accusamus
            quod nihil eius numquam et culpa animi, officiis aliquid, hic
            nesciunt aspernatur non ab maiores impedit ducimus!
          </p>

          <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      Writer
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {book?.writer}
                  </div>
                </div>
              </li>
            </ul>
            <div className="flex gap-3">
              {book?.tags.map((tag) => (
                <TheBadge color="success" label={tag} key={tag} />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${book?.price}
            </span>
            <a
              href="#"
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add to cart
            </a>
          </div>
        </TheCard>
      </div>
    </div>
  );
};

export default Book;
