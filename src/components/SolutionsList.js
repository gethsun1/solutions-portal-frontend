import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const SolutionsList = ({ solutions }) => {
  return (
    <Grid container spacing={3}>
      {solutions.map((solution) => (
        <Grid item xs={12} sm={6} md={4} key={solution.id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{solution.solution_type}</Typography>
              <Typography variant="body2">{solution.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SolutionsList;
