/* eslint-disable react/prop-types */
import { Container, Box, Typography, Divider, Link, Fab } from "@mui/material"
import { useState } from "react"
import EditIcon from '@mui/icons-material/Edit';

export default function Post({ postObj }) {
    const [isHovering, setIsHovering] = useState(false);

    return (
    // PREVIOUS IMPLEMENTATION OF A POST, SINCE THE BOX'S WIDTH IS 100%, ITS NOT CONDUCIVE FOR HOVERING (isHovering will be almost always true for some post)
    // <Container maxWidth={false} sx={{m: 'auto', bgcolor: 'secondary.main'}} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
    //     <Box sx={{width: 1, p: 2, m: 0, display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center'}}>
    //         <Typography variant='h3' sx={{textAlign: 'center', my: 1}}>
    //             {postObj.title}
    //         </Typography>
    //         <Box className="tags">
    //         Tags:
    //             {postObj.tags.map((tag, i) => (
    //                 // the link href might come back to bite me in the ass, since tag can have spacing.. TODO fix
    //                 <Link key={i} href={`/category/${tag}`} sx={{ml: 1}}>{tag.toUpperCase()}</Link>
    //             ))}
    //         </Box>
    //         <Typography variant='body1' sx={{maxWidth: 1000, my: 3}}>
    //             {postObj.content}
    //         </Typography>
    //         <Divider sx={{width: 1000, my: 2, borderBottomWidth: 1 , bgcolor: 'primary.main'}}/>
    //     </Box>
    //     {isHovering && <div>ISHOVERING</div>}
    // </Container>

        <Container maxWidth={false} sx={{m: 'auto', bgcolor: 'secondary.main', display: "flex", justifyContent: "center"}}>
            <Box 
                sx={{ m: 0, display: "inline-block", position: "relative"}}
                onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
            >
                <Typography variant='h3' sx={{textAlign: 'center', my: 1, pt: 3}}>
                    {postObj.title}
                </Typography>
                <Box className="tags" sx={{textAlign: 'center'}}>
                    Tags:
                    {postObj.tags.map((tag, i) => (
                        // the link href might come back to bite me in the ass, since tag can have spacing.. TODO fix
                        <Link key={i} href={`/category/${tag}`} sx={{ml: 1}}>{tag.toUpperCase()}</Link>
                    ))}
                </Box>
                <Box className="content" sx={{my: 3, pb: 2, display: "flex", justifyContent: "center"}}>
                    <Typography variant='body1' sx={{maxWidth: 1000, display: "inline-block", }}>
                        {postObj.content}
                    </Typography>
                </Box>
                
                <Divider sx={{width: 1000, mt: 2, borderBottomWidth: 1 , bgcolor: 'primary.main'}}/>

                {
                isHovering && 
                <Fab size="small" color="primary" sx={{position: "absolute", top: 10, right: 15}} href={`/edit/${postObj._id}`}>
                    <EditIcon />
                </Fab>
                }
            </Box>
        </Container>
    )
}

// TODO: show edited timestamp/created timestamps at the bottom/top of each post