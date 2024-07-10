import { Container, Row, Image, Button } from 'react-bootstrap'
import "../../styles/content.css"
import imageNike from "../../assets/images/pegasus-41-blueprint-road-running-shoes-9ln3lK.png"

export const Content = () => {
    return (
        <div className='container bg-white'>
            <Container fluid="md" className='bg-white'>
                <div className='container-lg'>
                    <Row>
                        <Image className='image'
                            src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/e1157eee-765f-4565-b430-a881cacb64b1/nike-just-do-it.png"
                        />
                        <a href="#" className='text-decoration-none text-black'>
                            <div className='p-3 justify-content-center align-items-center'>
                                <h3 className='text-center text-uppercase font-weight-bold text-sm-left fs-2 '>
                                    WIN ON AIR
                                </h3>
                                <p className='text-center d-none d-sm-block text-bold d-'>
                                    Meet the next generation of Nike Air.
                                    Engineered to the exact specifications of championship athletes.
                                </p>
                                <div className='text-center justify-content-center'>
                                    <button type="button" className="btn btn-outline-secondary bg-black text-white rounded-pill px-4">
                                        Shop Air
                                    </button>
                                </div>
                            </div>
                        </a>
                    </Row>
                    <Row className='pt-4'>
                        <h3 className='mb-3'>Shop Air</h3>
                        <div className='col-4 '>
                            <div>
                                <a href="#" className='text-decoration-none text-black'>
                                    <Image src={imageNike} className="card-img-top" alt="..." />
                                    <div className="card-body pt-4">
                                        <h5 className="card-text">Nike Pegasus
                                        </h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='col-4 border-0'>
                            <div >
                                <a href="#" className='text-decoration-none text-black'>
                                    <Image src={imageNike} className="card-img-top" alt="..." />
                                    <div className="card-body pt-4">
                                        <h5 className="card-text">Nike G.T. Hustle 3
                                        </h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='col-4 '>
                            <div>
                                <a href="#" className='text-decoration-none text-black'>
                                    <Image src={imageNike} className="card-img-top" alt="..." />
                                    <div className="card-body pt-4">
                                        <h5 className="card-text">Nike Alphafly 3
                                        </h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Row>

                    <Row className='row'>
                        <h3 className='mb-3'>Shop Air</h3>
                        <div className='col-6'>
                            <div>
                                <a href="#" className='text-decoration-none text-black'>
                                    <Image src={imageNike} className="card-img-top" alt="..." />
                                    <div className="card-body pt-4">
                                        <h5 className="card-text">Nike Pegasus
                                        </h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='col-6 border-0'>
                            <div >
                                <a href="#" className='text-decoration-none text-black'>
                                    <Image src={imageNike} className="card-img-top" alt="..." />
                                    <div className="card-body pt-4">
                                        <h5 className="card-text">Nike G.T. Hustle 3
                                        </h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Row>
                </div>
            </Container>
        </div>
    )
}


