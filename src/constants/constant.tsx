import { ScrollImagesInterface } from "@/components/images-scroll/Scroll";
import { LinkInterface, PillarData, SocialLinkInterface } from "./interface";
import cnbcTv18 from '@/images/media-coverage/cnbc-tv18.png';
import cnbc from '@/images/media-coverage/cnbc.png';
import dailyHunt from '@/images/media-coverage/daily-hunt.png';
import entrepreneurIndia from '@/images/media-coverage/entrepreneur_india.png';
import hindu from '@/images/media-coverage/hindu.png';
import iiflSecuritiesLimited from '@/images/media-coverage/iifl_securities_limited.png';
import inc42 from '@/images/media-coverage/inc_42.png';
import indianRetailer from '@/images/media-coverage/indian_retailer.png';
import mint from '@/images/media-coverage/mint.png';
import moneyControl from '@/images/media-coverage/money-control.png';
import retailLogoHeader from '@/images/media-coverage/retail-logo-header.png';
import textileValueChain from '@/images/media-coverage/textile-value-chain.png';
import theHinduLogo from '@/images/media-coverage/the-hindu-logo.png';
import yourStory from '@/images/media-coverage/yourstory.png';
import zeeBusiness from '@/images/media-coverage/zee-business.png';
import TwitterIcon from '@/icons/social/Twitter.png';
import YoutubeIcon from '@/icons/social/Youtube.png';
import SpotifyIcon from '@/icons/social/Spotify.png';
import LinkedinIcon from '@/icons/social/LinkedIn.png';
import FacebookIcon from '@/icons/social/Facebook.png';
import InstagramIcon from '@/icons/social/Instagram.png';

import supplier from '@/images/supplier.jpg'
import Assurance from '@/images/assurance.jpg'
import Traceability from '@/images/tracebility.jpg'
import Sustainability from '@/images/sustainability.jpg'

export const links: LinkInterface[] = [
  { url: '/', label: 'Home' },
  { url: '/about-us', label: 'About Us' },
  { url: '/media', label: 'Media' },
  { url: '/contact-us', label: 'Contact Us' },
];

export enum contentTypeEnum {
  BLOG = 'blog',
  NEWS = 'news',
  PODCAST = 'podcast'
}

export const ProgressCardsInfo = [
  {
    title: "Traceability",
    description:
      "We ensure traceability across our supply chain, enhancing transparency and accountability. By collaborating with partners, we track materials back to their source. This strengthens trust and promotes ethical sourcing.",
    imageUrl: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/cotton-plant-closeup-field+1.svg",
  },
  {
    title: "Sustainability",
    description:
      "We works with sustainable yarn manufacturers to help textile companies stay future-ready. We promote best practices in ESG, aiming to create a sustainability map showcasing these manufacturers.",
    imageUrl: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/windmill.png",
  },
  {
    title: "Ethical Sourcing",
    description:
      "We upholds integrity by working with manufacturers committed to transparency and ethical practices. We ensure honesty and accountability in all our operations.",
    imageUrl: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/trust.png",
  },
  {
    title: "Traceability",
    description:
      "We ensure traceability across our supply chain, enhancing transparency and accountability. By collaborating with partners, we track materials back to their source. This strengthens trust and promotes ethical sourcing.",
    imageUrl: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/cotton-plant-closeup-field+1.svg",
  },
  {
    title: "Sustainability",
    description:
      "We works with sustainable yarn manufacturers to help textile companies stay future-ready. We promote best practices in ESG, aiming to create a sustainability map showcasing these manufacturers.",
    imageUrl: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/windmill.png",
  },
  {
    title: "Ethical Sourcing",
    description:
      "We upholds integrity by working with manufacturers committed to transparency and ethical practices. We ensure honesty and accountability in all our operations.",
    imageUrl: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/trust.png",
  },
  {
    title: "Traceability",
    description:
      "We ensure traceability across our supply chain, enhancing transparency and accountability. By collaborating with partners, we track materials back to their source. This strengthens trust and promotes ethical sourcing.",
    imageUrl: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/cotton-plant-closeup-field+1.svg",
  },
  {
    title: "Sustainability",
    description:
      "We works with sustainable yarn manufacturers to help textile companies stay future-ready. We promote best practices in ESG, aiming to create a sustainability map showcasing these manufacturers.",
    imageUrl: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/windmill.png",
  }
];

