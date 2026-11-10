import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import ArtworkCarousel from './ArtworkCarousel';

afterEach(cleanup);
const artwork = {title: 'Anxiety', image: 'first.jpg', secondaryImage: 'second.jpg'};

test('dots and arrow keys switch between both artwork views', () => {
  const {getByRole, getByLabelText} = render(<ArtworkCarousel artwork={artwork} />);
  expect(getByRole('img').getAttribute('src')).toBe('first.jpg');
  fireEvent.click(getByLabelText('Show image 2 of 2'));
  expect(getByRole('img').getAttribute('src')).toBe('second.jpg');
  expect(getByLabelText('Show image 2 of 2').getAttribute('aria-current')).toBe('true');
  fireEvent.keyDown(getByLabelText('Show image 2 of 2'), {key: 'ArrowRight'});
  expect(getByRole('img').getAttribute('src')).toBe('first.jpg');
  fireEvent.click(getByLabelText('Previous image'));
  expect(getByRole('img').getAttribute('src')).toBe('second.jpg');
});

test('swiping switches views', () => {
  const {getByRole} = render(<ArtworkCarousel artwork={artwork} />);
  const frame = getByRole('img').parentElement;
  fireEvent.touchStart(frame, {touches: [{clientX: 200}]});
  fireEvent.touchEnd(frame, {changedTouches: [{clientX: 80}]});
  expect(getByRole('img').getAttribute('src')).toBe('second.jpg');
});

test('a single image has no carousel controls', () => {
  const {getByRole, queryByLabelText} = render(<ArtworkCarousel artwork={{...artwork, secondaryImage: undefined}} />);
  expect(getByRole('img').getAttribute('src')).toBe('first.jpg');
  expect(queryByLabelText('Next image')).toBeNull();
  expect(queryByLabelText('Choose image')).toBeNull();
});
