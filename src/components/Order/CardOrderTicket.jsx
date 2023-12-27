import React from 'react';

const CardOrderTicket = ({ tour, namaLengkap, email, quantity, handleQuantityChange, totalHarga, tanggalOrder, setTanggalOrder, handleOrder }) => {
  const getImageUrl = (imageId) => {
    return `http://localhost:3000/imageTour/get-image/${imageId}`;
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-xl p-6 mx-auto flex flex-col font-poppins">
        <div className="flex flex-col items-center">
          <img
            src={getImageUrl(tour && tour.imageId)}
            alt={tour && tour.nama}
            className="rounded-[52px]"
            style={{
              width: '800px',
              height: '400px',
              borderRadius: '52px',
            }}
          />
          <h1 className="text-xl font-semibold text-center ">{tour && tour.nama}</h1>
          <h3 className="font-base text-[18px]">{namaLengkap}</h3>
          <h3 className="font-base text-[18px]">{email}</h3>
        </div>
        <form onSubmit={handleOrder} className="flex flex-col gap-y-4 w-full">
          <label className="font-semibold text-[18px]">Harga</label>
          <input className="border border-gray-400 rounded-lg px-4 py-2" type="text" value={tour && tour.harga} disabled />
          <label className="font-semibold text-[18px]">Jumlah Tiket</label>
          <input className="border border-gray-400 rounded-lg px-4 py-2" type="number" value={quantity} onChange={handleQuantityChange} />
          <label className="font-semibold text-[18px]">Total Harga</label>
          <input className="border border-gray-400 rounded-lg px-4 py-2" type="text" value={totalHarga} disabled />
          <label className="font-semibold text-[18px]">Tanggal Order</label>
          <input className="border border-gray-400 rounded-lg px-4 py-2" type="date" value={tanggalOrder} onChange={(e) => setTanggalOrder(e.target.value)} required />
          <button type="submit" className="bg-myDarkGreen hover:bg-myGreen1 text-white font-semibold py-2 px-4 rounded-lg font-poppins transition-all duration-200 ease-in-out">
            Order Ticket
          </button>
        </form>
      </div>
    </>
  );
};

export default CardOrderTicket;