export const testimonials = [
  {
    title: 'As seen on SharkTank',
    image: 'https://tyb-website-next.s3.ap-south-1.amazonaws.com/sharkTankc1.png',
    // videoUrl: 'https://www.youtube.com/watch?v=Yi7xfOPMVdE',
    highlights: [
      'Seamless Digital Platform',
      'Innovation meets efficiency',
      'Lorem ipsumgive 4 text atleast',
    ],
  },
  {
    title: 'As seen on SharkTank',
    image: 'https://tyb-website-next.s3.ap-south-1.amazonaws.com/sharkTankc1.png',
    // videoUrl: 'https://www.youtube.com/watch?v=Yi7xfOPMVdE',
    highlights: [
      'Seamless Digital Platform',
      'Innovation meets efficiency',
      'Lorem ipsumgive 4 text atleast',
    ],
  },
  {
    title: 'As seen on SharkTank',
    image: 'https://tyb-website-next.s3.ap-south-1.amazonaws.com/sharkTankc1.png',
    // videoUrl: 'https://www.youtube.com/watch?v=Yi7xfOPMVdE',
    highlights: [
      'Seamless Digital Platform',
      'Innovation meets efficiency',
      'Lorem ipsumgive 4 text atleast',
    ],
  },
  {
    title: 'As seen on SharkTank',
    image: 'https://tyb-website-next.s3.ap-south-1.amazonaws.com/sharkTankc1.png',
    // videoUrl: 'https://www.youtube.com/watch?v=Yi7xfOPMVdE',
    highlights: [
      'Seamless Digital Platform',
      'Innovation meets efficiency',
      'Lorem ipsumgive 4 text atleast',
    ],
  },
  {
    title: 'As seen on SharkTank',
    image: 'https://tyb-website-next.s3.ap-south-1.amazonaws.com/sharkTankc1.png',
    // videoUrl: 'https://www.youtube.com/watch?v=Yi7xfOPMVdE',
    highlights: [
      'Seamless Digital Platform',
      'Innovation meets efficiency',
      'Lorem ipsumgive 4 text atleast',
    ],
  },
];

export const sliderCardData = [
  {
    id: "card1",
    title: "Streamlined Order Insights and Tracking",
    image: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/Group+1000003838.png",
    backgroundColor: "#FFFFFF",
    highlights: [
      'Order Tracking Made Easy : Monitor pending and completed orders in real time.',
      'Comprehensive Payment Overview : Stay updated with ongoing, paid, and outstanding payment details.',
      'Quick Status Access : View detailed order statuses at the click of a button.'
    ]
  },
  {
    id: "card2",
    title: "Efficient Vendor Management",
    image: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/Group+1000003832.png",
    backgroundColor: "#FFF3EF",
    highlights: [
      'Comprehensive Vendor List : Access and manage a centralized list of all registered vendors.',
      'Progress Tracking : Easily monitor the completion status of vendor-related activities.',
      'Quick Detail Access : View detailed information for each vendor with a single click.'
    ]
  },
  {
    id: "card3",
    title: "Comprehensive Vendor Details",
    image: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/Screenshot+2025-01-13+at+1.03.26%E2%80%AFPM+2.png",
    backgroundColor: "#FFFFFF",
    highlights: [
      'Detailed Partner Profiles : Access all vital information, including general and departmental data, in a unified view.',
      'Streamlined Interface : Easily navigate and manage partner details without any complexity.',
      'Efficient Collaboration : Strengthen partnerships through transparent and detailed insights.'
    ]
  }

];

export const BuyerFAQ = [
  {
    question: "How can I buy yarn on the platform?",
    answer:
      "Simply browse available yarn listings, compare prices, and place an order directly through our platform. You can also connect with verified sellers for bulk purchases.",
  },
  {
    question: "Is The Yarn Bazaar suitable for bulk orders?",
    answer:
      "Yes, our platform is ideal for both small and large-scale yarn trading, offering competitive prices and secure transactions for bulk orders.",
  },
  {
    question: "What types of yarn can I trade here?",
    answer:
      "You can trade a variety of yarn types, including cotton, polyester, viscose, wool, blended yarns, and more, catering to diverse industry needs.",
  },
  {
    question: "How secure are the transactions on The Yarn Bazaar?",
    answer:
      "We ensure secure payments and transactions through verified sellers and buyers, along with trusted payment gateways and escrow services.",
  },
]

