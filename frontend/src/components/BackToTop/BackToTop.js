import Button from "@mui/material/Button";
import NorthIcon from "@mui/icons-material/North";
import "./BackToTop.css";

const BackToTop = () => {
  return (
    <Button className="back_to_top" onClick={() => window.scrollTo(0, 0)}>
      <NorthIcon />
    </Button>
  );
};

export default BackToTop;