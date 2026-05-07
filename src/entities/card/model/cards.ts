import airplaneImage from '../../../assets/card-images/transport/airplane.png'
import bicycleImage from '../../../assets/card-images/transport/bicycle.png'
import boatImage from '../../../assets/card-images/transport/boat.png'
import busImage from '../../../assets/card-images/transport/bus.png'
import carImage from '../../../assets/card-images/transport/car.png'
import helicopterImage from '../../../assets/card-images/transport/helicopter.png'
import motorcycleImage from '../../../assets/card-images/transport/motorcycle.png'
import trainImage from '../../../assets/card-images/transport/train.png'
import tramImage from '../../../assets/card-images/transport/tram.png'
import truckImage from '../../../assets/card-images/transport/truck.png'
import appleImage from '../../../assets/card-images/food/apple.png'
import bananaImage from '../../../assets/card-images/food/banana.png'
import breadImage from '../../../assets/card-images/food/bread.png'
import cheeseImage from '../../../assets/card-images/food/cheese.png'
import chickenImage from '../../../assets/card-images/food/chicken.png'
import eggImage from '../../../assets/card-images/food/egg.png'
import fishImage from '../../../assets/card-images/food/fish.png'
import milkImage from '../../../assets/card-images/food/milk.png'
import pastaImage from '../../../assets/card-images/food/pasta.png'
import riceImage from '../../../assets/card-images/food/rice.png'
import bearImage from '../../../assets/card-images/animals/bear.png'
import birdImage from '../../../assets/card-images/animals/bird.png'
import catImage from '../../../assets/card-images/animals/cat.png'
import cowImage from '../../../assets/card-images/animals/cow.png'
import dogImage from '../../../assets/card-images/animals/dog.png'
import elephantImage from '../../../assets/card-images/animals/elephant.png'
import horseImage from '../../../assets/card-images/animals/horse.png'
import lionImage from '../../../assets/card-images/animals/lion.png'
import monkeyImage from '../../../assets/card-images/animals/monkey.png'
import pigImage from '../../../assets/card-images/animals/pig.png'
import type { LearningCard } from './types'

