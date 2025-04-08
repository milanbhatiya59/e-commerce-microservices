import { useEffect, useState } from "react";
import { getRestaurant } from "../../api/restaurant/index";
import { getMenu } from "../../api/menu/index";
import { getOrder } from "../../api/order/index";
import { getDelivery } from "../../api/delivery/index";

const Home = () => {
  const [restaurant, setRestaurant] = useState();
  const [menu, setMenu] = useState();
  const [order, setOrder] = useState();
  const [delivery, setDelivery] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const restaurantData = await getRestaurant();
      setRestaurant(restaurantData);
      const menuData = await getMenu();
      setMenu(menuData);
      const orderData = await getOrder();
      setOrder(orderData);
      const deliveryData = await getDelivery();
      setDelivery(deliveryData);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <div>
        <p>{restaurant}</p>
        <p>{menu}</p>
        <p>{order}</p>
        <p>{delivery}</p>
      </div>
    </>
  );
};

export default Home;
