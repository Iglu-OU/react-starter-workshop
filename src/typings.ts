export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    isFavourite: boolean;
    avatar?: string;
    occupation?: string;
    university?: string;
    skills: string[];
}

export interface IAppState {
    filters: {
        text: string;
        favouriteOnly: boolean;
    }
    users: IUser[];
    filteredUsers: IUser[];
}
