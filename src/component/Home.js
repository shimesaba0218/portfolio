import React,{Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Home extends Component{
    render(){
        return(
            <Container maxWidth='sm'>
                <Typography variant='h6'>Home</Typography>
                <Typography>花房 亮太(はなふさ りょうた)</Typography>
                <Typography>津山工業高等専門学校 電子制御工学科 4年(退学予定)</Typography>
                <Typography>2000年 2月18日</Typography>
            </Container>
        )
    }
}

export default Home;
