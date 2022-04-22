// import React, {useState} from 'react';
// import {Col, Container, Row} from "react-bootstrap";
//
// const LoginStepOne = () => {
//
//     //STATE FOR THE STEPS
//     const [step, setStep] = useState(1);
//     //STATE FOR THE FORMS
//     const [formData, setFormData] = useState({
//         firstName : "",
//         lastName : "",
//         age : "",
//         email : "",
//         password : ""
//     })
//
//     //FUNCTION WILL GO TO THE NEXT STEP
//     const nextStep = () => {
//         setStep(step + 1);
//     }
//
//     //FOR GOING BACK A STEP
//     const prevStep = () => {
//         setStep(step - 1);
//     }
//
//     //HANDLING THE DATA INFO
//     const loginHandler = input => e => {
//         const {value} = e.target;
//
//         //UPDATING DATA STATES WHEN GOING BACK AND THEN ADDING NEW VARIABLES
//         setFormData(prevState => ({
//             ...prevState,
//                 [input]: value
//         }));
//     }
//
//
//             switch(step) {
//
//                case 1:
//                    return (
//                      <section>
//                          <Container>
//                              <Row>
//                                  <Col>
//                                      <LoginStepOne nextStep={nextStep} loginHandler={loginHandler} values={formData}/>
//                                  </Col>
//                              </Row>
//                          </Container>
//                      </section>
//                     );
//                 case 2:
//                     return (
//                         <section>
//                             <Container>
//                                 <Row>
//
//
//                                 </Row>
//                             </Container>
//                         </section>
//                     )
//             }
//
// };
//
// export default LoginStepOne;
