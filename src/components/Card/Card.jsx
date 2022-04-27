import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Card.module.css';

const Info = ({data:{Global}}) => {
  if (typeof Global === 'undefined' ) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <h2>Date : {Global.Date.slice(0,10)}</h2>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              New Confirmed
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={Global.NewConfirmed} duration={2.75} separator="," />
            </Typography>
            
            <Typography variant="body2" component="p">
              New Confirmed cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Confirmed
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={Global.TotalConfirmed} duration={2.75} separator="," />
            </Typography>

            <Typography variant="body2" component="p">
              Total Confirmed cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={Global.TotalDeaths} duration={2.75} separator="," />
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;