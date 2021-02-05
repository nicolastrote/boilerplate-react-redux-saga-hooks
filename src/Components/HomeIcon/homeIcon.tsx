import React, { FC } from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { ReactComponent as Logo } from './brewery-react-app.svg';

const HomeIcon: FC = () => (
  <SvgIcon>
    <Logo />
  </SvgIcon>
);

export default HomeIcon;
