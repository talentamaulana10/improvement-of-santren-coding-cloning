import React,{Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody } from 'reactstrap';
import './card.css'
export default class Tata extends Component{
     render(){
         return(
           <div>
             <h1 className="pacal">Daftar Kajian Koding Rutin</h1>
            <CardDeck>
              
            <Card className="mecard1">
              <CardImg  top width="100%" src="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg" alt="Card image cap" />
              <CardBody>
                <CardTitle></CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText></CardText>
                
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381" alt="Card image cap" />
              <CardBody>
                <CardTitle></CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText></CardText>
                
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572" alt="Card image cap" />
              <CardBody>
                <CardTitle></CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText></CardText>
                
              </CardBody>
            </Card>
          </CardDeck>
          </div>
         )
     }
 }
