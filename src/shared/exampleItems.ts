import { ItemDetails } from 'state/reducers';

export const exampleItems: ItemDetails[] = [
  {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    discount: 0.5,
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withsand everything the weather can offer.",
    imgPath: 'images/image-product-1-thumbnail.jpg',
    quantity: 3,
    price: 125,
    images: [
      {
        mainPath: 'images/image-product-1.jpg',
        thumbnailPath: 'images/image-product-1-thumbnail.jpg',
      },
      {
        mainPath: 'images/image-product-2.jpg',
        thumbnailPath: 'images/image-product-2-thumbnail.jpg',
      },
      {
        mainPath: 'images/image-product-3.jpg',
        thumbnailPath: 'images/image-product-3-thumbnail.jpg',
      },
      {
        mainPath: 'images/image-product-4.jpg',
        thumbnailPath: 'images/image-product-4-thumbnail.jpg',
      },
    ],
  },
  {
    id: 2,
    name: 'Spring Limited Edition Sneakers',
    imgPath: 'images/image-product-2-thumbnail.jpg',
    discount: 0,
    quantity: 2,
    price: 123.12,
    images: [
      {
        mainPath: 'images/image-product-1.jpg',
        thumbnailPath: 'images/image-product-1-thumbnail.jpg',
      },
      {
        mainPath: 'images/image-product-2.jpg',
        thumbnailPath: 'images/image-product-2-thumbnail.jpg',
      },
      {
        mainPath: 'images/image-product-3.jpg',
        thumbnailPath: 'images/image-product-3-thumbnail.jpg',
      },
      {
        mainPath: 'images/image-product-4.jpg',
        thumbnailPath: 'images/image-product-4-thumbnail.jpg',
      },
    ],
  },
];
