import React from 'react';
import ProfileCard from "../components/profile-card/profile-card";
import {useParams} from "react-router";
import {IUser} from "../typings";

const DetailView = (props) => {
    const [user, setUser] = React.useState({} as IUser);
    const id = useParams<{id: string}>().id;

    React.useEffect(() => {
        setUser(props.getUser(id))
    });

    return (
        user ? <ProfileCard user={user} toggleFavourite={props.toggleFavourite}/> : <p>loading</p>
    );
}

export default DetailView;
