import {useEffect} from 'react'
import {useState} from 'react';

const Main = () => {
  const[count,setCount] = useState(0);
  const[age,setAge] = useState(18);
  const[resdata,setResdata] = useState([]);

  useEffect(()=>{
    // console.log("use Effect");
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setResdata(data))
    // .then(data=>console.log(data))
    .catch(err=>console.log(err));
  },[age]);
  return (
    <div>
      <h1>Example of useEffect</h1>
      {/* <h3>Count: {count}</h3>
      <button onClick={()=>{setCount(count+1)}}>Add</button>
      <h3>Age: {age}</h3>
      <button onClick={()=>{setAge(age+1)}}>Add Age</button> */}
      <table>
       <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        </thead>
        <tbody>
        {resdata.map((rs, index) => {
          return(
          <tr>
            <td>{index+1}</td>
            <td>{rs.userId}</td>
            <td>{rs.title}</td>
            <td>{rs.body}</td>
          </tr>
          )
        })}
      </tbody>
      </table>
    </div>
  )
}

export default Main ;