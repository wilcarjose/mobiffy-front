import type { NavItemType } from '@/components/NavItem';

import { PiPercentFill } from 'react-icons/pi';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';
import { BsBoxFill } from 'react-icons/bs';
import brownsb from '@/images/brownsb.webp';
import brsb from '@/images/brsb.webp';
import dunklow from '@/images/dunklow.webp';
import lebronxx from '@/images/lebronxx.webp';

import airForce1 from '@/images/airForce1.webp';
import blackLebron from '@/images/blackLebron.webp';

import shot1 from '@/images/shots/shot1.webp';
import shot2 from '@/images/shots/shot2.webp';
import shot3 from '@/images/shots/shot3.jpeg';
import shot4 from '@/images/shots/shot4.jpeg';
import shot5 from '@/images/shots/shot5.webp';
import shot6 from '@/images/shots/shot6.jpeg';
import shot7 from '@/images/shots/shot7.webp';

import new_balance from '@/images/new_balance.png';
import new_balance1 from '@/images/new_balance1.webp';
import new_balance2 from '@/images/new_balance2.webp';
import new_balance3 from '@/images/new_balance3.webp';
import new_balance4 from '@/images/new_balance4.webp';
import compass_profile from '@/images/compass_profile.jpeg';
import compass1 from '@/images/compass1.jpg';
import compass2 from '@/images/compass2.jpg';
import compass3 from '@/images/compass3.png';
import compass4 from '@/images/compass4.jpg';

import yellowLow from '@/images/yellowLow.webp';
import nike_profile from '@/images/nike_profile.jpg';
import redlow from '@/images/redlow.webp';

export const topNavLinks: NavItemType[] = [
  {
    id: 'ee46t',
    name: 'Home',
    href: '/home',
  },
  {
    id: 'eerrrt',
    name: 'Blog',
    href: '/blog',
  },
  {
    id: 'eexct',
    name: 'Collections',
    href: '/products',
  },
  {
    id: 'h6ii8g',
    name: 'Contact',
    href: '/contact',
  },
  {
    id: 'h678ty',
    name: 'FAQ',
    href: '/faqs',
  },
  {
    id: 'h6i78g',
    name: 'Checkout',
    href: '/checkout',
  },
  {
    id: 'f678ty',
    name: 'Cart',
    href: '/cart',
  },
  {
    id: 'f678xx',
    name: 'Dashboard',
    href: '/dashboard',
  },
];

export const NavLinks: NavItemType[] = [
  {
    id: 'ee46t',
    name: 'Home',
    href: '/home',
  },
  {
    id: 'eerrrt',
    name: 'Blog',
    href: '/blog',
  },
  {
    id: 'eexct',
    name: 'Collection',
    href: '/products',
  },

  {
    id: 'h6ii8g',
    name: 'Contact',
    href: '/contact',
  },
  {
    id: 'h678ty',
    name: 'FAQ',
    href: '/faqs',
  },
  {
    id: 'h6i78g',
    name: 'Checkout',
    href: '/checkout',
  },
  {
    id: 'f678ty',
    name: 'Cart',
    href: '/cart',
  },
  {
    id: 'f678xx',
    name: 'Dashboard',
    href: '/dashboard',
  },
];


export const shoes = [
  {
    slug: 'airForce1',
    shoeName: 'Air Force 1',
    coverImage: airForce1,
    currentPrice: 199,
    previousPrice: 250,
    shoeCategory: "Men's shoes",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: false,
    shots: [airForce1, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },
  {
    slug: 'blackLebron',
    shoeName: 'Lebron Black',
    coverImage: blackLebron,
    currentPrice: 199,
    previousPrice: 250,
    shoeCategory: "Men's shoes",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: true,
    shots: [blackLebron, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },
  {
    slug: 'brownsb',
    shoeName: 'SB Low Brown',
    coverImage: brownsb,
    currentPrice: 199,
    previousPrice: 250,
    shoeCategory: "Men's shoes",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: false,
    shots: [brownsb, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },
  {
    slug: 'brsb',
    shoeName: 'BRSB',
    coverImage: brsb,
    currentPrice: 199,
    previousPrice: 250,
    shoeCategory: "Men's shoes",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: false,
    shots: [brsb, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },
  {
    slug: 'dunklow',
    shoeName: 'Dunk Low',
    coverImage: dunklow,
    currentPrice: 199,
    previousPrice: 250,
    shoeCategory: "Men's shoes",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: false,
    shots: [dunklow, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },
  {
    slug: 'lebronxx',
    shoeName: 'Lebron XXL',
    coverImage: lebronxx,
    currentPrice: 199,
    previousPrice: 250,
    shoeCategory: "Men's shoes",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: false,
    shots: [lebronxx, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },
];

export const footerData = {
  description:
    'HotKicks was designed and founded in 2023 by Person. The theme is about sneakers ecommerce thet use for shoes selling around the world.',
  footerLinks: [
    {
      title: 'Main Pages',
      links: [
        { href: '/home', name: 'Home' },
        { href: '/products', name: 'Collections' },
        { href: '/cart', name: 'Cart' },
        { href: '/checkout', name: 'Checkout' },
        { href: '/blog', name: 'Blogs' },
      ],
    },
    {
      title: 'Single Pages',
      links: [
        { href: '/product/yellowLow', name: 'Product Single' },
        {
          href: '/blog/the-evolution-of-sneaker-culture-a-historical-perspective',
          name: 'Blog Single',
        },
      ],
    },
    {
      title: 'Other Pages',
      links: [{ href: '/rt', name: 'Not Found' }],
    },
    {
      title: 'Utility Pages',
      links: [
        { href: '/faq', name: 'FAQS' },
        { href: '/contact', name: 'Contact' },
        { href: '/forgot-pass', name: 'Forgot Password' },
        { href: '/login', name: 'Login' },
        { href: '/signup', name: 'Signup' },
      ],
    },
  ],
};

export const footerBannerData = {
  heading: 'BRINGING YOU TO UPDATE WITH FANTASTIC FOOTWEAR',
  description:
    'View all brands of our collection on HotKicks, there is another collection. Please check it out bro, like seriously',
};

export const newsletter = {
  heading: "Don't wanna miss our offers?",
  description:
    'Drop your email below and start receiving the best offers from HotKicks',
};

export const brandsSection = {
  heading: 'The Official Store of The Amazing Brand',
  description:
    'We work together with high quality and famous brands around the world',
  brands: [
    {
      brandName: 'New Balance',
      rating: 4.9,
      reviews: 10334,
      followers: 7.2,
      visitLink: 'https://www.newbalance.com',
      logo: new_balance,
      shoes: [new_balance1, new_balance2, new_balance3, new_balance4],
    },
    {
      brandName: 'Compass',
      rating: 4.9,
      reviews: 10334,
      followers: 8.5,
      visitLink: 'https://www.sepatucompass.com/',
      logo: compass_profile,
      shoes: [compass1, compass2, compass3, compass4],
    },
    {
      brandName: 'Nike',
      rating: 4.9,
      reviews: 10334,
      followers: 11.2,
      visitLink: 'https://nike.com',
      logo: nike_profile,
      shoes: [yellowLow, redlow, dunklow, lebronxx],
    },
  ],
};

export const shoeSizes = [
  'EU36',
  'EU37',
  'EU38',
  'EU39',
  'EU40',
  'EU41',
  'EU42',
  'EU43',
  'EU44',
];
