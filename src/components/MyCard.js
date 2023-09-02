import { Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import { getMatchDetail } from "../api/Api";
import CustomDialog from "./CustomDialog";

const MyCard = ({match}) =>{
    const [data,setDetail]=useState(match)
    const [open,setOpen]=useState(false);

    const handleClick=()=>{
        // getMatchDetail()
        // .then((d)=>{
        //    // console.log("match detail",d);
        //    setDetail(d);
           handleOpen();
        // })
        // .catch((error)=>console.log(error))
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const handleOpen=()=>{
        setOpen(true);
    }
    const getMatchCard=()=>{
        return(
            <Card style={{marginTop:15}}>
                <CardContent>
                    <Grid container justifyContent={"center"} alignItems={"center"} spacing={4}>
                        <Grid item>
                            <Typography variant="h6" >{match.teams[0]}</Typography>
                        </Grid>
                        <Grid item>
                        <img style={{width: 95}} src={require("../img/vs.jpg")} alt="" />
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" >{match.teams[1]}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions sx={{
                    justifyContent: 'center'
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center',
                    }}>
                        <Button onClick={()=>{
                            handleClick(match.unique_id);
                        }} variant="contained" color="primary">SHOW DETAILS</Button>
                        <Button sx={{ml:5}} variant="contained" color="primary">
                            Start Time:{new Date(match.dateTimeGMT).toLocaleString()}
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        )
    }

    const getDialog=()=> (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">Match Detail....</DialogTitle>
            <DialogContent>

                <DialogContentText id="alert-dialog-description">
                    <Typography >{match?.status}</Typography>
                    
                    <Typography>
                        Score:
                        <span style={{fontStyle:"italic",fontWeight:"bold"}}>
                            {data.score}
                        </span>
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )

    return(
        <Fragment>
            {getMatchCard()}
            <CustomDialog
                open={open}
                handleClose={handleClose}
                match={match}
            />
        </Fragment>
    )
}

export default MyCard;