export const cards: LearningCard[] = [
  {
    id: 'airplane',
    categoryId: 'transport',
    imageSrc: airplaneImage,
    title: { ru: 'самолет', es: 'avión', en: 'airplane' },
  },
  {
    id: 'bicycle',
    categoryId: 'transport',
    imageSrc: bicycleImage,
    title: { ru: 'велосипед', es: 'bicicleta', en: 'bicycle' },
  },
  {
    id: 'boat',
    categoryId: 'transport',
    imageSrc: boatImage,
    title: { ru: 'лодка', es: 'barco', en: 'boat' },
    questionTitle: { ru: 'лодку' },
  },
  {
    id: 'bus',
    categoryId: 'transport',
    imageSrc: busImage,
    title: { ru: 'автобус', es: 'autobús', en: 'bus' },
  },
  {
    id: 'car',
    categoryId: 'transport',
    imageSrc: carImage,
    title: { ru: 'машина', es: 'coche', en: 'car' },
    questionTitle: { ru: 'машину' },
  },
  {
    id: 'helicopter',
    categoryId: 'transport',
    imageSrc: helicopterImage,
    title: { ru: 'вертолет', es: 'helicóptero', en: 'helicopter' },
  },
  {
    id: 'motorcycle',
    categoryId: 'transport',
    imageSrc: motorcycleImage,
    title: { ru: 'мотоцикл', es: 'moto', en: 'motorcycle' },
  },
  {
    id: 'train',
    categoryId: 'transport',
    imageSrc: trainImage,
    title: { ru: 'поезд', es: 'tren', en: 'train' },
  },
  {
    id: 'tram',
    categoryId: 'transport',
    imageSrc: tramImage,
    title: { ru: 'трамвай', es: 'tranvía', en: 'tram' },
  },
  {
    id: 'truck',
    categoryId: 'transport',
    imageSrc: truckImage,
    title: { ru: 'грузовик', es: 'camión', en: 'truck' },
  },
  {
    id: 'apple',
    categoryId: 'food',
    imageSrc: appleImage,
    title: { ru: 'яблоко', es: 'manzana', en: 'apple' },
  },
  {
    id: 'banana',
    categoryId: 'food',
    imageSrc: bananaImage,
    title: { ru: 'банан', es: 'plátano', en: 'banana' },
  },
  {
    id: 'bread',
    categoryId: 'food',
    imageSrc: breadImage,
    title: { ru: 'хлеб', es: 'pan', en: 'bread' },
  },
  {
    id: 'cheese',
    categoryId: 'food',
    imageSrc: cheeseImage,
    title: { ru: 'сыр', es: 'queso', en: 'cheese' },
  },
  {
    id: 'chicken',
    categoryId: 'food',
    imageSrc: chickenImage,
    title: { ru: 'курица', es: 'pollo', en: 'chicken' },
    questionTitle: { ru: 'курицу' },
  },
  {
    id: 'egg',
    categoryId: 'food',
    imageSrc: eggImage,
    title: { ru: 'яйцо', es: 'huevo', en: 'egg' },
  },
  {
    id: 'fish',
    categoryId: 'food',
    imageSrc: fishImage,
    title: { ru: 'рыба', es: 'pez', en: 'fish' },
    questionTitle: { ru: 'рыбу' },
  },
  {
    id: 'milk',
    categoryId: 'food',
    imageSrc: milkImage,
    title: { ru: 'молоко', es: 'leche', en: 'milk' },
  },
  {
    id: 'pasta',
    categoryId: 'food',
    imageSrc: pastaImage,
    title: { ru: 'макароны', es: 'pasta', en: 'pasta' },
    questionTitle: { ru: 'макароны' },
  },
  {
    id: 'rice',
    categoryId: 'food',
    imageSrc: riceImage,
    title: { ru: 'рис', es: 'arroz', en: 'rice' },
  },
  {
    id: 'bear',
    categoryId: 'animals',
    imageSrc: bearImage,
    title: { ru: 'медведь', es: 'oso', en: 'bear' },
    questionTitle: { ru: 'медведя' },
  },
  {
    id: 'bird',
    categoryId: 'animals',
    imageSrc: birdImage,
    title: { ru: 'птица', es: 'pájaro', en: 'bird' },
    questionTitle: { ru: 'птицу' },
  },
  {
    id: 'cat',
    categoryId: 'animals',
    imageSrc: catImage,
    title: { ru: 'кот', es: 'gato', en: 'cat' },
    questionTitle: { ru: 'кота' },
  },
  {
    id: 'cow',
    categoryId: 'animals',
    imageSrc: cowImage,
    title: { ru: 'корова', es: 'vaca', en: 'cow' },
    questionTitle: { ru: 'корову' },
  },
  {
    id: 'dog',
    categoryId: 'animals',
    imageSrc: dogImage,
    title: { ru: 'собака', es: 'perro', en: 'dog' },
    questionTitle: { ru: 'собаку' },
  },
  {
    id: 'elephant',
    categoryId: 'animals',
    imageSrc: elephantImage,
    title: { ru: 'слон', es: 'elefante', en: 'elephant' },
    questionTitle: { ru: 'слона' },
  },
  {
    id: 'horse',
    categoryId: 'animals',
    imageSrc: horseImage,
    title: { ru: 'лошадь', es: 'caballo', en: 'horse' },
    questionTitle: { ru: 'лошадь' },
  },
  {
    id: 'lion',
    categoryId: 'animals',
    imageSrc: lionImage,
    title: { ru: 'лев', es: 'león', en: 'lion' },
    questionTitle: { ru: 'льва' },
  },
  {
    id: 'monkey',
    categoryId: 'animals',
    imageSrc: monkeyImage,
    title: { ru: 'обезьяна', es: 'mono', en: 'monkey' },
    questionTitle: { ru: 'обезьяну' },
  },
  {
    id: 'pig',
    categoryId: 'animals',
    imageSrc: pigImage,
    title: { ru: 'свинья', es: 'cerdo', en: 'pig' },
    questionTitle: { ru: 'свинью' },
  },
]

export const getCardsByCategory = (categoryId: LearningCard['categoryId']) =>
  cards.filter((card) => card.categoryId === categoryId)
