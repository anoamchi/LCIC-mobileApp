import { render } from '@testing-library/react-native';
import TimetableScreen from '../app/screens/TimetableScreen';

test('renders TimetableScreen', () => {
  const { toJSON } = render(<TimetableScreen />);
  expect(toJSON()).toBeTruthy();
});
