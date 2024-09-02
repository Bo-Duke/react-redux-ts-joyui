import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  Stack,
  Typography,
} from '@mui/joy';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { increment, selectCount } from './app/slices/counterSlice';
import reactLogo from './assets/react.svg';
import ModeSwitcher from './components/ModeSwitcher';
import viteLogo from '/vite.svg';

function App() {
  const counter = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <Container
      sx={{
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <Stack direction="row" justifyContent="center" gap={5}>
        <Link href="https://vitejs.dev" target="_blank">
          <Box
            component="img"
            src={viteLogo}
            alt="Vite logo"
            sx={{
              width: 70,
            }}
          />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <Box
            component="img"
            src={reactLogo}
            alt="React logo"
            sx={{
              width: 70,
            }}
          />
        </Link>
      </Stack>
      <Typography textAlign="center" level="h1">
        Vite + React + Redux + JoyUI + TS
      </Typography>
      <Card>
        <CardContent>
          <Typography>
            Edit{' '}
            <Typography variant="soft" component="code">
              src/App.tsx
            </Typography>{' '}
            and save to test HMR
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => dispatch(increment())}>Count is {counter}</Button>
          <ModeSwitcher />
        </CardActions>
      </Card>
    </Container>
  );
}

export default App;
