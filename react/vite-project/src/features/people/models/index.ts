export type Nullable<T> = T | null | undefined;

export interface Character {
     name: string;
     description: string;
     imageUrl?: string;
     //nbGames: Nullable<number>;
     nbGames: number;
}