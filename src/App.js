import React, {useState} from 'react'

import Icon from './components/Icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Card,CardBody,Button,Col,Row,Container} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const itemArray= new Array(9).fill("empty")

const App = ()=>  {



const [isCross,setIsCross] = useState(false)
const [winMsg,setWinMsg] = useState('')


// resposible to reload the game
const reloadGame = ()=> {
  setIsCross(false)
  setWinMsg("")
  itemArray.fill("empty",0,9)
}

// check the winner
const checkIsWinner = () => {
  if (
    itemArray[0] === itemArray[1] &&
    itemArray[0] === itemArray[2] &&
    itemArray[0] !== "empty"
  ) {
    setWinMsg(`${itemArray[0]} Wins!`);
  } else if (
    itemArray[3] !== "empty" &&
    itemArray[3] === itemArray[4] &&
    itemArray[4] === itemArray[5]
  ) {
    setWinMsg(`${itemArray[3]} Wins!`);
  } else if (
    itemArray[6] !== "empty" &&
    itemArray[6] === itemArray[7] &&
    itemArray[7] === itemArray[8]
  ) {
    setWinMsg(`${itemArray[6]} Wins!`);
  } else if (
    itemArray[0] !== "empty" &&
    itemArray[0] === itemArray[3] &&
    itemArray[3] === itemArray[6]
  ) {
    setWinMsg(`${itemArray[0]} Wins!`);
  } else if (
    itemArray[1] !== "empty" &&
    itemArray[1] === itemArray[4] &&
    itemArray[4] === itemArray[7]
  ) {
    setWinMsg(`${itemArray[1]} Wins!`);
  } else if (
    itemArray[2] !== "empty" &&
    itemArray[2] === itemArray[5] &&
    itemArray[5] === itemArray[8]
  ) {
    setWinMsg(`${itemArray[2]} Wins!`);
  } else if (
    itemArray[0] !== "empty" &&
    itemArray[0] === itemArray[4] &&
    itemArray[4] === itemArray[8]
  ) {
    setWinMsg(`${itemArray[0]} Wins!`);
  } else if (
    itemArray[2] !== "empty" &&
    itemArray[2] === itemArray[4] &&
    itemArray[4] === itemArray[6]
  ) {
    setWinMsg(`${itemArray[2]} Wins!`);
  }
}

// responsible for changing item ( after clicking )
const changeItem = (itemNumber)=>{
  if(winMsg){
    return toast('🥳 ' + winMsg,{type:"success"})
  }

  if(itemArray[itemNumber] === "empty"){
    itemArray[itemNumber] = isCross ? "cross" : "circle"
    setIsCross(!isCross)
  }else{
    return toast.error('⚠️ Already Filled ⚠️', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      });
  }

  checkIsWinner();

}
  

  return (
    
      <Container className="p-5">
        <h1>Tic • Tac • Toe </h1>
        <p>
         <form action="https://github.com/kingk619" target="_blank">
         <button className="butt" type="submit" >Github <i className="fa fa-github"></i></button> 
         </form>
        </p>
        <hr/><hr/>
        <ToastContainer position="bottom-center"/>
        <Row>
          <Col md={6} className="offset-md-3">

              { winMsg ? (
                <div className ="mb-2 mt-2">
                  <h1 className="text-success text-uppercase text-center">
                    {winMsg}
                  </h1>  
                  <Button className="btn" color="success" block onClick={reloadGame} >
                    Reset the Game
                  </Button>
                </div>
              ) : (
                <h1 className="text-center text-warning">
                  {isCross ? "❌'s" : "⭕'s"} turns 
                     
                </h1>
              )}
        

              <div className="grid">

                {itemArray.map((item,index)=>(
                  <Card color="warning" onClick={()=> changeItem(index)}>
                    <CardBody className="box animate">
                      <Icon name={item} />
                    </CardBody>
                  </Card>
                ))}

              </div>

          </Col>
        </Row>
      </Container>

  );
}

export default App;
