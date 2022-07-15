import { ThemeProvider } from 'styled-components';
import Card from './components/card';
import Header from './components/header';
import Footer from './components/Footer';
import { Container } from './components/styles/container.style'
import GlobalStyles from './components/styles/Global';
import content from './content';

const theme = {
  colors: {
    header: '#BDE0FE',
    body: '#fff',
    footer: '#003333'
  },
  mobile: "768px",
}
function App() {
  return (
    <ThemeProvider theme= {theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
        {content.map((item, index) =>(
          <Card key={index} item={item}/>
         ))}
        </Container>
        <Footer />
      
      </>
    </ThemeProvider>
  );
}

export default App;
