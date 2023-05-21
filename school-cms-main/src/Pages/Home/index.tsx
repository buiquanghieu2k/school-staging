import { Box } from "@mui/material";
import useHome from "./services";

export default function HomePage() {
  const { currentUser } = useHome();

  return <Box>Xin chào {currentUser.user.username}</Box>;
}
