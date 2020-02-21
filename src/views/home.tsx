import React from 'react';
import {IUser} from "../typings";

import ProfileCard from "../components/profile-card/profile-card";
import Search from "../components/search/search";
import Toggle from "../components/toggle/toggle";

export interface IHomeViewprops {
    users: IUser[];
    showOnlyFavourite: boolean;
    setTextFilter: (value: string) => void;
    toggleUserFavourite: (id: number) => void;
    toggleFavourite: (checked: boolean) => void;

}

const HomeView = (props: IHomeViewprops) => {
    return (
        <div className="home-wrapper">
            <Search onSearch={props.setTextFilter} />
            <Toggle id="favourite-toggle" checked={props.showOnlyFavourite} onChange={props.toggleFavourite} />
            <div className="profiles">
                {props.users.map((user, index) => <ProfileCard key={index} user={user} toggleFavourite={props.toggleUserFavourite} />)}
            </div>
        </div>
    );
}

export default HomeView;
