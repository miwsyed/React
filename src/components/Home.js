import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Jumbotron,Container,Button } from 'reactstrap';
import 'izitoast/dist/css/iziToast.min.css';
const iziToast= require('izitoast');




const Home = () => {

    // const notify = () => iziToast.success({
    //     title: 'OK',
    //     message: 'Successfully inserted record!',
    // });
        
    
    //   const notify1 = () => iziToast.warning({
    //     title: 'Caution',
    //     message: 'Wrong Password',
    // });
    

    return(
        <div>
            <Jumbotron className="text-center">
                <h1 className="display-3">LearningReact with miwsyed</h1>
                <p>
                    This is developed by miwsyed the front end is reactjs and backend is yet undecided.
                    Finally I have got my hands on it.
                </p>
            </Jumbotron>
            <hr />
            {/* <Container>
            <Button onClick={notify}  color="success" outline >Login correct!</Button>
            <hr />
            <Button onClick={notify1}  color="danger" outline >Login Incorrect !</Button>

              <ToastContainer />
            </Container> */}

        </div>

    );
}


export default Home;