export const SupplierFAQ = [
  {
    question: "How do I list my yarn for sale?",
    answer:
      "If you're a seller, you can register on The Yarn Bazaar, upload your product details, set your pricing, and start reaching potential buyers instantly.",
  },
  {
    question: "Is The Yarn Bazaar suitable for bulk orders?",
    answer:
      "Yes, our platform is ideal for both small and large-scale yarn trading, offering competitive prices and secure transactions for bulk orders.",
  },
  {
    question: "What types of yarn can I trade here?",
    answer:
      "You can trade a variety of yarn types, including cotton, polyester, viscose, wool, blended yarns, and more, catering to diverse industry needs.",
  },
  {
    question: "How secure are the transactions on The Yarn Bazaar?",
    answer:
      "We ensure secure payments and transactions through verified sellers and buyers, along with trusted payment gateways and escrow services.",
  },
]

export const mediaCoverageData: ScrollImagesInterface[] = [
  {
    src: cnbcTv18,
    href: "https://www.youtube.com/watch?v=-xgYfAAq49k",
    alt: "cnbc-logo"
  },
  {
    src: moneyControl,
    href: "https://www.moneycontrol.com/news/trends/lifestyle/book-excerpt-what-are-shark-tank-india-judges-looking-for-in-a-startup-10298991.html",
    alt: "money-control"
  },
  {
    src: yourStory,
    href: "https://yourstory.com/smbstory/b2b-yarn-marketplace-digitising-yarn-textiles-industry",
    alt: "yourstory"
  },
  {
    src: mint,
    href: "https://drive.google.com/file/d/1oJ5aZDjvA9YxyWYWc42DGC9WQOWigxjO/view?usp=sharing",
    alt: "mint"
  },
  {
    src: iiflSecuritiesLimited,
    href: "https://www.indiainfoline.com/article/general-blog/weekly-musings-big-start-up-updates-for-the-week-to-june--1687235233601_1.html",
    alt: "economic-retail"
  },
  {
    src: textileValueChain,
    href: "https://textilevaluechain.in/in-depth-analysis/interviews/start-ups/pratik-the-yarn-bazaar/",
    alt: "textile-excellence"
  },
  {
    src: dailyHunt,
    href: "https://m.dailyhunt.in/news/india/english/yourstory-epaper-yourstory/these+businesse[%E2%80%A6]idea+to+succeed+top+smb+stories+of+the+week-newsid-n199746668",
    alt: "Daily hunt"
  },
  {
    src: cnbc,
    href: "https://youtu.be/d-Ji7p6yQIk",
    alt: "cnbc"
  },
  {
    src: hindu,
    href: "https://www.thehindubusinessline.com/economy/agri-business/online-platform-the-yarn-bazaar-plans-to-take-up-financing-expand-footprint-abroad/article66842574.ece",
    alt: "money-control"
  },
  {
    src: inc42,
    href: "https://inc42.com/buzz/the-yarn-bazaar-bags-funding-to-offer-flexible-financing-options-to-sellers/",
    alt: "Daily hunt"
  },
  {
    src: theHinduLogo,
    href: "https://www.thehindu.com/business/Industry/yarn-bazaar-raises-funds/article66988897.ece",
    alt: "money-control"
  },
  {
    src: indianRetailer,
    href: "https://www.indianretailer.com/news/funding-alert-yarn-bazaar-raises-rs-150-mn-pre-series-round",
    alt: "cnbc"
  },
  {
    src: entrepreneurIndia,
    href: "https://www.entrepreneur.com/en-in/news-and-trends/b2b-managed-marketplace-the-yarn-bazaar-secures-inr-15/454347",
    alt: "entrepreneur"
  },
  {
    src: zeeBusiness,
    href: "https://www.zeebiz.com/hindi/small-business/the-yarn-bazaar-raises-rs-15-cr-in-pre-series-a-round-who-got-four-shark-deal-in-shark-tank-india-132761",
    alt: "zee-business"
  },
  {
    src: retailLogoHeader,
    href: "https://retail.economictimes.indiatimes.com/news/apparel-fashion/apparel/the-yarn-bazaar-raises-rs-150-million-in-pre-series-a-round/101113288",
    alt: "economic-retail"
  }
];

