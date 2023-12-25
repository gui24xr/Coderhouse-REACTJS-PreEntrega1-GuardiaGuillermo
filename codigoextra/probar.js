const miObjeto = {
    category: "cascos",
    productName: "Oneal 3SRS v.24 Racewear Black Red Helmet",
    productHref:
      "https://www.thehelmetwarehouse.com.au/helmets/oneal-3srs-v.24-racewear-black-red-helmet",
    imageSrc:
      "https://www.thehelmetwarehouse.com.au/image/cache/catalog/ONEAL/3SRS%20V.24/oneal-3srs-v.24-racewear-black-red-helmet-200x200.png",
    productPrice: "$159.95",
    description: "Descripcion de Oneal 3SRS v.24 Racewear Black Red Helmet",
    subcategory: "offroad",
    brand: "oneal",
    rate: 2.8,
    tags: ["oneal", "cascos", "offroad"],
    stockByCategories: true,
    stockBySize: {
      sizeXS: 72,
      sizeS: 69,
      sizeM: 85,
      sizeL: 17,
      sizeXL: 24,
      sizeXXL: 51,
    },
    stockByCount: 318,
    productID: 173,
  }

  console.log(Object.keys(miObjeto.stockBySize))