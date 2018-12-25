import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

const Cards = props => {
  const { id, judul } = props;
  return (
    <div>
      <Card>
        <CardImg />
        <CardBody>
          <CardTitle>{id}</CardTitle>
          <CardSubtitle>{judul}</CardSubtitle>

          <Button>hapus</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
