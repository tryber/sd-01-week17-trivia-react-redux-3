import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import gravatarAPI from '../services/gravatarAPI';

describe('1.', () => {
  test('gravatarAPI receives a email and return a link with hash code', () => {
  expect(gravatarAPI('beau@dentedreality.com.au')).toBe('https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50');
  });
})
