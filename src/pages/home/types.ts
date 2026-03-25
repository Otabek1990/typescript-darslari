import type { IUser } from "../../shared/types/types";

export interface HomeProps {
  user: IUser;
}
export type THomeMeva = {
  title: "olma" | "banan";
  price: 10000 | 20000 | 30000;
};