const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')

app.use(express.json());

app.use(cors())

const products = [
  {
    "id": 0,
    "name": "Peluche Hermione Granger",
    "description": "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
    "image": "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psntn9f.webp",
    "prices": [25, 30, 40],
	"likes": 0,
    "isLiked": false,
    "quantity": 0,
    "available": false,
    "releaseDate": "2023-01-01",
    "sizes": ["Petit", "Moyen", "Grand"]
  },
  {
    "id": 1,
    "name": "Peluche Harry Potter",
    "description": "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
    "image": "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psk003f.webp",
    "prices": [25, 30, 40],
	"likes": 0,
    "isLiked": false,
    "quantity": 0,
    "available": false,
    "releaseDate": "2023-01-01",
    "sizes": ["Petit", "Moyen", "Grand"]
  },
  {
    "id": 2,
    "name": "Peluche Professeur Severus Rogue",
    "description": "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
    "image": "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psmp9nd_1.webp",
    "prices": [25, 30, 40],
	"likes": 0,
    "isLiked": false,
    "quantity": 0,
    "available": false,
    "releaseDate": "2023-01-01",
    "sizes": ["Petit", "Moyen", "Grand"]
  },
  {
    "id": 3,
    "name": "Peluche Ron Weasley",
    "description": "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
    "image": "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psk018a_4.jpg",
    "prices": [25, 30, 40],
	"likes": 0,
    "isLiked": false,
    "quantity": 0,
    "available": false,
    "releaseDate": "2023-01-01",
    "sizes": ["Petit", "Moyen", "Grand"]
  },
  {
    "id": 4,
    "name": "Peluche Dobby",
    "description": "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
    "image": "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psnseie.webp",
    "prices": [25, 30, 40],
	"likes": 0,
    "isLiked": false,
    "quantity": 0,
    "available": false,
    "releaseDate": "2023-01-01",
    "sizes": ["Petit", "Moyen", "Grand"]
  },
  {
    "id": 5,
    "name": "Peluche Rubeus Hagrid",
    "description": "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
    "image": "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psk00ya.webp",
    "prices": [25, 30, 40],
	"likes": 0,
    "isLiked": false,
    "quantity": 0,
    "available": false,
    "releaseDate": "2023-01-01",
    "sizes": ["Petit", "Moyen", "Grand"]
  },
  {
    "id": 6,
    "name": "Peluche Lord Voldemort",
    "description": "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
    "image": "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psk000c.webp",
    "prices": [25, 30, 40],
	"likes": 0,
    "isLiked": false,
    "quantity": 0,
    "available": false,
    "releaseDate": "2023-01-01",
    "sizes": ["Petit", "Moyen", "Grand"]
  },
  {
    "id": 7,
    "name": "Peluche Magicien Dumbledore",
    "description": "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
    "image": "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psk001d.webp",
    "prices": [25, 30, 40],
	"likes": 0,
    "isLiked": false,
    "quantity": 0,
    "available": false,
    "releaseDate": "2023-01-01",
    "sizes": ["Petit", "Moyen", "Grand"]
  },
  {
    "id": 8,
    "name": "Peluche Draco Malfoy",
    "description": "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
    "image": "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psmp9mc_1.webp",
    "prices": [25, 30, 40],
	"likes": 0,
    "isLiked": false,
    "quantity": 0,
    "available": false,
    "releaseDate": "2023-01-01",
    "sizes": ["Petit", "Moyen", "Grand"]
  }
 ]

app.get('/products', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json(products)
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  res.set('Access-Control-Allow-Origin', '*');
  res.json(products.find((p) => p.id == id))
});

app.put('/products/:id/likes', (req, res) => {
  const id = req.params.id;
  let product = products.find((p) => p.id == id);
  if (product.isLiked) {
      product.likes--;
  } else {
      product.likes++;
  }
  product.isLiked = !product.isLiked;

  res.set('Access-Control-Allow-Origin', '*');
  res.json(product)
})

app.post('/orders', (req, res) => {
  let contactName = req.body.contact.name;
  let random = (Math.random() + 1).toString(36).substring(7);
  let newOrder = {
    id: orderIds[orderIds.length - 1] + 1,
    contactNme: contactName,
    status: "Saved",
    orderId: random
  }
  orderIds.push(newOrder)
  res.set('Access-Control-Allow-Origin', '*');
  res.json(newOrder.id)
})

app.get('/orders', (req,res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json(orderIds)
})

app.get('/orders/:id', (req,res) => {
  const id = req.params.id;
  res.set('Access-Control-Allow-Origin', '*');
  res.json(orderIds.find((o) => o.id == id))
})

app.listen(port, () => {
  console.log(`Application exemple Ã  l'Ã©coute sur le port ${port}!`)
});

