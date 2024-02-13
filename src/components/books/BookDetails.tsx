import { FC } from "react";

import { Link } from "react-router-dom";

import { FaCartPlus, FaEye } from "react-icons/fa";

import { RootState, useAppDispatch, useAppSelector } from "@/store/store";

import { cartActions } from "@/store/cart/cartSlice";

import { TheCard, TheIcon } from "@/UI";

interface bookInterface {
  id: number;
  cover_image: string;
  title: string;
  price: number;
}

interface BookDetailsProps {
  book: bookInterface;
}

const BookDetails: FC<BookDetailsProps> = ({ book }) => {
  const dispatch = useAppDispatch();

  const { items } = useAppSelector((state: RootState) => state.cart);

  const isBookAlreadyInCart = items.some((item) => item.id === book.id);

  const addBookToCart = () => {
    dispatch(cartActions.addBookToCart(book));
  };

  return (
    <TheCard image={book.cover_image} isHorizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {book.title}
      </h5>
      <p className="text-justify">
        Random book description, Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Necessita
      </p>
      <div className="flex gap-4 items-center">
        {!isBookAlreadyInCart ? (
          <TheIcon
            onClick={addBookToCart}
            className="bg-primary rounded-full p-2 flex items-center justify-center cursor-pointer"
            icon={<FaCartPlus color="white" size={20} />}
          />
        ) : (
          <span className="text-red-600 text-xs font-extrabold">In cart</span>
        )}
        <Link to={`/books/${book.id}`}>
          <TheIcon
            className="bg-primary rounded-full p-2 flex items-center justify-center"
            icon={<FaEye color="white" size={20} />}
          />
        </Link>
      </div>
    </TheCard>
  );
};

export default BookDetails;
