import React from 'react';
import papeda from '../../assets/papeda.jpg';
import { Link } from 'react-router-dom';

const Card = () => {
  const cards = [
    {
      id: 1,
      title: 'Papeda! Typical Food of Maluku Province.',
      image: papeda,
      date: '04 December 2023',
    },
    {
      id: 2,
      title: 'Papeda! Typical Food of Maluku Province.',
      image: papeda,
      date: '04 December 2023',
    },
    {
      id: 3,
      title: 'Papeda! Typical Food of Maluku Province.',
      image: papeda,
      date: '04 December 2023',
    },
  ];

  return (
    <section className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-6 gap-y-10 mt-[50px]">
      {cards.map((card) => (
        <div key={card.id} className="relative max-w-[380px]">
          <Link to="/">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-[0.3] rounded-[53px]"></div>
            <img src={card.image} alt={card.title} className="rounded-[53px]" />
            <div className="absolute top-[63%] left-0 right-0 bottom-0 flex flex-col text-white font-poppins px-7">
              <p className="text-[12px]">{card.date}</p>
              <h2 className="font-semibold text-[16px]">{card.title}</h2>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Card;
