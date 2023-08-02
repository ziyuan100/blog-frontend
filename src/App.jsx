/* eslint-disable react/prop-types */
import './App.css';
import { AppBar, Box, Toolbar, Typography, IconButton, Button, Container, Divider, Link } from '@mui/material/';
import MenuIcon from '@mui/icons-material/menu';

const posts = [
  {title: "Army I", content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolore sint expedita quibusdam eaque repellat dolorem adipisci minus nisi! Facere aperiam iusto nihil quaerat architecto, ipsa non voluptatem nemo assumenda!
  Illum molestiae fugiat corporis? Provident voluptates nisi amet deserunt asperiores adipisci nam debitis in perferendis rerum ducimus ratione, perspiciatis libero aliquam nulla voluptas, molestiae hic placeat. Magni labore molestiae consectetur?
  Minus nobis similique modi dolores saepe aliquid vel autem quam esse, tempora repudiandae? Laborum qui, rem quisquam quae odio excepturi nam reprehenderit fugiat, quis veritatis ea sapiente numquam, blanditiis placeat?
  Ex illum mollitia, reprehenderit a, molestiae alias, asperiores debitis est quia provident possimus vel. Necessitatibus sed, cumque deleniti, delectus, soluta illo impedit reprehenderit consequuntur nihil sapiente numquam. Perferendis, in vero.
  Quam qui enim iste ratione perspiciatis repellat, iure accusantium ducimus impedit aut illo? Eaque, aliquid ut quis temporibus impedit quam non consectetur iusto fugiat quas ad accusamus mollitia rem placeat?`, tags: ["a"]},
  {title: "Life Update XI", content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolore sint expedita quibusdam eaque repellat dolorem adipisci minus nisi! Facere aperiam iusto nihil quaerat architecto, ipsa non voluptatem nemo assumenda!
  Illum molestiae fugiat corporis? Provident voluptates nisi amet deserunt asperiores adipisci nam debitis in perferendis rerum ducimus ratione, perspiciatis libero aliquam nulla voluptas, molestiae hic placeat. Magni labore molestiae consectetur?
  Minus nobis similique modi dolores saepe aliquid vel autem quam esse, tempora repudiandae? Laborum qui, rem quisquam quae odio excepturi nam reprehenderit fugiat, quis veritatis ea sapiente numquam, blanditiis placeat?
  Ex illum mollitia, reprehenderit a, molestiae alias, asperiores debitis est quia provident possimus vel. Necessitatibus sed, cumque deleniti, delectus, soluta illo impedit reprehenderit consequuntur nihil sapiente numquam. Perferendis, in vero.
  Quam qui enim iste ratione perspiciatis repellat, iure accusantium ducimus impedit aut illo? Eaque, aliquid ut quis temporibus impedit quam non consectetur iusto fugiat quas ad accusamus mollitia rem placeat?`, tags: ["a", "b",]}
]

function App() {

  return (
    <>
      <NavBar />
      {posts.map((post, i) => (
        <Post key={i} postObj={post}/>
      ))}
    </>
  )
}

function Post({ postObj }) {
  return (
    <Container maxWidth={false} sx={{p: 'auto', bgcolor: 'secondary.main'}}>
      <Box sx={{width: 1, p: 2, m: 0, display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant='h3' sx={{textAlign: 'center', my: 1}}>
          {postObj.title}
        </Typography>
        <Box className="tags">
          Tags:
          {postObj.tags.map((link, i) => (
            <Link key={i} sx={{ml: 1}}>{link.toUpperCase()}</Link>
          ))} 
        </Box>
        <Typography variant='body1' sx={{maxWidth: 1000, my: 3}}>
          {postObj.content}
        </Typography>
        <Divider sx={{width: 1000, my: 2, borderBottomWidth: 1 , bgcolor: 'primary.main'}}/>
      </Box>
    </Container>
  )
}

function NavBar(){
  return (
    <AppBar position="sticky" sx={{bgcolor: "primary.main", color:"secondary.main"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  );
}

export default App
