import React from 'react'
import {Card, CardHeader, CardMedia} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import pic from "../images/physics.jpg"

const style = makeStyles(() => ({
    root: {
        maxWidth: 300,
        height: 250,
    },
    header: {
        fontFamily: "Arimo"
    },
}))

const CourseCard = () => {
    const classes = style()
    return (
        <div>
            <Card
                className = {classes.root}>
                <CardMedia
                    component = "img"
                    height = "170"
                    image = {pic}
                    title = "physics" />
                <CardHeader
                    size = "small"
                    title = "Course Name"
                    subheader = "Course instructor name">
                </CardHeader>
            </Card>
        </div>
    )
}

export default CourseCard
