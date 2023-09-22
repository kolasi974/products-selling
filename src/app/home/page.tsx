"use client";
import React from "react";
import NavBar from "./navigation";

type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  alt: string;
};

export default function HomePage() {
  const produts: Product[] = [
    {
      id: 1,
      name: "Earthen Bottle",
      img: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      alt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      price: 48,
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      img: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
      alt: "Olive drab green insulated bottle with flared screw lid and flat top.",
      price: 35,
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      img: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      alt: "Person using a pen to cross a task off a productivity paper card.",
      price: 89,
    },
    {
      id: 4,
      name: "Machined Mechanical Pencil",
      img: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
      price: 35,
    },
    {
      id: 5,
      name: "Hand Painted Blue Bottle",
      img: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg",
      alt: "Ceramic bottle with blue glaze dripping down one side and cork stopper.",
      price: 29,
    },
    {
      id: 6,
      name: "Machined Pen",
      img: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg",
      alt: "Hand holding black machined steel pen with hexagonal shaped barrel and engraved brand logo.",
      price: 35,
    },
    {
      id: 7,
      name: "z",
      img: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg",
      alt: "s",
      price: 35,
    },
    {
      id: 8,
      name: "x",
      img: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg",
      alt: "c",
      price: 35,
    },
  ];

  const renderItems = () => {
    return produts.map((item) => {
      return (
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src={item.img}
              alt={item.alt}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            ${item.price}
          </p>
        </a>
      );
    });
  };

  return (
    <div className="bg-white min-h-screen" id="thebody">
      <NavBar />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div
          className={`grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${
            produts.length / 2
          } xl:gap-x-8`}
        >
          {renderItems()}
        </div>
      </div>
    </div>
  );
}
