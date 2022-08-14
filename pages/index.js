import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { async } from "@firebase/util";

export default function Home() {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([
    { url: "", alt: "" },
    { url: "", alt: "" },
    { url: "", alt: "" },
    { url: "", alt: "" },
  ]);

  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [about, setAbout] = useState("");
  const [quantityPrice, setQuantityPrice] = useState([
    {
      quantity: "",
      price: "",
    },
    {
      quantity: "",
      price: "",
    },
    {
      quantity: "",
      price: "",
    },
    {
      quantity: "",
      price: "",
    },
    {
      quantity: "",
      price: "",
    },
  ]);
  const [sku, setSku] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState({
    feature: [],
    note: [],
  });
  const [additionalInfo, setAdditionalInfo] = useState({
    weight: "",
    quantity: "",
  });
  const [theme, setTheme] = useState([]);
  const [format, setFormat] = useState([]);
  const [style, setStyle] = useState([]);
  const [surface, setSurface] = useState([]);
  const [material, setMaterial] = useState([]);
  const [tags, setTags] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdAt = Timestamp.fromDate(new Date());
    const doc = {
      title,
      images,
      priceRange,
      about,
      quantityPrice,
      sku,
      category,
      description,
      additionalInfo,
      theme,
      format,
      style,
      surface,
      material,
      tags,
      createdAt,
    };
    const docRef = await addDoc(collection(db, "products"), doc);

    console.log(docRef);
  };

  return (
    <div className="container mx-auto flex flex-col gap-4">
      <div className="text-red-600 text-center">Insert Product Data</div>
      <form
        className="flex flex-col md:grid md:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        {/* <form className="flex flex-col gap-1"> */}
        <div className="flex flex-col gap-4">
          <label className="flex flex-col p-4">
            Title
            <input
              type="text"
              name="title"
              className="flex flex-col p-4 border border-blue-600"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="flex flex-col p-4">
            About
            <input
              type="text"
              name="about"
              className="flex flex-col p-4 border border-blue-600"
              onChange={(e) => setAbout(e.target.value)}
            />
          </label>
          <label className="flex flex-col p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                Image URL
                <input
                  type="text"
                  name="image1"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = images;
                    x[0].url = e.target.value;
                    setImages(x);
                  }}
                />
                <input
                  type="text"
                  name="image2"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = images;
                    x[1].url = e.target.value;
                    setImages(x);
                  }}
                />
                <input
                  type="text"
                  name="image3"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = images;
                    x[2].url = e.target.value;
                    setImages(x);
                  }}
                />
                <input
                  type="text"
                  name="image4"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = images;
                    x[3].url = e.target.value;
                    setImages(x);
                  }}
                />
              </div>
              <div className="flex flex-col gap-4">
                Image ALT
                <input
                  type="text"
                  name="alt1"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = images;
                    x[0].alt = e.target.value;
                    setImages(x);
                  }}
                  // onChange={(e) => {
                  //   setImages([
                  //     ...images,
                  //     { ...images[0], alt: e.target.value },
                  //   ]);
                  //   // setImages([...images, (images[0].alt = e.target.value)]);
                  // }}
                />
                <input
                  type="text"
                  name="alt2"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = images;
                    x[1].alt = e.target.value;
                    setImages(x);
                  }}
                />
                <input
                  type="text"
                  name="alt3"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = images;
                    x[2].alt = e.target.value;
                    setImages(x);
                  }}
                />
                <input
                  type="text"
                  name="alt4"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = images;
                    x[3].alt = e.target.value;
                    setImages(x);
                  }}
                />
              </div>
            </div>
          </label>
          <label className="flex flex-col p-4">
            <div className="flex flex-row gap-4">
              <div className="w-full">
                Min Price
                <input
                  type="text"
                  name="priceRangeMin"
                  className="flex flex-col p-4 border border-blue-600 w-full"
                  onChange={(e) =>
                    setPriceRange({
                      ...priceRange,
                      min: parseInt(e.target.value),
                    })
                  }
                />
              </div>
              <div className="w-full">
                Max Price
                <input
                  type="text"
                  name="priceRangeMax"
                  className="flex flex-col p-4 border border-blue-600 w-full"
                  onChange={(e) =>
                    setPriceRange({
                      ...priceRange,
                      max: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>
          </label>
          <label className="flex flex-col p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                Bundle Quantity
                <input
                  type="text"
                  name="bundle1"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = quantityPrice;
                    x[0].quantity = e.target.value;
                    setQuantityPrice(x);
                  }}
                />
                <input
                  type="text"
                  name="bundle2"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = quantityPrice;
                    x[1].quantity = e.target.value;
                    setQuantityPrice(x);
                  }}
                />
                <input
                  type="text"
                  name="bundle3"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = quantityPrice;
                    x[2].quantity = e.target.value;
                    setQuantityPrice(x);
                  }}
                />
                <input
                  type="text"
                  name="bundle4"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = quantityPrice;
                    x[3].quantity = e.target.value;
                    setQuantityPrice(x);
                  }}
                />
                <input
                  type="text"
                  name="bundle5"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = quantityPrice;
                    x[4].quantity = e.target.value;
                    setQuantityPrice(x);
                  }}
                />
              </div>
              <div className="flex flex-col gap-4">
                Bundle Price
                <input
                  type="text"
                  name="price1"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = quantityPrice;
                    x[0].price = e.target.value;
                    setQuantityPrice(x);
                  }}
                />
                <input
                  type="text"
                  name="price2"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = quantityPrice;
                    x[1].price = e.target.value;
                    setQuantityPrice(x);
                  }}
                />
                <input
                  type="text"
                  name="price3"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = quantityPrice;
                    x[2].price = e.target.value;
                    setQuantityPrice(x);
                  }}
                />
                <input
                  type="text"
                  name="price4"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = quantityPrice;
                    x[3].price = e.target.value;
                    setQuantityPrice(x);
                  }}
                />
                <input
                  type="text"
                  name="price4"
                  className="flex flex-col p-4 border border-blue-600"
                  onChange={(e) => {
                    let x = quantityPrice;
                    x[4].price = e.target.value;
                    setQuantityPrice(x);
                  }}
                />
              </div>
            </div>
          </label>
          <label className="flex flex-col p-4">
            SKU
            <input
              type="text"
              name="sku"
              className="flex flex-col p-4 border border-blue-600"
              onChange={(e) => setSku(e.target.value)}
            />
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <label className="flex flex-col p-4">
            Category
            <input
              type="text"
              name="category"
              className="flex flex-col p-4 border border-blue-600"
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          <label className="flex flex-col p-4">
            <p>Description</p>
            Feature
            <input
              type="text"
              name="feature"
              className="flex flex-col p-4 border border-blue-600"
              onChange={(e) => {
                setDescription({
                  ...description,
                  feature: e.target.value.split("//"),
                });
              }}
            />
            Note
            <input
              type="text"
              name="note"
              className="flex flex-col p-4 border border-blue-600"
              onChange={(e) => {
                setDescription({
                  ...description,
                  note: e.target.value.split("//"),
                });
              }}
            />
          </label>
          <label className="flex flex-col p-4">
            <p>Additional Information</p>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col w-full">
                Weight
                <input
                  type="text"
                  name="weight"
                  className="flex flex-col p-4 border border-blue-600 w-full"
                  onChange={(e) => {
                    setAdditionalInfo({
                      ...additionalInfo,
                      weight: e.target.value.split("//"),
                    });
                  }}
                />
              </div>
              <div className="flex flex-col w-full">
                Quantity
                <input
                  type="text"
                  name="quantity"
                  className="flex flex-col p-4 border border-blue-600 w-full"
                  onChange={(e) => {
                    setAdditionalInfo({
                      ...additionalInfo,
                      quantity: e.target.value.split("//"),
                    });
                  }}
                />
              </div>
            </div>
          </label>

          <label className="flex flex-col p-4">
            Theme
            <input
              type="text"
              name="theme"
              className="flex flex-col p-4 border border-blue-600"
              onChange={(e) =>
                setTheme(e.target.value.replace(/\s/g, "").split(/[,]/))
              }
            />
          </label>
          <label className="flex flex-col p-4">
            Format
            <input
              type="text"
              name="format"
              className="flex flex-col p-4 border border-blue-600"
              onChange={(e) =>
                setFormat(e.target.value.replace(/\s/g, "").split(/[,]/))
              }
            />
          </label>
          <label className="flex flex-col p-4">
            Style
            <input
              type="text"
              name="style"
              className="flex flex-col p-4 border border-blue-600"
              onChange={(e) =>
                setStyle(e.target.value.replace(/\s/g, "").split(/[,]/))
              }
            />
          </label>
          <label className="flex flex-col p-4">
            Surface
            <input
              type="text"
              name="surface"
              className="flex flex-col p-4 border border-blue-600"
              onChange={(e) =>
                setSurface(e.target.value.replace(/\s/g, "").split(/[,]/))
              }
            />
          </label>
          <label className="flex flex-col p-4">
            Material
            <input
              type="text"
              name="material"
              className="flex flex-col p-4 border border-blue-600"
              onChange={(e) =>
                setMaterial(e.target.value.replace(/\s/g, "").split(/[,]/))
              }
            />
          </label>
          <label className="flex flex-col p-4">
            Tags
            <input
              type="text"
              name="tags"
              className="flex flex-col p-4 border border-blue-600"
              onChange={(e) =>
                setTags(e.target.value.replace(/\s/g, "").split(/[,]/))
              }
            />
          </label>
          <button className="bg-blue-600 text-white p-4 m-4">Submit</button>
        </div>
      </form>
    </div>
  );
}
