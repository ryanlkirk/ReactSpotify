import { useSelector } from 'react-redux';
import GetLangText from '../src/app/helpers/language';

// Mock the react-redux module
jest.mock('react-redux');

describe('GetLangText', () => {
  it('returns the correct string from the language file', () => {
    // Mock the useSelector hook
    useSelector.mockReturnValue({ value: 'fr' });

    // Define the language file mock
    const frMock = {
      Language: 'French Translation 1',
      Home: 'French Translation 2',
      // ... other translations
    };

    // Mock the language files
    jest.mock('./en', () => ({
      Language: 'English',
      Home: 'Home',
    }));

    jest.mock('./fr', () => frMock);

    // Test the GetLangText function
    expect(GetLangText('Language')).toBe('Français');
    expect(GetLangText('Home')).toBe('Accueil');
    // ... add more test cases for other keys and translations
  });

  it('returns the string from the English language file when language is not French', () => {
    // Mock the useSelector hook
    useSelector.mockReturnValue({ value: 'en' });

    // Define the language file mock
    const enMock = {
      Language: 'English',
      Home: 'Home',
      // ... other translations
    };

    // Mock the language files
    jest.mock('./en', () => enMock);

    // Test the GetLangText function
    expect(GetLangText('Language')).toBe('English');
    expect(GetLangText('Home')).toBe('Home');
    // ... add more test cases for other keys and translations
  });
});
