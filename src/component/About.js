import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ReactLogo from '../images/react_logo.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 240,
    },
});

function SkillCard(props){
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                component="img"
                src={props.url}
                alt="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom={true} align="center" variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.text}
                </Typography>
            </CardContent>
        </Card>
    )
}

class About extends Component{
    render(){
        return(
            <Container maxWidth='lg'>
                <Typography variant="h4">About</Typography>
                <Typography variant="h4">Skill</Typography>
                <Grid container spacing={3}>
                    <Grid item md={3}>
                        <SkillCard
                            url={ReactLogo} 
                            title="HTML/CSS"
                            text="CSS書くのが苦手です…(このポートフォリオではMaterial-UIを使いました)"
                        />
                    </Grid>
                    <Grid item md={3}>
                        <SkillCard
                            url={ReactLogo} 
                            title="JavaScript"
                            text="Reactがちょっとできたりします。このポートフォリオもReactを使って作成しています。"
                        />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default About;
