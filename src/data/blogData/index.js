const blogData = [
  {
    id: 1,
    img:"https://images.unsplash.com/photo-1674574124345-02c525664b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Lorem ipsum dolor sit amet",
    author: "John Smith",
    date: "2022-01-01",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero eget ipsum pharetra laoreet eu ut metus. Vestibulum ac semper velit, vel efficitur mauris. Aliquam erat volutpat. Nam eget mi sit amet tellus sollicitudin dignissim a non sapien. Maecenas porttitor, turpis in dictum sodales, quam enim tristique enim, quis imperdiet augue nibh eget urna. Sed dapibus hendrerit est, sit amet dictum libero ultrices ac. Vivamus ut enim sed odio efficitur consequat. Aliquam bibendum sem quis nunc aliquam viverra.",
  },
  {
    id: 2,
    img:"https://images.unsplash.com/photo-1670272499232-d6c55af87386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Sed ut perspiciatis unde omnis iste natus error",
    author: "Jane Doe",
    date: "2022-01-10",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    id: 3,
    img:"https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "In hac habitasse platea dictumst",
    author: "Bob Johnson",
    date: "2022-01-20",
    content:
      "In hac habitasse platea dictumst. Etiam hendrerit sapien vel sem ultricies consequat. Curabitur non faucibus libero, at rhoncus velit. Nam porttitor lobortis mauris, sed lobortis nisl consequat quis. Sed vel lorem sed quam laoreet luctus. Sed sagittis, quam nec tristique scelerisque, lectus arcu suscipit quam, quis pulvinar nibh nibh at nisi. Suspendisse potenti.",
  },
  {
    id: 4,
    img:"https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Blah Blah Blah",
    author: "Bob Johnson",
    date: "2022-01-20",
    content:
      "In hac habitasse platea dictumst. Etiam hendrerit sapien vel sem ultricies consequat. Curabitur non faucibus libero, at rhoncus velit. Nam porttitor lobortis mauris, sed lobortis nisl consequat quis. Sed vel lorem sed quam laoreet luctus. Sed sagittis, quam nec tristique scelerisque, lectus arcu suscipit quam, quis pulvinar nibh nibh at nisi. Suspendisse potenti.",
  },
  {
    id: 5,
    img:"https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "How to pimp a butterfly",
    author: "Bob Johnson",
    date: "2022-01-20",
    content:
      "In hac habitasse platea dictumst. Etiam hendrerit sapien vel sem ultricies consequat. Curabitur non faucibus libero, at rhoncus velit. Nam porttitor lobortis mauris, sed lobortis nisl consequat quis. Sed vel lorem sed quam laoreet luctus. Sed sagittis, quam nec tristique scelerisque, lectus arcu suscipit quam, quis pulvinar nibh nibh at nisi. Suspendisse potenti.",
  },
  {
    id: 6,
    img:"https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Forest Hill Drive",
    author: "Bob Johnson",
    date: "2022-01-20",
    content:
      "In hac habitasse platea dictumst. Etiam hendrerit sapien vel sem ultricies consequat. Curabitur non faucibus libero, at rhoncus velit. Nam porttitor lobortis mauris, sed lobortis nisl consequat quis. Sed vel lorem sed quam laoreet luctus. Sed sagittis, quam nec tristique scelerisque, lectus arcu suscipit quam, quis pulvinar nibh nibh at nisi. Suspendisse potenti.",
  },
];

export default function getBlogs() {
  return blogData;
}
