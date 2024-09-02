import { Sheet } from '@mui/joy';
import CustomMap from './components/CustomMap';
import Home from './components/Home';

function App() {
  return (
    <>
      <Sheet
        sx={{
          padding: 5,
          borderRadius: 'md',
          top: 50,
          left: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          position: 'absolute',
          zIndex: 10,
          width: 450,
        }}
      >
        <Home />
      </Sheet>
      <CustomMap width="100dvw" height="100dvh" />
    </>
  );
}

export default App;
