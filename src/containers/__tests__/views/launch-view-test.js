/**
 * Test to check if the component renders correctly
 */
/* global it expect jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import LaunchView from '@containers/launch/LaunchView';

// Login prop expects a promise
const mockPromise = new Promise((resolve) => {
  resolve();
});

it('LaunchView renders correctly', () => {
  const tree = renderer.create(
    <LaunchView login={() => mockPromise} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
