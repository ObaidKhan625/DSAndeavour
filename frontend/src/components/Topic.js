import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Stack from '@mui/material/Stack';
// import Divider from '@mui/material/Divider';
// import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

const Topic = (props) => {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  // console.log(props);

  // const theme = createTheme({
  //   palette: {
  //     // mode: 'dark',
  //     primary: {
  //       light: '#757ce8',
  //       main: '#3f50b5',
  //       dark: '#002884',
  //       contrastText: '#fff',
  //     },
  //     secondary: {
  //       light: '#ff7961',
  //       main: '#f44336',
  //       dark: '#ba000d',
  //       contrastText: '#000',
  //     },
  //   },
  // });

  const style = { backgroundColor: props.topic.type };

  return (
    // <ThemeProvider theme={theme}>
      <Card variant="outlined" sx={style}>
        <CardHeader
          // avatar={
          //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //     R
          //   </Avatar>
          // }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.topic.name}
          // subheader="September 14, 2016"
        />
        {/* <CardMedia
          component="img"
          height="194"
          image="https://mui.com/static/images/cards/paella.jpg"
          alt="Paella dish"
        /> */}
        <CardContent>
          {/* <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography> */}
        </CardContent>
      </Card>
    // </ThemeProvider>
  );
}

export default Topic