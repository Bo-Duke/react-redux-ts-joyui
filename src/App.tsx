import { Container } from '@mui/joy';
import Home from './components/Home';
import CustomMap from './components/CustomMap';

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
      <CustomMap width={450} height={200} />
    </Container>
  );
}

export default App;
