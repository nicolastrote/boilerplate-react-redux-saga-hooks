import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';
import isEmpty from 'lodash/isEmpty';

import { IBrewery } from '../../Utils/interfaces';

import './CardDisplay.scss';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  brewery: IBrewery;
}

const CardDisplay: FC<IProps> = (props) => {
  const { brewery } = props;

  const onClickCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, absoluteUrl: string) => {
    e.stopPropagation();
    window.open(absoluteUrl, '_blank');
  };

  return (
    <Card
      className="card"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        onClickCard(e, brewery.website_url)
      }
    >
      <CardContent>
        <Typography className="over-line" color="textSecondary" gutterBottom>
          {isEmpty(brewery.city) ? 'N.A.' : brewery.city}
        </Typography>
        <Typography className="title truncate-overflow" variant="body1" component="h4">
          {isEmpty(brewery.name) ? 'N.A.' : brewery.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDisplay;
