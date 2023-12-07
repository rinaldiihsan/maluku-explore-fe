import React from 'react';
import { Link } from 'react-router-dom';
import papeda from '../../assets/papeda.jpg';

const BlogDetail = () => {
  const currentDate = new Date();
  const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const formattedDate = dateFormatter.format(currentDate);

  return (
    <section className="font-poppins flex flex-col justify-center items-center gap-y-8">
      <img
        src={papeda}
        alt="Papeda"
        className="rounded-md "
        style={{
          width: '1130px',
          height: '504px',
          borderRadius: '52px',
        }}
      />
      <div className="flex items-center gap-2">
        <span role="img" aria-label="Calendar Icon">
          <svg width="18" height="18" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3335 3.33331V8.33331" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26.6665 3.33331V8.33331" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.8335 15.15H34.1668" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M35 14.1666V28.3333C35 33.3333 32.5 36.6666 26.6667 36.6666H13.3333C7.5 36.6666 5 33.3333 5 28.3333V14.1666C5 9.16665 7.5 5.83331 13.3333 5.83331H26.6667C32.5 5.83331 35 9.16665 35 14.1666Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 22.5V27.5" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25 22.5V27.5" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 22.5V27.5" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span className="text-gray-500">{formattedDate}</span>
      </div>
      <p className="text-center">
        Papeda is a traditional dish from Maluku, a province in Indonesia. It is a staple food that holds cultural significance in the region. Papeda is made from sago starch, which is extracted from the pith of the sago palm tree. The preparation process involves mixing the sago starch with water and stirring it continuously until it forms a thick, glue-like consistency.
        <br /><br />
        The dish is typically served with various side dishes, such as fish or other seafood, along with a flavorful sauce made from ingredients like turmeric, lime leaves, and lemongrass. The accompaniments add taste and variety to the otherwise plain and starchy papeda.
        <br /><br />
        Papeda is known for its unique texture, which is quite different from other staple foods in Indonesia. It has a sticky and stretchy consistency, and eating it often requires using one's hands to pull and shape the papeda into bite-sized portions. This method of consumption is a cultural tradition and adds to the communal and interactive nature of sharing a meal in Maluku.
        <br /><br />
        The dish has deep cultural roots in Maluku and is often prepared during special occasions, celebrations, or family gatherings. Papeda reflects the rich culinary heritage of the region and showcases the use of locally available ingredients. Its preparation and consumption are not only about sustenance but also about preserving and passing down cultural practices from generation to generation.
      </p>
      <Link to="/blog" className="text-myDarkGreen font-bold mx-2 hover:text-myGreen1">
        Back to Blog
      </Link>
    </section>
  );
};

export default BlogDetail;
