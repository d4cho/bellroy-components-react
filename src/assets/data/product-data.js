import twb1 from '../images/Products/TokyoWorkBag/twb1.avif';
import twb2 from '../images/Products/TokyoWorkBag/twb2.avif';
import twb3 from '../images/Products/TokyoWorkBag/twb3.avif';
import twb4 from '../images/Products/TokyoWorkBag/twb4.avif';
import twbinside from '../images/Products/TokyoWorkBag/twbinside.avif';
import ls1 from '../images/Products/LiteSling/ls1.avif';
import ls2 from '../images/Products/LiteSling/ls2.avif';
import ls3 from '../images/Products/LiteSling/ls3.avif';
import lsinside from '../images/Products/LiteSling/lsinside.avif';
import cb1 from '../images/Products/ClassicBackpack/cb1.avif';
import cb2 from '../images/Products/ClassicBackpack/cb2.avif';
import cb3 from '../images/Products/ClassicBackpack/cb3.avif';
import cb4 from '../images/Products/ClassicBackpack/cb4.avif';
import cb5 from '../images/Products/ClassicBackpack/cb5.avif';
import cb6 from '../images/Products/ClassicBackpack/cb6.avif';
import cbinside from '../images/Products/ClassicBackpack/cbinside.avif';
import vs1 from '../images/Products/VentureSling/vs1.avif';
import vs2 from '../images/Products/VentureSling/vs2.avif';
import vs3 from '../images/Products/VentureSling/vs3.avif';
import vs4 from '../images/Products/VentureSling/vs4.avif';
import vs5 from '../images/Products/VentureSling/vs5.avif';
import vsinside from '../images/Products/VentureSling/vsinside.avif';

export const productData = [
    {
        id: '1',
        title: 'Tokyo Work Bag',
        price: 'C$229',
        desc: '20L, 16" laptop / A clean commuter with clever storage',
        specialTag: 'NEW',
        images: [
            { url: twb1, colorCode: '#1b1c1e', colorName: 'Midnight' },
            { url: twb2, colorCode: '#212e41', colorName: 'Navy' },
            { url: twb3, colorCode: '#6c7f4d', colorName: 'Ranger Green' },
            { url: twb4, colorCode: '#5b5b58', colorName: 'Slate' },
        ],
        insideImage: twbinside,
    },
    {
        id: '2',
        title: 'Lite Sling',
        price: 'C$99',
        desc: '7L / A flexible, lightweight sling for hands-free excursions',
        specialTag: 'BEST\nSELLER',
        images: [
            { url: ls1, colorCode: '#e9e6de', colorName: 'Chalk' },
            { url: ls2, colorCode: '#e2ae4b', colorName: 'Copper' },
            { url: ls3, colorCode: '#1b1c1e', colorName: 'Shadow' },
        ],
        insideImage: lsinside,
    },
    {
        id: '3',
        title: 'Classic Backpack',
        price: 'C$175',
        desc: '20L, 16" laptop / A modern take on a familiar style',
        specialTag: 'BEST\nSELLER',
        images: [
            { url: cb1, colorCode: '#363636', colorName: 'Black' },
            { url: cb2, colorCode: '#b45628', colorName: 'Bronze' },
            { url: cb3, colorCode: '#212e41', colorName: 'Navy' },
            { url: cb4, colorCode: '#6c7f4d', colorName: 'Ranger Green' },
            { url: cb5, colorCode: '#e4d9cb', colorName: 'Saltbush' },
            { url: cb6, colorCode: '#5b5b58', colorName: 'Slate' },
        ],
        insideImage: cbinside,
    },
    {
        id: '4',
        title: 'Venture Sling 9L',
        price: 'C$169',
        desc: '9L / A big, organized sling for all-day adventures',
        specialTag: 'LEATHER FREE',
        images: [
            { url: vs1, colorCode: '#1b1c1e', colorName: 'Midnight' },
            { url: vs2, colorCode: '#212e41', colorName: 'Nightsky' },
            { url: vs3, colorCode: '#454653', colorName: 'Basalt' },
            { url: vs4, colorCode: '#6c7f4d', colorName: 'Ranger Green' },
            { url: vs5, colorCode: '#b45628', colorName: 'Bronze' },
        ],
        insideImage: vsinside,
    },
];
