import { useState } from "react";

import { Button, Modal, Table } from "flowbite-react";

import { useAppDispatch, useAppSelector, RootState } from "@/store/store";

import { cartActions } from "@/store/cart/cartSlice";

import AppNavbar from "./AppNavbar";

import AppSearchBar from "./AppSearchBar/AppSearchBar";

const Navigation = () => {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useAppDispatch();

  const toggleCartModalHandler = () => setOpenModal(true);

  const resetCart = () => dispatch(cartActions.clearCart());

  const removeBookFromCart = (id: number) =>
    dispatch(cartActions.removeBookFromCart(id));

  const { items } = useAppSelector((state: RootState) => state.cart);

  return (
    <>
      <AppSearchBar
        onToggleCartModal={toggleCartModalHandler}
        cartItemsNumber={items.length}
      />
      <AppNavbar />

      {/* cart modal */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>My Cart</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
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
          <Button>Make Order</Button>
          <Button
            disabled={items.length === 0}
            color="failure"
            onClick={resetCart}
          >
            Clear Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navigation;
