import {useEffect} from 'react'
import {useState} from 'react';

const Main = () => {
  const[age,setAge] = useState(18);
  const[resdata,setResdata] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setResdata(data))
    .catch(err=>console.log(err));
  },[age]);
  return (
    <div>
      <h1>Example of useEffect</h1>
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