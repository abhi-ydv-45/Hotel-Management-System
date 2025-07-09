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