import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Logo from '../Logo';
import Grid from '@material-ui/core/Grid';
import MaYTe from '../MaYTe';
import FormLayoutHorizontal from '../FormLayoutHorizontal';
import FormFooter from '../FormFooter';
import Divider from '@material-ui/core/Divider';

class FormKetQuaECG extends React.Component {

  render() {

    return (
      <FormLayoutHorizontal>

        <Grid container spacing={24}>

          <Grid item xs={3}>
            <Logo size={150}/>
          </Grid>

          <Grid item xs={3}>
            <Typography component="h1" variant="h4" align="center">
              KET QUA ECG
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <MaYTe soPhieu="18.205.000001" sTT="" maYTe="20000002" barCode=""/>
          </Grid>

        </Grid>

        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Divider/>
          </Grid>

          <Grid item xs={12} sm={6}>
            <div>ID No. (Fullname): </div>
            <div>Brith Date (Age): </div>
            <div>Sex:</div>
            <div>Height:</div>
            <div>Comments:</div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <div>Name:</div>
            <div>Age:</div>
            <div>Height:</div>
            <div>Weight:</div>
          </Grid>

          <Grid item xs={12}>
            <Divider/>
          </Grid>

          <Grid item xs={12}>
            <div>
                main content
            </div>
            <div>
              <strong>Kết luận (Conclusion): </strong>
            </div>
            <div>
              <strong>Đề nghị (Recommendation): </strong>
            </div>

            <FormFooter/>
          </Grid>
        </Grid>
      </FormLayoutHorizontal>
    );
  }
}


export default FormKetQuaECG;