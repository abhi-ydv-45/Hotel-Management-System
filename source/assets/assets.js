import logo from './logo.svg';
import headLogo from './headlogo.svg';
import heroImage from './heroImage.png';
import starIconFilled from './starIconFilled.svg';
import locationIcon from './locationIcon.svg';
import hotelRoom1 from './hotelRoom1.jpg';
import hotelRoom2 from './hotelRoom2.jpg';
import hotelRoom3 from './hotelRoom3.jpg';
import hotelRoom4 from './hotelRoom4.jpg';
import offer1 from './offer1.jpg';
import offer2 from './offer2.jpg';
import offer3 from './offer3.jpg';
import instagramIcon from './instagramIcon.svg';
import facebookIcon from './facebookIcon.svg';
import twitterIcon from './twitterIcon.svg';
import linkendinIcon from './linkendinIcon.svg';

export const assets = {
  logo,
  headLogo,
  heroImage,
  starIconFilled,
  locationIcon,
  hotelRoom1,
  hotelRoom2,
  hotelRoom3,
  hotelRoom4,
  offer1,
  offer2,
  offer3,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  linkendinIcon,
};

export const roomsDummyData = [
  {
    _id: "1",
    images: [assets.hotelRoom1],
    hotel: {
      name: "Hotel Paradise",
      address: "123 Beach Ave, Miami, FL"
    },
    pricePerNight: 120
  },
  {
    _id: "2",
    images: [assets.hotelRoom3],
    hotel: {
      name: "Mountain Retreat",
      address: "456 Mountain Rd, Denver, CO"
    },
    pricePerNight: 150
  },
  {
    _id: "3",
    images: [assets.hotelRoom2],
    hotel: {
      name: "City Lights Hotel",
      address: "789 Downtown St, New York, NY"
    },
    pricePerNight: 200
  },
  {
    _id: "4",
    images: [assets.hotelRoom4],
    hotel: {
      name: "Desert Oasis",
      address: "321 Desert Dr, Phoenix, AZ"
    },
    pricePerNight: 110
  }
];

export const hotelsDummyData = [
  {
    id: 1,
    name: 'EliteStay Grand Hotel',
    location: 'New York, USA',
    price: 180,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'A luxury hotel in the heart of New York City with world-class amenities.'
  },
  {
    id: 2,
    name: 'EliteStay Beach Resort',
    location: 'Malibu, USA',
    price: 250,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    description: 'Enjoy the sun and sand at this beautiful Malibu beach resort.'
  },
  {
    id: 3,
    name: 'EliteStay Mountain Inn',
    location: 'Aspen, USA',
    price: 150,
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
    description: 'A cozy inn nestled in the mountains of Aspen.'
  },
  {
    id: 4,
    name: 'EliteStay City Suites',
    location: 'London, UK',
    price: 200,
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
    description: 'Modern suites in the heart of London.'
  },
]; 