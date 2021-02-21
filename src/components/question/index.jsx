import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function Question({question, difficulty, html}) {

    function getDifficultyColor (difficulty) {
        if (difficulty === 'very hard')
            return (
                <Grid item xs={1} 
                    style={{ backgroundColor: 'black',                     
                        borderBottomRightRadius: '8px', 
                        borderTopRightRadius: '8px' }}
                ></Grid>)
        else if (difficulty === 'hard')
            return (
                <Grid item xs={1} 
                    style={{ backgroundColor: '#c62121',                     
                        borderBottomRightRadius: '8px', 
                        borderTopRightRadius: '8px' }}
                ></Grid>)
        else if (difficulty === 'medium')
            return (
                <Grid item xs={1} 
                    style={{ backgroundColor: '#51adef',                     
                        borderBottomRightRadius: '8px', 
                        borderTopRightRadius: '8px' }}
                ></Grid>)
        else
            return (
                <Grid item xs={1} 
                    style={{ backgroundColor: '#34ed43', 
                        borderBottomRightRadius: '8px', 
                        borderTopRightRadius: '8px' }}
                ></Grid>)
    }
    return (
        <a href={html} style={{textDecoration: 'none'}}>
            <Box 
                m={2} 
                style={{ boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 2px 0px', 
                borderRadius: '8px', 
                backgroundColor: 'white' }}
                >
                <Grid container style={{ minHeight: '50px'}}>
                    <Grid item style={{padding: '5% 0'}} xs={11}>
                            <Typography  
                                style={{padding: '0 4%', 
                                    color: '#02203c',  
                                    fontSize: '15px', 
                                    fontFamily: "Arial"}} 
                                    align={'left'}>
                                {question}
                            </Typography>
                    </Grid>
                    {
                        getDifficultyColor(difficulty)
                    }
                </Grid>
            </Box>
        </a>
    )
}

export default Question;