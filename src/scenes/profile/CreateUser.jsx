import Header from "../../components/Header";
import { Box, styled, TextField, useTheme, Stack, Button } from "@mui/material";
import { tokens } from "../../theme";

const StyledTextField = styled(TextField)(({ colors }) => ({
  ".MuiFormLabel-root.Mui-focused": {
    color: colors.greenAccent[500],
  },
  ".MuiFilledInput-root::after": {
    borderBottom: `2px solid ${colors.greenAccent[500]}`,
  },
}));

//setting some props for TextField:
StyledTextField.defaultProps = {
  variant: "filled",
  fullWidth: true,
};

const CreateUser = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Create User" subtitle="Create a new user profile" />
      <Stack spacing={2}>
        <Box display="flex" gap={2}>
          <StyledTextField colors={colors} label="First Name" />
          <StyledTextField colors={colors} label="Last Name" />
        </Box>
        <StyledTextField colors={colors} label="Email" />
        <StyledTextField colors={colors} label="Contact Number" />
        <StyledTextField colors={colors} label="Address" />
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" color="secondary">
            Create New User
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default CreateUser;
