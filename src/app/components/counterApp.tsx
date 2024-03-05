import { UseSelector,useDispatch, useSelector } from "react-redux";
import { increament,decreament } from "../../../store/slices/counterSlice";
import { store } from "../../../store/store";
export default function CounterApp(){
    const dispatch=useDispatch()
    const count=useSelector((store)=>store.counterSlice.count)
    const onPlusHandler=()=>{
        dispatch(increament())
    }    
    const onMinusHandler=()=>{
        dispatch(decreament())
    }
    return(
        <div>
        <button onClick={onPlusHandler}>+</button>
        {count}
        <button onClick={onMinusHandler}>-</button>
        </div>
    )
}