export const testimonialsSay = [
  {
    id: 1,
    name: "John Doe",
    username: "@johndoe",
    image: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/testImage.jpg",
    title: "It was a very good experience",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    company: "Yarn Broker",
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "@janesmith",
    image: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/testImage.jpg",
    title: "Seamless Transactions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    company: "Yarn Broker",
  },
  {
    id: 3,
    name: "John Doe",
    username: "@johndoe",
    image: 'https://tyb-website-next.s3.ap-south-1.amazonaws.com/testImage.jpg',
    title: "It was a very good experience",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    company: "Yarn Broker",
  },
  {
    id: 4,
    name: "Jane Smith",
    username: "@janesmith",
    image: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/testImage.jpg",
    title: "Seamless Transactions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    company: "Yarn Broker",
  },
];

export const PeopleTestimonials = [
  {
    name: 'Hanry',
    username: '@hanry_co',
    image:
      'https://ik.imagekit.io/lnu6zvhsq/assets/customer/img1.jpg?updatedAt=1719642489369',
    text:
      "Switching to Yarn Broker has been a game-changer for our yarn business! Highly recommended!",
  },
  {
    name: 'md khalid',
    username: '@md_khalid',
    image:
      'https://ik.imagekit.io/lnu6zvhsq/assets/customer/img2.jpg?updatedAt=1719642489427',
    text:
      "I was truly impressed by the personalized support from Yarn Broker.Lorem ipsum dolor, sit amet consectetur",
  },
  {
    name: 'Kevin',
    username: '@Kevin_pet',
    image:
      'https://ik.imagekit.io/lnu6zvhsq/assets/customer/img4.jpg?updatedAt=1719642497047',
    text:
      "Highly recommend Yarn Broker for anyone in the yarn industry.Lorem ipsum dolor, sit amet consectetur",
  },
  {
    name: 'Ujval Joshi',
    username: '@ujvaljoshi',
    image:
      'https://ik.imagekit.io/lnu6zvhsq/assets/customer/img5.jpg?updatedAt=1719642496997',
    text:
      "Using Yarn Broker has simplified our operations immensely and expanded our network.",
  },
  {
    name: 'Sebastiaan de With',
    username: '@sdw',
    image:
      'https://ik.imagekit.io/lnu6zvhsq/assets/customer/img6.jpg?updatedAt=1719642497043',
    text:
      "After trying various yarn marketplaces, Yarn Broker stood out for its simplicity and cost-effectiveness",
  },
  {
    name: 'Michal Malewicz',
    username: '@michalmalewicz',
    image:
      'https://ik.imagekit.io/lnu6zvhsq/assets/customer/img7.jpg?updatedAt=1719642497006',
    text:
      "I love how customizable Yarn Broker is! Whether I'm tailoring my buying experience or managing my selling options",
  },
  {
    name: 'Neil Hainsworth',
    username: '@_neilorangepeel',
    image:
      'https://ik.imagekit.io/lnu6zvhsq/assets/customer/img8.jpg?updatedAt=1719642497316',
    text:
      "Why settle for less when Yarn Broker gives you the freedom to choose.Lorem ipsum dolor, sit amet consectetur",
  },
  {
    name: 'Vladimir Kharlampidi',
    username: '@nolimits4web',
    image:
      'https://ik.imagekit.io/lnu6zvhsq/assets/customer/img9.jpg?updatedAt=1719642497408',
    text:
      "Switching to Yarn Broker has saved us significant costs on transactions. Lorem ipsum dolor, sit amet consectetur",
  },
  {
    name: 'Alex Pesenka',
    username: '@alex_pesenka',
    image:
      'https://ik.imagekit.io/lnu6zvhsq/assets/customer/img10.jpg?updatedAt=1719642489417',
    text:
      "With Yarn Broker, we've scaled our yarn business seamlessly. Lorem ipsum dolor, sit amet consectetur"
      ,
  },
];

