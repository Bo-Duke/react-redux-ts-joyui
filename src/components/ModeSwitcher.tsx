import { Option, Select, useColorScheme } from '@mui/joy';

const ModeSwitcher = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <Select
      variant="soft"
      value={mode}
      onChange={(_, newMode) => {
        setMode(newMode);
      }}
    >
      <Option value="system">System</Option>
      <Option value="light">Light</Option>
      <Option value="dark">Dark</Option>
    </Select>
  );
};

export default ModeSwitcher;
