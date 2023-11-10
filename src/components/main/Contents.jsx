import styled from "styled-components";
import { Button } from "@mui/material";
import {useState} from "react";
import Menu from "../../assets/main/Menu.jsx";
import Order from "../../assets/main/Order.jsx";

const Wrapper1 = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: pink;
  display: flex;
  justify-content: space-between;
`;

const Wrapper2 = styled.div`
  width: 70vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuBox = styled.div`
  width: 70vw;
  overflow-y: auto;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Wrapper3 = styled.div`
  width: 30vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OrderBox = styled.div`
  width: 30vw;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  background-color: beige;
`;


function Contents() {
    const [number, setNumber] = useState(1);
    const [name, setName] = useState("");
    const [id, setId] = useState(0);
    const [category, setCategory] = useState("");
    const [totalPrice, setTotalPrice] = useState(1000);
    const [order, setOrder] = useState([]);

    const handleMenuItemClick = (price, name, id, category) => {
        setNumber(1);
        setTotalPrice(price);
        setName(name);
        setId(id);
        setCategory(category);
    };

    function onAddCartClickHandler(id, name, number, totalPrice) {
        console.log(id, name, number, totalPrice);
        setOrder([...order, {id: id, name: name, number: number, totalPrice: totalPrice}])
    }

    return (
    <Wrapper1>
        <Wrapper2>
            <MenuBox>
                <div>
                    <Button color="success">coffee</Button>
                    <Button color="success">tea</Button>
                    <Button color="success">ade</Button>
                    <Button color="success">others</Button>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Menu onMenuItemClick={handleMenuItemClick} />
                </div>
            </MenuBox>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                    <Button
                        color="success"
                        onClick={() => {
                            number !== 1 ? setNumber(number - 1) : setNumber(1);
                            number !== 1
                                ? setTotalPrice((totalPrice * (number - 1)) / number)
                                : setTotalPrice(totalPrice);
                        }}
                    >
                        -
                    </Button>
                    <h3>{number}</h3>
                    <Button
                        color="success"
                        onClick={() => {
                            setNumber(number + 1);
                            setTotalPrice((totalPrice * (number + 1)) / number);
                        }}
                    >
                        +
                    </Button>
                </div>
                <h3>price: {totalPrice}\</h3>
                <Button color="success" onClick={() => onAddCartClickHandler(id, name, number, totalPrice)}>add</Button>
            </div>
        </Wrapper2>
        <Wrapper3>
            <OrderBox>
                {order.map((item) => (
                    <Order menu={item} key={item.id}/>
                )) }
            </OrderBox>
            <div>
                <h3>Total Price</h3>
                <Button color="success">order</Button>
            </div>
        </Wrapper3>
    </Wrapper1>
  );
}

export default Contents;
