import {
  addSettings,
  addURL,
  addName,
  addEmail,
  addLinkImage,
  addDifficulty,
  addTime,
} from '../actions';


test('Test action settings', () => {
  const obj = {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Video Games',
  }
  expect(addSettings(obj)).toEqual({
    type: 'ADD_SETTINGS',
    value: {
      type: 'multiple',
      difficulty: 'medium',
      category: 'Video Games',
    }
  })
})

test('Test action addURL', () => {
  const url = 'https://testing-library.com/docs/example-react-redux';
  expect(addURL(url)).toEqual({
    type: 'ADD_URL',
    URL: 'https://testing-library.com/docs/example-react-redux',
  })
})

test('Test action addName', () => {
  const name = 'Roberto';
  expect(addName(name)).toEqual({
    type: 'ADD_NAME',
    name: 'Roberto',
  })
})

test('Test action addEmail', () => {
  const name = 'Roberto@show.com.br';
  expect(addEmail(name)).toEqual({
    type: 'ADD_EMAIL',
    email: 'Roberto@show.com.br',
  })
})

test('Test action addLinkImage', () => {
  const link = 'www.pudim.com.br';
  expect(addLinkImage(link)).toEqual({
    type: 'ADD_LINK_IMAGE',
    linkImage: 'www.pudim.com.br',
  })
})

test('Test action addDifficulty', () => {
  const difficulty = 'hard';
  expect(addDifficulty(difficulty)).toEqual({
    type: 'ADD_VALUE_DIFFICULTY',
    difficulty: 'hard',
  })
})

test('Test action addDifficulty', () => {
  const time = '30';
  expect(addTime(time)).toEqual({
    type: 'ADD_TIME',
    time: '30',
  })
})

// test('23 - Entrar em uma URL desconhecida exibe a página Not Found', () => {
//   const { getByText, getByAltText } = renderWithRouter(
//     <NotFound />, { route: '/xablau' }
//   );
//   expect(getByText('Page requested not found')).toBeInTheDocument();
//   expect(getByText('Page requested not found').tagName).toBe('H2');
//   const imgError = getByAltText('Pikachu crying because the page requested was not found');
//   expect(imgError).toBeInTheDocument();
//   expect(imgError.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
// });
