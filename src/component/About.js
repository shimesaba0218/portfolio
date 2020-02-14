import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    content: {
        padding: 50
    }
});

export default function About(){
    const classes = useStyles();
    return(
        <Container maxWidth='sm' className={classes.content}>
            <Typography variant='h6'>About Me</Typography>
            <Typography>花房 亮太(はなふさ りょうた)</Typography>
            <Typography>津山工業高等専門学校 電子制御工学科 4年(退学予定)</Typography>
            <Typography>2000年 2月18日</Typography>
        </Container>
    )
}
