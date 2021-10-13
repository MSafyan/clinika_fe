import React from 'react'
import { Paper, Card, Typography,Button, makeStyles } from '@material-ui/core'
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff',
        display:'flex',
        justifyContent:"space-between",
        alignItems:'center'
    },
    pageHeader:{
        padding:theme.spacing(1),
        display:'flex',
        marginBottom:theme.spacing(1)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(1),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        },
        margin:'auto 0rem'
    },
    newPatient:{
        marginRight:'10vw',
        height:"fit-content"
    }
}))

export default function PageHeader(props) {

    const classes = useStyles();
    const { title, subTitle, icon, history } = props;
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        {subTitle}</Typography>
                </div>
            </div>
            <Link onClick={()=>history.push('/newcustomer')}>
                <Button className={classes.newPatient} variant='contained'>
                    New Patient
                </Button>
            </Link>
        </Paper>
    )
}