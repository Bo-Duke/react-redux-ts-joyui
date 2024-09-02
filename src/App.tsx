import { Container } from '@mui/joy';
import Home from './components/Home';

function App() {
  return (
    <Container
      sx={{
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <Home />
    </Container>
  );
}

export default App;
