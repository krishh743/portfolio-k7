import { Box, useTheme } from "@mui/material";

interface ReactNodeProps {
  children: React.ReactNode;
}

const FormFieldContainer = (props: ReactNodeProps) => {
  const theme = useTheme();
  const { children } = props;
  return (
    <Box
      position={"relative"}
      // mb={"1.5rem"}
      // border={`1px solid ${theme.palette.grey[800]}`}
      // borderRadius={"0.4rem"}
      component={"section"}
      padding={"1.5rem"}
      textAlign={"center"}
      fontSize={"2rem"}
      color={"black"}
      {...props}
    >
      {children}
    </Box>
  );
};

export default FormFieldContainer;
