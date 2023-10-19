// type Props {
//     id: string;
//     dateDebut: string;
//     dateFin: string;
//     type: string;
//     success: string;
// }

import { Game } from "../../models/game";

type Props = { game: Game };

export const GameRowFinal = (props: Props) => {
    // pas un tableau ici :'( juste lr dernier tr
    return (
        <>
            <tr><td>{props.game.title}</td></tr>
        </>
    );
    // return (
    //     <table> 
    //         <tr>
    //             <th>Identifiant</th>
    //             <th>Date de début</th>
    //             <th>Date de fin</th>
    //             <th>Type du jeu</th>
    //             <th>Success</th>
    //         </tr>
    //         <tr>
    //             <td>{props.id}</td>
    //             <td>{props.dateDebut}</td>
    //             <td>{props.dateFin}</td>
    //             <td>{props.id}&nbsp;{props.type}</td>
    //             <td>{props.success}</td>
    //         </tr>
    //     </table>
    // );
}