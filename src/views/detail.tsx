import React, {useEffect} from 'react';
import {useParams} from "react-router";

import ProfileCard from "../components/profile-card/profile-card";
import {IUser} from "../typings";

const DetailView = (props) => {
    const [user, setUser] = React.useState<IUser>({} as IUser);
    const id = useParams<{id: string}>().id;

    useEffect(() => {
        fetch(`http://localhost:3003/users/${id}`)
            .then(res => res.json())
            .then(response => {
                setUser(response);
            })
    })

    return (
        <ProfileCard user={user} changeUser={props.changeUser}/>
    );
}

export default DetailView;
