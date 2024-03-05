"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { changeUserName } from "../../store/slices/counterSlice";
import { store } from "../../store/store";  
import CounterApp from "./components/counterApp";


export default function Home() {
  const dispatch = useDispatch();
const counterSlice = useSelector((store) => store.counterSlice);
const onClickHandler = () => {
  dispatch(changeUserName({ user: "Hassan" }));
};
  return (
    <div>
      <button onClick={onClickHandler}>change UserName</button>
      <h1>from Home Page-{counterSlice.userName}</h1>
      <h1> From Home Page{counterSlice.count}</h1>
      <CounterApp/>
    </div>

  );
}
