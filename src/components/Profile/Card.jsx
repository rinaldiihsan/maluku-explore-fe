import React from 'react';
import ProfileImage from '../../assets/profile.png';

const Card = ({ namaLengkap, email, deskripsi }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl font-poppins">
      <img className="rounded-full mx-auto mb-2" src={ProfileImage} alt="Profile" width={370}/>
      <h2 className="text-3xl font-semibold mb-2 text-center font-clashDisplay">{namaLengkap}</h2>
      <p className="font-poppins mb-2 text-center font-medium">{email}</p>
      <p className="font-poppins text-center mt-6 font-medium">{deskripsi}</p>
    </div>
  );
};

export default Card;
