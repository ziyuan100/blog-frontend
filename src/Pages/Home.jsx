import Navbar from "../Components/Navbar"
import Post from "../Components/Post"

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

export default function Home() {
    return (
      <>
        <Navbar />
        {posts.map((post, i) => (
          <Post key={i} postObj={post}/>
        ))}
      </>
    )
  }