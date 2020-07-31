import React, { useState, useEffect } from 'react';
import compass from '../compass.png'
import '../App.css';
import { Nav, Accordion, ButtonGroup, Button, Card, Jumbotron, Container, Row, Col } from 'react-bootstrap'
import boat from '../pictures/pirate.png'
import skull from '../pictures/death.png'
import wheel from '../pictures/rudder.png'
import sword from '../pictures/sword.png'

const HeaderRow = ({ id, contents, location }) => {
  return (
    <Row id={id} className="mb-3 justify-content-md-center">
      <Col sm={12} md={6} className="pirata rounded bg-dark p-2">
        <h1 style={{ fontSize: '4em' }} className="text-light">{contents}</h1>
        <h6 style={{ fontSize: '1.5em' }} className="rowdies text-light">{location}</h6>
      </Col>
    </Row>
  )
}

const colors = {
  blue: '#26648E',
  green: '#61AF25',
  yellow: '#B5DC6C',
  cream: '#ffE3BE',
  red: '#E65C4F'
}

const Icon = ({ src }) => {
  return (<img style={{ color: 'white', height: '40px', width: '40px'}} src={src}></img>)
}

function Home() {
  const [visibleMain, setVisibleMain] = useState(false)
  const [wordOne, setWordOne] = useState("one")
  const [wordTwo, setWordTwo] = useState("two")
  const [wordThree, setWordThree] = useState("three")
  const [wordFour, setWordFour] = useState("four")
  const [password, setPassword] = useState(" wheel ship skull sword")
  const [userInput, setUserInput] = useState("")
  const [increment, setIncrement] = useState(0)

  const clearInput = (time) => {
    setTimeout(() => {
      setUserInput('')
      setIncrement(0)
    }, time)
  }

  const handlePasswordButtonPress = async (button) => {
    setIncrement(increment + 1)
    console.log(increment)
    if(increment > 3){
      setUserInput('try again')
      clearInput(1000)
    } else {
      setUserInput(userInput + ` ${button}`)
    }
  }

  return (
    <div className="App">
    <Container>
    {userInput !== password &&
      <>
        <Row style={{ marginTop: '10em' }} className="mx-auto ml-2">
          <Col className="mx-auto">
            <div className="rounded p-3 mt-3">
              <ButtonGroup size="lg" className="mb-2">
                <Button onClick={() => handlePasswordButtonPress("ship")} data_value={wordOne} className="btn-warning" variant="outline-dark"><img style={{ color: 'white', height: '40px', width: '40px'}} src={boat}></img></Button>
                <Button onClick={() => handlePasswordButtonPress("skull")} value={wordTwo} className="btn-danger" variant="outline-dark"><Icon src={skull}/></Button>
                <Button onClick={() => handlePasswordButtonPress("wheel")} value={wordThree} variant="outline-dark" className="btn-info"><Icon src={wheel}/></Button>
                <Button onClick={() => handlePasswordButtonPress("sword")} value={wordFour} className="btn-success" variant="outline-dark"><Icon src={sword}/> </Button>
              </ButtonGroup>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="cedar">{userInput}</h2>
          </Col>
        </Row>
      </>
    }
        {userInput === password &&
          <>
            <Jumbotron fluid style={{ backgroundColor: "#00A7E1"}}>
                <h1 style={{fontSize: '20vmin'}} className='rowdies text-light'>POTD</h1>
                <h1 style={{fontSize: "5vmin"}} className="rowdies text-light">a quick reference</h1>
                {/* <p className='cedar'
                  for your reference and considarration
                </p> */}
            {/* <img src={compass} className="App-logo" alt="logo" /> */}
            </Jumbotron>
              {/* <Row>
                <Col>
                  <div>
                    <h1 style={{marginTop: '100px', marginBottom: '100px', fontSize: '20vmin', color: "#FF9B42"}} className="pirata">ahoy!</h1>
                    <h6></h6>
                  </div>
                </Col>
              </Row> */}
            {/* <Row>
              <Col style={{ marginTop: '50px', marginBottom: '50px'}}>
                <div>
                  <h3 style={{ color: "#00A7E1"}}>the trip is three parts</h3>
                </div>
              </Col>
            </Row> */}
            <Jumbotron >
            <Row style={{ marginBottom: '20px'}}>
              <Col>
                  <strong><h1 style={{ fontSize: '4em'}} className='pirata'>THE JOURNEY</h1></strong>
              </Col>
            </Row>
            <Row>
              <Col style={{ padding: '0px'}}>
                <Card className='mx-auto mb-3' style={{ padding: '0', width: '18rem' }}>
                  <Card.Body style={{borderWidth: '3px'}} className='border border-info'>
                    <Card.Title className="rowdies"><a href="#setting_sail">SETTING SAIL</a></Card.Title>
                    <Card.Text >
                      The voyage begins at <Nav.Link target="_blank" href="https://goo.gl/maps/x5Htv7hccDxTCuTP7">Kingwood Access Boat Launch</Nav.Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ padding: '0px'}}>
                <Card className='mx-auto mb-3' style={{ padding: '0',width: '18rem' }}>
                <Card.Body className='border border-warning'>
                  <Card.Title className="rowdies"><a href="#port">PORT</a></Card.Title>
                  <Card.Text>
                    We camp overnight on <Nav.Link target="_blank" href="https://goo.gl/maps/NFpd1AmyePXL8w5x7">Hendrick Island</Nav.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col className='mx-auto justify-center' style={{ padding: '0px'}}>
                <Card className='mx-auto mb-3' style={{ padding: '0', width: '18rem' }}>
                  <Card.Body className='border border-success'>
                    <Card.Title className="rowdies"><a href="#arrival">ARRIVAL</a></Card.Title>
                    <Card.Text>
                      The voyage ends at <Nav.Link target="_blank" href="https://goo.gl/maps/vLen4hsapc6wpdfJ7">Lambertville Boat Ramp</Nav.Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            </Jumbotron>
            <div style={{marginTop: '20px'}} className='bg-info rounded border p-3'>
              <HeaderRow id="setting_sail" contents={'SETTING SAIL'} location={"Kingswood Access Boat Launch"}/>
              <Row className="mt-3 mb-3">
                <Col className='text-light'>
                  <h4>Set sail at 11:00</h4>
                </Col>
              </Row>
              <Row className="mt-3 mb-3 justify-content-md-center">
                <Col md={6}>
                  <Accordion >
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          Vehicles
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>You might get a ticket for leaving your car at Kingwood overnight, so find somewhere to stow your car after unloading.</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                          Legalities
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>Rangers, Cops, and other law enforcement frequent the boat ramp. Camping on the islands and alcohol are prohibited, so keep try to keep it hidden while building your boat. Every boat should legally have a whistle and each person should legally have a life vest.</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    {/* <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                          Space
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body >The boat launch parking lot and area surrounding it is typically packed. Sometimes we're lucky and score open parking spots, other times we need to post up on grass and have someone wait with the car so it doesn't get ticketed. Additionally, the building area is tight.</Card.Body>
                      </Accordion.Collapse>
                    </Card> */}
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                          Setting Sail
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>After your ship is built, set sail to the top tip of <a href="https://goo.gl/maps/apKjRFhcyhm2tDLH9">Marshall Island</a>, where ships will congregate before setting off as a fleet.  This frees up space at the boat launch.</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Col>
              </Row>
            </div>
            <div style={{marginTop: '20px'}} className='bg-warning rounded border p-3'>
              <HeaderRow  id="port" contents={'PORT'} location={"Hendricks Island"} />
              <Row className="mt-3 mb-3">
                <Col className='text-light'>
                  <h4>Arrive by 6:00</h4>
                </Col>
              </Row>
              <Row className="mt-3 mb-3 justify-content-md-center">
                <Col md={6}>
                  <Accordion >
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          Landing
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>To arrive at the campsite, you should navigate down the rapids between <a target="_blank" href="https://goo.gl/maps/hg7j9nvz4WTbR1bC8">Eagle Island</a> and <a target="_blank" href="https://goo.gl/maps/NFpd1AmyePXL8w5x7">Hendrick Island</a>. The campsite will be on the right, <a target="_blank" href="https://goo.gl/maps/NFpd1AmyePXL8w5x7">midway down the island</a>.</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    {/* <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                          Stowing
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>After you land, start the process of unloading your equipment and bringing it to the campsite. There are two inclines that you must climb to reach the campsite, so keep this in mind while packing equipment. It is also largely undeveloped so be ready to traverse through some brush.</Card.Body>
                      </Accordion.Collapse>
                    </Card> */}
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                          Stowing
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>Once your equipment is unloaded and before setting up camp, find a place to stow your boat so that it is hard to see from across the shore or downriver. A brown or green tarp might be handy in helping it disappear behind the tree cover.</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                          Camp
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>There are two inclines you must climb to reach the campsite.  The site is on a ridge and largely undeveloped, so you’ll need to clear some plants/leaves/branches for tent space.
We have an area for campfires set back into the woods, with hopefully enough cover so the fires can't be seen on the adjacent riverside. Sound travels far in this area, so keep it  in mind while celebrating the adventure so far!</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                          Island Emergencies
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="4">
                        <Card.Body>In the case of an emergency on the island, there is a boat launch downstream by <a target="_blank" href="https://goo.gl/maps/u6bQVSaidKoGQwMx7">Prallsville Mills</a>. There is also the <a target="_blank" href="https://goo.gl/maps/ZegZvsxcepUkuYqY8">Virginia Forrest Recreation Area</a> which is upstream of Hendricks. Previous Pirates have been stung by bees, gotten lymes and attacked by leeches, so you never know what to expect.</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Col>
              </Row>
            </div>
            <div style={{marginTop: '20px'}} className='bg-success rounded border p-3'>
              <HeaderRow id="arrival" contents={"ARRIVAL"} location={"Lambertville Boat Launch"} />
              <Row className="mt-3 mb-3">
                <Col className='text-light'>
                  <h4>Land Whenever</h4>
                </Col>
              </Row>
              <Row className="mt-3 mb-3 justify-content-md-center">
                <Col md={8}>
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          The Bridge
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>You know we're almost at the end of our journey when we see the <a target="_blank" href="https://goo.gl/maps/HoSJzocYzfAcVAAi8">New Hope-Lambertville Bridge</a>. At this time you want to make sure you are on the LEFT side of the river, the side the <a target="_blank" href="https://goo.gl/maps/9BKdPZN5RgZ2a6mh6">Lambertville Boat Ramp</a> is located. Make sure you don't miss it because there is a <strong>large and dangerous wingdam a little further down the river</strong>.</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                          Dead Men Tell No Tales
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>That's it! Another POTD trip under our collective belts. Typically we would go to a nearby restaurant to imbibe delicious brews and a hearty meal, but I think this will depend on CODIV-19.</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Col>
              </Row>
            </div>
            {/* <Jumbotron className='mt-4'>
              <Row>
                <Col>
                  <h1>DRIVERS</h1>
                  <p>Please be careful on the drive home. The exhaustion is real, so make sure you either get ample caffeine or pull over if you're not feeling 100% awake.</p>
                </Col>
              </Row>
            </Jumbotron> */}
          </>
        }
    </Container>
    </div>
  );
}

export default Home;
