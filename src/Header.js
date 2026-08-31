import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Toast} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Header(){
      const location= useLocation();
      const {id,name} = location.state;
    return(
      <div>
            Id is {id} <br/>
            Name is {name}
            <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
      <h1> This is Header </h1>
      <Toast>
            <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
      </div>
    );
}

export default Header;