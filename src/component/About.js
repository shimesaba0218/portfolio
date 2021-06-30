import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CakeIcon from '@material-ui/icons/Cake';
import SchoolIcon from '@material-ui/icons/School';
import BusinessIcon from '@material-ui/icons/Business';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    content: {
        padding: 50
    },
    title: {
        marginBottom: 30,
        textAlign: 'center'
    }
});

export default function About(){
    const classes = useStyles();
    return(
        <Container maxWidth='sm' className={classes.content}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant='h5' className={classes.title}>About me</Typography>
                </Grid>
                <Grid item container spacing={3}>
                    <Grid item>
                        <PersonIcon />
                    </Grid>
                    <Grid item xs={12} sm>
                        <Typography>花房 亮太(はなふさ りょうた)</Typography>
                    </Grid>
                </Grid>
                <Grid item container spacing={3}>
                    <Grid item>
                        <BusinessIcon />
                    </Grid>
                    <Grid item xs={12} sm>
                        <Typography>groxi株式会社</Typography>
                    </Grid>
                </Grid>
                <Grid item container spacing={3}>
                    <Grid item>
                        <CakeIcon />
                    </Grid>
                    <Grid item xs={12} sm>
                        <Typography>2000年 2月18日</Typography>
                    </Grid>
                </Grid>
                <Grid item container spacing={3}>
                    <Grid item>
                        <FavoriteIcon />
                    </Grid>
                    <Grid item xs={12} sm>
                        <Typography>ゲーム(FFXIV, Apex Legends), 音楽(Hardbass, GABBA) etc...</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
