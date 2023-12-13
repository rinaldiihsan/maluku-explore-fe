import React from 'react';
import Card from '../../components/Tour/Card';

import pantaiNatsepa from '../../assets/pantai-natsepa.png';
import bandaNaira from '../../assets/banda-naira.png';
import pantaiPintu from '../../assets/pantai-pintu.png';
import pantaiOra from '../../assets/pantai-ora.png';


const Tour = () => {
  const places = [
    {
      id: 1,
      images: pantaiNatsepa,
      nama: 'Pantai Natsepa',
      tempat: 'Maluku Tengah',
    },
    {
      id: 2,
      images: bandaNaira,
      nama: 'Banda Naira',
      tempat: 'Maluku Tengah',
    },
    {
      id: 3,
      images: pantaiPintu,
      nama: 'Pantai Pintu',
      tempat: 'Maluku Tengah',
    },
    {
      id: 4,
      images: pantaiOra,
      nama: 'Pantai Ora',
      tempat: 'Maluku Tengah',
    },
  ];

  return (
    <section className="section2 flex flex-col justify-center font-poppins items-center py-[70px] gap-y-[70px] max-w-[70rem] mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold font-clashDisplay text-center w-[601px] h-[104px]">
          Lets tour destination about Maluku!
        </h1>
        <p className="text-[18px]">Explore more about the destination!</p>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-8 gap-y-10">
        {places.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
    </section>

  );
};

export default Tour;
