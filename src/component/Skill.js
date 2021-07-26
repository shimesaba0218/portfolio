import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ReactLogo from '../images/react_logo.png';
import HTML5Logo from '../images/HTML5_Badge.svg';
import VSCodeLogo from '../images/Visual_Studio_Code_1.35_icon.svg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Scrollbars from 'react-custom-scrollbars';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 240,
    },
    content: {
        padding: 50
    },
    title: {
        marginBottom: 10,
        textAlign: 'center'
    }
});

function SkillCard(props){
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                component="img"
                src={props.url}
                alt=""
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

export default function Skill(){
    const classes = useStyles();
    return(
        <Container maxWidth='lg' className={classes.content}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12}>
                    <Typography variant='h5' className={classes.title}>Skill</Typography>
                </Grid>
                <Scrollbars style={{ width: 1600, height: 240 }}>
                    <Grid item md={3}>
                        <SkillCard
                            url={HTML5Logo} 
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
                    <Grid item md={3}>
                        <SkillCard
                            url={VSCodeLogo}
                            title="その他"
                            text="VSCode派です。資格はFEくらいしか持ってません…"
                        />
                    </Grid>
                </Scrollbars>
            </Grid>
        </Container>
    )
}
