import React from 'react'
import {List, ListItem, ListItemText, Divider, makeStyles} from "@material-ui/core"

const style = makeStyles(() => ({
    root:{
        height: "100vh",
        width: 200
    },
    header: {
        height: 100
    }
}))
const SideBar = () => {

    const classes = style()
    return (
        <div
            className = {classes.root}>
            <div
                className = {classes.header}>
                <ListItem
                    variant = "primary">
                    <ListItemText primary = "Name" />
                </ListItem>
            </div>
            <Divider />
            <div>
                <List>
                    {["Home", "My Courses", "My Gigs", "Statistics"].map((item, i) => (
                        <ListItem key = {i}><ListItemText primary = {item} secondary = {i} /></ListItem>
                    ))}
                </List>
            </div>
        </div>
    )
}

export default SideBar
