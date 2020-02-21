import React from 'react';
import './profile-card.css';
import {IUser} from "../../typings";
import Image from "../image/image";
import {Link} from "react-router-dom";

interface IProfileCardProps {
    user: IUser;
    toggleFavourite: (id: number) => void;
}

const ProfileCard = (props: IProfileCardProps) => {
    const user = props.user;
    const userName = `${user.firstName} ${user.lastName}`;

    function starIconBEM() {
        const classArray = ['profile-card__icon', 'profile-card__icon--star'];

        if (user.isFavourite) {
            classArray.push('profile-card__icon--active')
        }

        return classArray.join(' ');
    }

    return (
        <div className="profile-card">
            <Image alt={userName} src={user.avatar} />
            <Link
                to={{
                    pathname: `/detail/${user.id}`,
                    state: user,
                }}
                className="profile-card__name"
            >
                <h1>{userName}</h1>
            </Link>
            <p className="profile-card__occupation">{user.occupation}</p>
            <p>{user.university}</p>
            <button className={starIconBEM()} onClick={() => props.toggleFavourite(user.id)}>
                <i className="fa fa-star" />
            </button>
        </div>
    );
}

export default ProfileCard;
