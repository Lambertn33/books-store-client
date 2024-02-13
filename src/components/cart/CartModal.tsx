import { IoMdClose } from "react-icons/io";

import { Button, Modal, Table } from "flowbite-react";

import { useHistory } from "react-router-dom";

import { useAppDispatch, useAppSelector, RootState } from "@/store/store";

import { cartActions } from "@/store/cart/cartSlice";

import { TheIcon } from "@/UI";

import { makeOrder } from "@/api/orders";

import { authActions } from "@/store/auth/authSlice";

interface CartModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  makeOrderError: string;
  setMakeOrderError: (error: string) => void;
}

interface orderInterface {
  id: number;
  amount: number;
  status: "ORDERED" | "CANCELED";
  userId: number;
  createdAt: string;
}

interface ErrorResponse {
  response: {
    data: {
      error: string;
    };
  };
}

const CartModal: React.FC<CartModalProps> = ({
  openModal,
  setOpenModal,
  makeOrderError,
  setMakeOrderError,
}) => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state: RootState) => state.cart);
  const { isAuthenticated, user } = useAppSelector(
    (state: RootState) => state.auth
  );
  const history = useHistory();

  const makeOrderHandler = async () => {
    try {
      const booksIds = items.map((item) => item.id);

      const { data, status } = await makeOrder(user!.id, booksIds);

      if (status === 200) {
        setOpenModal(false);

        const newOrder = data.order as orderInterface;

        dispatch(
          authActions.updateUserPoints({
            points: newOrder.amount,
            type: "ORDERMAKE",
          })
        );

        dispatch(cartActions.clearCart());

        history.replace("/orders");
      }
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      setMakeOrderError(errorResponse.response.data.error);
    }
  };

  const removeBookFromCart = (id: number) =>
    dispatch(cartActions.removeBookFromCart(id));
  const resetCart = () => dispatch(cartActions.clearCart());

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>My Cart</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          {makeOrderError && (
            <div className="flex justify-center items-center gap-2">
              <span className="text-red-600 font-semibold">
                {makeOrderError}
              </span>
              <TheIcon
                className="cursor-pointer"
                onClick={() => setMakeOrderError("")}
                icon={<IoMdClose color="red" size={20} />}
              />
            </div>
          )}
          {items.length ? (
            <div className="overflow-x-auto">
              <Table>
                <Table.Head>
                  <Table.HeadCell>Book Title</Table.HeadCell>
                  <Table.HeadCell>Book Price(in points)</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {items.map((item) => (
                    <Table.Row
                      key={item.id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {item.title}
                      </Table.Cell>
                      <Table.Cell>{item.price} points</Table.Cell>
                      <Table.Cell>
                        <span
                          onClick={() => removeBookFromCart(item.id)}
                          className="font-medium text-red-600 cursor-pointer"
                        >
                          Remove
                        </span>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          ) : (
            <div className="flex justify-center">
              <span className="font-bold text-2xl">Your cart is empty</span>
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button disabled={!isAuthenticated} onClick={makeOrderHandler}>
          {isAuthenticated ? "Make Order" : "Login to make order"}
        </Button>
        <Button
          disabled={items.length === 0}
          color="failure"
          onClick={resetCart}
        >
          Clear Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
