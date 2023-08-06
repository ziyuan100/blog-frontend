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
  