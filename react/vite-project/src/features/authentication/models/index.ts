import React from "react";

export interface AuthenticateUser {
    prenom: string;
}

export type AuthenticateUserState = {
    user?: AuthenticateUser
}

export const AuthenticateUserContext = React.createContext<AuthenticateUserState>({});