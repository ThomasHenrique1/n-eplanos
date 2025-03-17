import React from "react";

interface CardItem {
  title: string;
  description: string;
}

interface CardListProps {
  items: CardItem[];
  columns?: number; // Número de colunas no grid (opcional, padrão 2)
}

const CardList: React.FC<CardListProps> = ({ items, columns = 3 }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-bold text-green-800 mb-4">{item.title}</h3>
          <p className="text-gray-700">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;