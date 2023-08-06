/* eslint-disable react/prop-types */
import { Container, Box, Typography, Divider, Link } from "@mui/material"

export default function Post({ postObj }) {
    return (
      <Container maxWidth={false} sx={{p: 'auto', bgcolor: 'secondary.main'}}>
        <Box sx={{width: 1, p: 2, m: 0, display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant='h3' sx={{textAlign: 'center', my: 1}}>
            {postObj.title}
          </Typography>
          <Box className="tags">
            Tags:
            {postObj.tags.map((tag, i) => (
              // the link href might come back to bite me in the ass, since tag can have spacing.. TODO fix
              <Link key={i} href={`/category/${tag}`} sx={{ml: 1}}>{tag.toUpperCase()}</Link>
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
  