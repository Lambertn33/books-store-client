import { useEffect, useState } from "react";

import { getMyOrders } from "@/api/orders";

import { useAppSelector } from "@/store/store";

import OrdersList from "@/components/orders/OrdersList";
import { TheSpinner } from "@/UI";

interface orderInterface {
  id: number;
  amount: number;
  status: "ORDERED" | "CANCELED";
  userId: number;
  createdAt: string;
}

const Orders = () => {
  const [orders, setOrders] = useState<orderInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const fetchMyOrders = async () => {
      const response = (await getMyOrders(user!.id)) as orderInterface[];
      setOrders(response);
      setIsLoading(false);
    };
    fetchMyOrders();
  }, [user]);

  return (
    <div className="overflow-x-auto">
      <div className="mb-4 flex justify-center">
        <span className="text-2xl font-bold">My Orders</span>
      </div>
      {isLoading ? (
        <div className="flex justify-center">
          <TheSpinner />
        </div>
      ) : orders.length > 0 ? (
        <OrdersList orders={orders} />
      ) : (
        <div className="flex justify-center">
          <span className="text-center text-red-600">
            Dear <span className="font-bold">{user?.username}</span>, You have
            no orders Yet
          </span>
        </div>
      )}
    </div>
  );
};

export default Orders;
