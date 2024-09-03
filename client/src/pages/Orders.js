import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../redux/actions";
import OrderSummary from "../components/OrderSummary";
import { USER_LOGIN_SUCCESS } from "../redux/types";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    try {
      let data = localStorage.getItem("userInfo");
      console.log("dss", data);

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    } catch (err) {
      console.log(err, "error in initila");
    }
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders.</p>
      ) : (
        orders.map((order) => <OrderSummary key={order._id} order={order} />)
      )}
    </div>
  );
};

export default Orders;
