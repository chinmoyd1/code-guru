import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Question from '../../components/question';
import questionsJson from '../../questions.json';

function Questions() {
    const [totalLength, setTotalQuestions] = useState(0);
    useEffect (() => {
        Object.keys(questionsJson).forEach((key) => {
            setTotalQuestions((prev) => prev+questionsJson[key].length);
        });
        console.log(":::questionsJson:::", questionsJson);
    }, []);

    function FormRow ({topic, data}) {
        return(
            <React.Fragment>
                <h3 align='left' 
                style={{paddingLeft: '18px', 
                color: '#02203c', 
                fontSize: '23px', 
                fontWeight: '400', 
                fontFamily: "Arial"}}> 
                    {topic}
                </h3>

                {data.map((data, id) => {
                        return ( 
                            <Grid item key={id} xs={12}>
                                <Question 
                                    html={data.html}
                                    question={data.topic}
                                    difficulty={data.difficulty}
                                />
                            </Grid>
                        )
                })}
            </React.Fragment>
        )
    }
    return (
        <>
            <div style={{ display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#02203c', 
                    width: '100%', 
                    height: '250px'}}>
                <div style ={{ margin:'0 auto' }} 
                    align='center'>
                    <h1 style={{
                        color: 'white', 
                        fontSize: '50px', 
                        fontWeight: '400', 
                        fontFamily: "Arial" }} > 
                            CodeGuru 
                    </h1>
                    <h2 style={{
                        color: 'white', 
                        fontSize: '18px', 
                        fontWeight: '100', 
                        fontFamily: "Arial" }}>
                        {totalLength} Coding Interview Questions
                    </h2>
                </div>
            </div>
            <Grid container item xs={12} spacing={3}>
                {Object.keys(questionsJson).map((key, id) => {
                    const data = questionsJson[key];
                    return (
                        <Grid key={id} item lg={3} md={4} sm={6} xs={12}>
                            <FormRow 
                                topic={key}
                                data={data}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    );
  }
  
  export default Questions;