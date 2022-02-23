import { Button } from "../components/altButton"
import React from "React"

const ShowComments = () => {
const {onClick} = props 
    return(
        <Button variant="wide" onClick={onClick}>Show Comments</Button>
    ) 
}


export default ShowComments;