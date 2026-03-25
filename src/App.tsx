import Card from "./Card";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Home from "./pages/home";
import type { IUser, TMeva } from "./shared/types/types";

// tsda Role
// useState,
// type va interface;
// admin,operator,seller
// type Role = "admin" | "operator" | "seller";
// let role: Role = "operator";
// console.log(role);
// type Kurs = "frontend" | "backend";

// interface IHotel {
//   title: string;
//   address: {
//     street: string;
//     city: string;
//   };
//   prices: {
//     1: number;
//     2: number;
//   };
//   filials: string[];
// }

// const hotel:IHotel = {
//   title: "hilton",
//   address:{
//     street:"afrosiyob",
//     city:"toshkent"
//   },
//   prices:{
//     1:100,
//     2:200
//   },
//   filials:["yunusobod"]
// };
// console.log(hotel);
// let kurs: Kurs = "frontend";
// console.log(kurs);

// interface ITalaba {
//   ism: string;
//   yosh: number;
// }
// interface User extends ITalaba {
//   manzil: string;
//   id: string | number;
// }
// let user: User = {
//   ism: "hhh",
//   yosh: 12,
//   manzil: "",
//   id: 1,
// };
// console.log(user);

// function types

function App() {
  // role
  const user: IUser = {
    ism: "abdulloh",
    yosh: 23,
    friends: ["elyor", "ali"],
  };
  const mevalar: TMeva[] = [
    {
      nom: "olma",
      narx: 10000,
      rang: "qizil",
      qimmat: true,
      id: 1,
    },
    {
      nom: "banan",
      narx: 22000,
      rang: "sariq",
      qimmat: false,
      id: 2,
    },
    {
      nom: "xurmo",
      narx: 8000,
      rang: "yashil",
      qimmat: false,
      id: 3,
    },
  ];
  console.log(mevalar);
 
  return (
    <>
      <Header id={1} ism={"Ali"} yosh={20} />
      <Banner />
     
    </>
  );
}

export default App;
