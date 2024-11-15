import {useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {add,deleteData,updateData} from './Components/Redux/Slice'
const App =()=>{
   
   const[val,setVal] = useState(null)
   const[index,setIndex]= useState(null)
   const dispatch = useDispatch();
   const data = useSelector((state)=>state.counterReducer.count)

   const changeHandler=(e)=>{
         setVal(e.target.value);
         
   }
   function sendValue(){
      dispatch(add(val));
      setVal('')
   }
   const deleteValue =(i)=>{
      dispatch(deleteData(i))
   }
   const updateValue=(i)=>{
      setVal(data[i])
      setIndex(i)

   }
   const saveData = (ind)=>{
      dispatch(updateData({val,index}))
   }
   return(
      <>
      <input placeholder='enter value' onChange={changeHandler} value={val}/>
      <button onClick={()=>{sendValue()}}>Add</button>
      <button onClick={()=>{saveData()}}>Submit</button>
      {
         data && data.map((value,index)=>{
            return(
               <>
               <h1>{value}</h1>
               <button onClick={()=>{deleteValue(index)}}>Delete</button>
               <button onClick={()=>{updateValue(index)}}>Update</button>
               </>
            )
         })
      }
      </>
   )
}
export default App;