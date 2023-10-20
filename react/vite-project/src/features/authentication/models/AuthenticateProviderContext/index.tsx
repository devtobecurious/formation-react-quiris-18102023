import { PropsWithChildren } from "react";
import { AuthenticateUserContext, AuthenticateUserState } from "..";


export const AuthenticateProviderContext = (props: PropsWithChildren) => {
    const user: AuthenticateUserState = {
        user: { prenom: 'Harry Potter' }
    }

    return (
        <>
            <AuthenticateUserContext.Provider value={user}>
                {props.children}
            </AuthenticateUserContext.Provider>
        </>
    );
}