export const briefHistoryParagraphs = [
  `Have you ever felt frustrated by the opaque and outdated process of buying and selling yarn in the textile industry? Are you tired of spending countless hours and resources on phone calls and one-to-one meetings just to arrive at basics like fair price, delivery terms and payment terms?`,
  `As a textile industry insider I used to feel this way every day, so much so that I decided I would never join this industry.`,
  `The old-fashioned methods of procurement, marketing, distribution, and sales in the industry often result in a lack of transparency and fairness. In short, the supply chain is broken resulting in huge losses for both sellers and buyers. But no more.`,
  `It’s time to change. I, along with a team of like-minded individuals, founded The Yarn Bazaar in 2019. Our vision and mission are clear. We want to organise the textile industry and empower small yarn buyers and suppliers!`,
];

export const IndustryPotentialParagraphs = [
  `With The Yarn Bazaar, you can discover real-time yarn prices, information, and market trends in an instant. Our proprietary processes and flexible unsecured financing options allow yarn sellers to increase their reach and sales with higher margins, and buyers to reduce their raw material & procurement costs saving time and effort.`,
  `Say goodbye to the outdated and opaque methods of buying and selling yarn. Join us at The Yarn Bazaar and take control of your business with ease, transparency, and fairness!`
]
export const TybSocialLinks: SocialLinkInterface[] = [
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/the_yarn_bazaar?t=E1xuC3VG4_v5W4kmm-Cdhg&s=09',
    alt: 'Twitter',
  },
  {
    icon: YoutubeIcon,
    link: 'https://www.youtube.com/c/THEYARNBAZAAR',
    alt: 'Youtube',
  },
  {
    icon: SpotifyIcon,
    link: 'https://open.spotify.com/show/7nrT5bUoBAtJwuLh9S4F40',
    alt: 'Spotify',
  },
  {
    icon: LinkedinIcon,
    link: 'https://www.linkedin.com/company/theyarnbazaar/?viewAsMember=true',
    alt: 'LinkedIn',
  },
  {
    icon: FacebookIcon,
    link: 'https://www.facebook.com/theyarnbazaar/',
    alt: 'Facebook',
  },
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/theyarnbazaar?igshid=YmMyMTA2M2Y=',
    alt: 'Instagram',
  },
];

export const pillarData: PillarData[] = [
  {
    src: supplier,
    alt: 'Best Suppliers',
    title: 'Best Suppliers',
    description: 'Lorem Ipsum Dolor Greta',
  },
  {
    src: Assurance,
    alt: 'Quality Assurance',
    title: 'Quality Assurance',
    description: 'Lorem Ipsum Dolor Greta',
  },
  {
    src: Traceability,
    alt: 'Traceability',
    title: 'Traceability',
    description: 'Lorem Ipsum Dolor Greta',
  },
  {
    src: Sustainability,
    alt: 'Sustainability',
    title: 'Sustainability',
    description: 'Lorem Ipsum Dolor Greta',
  },
];

export const briefHistoryParagraphs = [
  `Have you ever felt frustrated by the opaque and outdated process of buying and selling yarn in the textile industry? Are you tired of spending countless hours and resources on phone calls and one-to-one meetings just to arrive at basics like fair price, delivery terms and payment terms?`,
  `As a textile industry insider I used to feel this way every day, so much so that I decided I would never join this industry.`,
  `The old-fashioned methods of procurement, marketing, distribution, and sales in the industry often result in a lack of transparency and fairness. In short, the supply chain is broken resulting in huge losses for both sellers and buyers. But no more.`,
  `It’s time to change. I, along with a team of like-minded individuals, founded The Yarn Bazaar in 2019. Our vision and mission are clear. We want to organise the textile industry and empower small yarn buyers and suppliers!`,
];

export const IndustryPotentialParagraphs = [
  `With The Yarn Bazaar, you can discover real-time yarn prices, information, and market trends in an instant. Our proprietary processes and flexible unsecured financing options allow yarn sellers to increase their reach and sales with higher margins, and buyers to reduce their raw material & procurement costs saving time and effort.`,
  `Say goodbye to the outdated and opaque methods of buying and selling yarn. Join us at The Yarn Bazaar and take control of your business with ease, transparency, and fairness!`
]