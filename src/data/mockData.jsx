const mockBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publishYear: 1925,
    pages: 180,
    description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    coverImage: "https://z-cdn-media.chatglm.cn/files/453b8500-4736-4f8a-b010-5cc4c94e2596_pasted_image_1756575213599.png?auth_key=1788112062-72680c7dcad74873aab0d3957e38c7b1-0-a09b91627a7c0db033ff94623e7bffd1",
    available: true,
    price: 12.99
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publishYear: 1960,
    pages: 281,
    description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, it has become a classic of modern American literature. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    available: false,
    price: 14.99
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publishYear: 1949,
    pages: 328,
    description: "Nineteen Eighty-Four is a dystopian social science fiction novel by English novelist George Orwell. It was published in 1949 as Orwell's ninth and final book completed in his lifetime. Thematically, Nineteen Eighty-Four centres on the consequences of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviours within society.",
    coverImage: "https://z-cdn-media.chatglm.cn/files/49ef5616-27ff-42ef-b3fe-3a6fa06b4803_pasted_image_1756575151140.png?auth_key=1788112062-2cb0c9d2d16b48e9b705eb9c497140ac-0-41f53b7ca4708ad96b576b8d3091cb09",
    available: true,
    price: 13.99
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publishYear: 1813,
    pages: 432,
    description: "Pride and Prejudice is an 1813 romantic novel by Jane Austen. It charts the emotional development of protagonist Elizabeth Bennet, who learns the error of making hasty judgments and comes to appreciate the difference between the superficial and the essential.",
    coverImage: "https://z-cdn-media.chatglm.cn/files/bb74d518-3a87-44d9-be4f-58fd2c789d1a_pasted_image_1756575334061.png?auth_key=1788112062-89ff3b9a92a14ea1a143ded3edba0b29-0-b45226690bf694a245fc3790b426a797",
    available: true,
    price: 11.99
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishYear: 1937,
    pages: 310,
    description: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.",
    coverImage: "https://z-cdn-media.chatglm.cn/files/5be361e8-c683-468c-a1a1-1554188c4a1f_pasted_image_1756575389678.png?auth_key=1788112062-90ae05c62c56426790fcbaa6d291435e-0-16d4c04307fc53268018bf1585ccb7b2",
    available: true,
    price: 15.99
  },
  {
    id: 6,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    publishYear: 1997,
    pages: 223,
    description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.",
    coverImage: "https://z-cdn-media.chatglm.cn/files/a9b7eb9a-2f65-4740-b31d-36add0957892_pasted_image_1756575431407.png?auth_key=1788112062-dd83efdc3c9e4af3aa812aab7d5c1e0e-0-334928e066f05c703c4739bea61365aa",
    available: false,
    price: 16.99
  },
  {
    id: 7,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    publishYear: 1951,
    pages: 277,
    description: "The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. It was originally intended for adults but is often read by adolescents for its themes of angst, alienation, and as a critique on the superficiality of society.",
    coverImage: "https://z-cdn-media.chatglm.cn/files/cd30138f-ee58-4ad8-870d-eb8b8ccbd60a_pasted_image_1756575477890.png?auth_key=1788112062-dfc1e4636222461aa2f9dd8fc44013db-0-23f5e42b6ba1daaafc053b7336fd8a8a",
    available: true,
    price: 13.49
  },
  {
    id: 8,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishYear: 1954,
    pages: 1216,
    description: "The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work.",
    coverImage: "https://z-cdn-media.chatglm.cn/files/2f8ae13b-d8bd-47e0-ab08-f19ec2b2f44e_pasted_image_1756575527427.png?auth_key=1788112062-9b4cfc187d8648278abdec8f55490673-0-72024c129c454cc1b537adcd545bba1d",
    available: true,
    price: 29.99
  }
];

export default mockBooks;