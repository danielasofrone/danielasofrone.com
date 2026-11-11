import React from 'react';
import anxiety1 from '../assets/paintings/Anxiety-1 60x80.png';
import anxiety2 from '../assets/paintings/Anxiety-2 60x80.jpg';
import butterflies1 from '../assets/paintings/Butterflies-1 40x50.jpg';
import butterflies2 from '../assets/paintings/Butterflies-2 40x50.jpg';
import butterflyCaught1 from '../assets/paintings/Butterfly caught-1 60x60.jpg';
import butterflyCaught2 from '../assets/paintings/Butterfly caught-2 60x60.jpg';
import choice1 from '../assets/paintings/Choice-1 70x70.jpg';
import choice2 from '../assets/paintings/Choice-2 70x70.jpg';
import contained1 from '../assets/paintings/Contained-1 70x50.jpg';
import contained2 from '../assets/paintings/Contained-2 70x50.jpg';
import crush1 from '../assets/paintings/Crush-1 60x80.jpg';
import crush2 from '../assets/paintings/Crush-2 60x80.jpg';
import inLove1 from '../assets/paintings/In Love-1 50x60.jpg';
import inLove2 from '../assets/paintings/In Love-2 50x60.jpg';
import phantasy1 from '../assets/paintings/Phantasy-1 70x70.jpg';
import phantasy2 from '../assets/paintings/Phantasy-2 70x70.jpg';
import tempusFugit1 from '../assets/paintings/Tempus Fugit-1 80x60.jpg';
import tempusFugit2 from '../assets/paintings/Tempus Fugit-2 80x60.jpg';
import relationship1 from '../assets/paintings/The Definition of a Relationship-1 70x70.jpg';
import relationship2 from '../assets/paintings/The Definition of a Relationship-2 70x70.jpg';
import wasteland1 from '../assets/paintings/Wasteland-1 60x80.jpg';
import wasteland2 from '../assets/paintings/Wasteland-2 60x80.jpg';
import waterIngestionTest1 from '../assets/paintings/Water Ingestion Test-1 100x100.JPG';
import roomPreview1 from '../assets/rooms/anxiety-room.png';
import roomPreview2 from '../assets/rooms/butterflies-room.png';
import roomPreview3 from '../assets/rooms/butterfly-caught-room.png';
import roomPreview4 from '../assets/rooms/choice-room.png';
import roomPreview5 from '../assets/rooms/contained-room.png';
import roomPreview6 from '../assets/rooms/crush-room.png';
import roomPreview7 from '../assets/rooms/in-love-room.png';
import roomPreview8 from '../assets/rooms/phantasy-room.png';
import roomPreview9 from '../assets/rooms/tempus-fugit-room.png';
import roomPreview10 from '../assets/rooms/the-definition-of-a-relationship-room.png';
import roomPreview11 from '../assets/rooms/wasteland-room.png';
import roomPreview12 from '../assets/rooms/water-ingestion-test-room.png';
import waterIngestionRoom from '../assets/hero-water-ingestion-test.png';

export const artworks = [
  {
    id: 'anxiety',
    roomImage: roomPreview1,
    title: 'Anxiety',
    image: anxiety1,
    secondaryImage: anxiety2,
    dimensions: {width: 60, height: 80, unit: 'cm'},
  },
  {
    id: 'butterflies',
    roomImage: roomPreview2,
    title: 'Butterflies',
    image: butterflies1,
    secondaryImage: butterflies2,
    dimensions: {width: 40, height: 50, unit: 'cm'},
  },
  {
    id: 'butterfly-caught',
    roomImage: roomPreview3,
    title: 'Butterfly Caught',
    image: butterflyCaught1,
    secondaryImage: butterflyCaught2,
    dimensions: {width: 60, height: 60, unit: 'cm'},
  },
  {
    id: 'choice',
    roomImage: roomPreview4,
    title: 'Choice',
    image: choice1,
    secondaryImage: choice2,
    dimensions: {width: 70, height: 70, unit: 'cm'},
  },
  {
    id: 'contained',
    roomImage: roomPreview5,
    title: 'Contained',
    image: contained1,
    secondaryImage: contained2,
    dimensions: {width: 70, height: 50, unit: 'cm'},
  },
  {
    id: 'crush',
    roomImage: roomPreview6,
    title: 'Crush',
    image: crush1,
    secondaryImage: crush2,
    dimensions: {width: 60, height: 80, unit: 'cm'},
  },
  {
    id: 'in-love',
    roomImage: roomPreview7,
    title: 'In Love',
    image: inLove1,
    secondaryImage: inLove2,
    dimensions: {width: 50, height: 60, unit: 'cm'},
  },
  {
    id: 'phantasy',
    roomImage: roomPreview8,
    title: 'Phantasy',
    image: phantasy1,
    secondaryImage: phantasy2,
    dimensions: {width: 70, height: 70, unit: 'cm'},
  },
  {
    id: 'tempus-fugit',
    roomImage: roomPreview9,
    title: 'Tempus Fugit',
    image: tempusFugit1,
    secondaryImage: tempusFugit2,
    dimensions: {width: 80, height: 60, unit: 'cm'},
  },
  {
    id: 'the-definition-of-a-relationship',
    roomImage: roomPreview10,
    title: 'The Definition of a Relationship',
    image: relationship1,
    secondaryImage: relationship2,
    dimensions: {width: 70, height: 70, unit: 'cm'},
  },
  {
    id: 'wasteland',
    roomImage: roomPreview11,
    title: 'Wasteland',
    image: wasteland1,
    secondaryImage: wasteland2,
    dimensions: {width: 60, height: 80, unit: 'cm'},
  },
  {
    id: 'water-ingestion-test',
    roomImage: roomPreview12,
    title: 'Water Ingestion Test',
    image: waterIngestionTest1,
    secondaryImage: waterIngestionRoom,
    dimensions: {width: 100, height: 100, unit: 'cm'},
  },
];
