const productData = [
  {
    id: 1,
    name: "Apple",
    description:
      "A sweet and crunchy fruit that's rich in fiber and nutrients.",
    price: 0.99,
    image:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80://www.washingtonapplecountry.com/wp-content/uploads/2020/05/gala-apples-web.jpg",
    category: "Fresh Produce",
  },
  {
    id: 2,
    name: "Banana",
    description:
      "A soft and creamy fruit that's high in potassium and vitamins.",
    price: 0.49,
    image:
      "https://www.organicauthority.com/.image/t_share/MTc0MzAzMjE0NjU0MTcyNzA/bananas.jpg",
    category: "Fresh Produce",
  },
  {
    id: 3,
    name: "Orange",
    description:
      "A juicy and tangy fruit that's packed with vitamin C and antioxidants.",
    price: 0.79,
    image:
      "https://www.simplyrecipes.com/thmb/gf7bVPBV4ITiytO2g5vP56czLKw=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2009__01__how-to-segment-an-orange-horiz-a-2000-788cc0a64ce04d958301ae883c91373b.jpg",
    category: "Fresh Produce",
  },
  {
    id: 4,
    name: "Strawberry",
    description:
      "A sweet and juicy fruit that's rich in vitamin C and antioxidants.",
    price: 2.99,
    image:
      "https://www.thespruceeats.com/thmb/0g03RXfC94aVz_sI0Xh7lAVJjSk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-keep-strawberries-fresh-1388438-hero-01-5b875b3d46e0fb0050a1487b.jpg",
    category: "Fresh Produce",
  },
  {
    id: 5,
    name: "Grapes",
    description:
      "A small and sweet fruit that's rich in antioxidants and polyphenols.",
    price: 1.99,
    image:
      "https://www.healthline.com/hlcmsresource/images/AN_images/AN19-Grapes-732x549-Thumb.jpg",
    category: "Fresh Produce",
  },
  {
    id: 6,
    name: "Citrus",
    description:
      "A small and sweet fruit that's rich in antioxidants and polyphenols.",
    price: 3.99,
    image:
      "https://www.healthline.com/hlcmsresource/images/AN_images/AN19-Grapes-732x549-Thumb.jpg",
    category: "Fresh Produce",
  },
];


export default function getProducts() {
    return productData;
  }