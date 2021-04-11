import React from 'react'
import {InputBase, makeStyles} from "@material-ui/core"

const style = makeStyles(() => ({
    root: {
        borderRadius: "5px",
        boxShadow: "2px 2px 5px gray",
        width: 250,
        height: 35,
        margin: "10px",
        paddingLeft: "10px"
    },
    searchbar: {
        height: "inherit",
        width: "inherit"
    }
}))

const DashboardSearch = () => {
    const classes = style()
    return (
        <div
        className = {classes.root}>
            <InputBase
                className = {classes.searchbar}
                placeholder = "Search..."/>
        </div>
    )
}

export default DashboardSearch
