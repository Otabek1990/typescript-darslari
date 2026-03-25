import type { TMeva } from "./App";

interface CardProps {
  item: TMeva;
  index: number;
}

function Card({ item, index }: CardProps) {
  return (
    <div className="p-5 bg-orange-400">
      <h2>{index + 1}</h2>
      <h2>{item.nom}</h2>
      <h2>{item.narx}</h2>
      <h2>{item.rang}</h2>
      <h2>{item.qimmat ? "Qimmat" : "Arzon"}</h2>
    </div>
  );
}

export default Card;
