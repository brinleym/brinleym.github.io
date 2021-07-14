import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
  textPaddingRight: {
    // addingRight: theme.spacing(1)
  },
  textPaddingLeft: {
    paddingLeft: theme.spacing(1)
  }
}));
function WaveIcon() {
  return (
    <SvgIcon viewBox="0 0 72 72" fontSize="large">
      <g id="hair"/>
      <g id="skin">
        <path fill="#FCEA2B" d="M18.6575,19.2409c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115c-1.6927,0.9684-2.2799,3.1256-1.3115,4.8183 c0.1552,0.2714,0.3458,0.5209,0.5667,0.742l11.5324,15.0998l2.6883,3.3878l-7.8906-10.3314 c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799,3.1256-1.3115,4.8183c0.1552,0.2714,0.3458,0.5209,0.5667,0.7421 L21.752,46.226l6.2707,7.899c5.467,6.2731,14.5147,5.9306,20.7863,0.465c3.6045-3.1684,5.9226-7.5482,6.5154-12.3105 c0.3858-4.2326,0.807-15.301,0.807-15.301c-0.1826-2.6008-3.1353-4.5234-3.5158-3.1802l-4.8939,9.7575l-3.3657-4.2224 l3.3657,4.2224l-3.3657-4.2224L30.8909,12.1248c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799,3.1256-1.3115,4.8183 c0.1552,0.2714,0.3458,0.5209,0.5667,0.742l4.2488,5.5631L36,30.4167L22.581,12.7366c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115 s-2.2799,3.1256-1.3116,4.8183c0.1552,0.2714,0.3458,0.5209,0.5667,0.7421L31.6894,36"/>
      </g>
      <g id="skin-shadow"/>
      <g id="color"/>
      <g id="line">
        <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.6575,19.2409 c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115c-1.6927,0.9684-2.2799,3.1256-1.3115,4.8183 c0.1552,0.2714,0.3458,0.5209,0.5667,0.742l11.5324,15.0998l2.6883,3.3878l-7.8906-10.3314 c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799,3.1256-1.3115,4.8183c0.1552,0.2714,0.3458,0.5209,0.5667,0.7421 L21.752,46.226l6.2707,7.899c5.467,6.2731,14.5147,5.9306,20.7863,0.465c3.6045-3.1684,5.9226-7.5482,6.5154-12.3105 c0.3858-4.2326,0.807-15.301,0.807-15.301c-0.1826-2.6008-3.1353-4.5234-3.5158-3.1802l-4.8939,9.7575l-3.3657-4.2224 l3.3657,4.2224l-3.3657-4.2224L30.8909,12.1248c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799,3.1256-1.3115,4.8183 c0.1552,0.2714,0.3458,0.5209,0.5667,0.742l4.2488,5.5631L36,30.4167L22.581,12.7366c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115 s-2.2799,3.1256-1.3116,4.8183c0.1552,0.2714,0.3458,0.5209,0.5667,0.7421L31.6894,36"/>
        <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M11.6726,42.8719c0,2.5663,1.747,4.6428,3.9059,4.6428"/>
        <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M7.0614,42.4369c0,5.5959,3.8094,10.1241,8.5171,10.1241"/>
        <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M45.2619,21.2377c0-2.5663-1.747-4.6428-3.9059-4.6428"/>
        <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M49.8731,21.6727c0-5.5959-3.8094-10.1241-8.5171-10.1241"/>
      </g>
    </SvgIcon>
  )
}

export default function BioCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="span" className={classes.textPaddingRight}>hello there</Typography>
          <WaveIcon></WaveIcon>
          <Typography variant="h5" component="span" className={classes.textPaddingLeft}>my name is brinley.</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" disabled>
          Blog
        </Button>
        <Button 
          size="small"
          href="https://drive.google.com/file/d/1lydIVQw7hMTmeaTssO3KAzt2QNJE6Qn1/view?usp=sharing"
          target="_blank"
        >
          Resume
        </Button>
      </CardActions>
    </Card>
  );
}