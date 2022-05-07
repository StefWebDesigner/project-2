// import React from 'react';
// import {Card, Col, Row} from "react-bootstrap";
// import {Fragment} from "react";
//
// const AdminUserViewer = (userViewWindow) => {
//     return (
//         <>
//
//             <section>
//
//                 <Row>
//                     <h7 className="admin-sub-title"> View User</h7>
//                 </Row>
//
//                 { userViewWindow ?
//
//                     <Fragment>
//                         <Card className="admin-email-card">
//
//                             <Card.Body key={userViewWindow.id}>
//                                 <h3 className="admin-email-body">{userViewWindow.Id}</h3>
//                                 <h3 className="admin-email-body">{userViewWindow.firstname}</h3>
//                                 <h3 className="admin-email-body">{userViewWindow.lastname}</h3>
//                                 <h3 className="admin-email-body">{userViewWindow.username}</h3>
//                                 <h3 className="admin-email-body">{userViewWindow.accountTypes}</h3>
//                                 <h3 className="admin-email-body">{userViewWindow.email}</h3>
//                                 <h3 className="admin-email-body">{userViewWindow.password}</h3>
//                                 <h3 className="admin-email-body">{userViewWindow.createdDate}</h3>
//
//                             </Card.Body>
//                             <Card.Footer className="admin-email-footer">
//
//                             </Card.Footer>
//                         </Card>
//                     </Fragment>
//                     :
//                     <aside>
//                         <Row>
//                             <Col xs={12}>
//                                 <p className="text-center"> No User Selected</p>
//                             </Col>
//                         </Row>
//                     </aside>
//                 }
//             </section>
//
//         </>
//     );
// };
//
// export default AdminUserViewer;