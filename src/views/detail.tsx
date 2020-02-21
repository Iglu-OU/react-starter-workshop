import React from 'react';
import {useParams} from "react-router";

import ProfileCard from "../components/profile-card/profile-card";

const DetailView = (props) => {
    const id = useParams<{id: string}>().id;

    return (
        <ProfileCard user={props.getUser(id)} toggleFavourite={props.toggleFavourite}/>
    );
}

export default DetailView;
