import Card from "./Card";
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
  // login page tel,parol---user:{tel:"",parol:""}
  // forma submit bolganda shu datalar console.log(objectda chiqsin);
  // basket sahifaga 5ta props berib yuboring 2tasi majburoy bolmasin
  // basket=[],isLogged:false,user:string;paid:boolean;
  // 3ta role Admin,Operator,Seller; 
  // git va github;
  // i18n 1ta dars;
  // pagination,filter,
  // imtihon;
  // next js;
  return (
    <>
      <Header id={1} ism={"Ali"} yosh={20} />
      <Home user={user} />
      <div className="px-16 py-5 grid grid-cols-4 gap-4">
        {mevalar.map((item: TMeva, index: number) => (
          <Card key={item.id} item={item} 
          index={index} />
        ))}
      </div>
    </>
  );
}

export default App;
