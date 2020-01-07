import React from "react";
import Item from "./item";
import { WrapperConsumer } from "../../../store";
import "./styles.css";
const items = ({ context: { carItems } }) => {
   return (
    <div>
      {carItems.map((item,i) => {
        return <Item datos={item} index={i} />;
      })}
    </div>
  );
};

export default WrapperConsumer(items);
