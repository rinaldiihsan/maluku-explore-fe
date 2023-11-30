import Avatar from '../../assets/ava.jpg';

const Comment = () => {
  const comments = [
    {
      id: 1,
      images: Avatar,
      nama: 'Rinaldi Ihsan',
      jabatan: 'CEO PT. Sampoerna',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur. Vitae dui aliquam malesuada mattis in neque aliquet eu.',
    },
    {
      id: 2,
      images: Avatar,
      nama: 'Muhammad Riyandi',
      jabatan: 'CEO PT. Gudang Garam',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur. Vitae dui aliquam malesuada mattis in neque aliquet eu.',
    },
    {
      id: 3,
      images: Avatar,
      nama: 'Andrie Bogor',
      jabatan: 'CEO PT. Paragon',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur. Vitae dui aliquam malesuada mattis in neque aliquet eu.',
    },
  ];

  return (
    <section className="font-poppins">
      <section className="section4 flex flex-col justify-center font-poppins items-center py-[70px] gap-y-[70px] max-w-[70rem] mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-semibold font-clashDisplay">Love From Our Travelers</h1>
          <p className="text-[14px]">Someone customers are our biggest ads</p>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-8 gap-y-10">
          {comments.map((data) => (
            <div key={data.id} className="flex flex-col justify-start gap-3 p-8 bg-white shadow-xl rounded-2xl">
              <img src={data.images} alt={data.nama} className="w-[70px] rounded-full" />
              <div className="text-[14px] flex flex-col gap-1">
                <p className="text-myBlack">{data.deskripsi}</p>
                <p className="font-bold text-[17px]">{data.nama}</p>
                <small className="text-slate-400 text-[14px]">{data.jabatan}</small>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Comment;
