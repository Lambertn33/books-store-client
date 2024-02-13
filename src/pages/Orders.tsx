import { useEffect, useState } from "react";

import { getMyOrders, getSingleOrder, cancelOrder } from "@/api/orders";

import { useAppSelector, useAppDispatch } from "@/store/store";

import { authActions } from "@/store/auth/authSlice";

import OrdersList from "@/components/orders/OrdersList";

import { TheSpinner } from "@/UI";

import { Modal, Table } from "flowbite-react";

interface orderInterface {
  id: number;
  amount: number;
  status: "ORDERED" | "CANCELED";
  userId: number;
  createdAt: string;
}

interface orderBook {
  cover_image: string;
  price: number;
  title: string;
  writer: string;
  tags: string[];
}

interface orderBooksInterface extends orderInterface {
  books: { book: orderBook }[];
}

const Orders = () => {
  const dispatch = useAppDispatch();

  const [orders, setOrders] = useState<orderInterface[]>([]);

  const [isFetchingAllOrders, setIsFetchingAllOrders] = useState(true);

  const [fetchedOrder, setFetchedOrder] = useState<orderBooksInterface | null>(
    null
  );

  const [openModal, setOpenModal] = useState(false);

  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const fetchMyOrders = async () => {
      const response = (await getMyOrders(user!.id)) as orderInterface[];
      setOrders(response);
      setIsFetchingAllOrders(false);
    };
    fetchMyOrders();
  }, [user]);

  const fetchSingleOrderHandler = async (orderId: number) => {
    const response = (await getSingleOrder(
      user!.id,
      orderId
    )) as orderBooksInterface;
    setFetchedOrder(response);
    setOpenModal(true);
  };

  const cancelOrderHandler = async (orderId: number, orderPoints: number) => {
    const response = await cancelOrder(user!.id, orderId);
    if (response.status === 200) {
      dispatch(
        authActions.updateUserPoints({
          points: orderPoints,
          type: "ORDERCANCELED",
        })
      );
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="mb-4 flex justify-center">
        <span className="text-2xl font-bold">My Orders History</span>
      </div>
      {isFetchingAllOrders ? (
        <div className="flex justify-center">
          <TheSpinner />
        </div>
      ) : orders.length > 0 ? (
        <OrdersList
          orders={orders}
          onCancelOrder={cancelOrderHandler}
          onFetchSingleOrder={fetchSingleOrderHandler}
        />
      ) : (
        <div className="flex justify-center">
          <span className="text-center text-red-600">
            Dear <span className="font-bold">{user?.username}</span>, You have
            no orders Yet
          </span>
        </div>
      )}

      {/* Order details Modal */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Order Details</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="overflow-x-auto">
              <Table>
                <Table.Head>
                  <Table.HeadCell>Book Title</Table.HeadCell>
                  <Table.HeadCell>Book Price(in points)</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {fetchedOrder?.books.map((item) => (
                    <Table.Row
                      key={item.book.title}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {item.book.title}
                      </Table.Cell>
                      <Table.Cell>{item.book.price} points</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <span className="font-bold text-xl">
            Total: {fetchedOrder?.amount} points
          </span>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Orders;
