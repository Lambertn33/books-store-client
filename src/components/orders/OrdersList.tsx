import { FC } from "react";

import { TheBadge } from "@/UI";

import { Table } from "flowbite-react";

interface OrderInterface {
  id: number;
  amount: number;
  status: "ORDERED" | "CANCELED";
  userId: number;
  createdAt: string;
}

interface ordersListProps {
  orders: OrderInterface[];
  onFetchSingleOrder: (orderId: number) => Promise<void>;
  onCancelOrder: (orderId: number, orderPoints: number) => Promise<void>;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

const OrdersList: FC<ordersListProps> = ({ orders, onFetchSingleOrder, onCancelOrder }) => {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Ordered date</Table.HeadCell>
        <Table.HeadCell>Order amount</Table.HeadCell>
        <Table.HeadCell>Order status</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {orders.map((order) => (
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={order.id}>
            <Table.Cell>
              <span className="font-extrabold text-black">
                {formatDate(order.createdAt)}
              </span>
            </Table.Cell>
            <Table.Cell>{order.amount} points</Table.Cell>
            <Table.Cell>
              <span className="flex">
                <TheBadge
                  label={order.status}
                  color={order.status === "CANCELED" ? "failure" : "success"}
                />
              </span>
            </Table.Cell>
            <Table.Cell>
              <div className="flex gap-2">
                <span onClick={() => onFetchSingleOrder(order.id)} className="font-medium text-green-600 bg-green-200 py-2 px-3 rounded-md cursor-pointer">
                  More
                </span>
                {order.status === "ORDERED" && (
                  <span onClick={() => onCancelOrder(order.id, order.amount)} className="font-medium text-red-600 bg-red-200 py-2 px-3 rounded-md cursor-pointer">
                    Cancel Order
                  </span>
                )}
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default OrdersList;
