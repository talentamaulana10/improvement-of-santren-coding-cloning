import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

const Cards = props => {
  const { id, judul, create } = props;
  return (
    <div>
      <Card>
        <CardImg />
        <CardBody>
          <CardTitle>{id}</CardTitle>
          <CardSubtitle>{judul}</CardSubtitle>
          <CardText>{create}</CardText>
          <Button>hapus</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
