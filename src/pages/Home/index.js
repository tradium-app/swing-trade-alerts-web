import React, { useState } from 'react'
import { Container, Row, Col, Button, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Media, Table, Badge } from 'reactstrap'
import { Link } from 'react-router-dom'

import modalimage1 from '../../assets/images/product/img-7.png'
import modalimage2 from '../../assets/images/product/img-4.png'

// Pages Components
import WelcomeComp from './WelcomeComp'
import ActivityComp from './ActivityComp'

import avatar3 from '../../assets/images/users/avatar-3.jpg'
import Poll from './Poll/Poll'

const Dashboard = (props) => {
    const [modal, setmodal] = useState(false)

    return (
        <React.Fragment>
            <div className="page-content">
                <Container>
                    <Row>
                        <Col xl="8">
                            <Card>
                                <CardBody>
                                    <div className="media mb-2">
                                        <Link to="/profile">
                                            <img className="avatar-sm img-thumbnail rounded-circle m-2" src={avatar3} alt="" />
                                        </Link>
                                        <div className="media-body">
                                            <p className="text-muted font-size-12 mb-0">Suraj Shrestha</p>
                                            <p className="text-muted font-size-10">May 16 (9 hours ago)</p>
                                            <Poll />
                                            <div>
                                                <Badge pill className="font-size-14 p-1 m-1">
                                                    Java <div className="font-size-10 d-inline-block">(8+ yrs)</div>
                                                </Badge>
                                                <Badge pill className="font-size-14 p-1 m-1">
                                                    Redux <div className="font-size-10 d-inline-block">(2+ yrs)</div>
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4">
                            <WelcomeComp />

                            <Card className="mini-stats-wid">
                                <CardBody>
                                    <Media>
                                        <Media body>
                                            <p className="text-muted font-weight-medium">Balance</p>
                                            <h4 className="mb-0">$200</h4>
                                        </Media>
                                        <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                            <Link to="/wallet">
                                                <span className="avatar-title">
                                                    <i className="bx bx bx-dollar-circle font-size-24"></i>
                                                </span>
                                            </Link>
                                        </div>
                                    </Media>
                                </CardBody>
                            </Card>
                            <ActivityComp />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Modal
                isOpen={modal}
                role="dialog"
                autoFocus={true}
                centered={true}
                className="exampleModal"
                tabindex="-1"
                toggle={() => {
                    setmodal(!modal)
                }}
            >
                <div className="modal-content">
                    <ModalHeader
                        toggle={() => {
                            setmodal(!modal)
                        }}
                    >
                        Order Details
                    </ModalHeader>
                    <ModalBody>
                        <p className="mb-2">
                            Product id: <span className="text-primary">#SK2540</span>
                        </p>
                        <p className="mb-4">
                            Billing Name: <span className="text-primary">Neal Matthews</span>
                        </p>

                        <div className="table-responsive">
                            <Table className="table table-centered table-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <div>
                                                <img src={modalimage1} alt="" className="avatar-sm" />
                                            </div>
                                        </th>
                                        <td>
                                            <div>
                                                <h5 className="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                                                <p className="text-muted mb-0">$ 225 x 1</p>
                                            </div>
                                        </td>
                                        <td>$ 255</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div>
                                                <img src={modalimage2} alt="" className="avatar-sm" />
                                            </div>
                                        </th>
                                        <td>
                                            <div>
                                                <h5 className="text-truncate font-size-14">Hoodie (Blue)</h5>
                                                <p className="text-muted mb-0">$ 145 x 1</p>
                                            </div>
                                        </td>
                                        <td>$ 145</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <h6 className="m-0 text-right">Sub Total:</h6>
                                        </td>
                                        <td>$ 400</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <h6 className="m-0 text-right">Shipping:</h6>
                                        </td>
                                        <td>Free</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <h6 className="m-0 text-right">Total:</h6>
                                        </td>
                                        <td>$ 400</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            type="button"
                            color="secondary"
                            onClick={() => {
                                setmodal(!modal)
                            }}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default Dashboard
