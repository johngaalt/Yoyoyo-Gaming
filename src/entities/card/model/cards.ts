import type { LearningCard } from './types'

type CardDefinition = Omit<LearningCard, 'imageSrc'> & {
  imageFile?: string
}

const cardImages = import.meta.glob('../../../assets/card-images/**/*.png', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>

const getImageSrc = ({ categoryId, id, imageFile }: CardDefinition) => {
  const path = `../../../assets/card-images/${categoryId}/${imageFile ?? id}.png`
  const imageSrc = cardImages[path]

  if (!imageSrc) {
    throw new Error(`Missing card image: ${path}`)
  }

  return imageSrc
}

const cardDefinitions: CardDefinition[] = [
  {
    id: 'airplane',
    categoryId: 'transport',
    title: { ru: 'самолет', es: 'avión', en: 'airplane' },
  },
  {
    id: 'ambulance',
    categoryId: 'transport',
    title: { ru: 'скорая', es: 'ambulancia', en: 'ambulance' },
    questionTitle: { ru: 'скорую' },
  },
  {
    id: 'bicycle',
    categoryId: 'transport',
    title: { ru: 'велосипед', es: 'bicicleta', en: 'bicycle' },
  },
  {
    id: 'boat',
    categoryId: 'transport',
    title: { ru: 'лодка', es: 'barco', en: 'boat' },
    questionTitle: { ru: 'лодку' },
  },
  {
    id: 'bus',
    categoryId: 'transport',
    title: { ru: 'автобус', es: 'autobús', en: 'bus' },
  },
  {
    id: 'cement-mixer',
    categoryId: 'transport',
    title: { ru: 'бетономешалка', es: 'hormigonera', en: 'cement mixer' },
    questionTitle: { ru: 'бетономешалку' },
  },
  {
    id: 'crane-truck',
    categoryId: 'transport',
    title: { ru: 'кран', es: 'grúa', en: 'crane truck' },
  },
  {
    id: 'fire-truck',
    categoryId: 'transport',
    title: { ru: 'пожарная машина', es: 'camión de bomberos', en: 'fire truck' },
    questionTitle: { ru: 'пожарную машину' },
  },
  {
    id: 'garbage-truck',
    categoryId: 'transport',
    title: { ru: 'мусоровоз', es: 'camión de basura', en: 'garbage truck' },
  },
  {
    id: 'helicopter',
    categoryId: 'transport',
    title: { ru: 'вертолет', es: 'helicóptero', en: 'helicopter' },
  },
  {
    id: 'motorcycle',
    categoryId: 'transport',
    title: { ru: 'мотоцикл', es: 'moto', en: 'motorcycle' },
  },
  {
    id: 'police-car',
    categoryId: 'transport',
    title: { ru: 'полицейская машина', es: 'coche de policía', en: 'police car' },
    questionTitle: { ru: 'полицейскую машину' },
  },
  {
    id: 'road-roller',
    categoryId: 'transport',
    title: { ru: 'каток', es: 'apisonadora', en: 'road roller' },
  },
  {
    id: 'street-sweeper',
    categoryId: 'transport',
    title: { ru: 'уборочная машина', es: 'barredora', en: 'street sweeper' },
    questionTitle: { ru: 'уборочную машину' },
  },
  {
    id: 'train',
    categoryId: 'transport',
    title: { ru: 'поезд', es: 'tren', en: 'train' },
  },
  {
    id: 'tram',
    categoryId: 'transport',
    title: { ru: 'трамвай', es: 'tranvía', en: 'tram' },
  },
  {
    id: 'apple',
    categoryId: 'food',
    title: { ru: 'яблоко', es: 'manzana', en: 'apple' },
  },
  {
    id: 'banana',
    categoryId: 'food',
    title: { ru: 'банан', es: 'plátano', en: 'banana' },
  },
  {
    id: 'bread',
    categoryId: 'food',
    title: { ru: 'хлеб', es: 'pan', en: 'bread' },
  },
  {
    id: 'cheese',
    categoryId: 'food',
    title: { ru: 'сыр', es: 'queso', en: 'cheese' },
  },
  {
    id: 'chicken',
    categoryId: 'food',
    title: { ru: 'курица', es: 'pollo', en: 'chicken' },
    questionTitle: { ru: 'курицу' },
  },
  {
    id: 'egg',
    categoryId: 'food',
    title: { ru: 'яйцо', es: 'huevo', en: 'egg' },
  },
  {
    id: 'fish',
    categoryId: 'food',
    title: { ru: 'рыба', es: 'pez', en: 'fish' },
    questionTitle: { ru: 'рыбу' },
  },
  {
    id: 'milk',
    categoryId: 'food',
    title: { ru: 'молоко', es: 'leche', en: 'milk' },
  },
  {
    id: 'pasta',
    categoryId: 'food',
    title: { ru: 'макароны', es: 'pasta', en: 'pasta' },
  },
  {
    id: 'rice',
    categoryId: 'food',
    title: { ru: 'рис', es: 'arroz', en: 'rice' },
  },
  {
    id: 'bird',
    categoryId: 'animals',
    title: { ru: 'птица', es: 'pájaro', en: 'bird' },
    questionTitle: { ru: 'птицу' },
  },
  {
    id: 'cow',
    categoryId: 'animals',
    title: { ru: 'корова', es: 'vaca', en: 'cow' },
    questionTitle: { ru: 'корову' },
  },
  {
    id: 'dinosaur',
    categoryId: 'animals',
    title: { ru: 'динозавр', es: 'dinosaurio', en: 'dinosaur' },
    questionTitle: { ru: 'динозавра' },
  },
  {
    id: 'dragonfly',
    categoryId: 'animals',
    title: { ru: 'стрекоза', es: 'libélula', en: 'dragonfly' },
    questionTitle: { ru: 'стрекозу' },
  },
  {
    id: 'fly',
    categoryId: 'animals',
    title: { ru: 'муха', es: 'mosca', en: 'fly' },
    questionTitle: { ru: 'муху' },
  },
  {
    id: 'fox',
    categoryId: 'animals',
    title: { ru: 'лиса', es: 'zorro', en: 'fox' },
    questionTitle: { ru: 'лису' },
  },
  {
    id: 'gorilla',
    categoryId: 'animals',
    title: { ru: 'горилла', es: 'gorila', en: 'gorilla' },
    questionTitle: { ru: 'гориллу' },
  },
  {
    id: 'horse',
    categoryId: 'animals',
    title: { ru: 'лошадь', es: 'caballo', en: 'horse' },
  },
  {
    id: 'lion',
    categoryId: 'animals',
    title: { ru: 'лев', es: 'león', en: 'lion' },
    questionTitle: { ru: 'льва' },
  },
  {
    id: 'mosquito',
    categoryId: 'animals',
    title: { ru: 'комар', es: 'mosquito', en: 'mosquito' },
    questionTitle: { ru: 'комара' },
  },
  {
    id: 'snake',
    categoryId: 'animals',
    title: { ru: 'змея', es: 'serpiente', en: 'snake' },
    questionTitle: { ru: 'змею' },
  },
  {
    id: 'tiger',
    categoryId: 'animals',
    title: { ru: 'тигр', es: 'tigre', en: 'tiger' },
    questionTitle: { ru: 'тигра' },
  },
  {
    id: 'whale',
    categoryId: 'animals',
    title: { ru: 'кит', es: 'ballena', en: 'whale' },
    questionTitle: { ru: 'кита' },
  },
  {
    id: 'wolf',
    categoryId: 'animals',
    title: { ru: 'волк', es: 'lobo', en: 'wolf' },
    questionTitle: { ru: 'волка' },
  },
  {
    id: 'ball',
    categoryId: 'toys',
    title: { ru: 'мяч', es: 'pelota', en: 'ball' },
  },
  {
    id: 'blocks',
    categoryId: 'toys',
    title: { ru: 'кубики', es: 'bloques', en: 'blocks' },
  },
  {
    id: 'boat',
    categoryId: 'toys',
    title: { ru: 'кораблик', es: 'barquito', en: 'toy boat' },
    questionTitle: { ru: 'кораблик' },
  },
  {
    id: 'bubblewand',
    categoryId: 'toys',
    title: { ru: 'пузыри', es: 'burbujas', en: 'bubble wand' },
  },
  {
    id: 'buildingblocks',
    categoryId: 'toys',
    title: { ru: 'конструктор', es: 'bloques', en: 'building blocks' },
  },
  {
    id: 'bunny',
    categoryId: 'toys',
    title: { ru: 'зайка', es: 'conejito', en: 'bunny' },
    questionTitle: { ru: 'зайку' },
  },
  {
    id: 'castle',
    categoryId: 'toys',
    title: { ru: 'замок', es: 'castillo', en: 'castle' },
  },
  {
    id: 'dinosaur',
    categoryId: 'toys',
    title: { ru: 'динозавр', es: 'dinosaurio', en: 'dinosaur' },
    questionTitle: { ru: 'динозавра' },
  },
  {
    id: 'doll',
    categoryId: 'toys',
    title: { ru: 'кукла', es: 'muñeca', en: 'doll' },
    questionTitle: { ru: 'куклу' },
  },
  {
    id: 'drum',
    categoryId: 'toys',
    title: { ru: 'барабан', es: 'tambor', en: 'drum' },
  },
  {
    id: 'frisbee',
    categoryId: 'toys',
    title: { ru: 'фрисби', es: 'frisbi', en: 'frisbee' },
  },
  {
    id: 'kite',
    categoryId: 'toys',
    title: { ru: 'змей', es: 'cometa', en: 'kite' },
    questionTitle: { ru: 'змея' },
  },
  {
    id: 'marbles',
    categoryId: 'toys',
    title: { ru: 'шарики', es: 'canicas', en: 'marbles' },
  },
  {
    id: 'plane',
    categoryId: 'toys',
    title: { ru: 'самолетик', es: 'avión', en: 'toy plane' },
  },
  {
    id: 'puzzle',
    categoryId: 'toys',
    title: { ru: 'пазл', es: 'rompecabezas', en: 'puzzle' },
  },
  {
    id: 'rattle',
    categoryId: 'toys',
    title: { ru: 'погремушка', es: 'sonajero', en: 'rattle' },
    questionTitle: { ru: 'погремушку' },
  },
  {
    id: 'robot',
    categoryId: 'toys',
    title: { ru: 'робот', es: 'robot', en: 'robot' },
    questionTitle: { ru: 'робота' },
  },
  {
    id: 'rocket',
    categoryId: 'toys',
    title: { ru: 'ракета', es: 'cohete', en: 'rocket' },
    questionTitle: { ru: 'ракету' },
  },
  {
    id: 'rubikcube',
    categoryId: 'toys',
    title: { ru: 'кубик', es: 'cubo', en: 'cube' },
  },
  {
    id: 'scooter',
    categoryId: 'toys',
    title: { ru: 'самокат', es: 'patinete', en: 'scooter' },
  },
  {
    id: 'skateboard',
    categoryId: 'toys',
    title: { ru: 'скейт', es: 'patineta', en: 'skateboard' },
  },
  {
    id: 'slide',
    categoryId: 'toys',
    title: { ru: 'горка', es: 'tobogán', en: 'slide' },
    questionTitle: { ru: 'горку' },
  },
  {
    id: 'stackingrings',
    categoryId: 'toys',
    title: { ru: 'пирамидка', es: 'aros', en: 'stacking rings' },
    questionTitle: { ru: 'пирамидку' },
  },
  {
    id: 'teddybear',
    categoryId: 'toys',
    imageFile: 'teddy',
    title: { ru: 'мишка', es: 'osito', en: 'teddy bear' },
    questionTitle: { ru: 'мишку' },
  },
  {
    id: 'top',
    categoryId: 'toys',
    title: { ru: 'юла', es: 'peonza', en: 'spinning top' },
    questionTitle: { ru: 'юлу' },
  },
  {
    id: 'toycar',
    categoryId: 'toys',
    title: { ru: 'машинка', es: 'cochecito', en: 'toy car' },
    questionTitle: { ru: 'машинку' },
  },
  {
    id: 'train',
    categoryId: 'toys',
    title: { ru: 'паровозик', es: 'tren', en: 'toy train' },
  },
  {
    id: 'truck',
    categoryId: 'toys',
    title: { ru: 'грузовик', es: 'camión', en: 'toy truck' },
  },
  {
    id: 'xylophone',
    categoryId: 'toys',
    title: { ru: 'ксилофон', es: 'xilófono', en: 'xylophone' },
  },
  {
    id: 'yoyo',
    categoryId: 'toys',
    title: { ru: 'йо-йо', es: 'yoyó', en: 'yo-yo' },
  },
  {
    id: 'bag',
    categoryId: 'clothes',
    title: { ru: 'сумка', es: 'bolsa', en: 'bag' },
    questionTitle: { ru: 'сумку' },
  },
  {
    id: 'beanie',
    categoryId: 'clothes',
    title: { ru: 'шапка', es: 'gorro', en: 'beanie' },
    questionTitle: { ru: 'шапку' },
  },
  {
    id: 'belt',
    categoryId: 'clothes',
    title: { ru: 'ремень', es: 'cinturón', en: 'belt' },
  },
  {
    id: 'boots',
    categoryId: 'clothes',
    title: { ru: 'ботинки', es: 'botas', en: 'boots' },
  },
  {
    id: 'boots2',
    categoryId: 'clothes',
    title: { ru: 'сапоги', es: 'botas altas', en: 'tall boots' },
  },
  {
    id: 'cap',
    categoryId: 'clothes',
    title: { ru: 'кепка', es: 'gorra', en: 'cap' },
    questionTitle: { ru: 'кепку' },
  },
  {
    id: 'coat',
    categoryId: 'clothes',
    title: { ru: 'пальто', es: 'abrigo', en: 'coat' },
  },
  {
    id: 'dress',
    categoryId: 'clothes',
    title: { ru: 'платье', es: 'vestido', en: 'dress' },
  },
  {
    id: 'glasses',
    categoryId: 'clothes',
    title: { ru: 'очки', es: 'gafas', en: 'glasses' },
  },
  {
    id: 'gloves',
    categoryId: 'clothes',
    title: { ru: 'перчатки', es: 'guantes', en: 'gloves' },
  },
  {
    id: 'gown',
    categoryId: 'clothes',
    title: { ru: 'халат', es: 'bata', en: 'gown' },
  },
  {
    id: 'hat',
    categoryId: 'clothes',
    title: { ru: 'шляпа', es: 'sombrero', en: 'hat' },
    questionTitle: { ru: 'шляпу' },
  },
  {
    id: 'jacket',
    categoryId: 'clothes',
    title: { ru: 'куртка', es: 'chaqueta', en: 'jacket' },
    questionTitle: { ru: 'куртку' },
  },
  {
    id: 'jeans',
    categoryId: 'clothes',
    title: { ru: 'джинсы', es: 'vaqueros', en: 'jeans' },
  },
  {
    id: 'mittens',
    categoryId: 'clothes',
    title: { ru: 'варежки', es: 'manoplas', en: 'mittens' },
  },
  {
    id: 'pajamas',
    categoryId: 'clothes',
    title: { ru: 'пижама', es: 'pijama', en: 'pajamas' },
    questionTitle: { ru: 'пижаму' },
  },
  {
    id: 'pants',
    categoryId: 'clothes',
    title: { ru: 'штаны', es: 'pantalones', en: 'pants' },
  },
  {
    id: 'rainboots',
    categoryId: 'clothes',
    title: { ru: 'резиновые сапоги', es: 'botas de lluvia', en: 'rain boots' },
  },
  {
    id: 'ring',
    categoryId: 'clothes',
    title: { ru: 'кольцо', es: 'anillo', en: 'ring' },
  },
  {
    id: 'scarf',
    categoryId: 'clothes',
    title: { ru: 'шарф', es: 'bufanda', en: 'scarf' },
  },
  {
    id: 'shirt',
    categoryId: 'clothes',
    title: { ru: 'рубашка', es: 'camisa', en: 'shirt' },
    questionTitle: { ru: 'рубашку' },
  },
  {
    id: 'shorts',
    categoryId: 'clothes',
    title: { ru: 'шорты', es: 'pantalones cortos', en: 'shorts' },
  },
  {
    id: 'skirt',
    categoryId: 'clothes',
    title: { ru: 'юбка', es: 'falda', en: 'skirt' },
    questionTitle: { ru: 'юбку' },
  },
  {
    id: 'socks',
    categoryId: 'clothes',
    title: { ru: 'носки', es: 'calcetines', en: 'socks' },
  },
  {
    id: 'sweater',
    categoryId: 'clothes',
    title: { ru: 'свитер', es: 'suéter', en: 'sweater' },
  },
  {
    id: 'swimsuit',
    categoryId: 'clothes',
    title: { ru: 'купальник', es: 'bañador', en: 'swimsuit' },
  },
  {
    id: 'tie',
    categoryId: 'clothes',
    title: { ru: 'галстук', es: 'corbata', en: 'tie' },
  },
  {
    id: 'tights',
    categoryId: 'clothes',
    title: { ru: 'колготки', es: 'medias', en: 'tights' },
  },
  {
    id: 'tshirt',
    categoryId: 'clothes',
    title: { ru: 'футболка', es: 'camiseta', en: 't-shirt' },
    questionTitle: { ru: 'футболку' },
  },
  {
    id: 'watch',
    categoryId: 'clothes',
    title: { ru: 'часы', es: 'reloj', en: 'watch' },
  },
  {
    id: 'ankle',
    categoryId: 'body',
    title: { ru: 'щиколотка', es: 'tobillo', en: 'ankle' },
    questionTitle: { ru: 'щиколотку' },
  },
  {
    id: 'arm',
    categoryId: 'body',
    title: { ru: 'рука', es: 'brazo', en: 'arm' },
    questionTitle: { ru: 'руку' },
  },
  {
    id: 'back',
    categoryId: 'body',
    title: { ru: 'спина', es: 'espalda', en: 'back' },
    questionTitle: { ru: 'спину' },
  },
  {
    id: 'brain',
    categoryId: 'body',
    title: { ru: 'мозг', es: 'cerebro', en: 'brain' },
  },
  {
    id: 'chest',
    categoryId: 'body',
    title: { ru: 'грудь', es: 'pecho', en: 'chest' },
  },
  {
    id: 'ear',
    categoryId: 'body',
    title: { ru: 'ухо', es: 'oreja', en: 'ear' },
  },
  {
    id: 'elbow',
    categoryId: 'body',
    title: { ru: 'локоть', es: 'codo', en: 'elbow' },
  },
  {
    id: 'eye',
    categoryId: 'body',
    title: { ru: 'глаз', es: 'ojo', en: 'eye' },
  },
  {
    id: 'eyebrow',
    categoryId: 'body',
    title: { ru: 'бровь', es: 'ceja', en: 'eyebrow' },
    questionTitle: { ru: 'бровь' },
  },
  {
    id: 'eyelash',
    categoryId: 'body',
    title: { ru: 'ресница', es: 'pestaña', en: 'eyelash' },
    questionTitle: { ru: 'ресницу' },
  },
  {
    id: 'finger',
    categoryId: 'body',
    title: { ru: 'палец', es: 'dedo', en: 'finger' },
  },
  {
    id: 'foot',
    categoryId: 'body',
    title: { ru: 'стопа', es: 'pie', en: 'foot' },
    questionTitle: { ru: 'стопу' },
  },
  {
    id: 'hair',
    categoryId: 'body',
    title: { ru: 'волосы', es: 'pelo', en: 'hair' },
  },
  {
    id: 'hand',
    categoryId: 'body',
    title: { ru: 'кисть', es: 'mano', en: 'hand' },
    questionTitle: { ru: 'кисть' },
  },
  {
    id: 'head',
    categoryId: 'body',
    title: { ru: 'голова', es: 'cabeza', en: 'head' },
    questionTitle: { ru: 'голову' },
  },
  {
    id: 'heart',
    categoryId: 'body',
    title: { ru: 'сердце', es: 'corazón', en: 'heart' },
  },
  {
    id: 'hip',
    categoryId: 'body',
    title: { ru: 'бедро', es: 'cadera', en: 'hip' },
  },
  {
    id: 'knee',
    categoryId: 'body',
    title: { ru: 'колено', es: 'rodilla', en: 'knee' },
  },
  {
    id: 'leg',
    categoryId: 'body',
    title: { ru: 'нога', es: 'pierna', en: 'leg' },
    questionTitle: { ru: 'ногу' },
  },
  {
    id: 'mouth',
    categoryId: 'body',
    title: { ru: 'рот', es: 'boca', en: 'mouth' },
  },
  {
    id: 'nails',
    categoryId: 'body',
    title: { ru: 'ногти', es: 'uñas', en: 'nails' },
  },
  {
    id: 'neck',
    categoryId: 'body',
    title: { ru: 'шея', es: 'cuello', en: 'neck' },
    questionTitle: { ru: 'шею' },
  },
  {
    id: 'nose',
    categoryId: 'body',
    title: { ru: 'нос', es: 'nariz', en: 'nose' },
  },
  {
    id: 'shoulder',
    categoryId: 'body',
    title: { ru: 'плечо', es: 'hombro', en: 'shoulder' },
  },
  {
    id: 'stomach',
    categoryId: 'body',
    title: { ru: 'живот', es: 'barriga', en: 'stomach' },
  },
  {
    id: 'teeth',
    categoryId: 'body',
    title: { ru: 'зубы', es: 'dientes', en: 'teeth' },
  },
  {
    id: 'toe',
    categoryId: 'body',
    title: { ru: 'палец ноги', es: 'dedo del pie', en: 'toe' },
  },
  {
    id: 'tongue',
    categoryId: 'body',
    title: { ru: 'язык', es: 'lengua', en: 'tongue' },
  },
  {
    id: 'waist',
    categoryId: 'body',
    title: { ru: 'талия', es: 'cintura', en: 'waist' },
    questionTitle: { ru: 'талию' },
  },
  {
    id: 'wrist',
    categoryId: 'body',
    title: { ru: 'запястье', es: 'muñeca', en: 'wrist' },
  },
  {
    id: 'bathrobe',
    categoryId: 'bathroom',
    title: { ru: 'халат', es: 'albornoz', en: 'bathrobe' },
  },
  {
    id: 'bathtub',
    categoryId: 'bathroom',
    title: { ru: 'ванна', es: 'bañera', en: 'bathtub' },
    questionTitle: { ru: 'ванну' },
  },
  {
    id: 'bidet',
    categoryId: 'bathroom',
    title: { ru: 'биде', es: 'bidé', en: 'bidet' },
  },
  {
    id: 'brush',
    categoryId: 'bathroom',
    title: { ru: 'щетка', es: 'cepillo', en: 'brush' },
    questionTitle: { ru: 'щетку' },
  },
  {
    id: 'comb',
    categoryId: 'bathroom',
    title: { ru: 'расческа', es: 'peine', en: 'comb' },
    questionTitle: { ru: 'расческу' },
  },
  {
    id: 'curtain',
    categoryId: 'bathroom',
    title: { ru: 'шторка', es: 'cortina', en: 'curtain' },
    questionTitle: { ru: 'шторку' },
  },
  {
    id: 'duck',
    categoryId: 'bathroom',
    title: { ru: 'уточка', es: 'patito', en: 'duck' },
    questionTitle: { ru: 'уточку' },
  },
  {
    id: 'faucet',
    categoryId: 'bathroom',
    title: { ru: 'кран', es: 'grifo', en: 'faucet' },
  },
  {
    id: 'floss',
    categoryId: 'bathroom',
    title: { ru: 'нить', es: 'hilo dental', en: 'floss' },
    questionTitle: { ru: 'нить' },
  },
  {
    id: 'hairdryer',
    categoryId: 'bathroom',
    title: { ru: 'фен', es: 'secador', en: 'hair dryer' },
  },
  {
    id: 'lotion',
    categoryId: 'bathroom',
    title: { ru: 'лосьон', es: 'loción', en: 'lotion' },
  },
  {
    id: 'mirror',
    categoryId: 'bathroom',
    title: { ru: 'зеркало', es: 'espejo', en: 'mirror' },
  },
  {
    id: 'mop',
    categoryId: 'bathroom',
    title: { ru: 'швабра', es: 'fregona', en: 'mop' },
    questionTitle: { ru: 'швабру' },
  },
  {
    id: 'nailclipper',
    categoryId: 'bathroom',
    title: { ru: 'щипчики', es: 'cortauñas', en: 'nail clipper' },
  },
  {
    id: 'plunger',
    categoryId: 'bathroom',
    title: { ru: 'вантуз', es: 'desatascador', en: 'plunger' },
  },
  {
    id: 'razor',
    categoryId: 'bathroom',
    title: { ru: 'бритва', es: 'maquinilla', en: 'razor' },
    questionTitle: { ru: 'бритву' },
  },
  {
    id: 'sanitizer',
    categoryId: 'bathroom',
    title: { ru: 'санитайзер', es: 'desinfectante', en: 'sanitizer' },
  },
  {
    id: 'scale',
    categoryId: 'bathroom',
    title: { ru: 'весы', es: 'báscula', en: 'scale' },
  },
  {
    id: 'shampoo',
    categoryId: 'bathroom',
    title: { ru: 'шампунь', es: 'champú', en: 'shampoo' },
  },
  {
    id: 'shower',
    categoryId: 'bathroom',
    title: { ru: 'душ', es: 'ducha', en: 'shower' },
  },
  {
    id: 'sink',
    categoryId: 'bathroom',
    title: { ru: 'раковина', es: 'lavabo', en: 'sink' },
    questionTitle: { ru: 'раковину' },
  },
  {
    id: 'soap',
    categoryId: 'bathroom',
    title: { ru: 'мыло', es: 'jabón', en: 'soap' },
  },
  {
    id: 'sponge',
    categoryId: 'bathroom',
    title: { ru: 'губка', es: 'esponja', en: 'sponge' },
    questionTitle: { ru: 'губку' },
  },
  {
    id: 'tissue',
    categoryId: 'bathroom',
    title: { ru: 'салфетка', es: 'pañuelo', en: 'tissue' },
    questionTitle: { ru: 'салфетку' },
  },
  {
    id: 'toilet',
    categoryId: 'bathroom',
    title: { ru: 'унитаз', es: 'inodoro', en: 'toilet' },
  },
  {
    id: 'toiletpaper',
    categoryId: 'bathroom',
    title: { ru: 'бумага', es: 'papel higiénico', en: 'toilet paper' },
    questionTitle: { ru: 'бумагу' },
  },
  {
    id: 'toothbrush',
    categoryId: 'bathroom',
    title: { ru: 'щетка', es: 'cepillo', en: 'toothbrush' },
    questionTitle: { ru: 'щетку' },
  },
  {
    id: 'toothpaste',
    categoryId: 'bathroom',
    title: { ru: 'паста', es: 'pasta dental', en: 'toothpaste' },
    questionTitle: { ru: 'пасту' },
  },
  {
    id: 'towel',
    categoryId: 'bathroom',
    title: { ru: 'полотенце', es: 'toalla', en: 'towel' },
  },
  {
    id: 'washingmachine',
    categoryId: 'bathroom',
    title: { ru: 'машина', es: 'lavadora', en: 'washing machine' },
    questionTitle: { ru: 'машину' },
  },
  {
    id: 'amazed',
    categoryId: 'emotions',
    title: { ru: 'восторг', es: 'asombro', en: 'amazed' },
  },
  {
    id: 'angry',
    categoryId: 'emotions',
    title: { ru: 'злость', es: 'enojo', en: 'angry' },
  },
  {
    id: 'anxious',
    categoryId: 'emotions',
    title: { ru: 'тревога', es: 'ansiedad', en: 'anxious' },
    questionTitle: { ru: 'тревогу' },
  },
  {
    id: 'astonished',
    categoryId: 'emotions',
    title: { ru: 'удивление', es: 'sorpresa', en: 'astonished' },
  },
  {
    id: 'bored',
    categoryId: 'emotions',
    title: { ru: 'скука', es: 'aburrimiento', en: 'bored' },
    questionTitle: { ru: 'скуку' },
  },
  {
    id: 'calm',
    categoryId: 'emotions',
    title: { ru: 'спокойствие', es: 'calma', en: 'calm' },
  },
  {
    id: 'cheerful',
    categoryId: 'emotions',
    title: { ru: 'радость', es: 'alegría', en: 'cheerful' },
  },
  {
    id: 'confused',
    categoryId: 'emotions',
    title: { ru: 'растерянность', es: 'confusión', en: 'confused' },
  },
  {
    id: 'content',
    categoryId: 'emotions',
    title: { ru: 'довольство', es: 'satisfacción', en: 'content' },
  },
  {
    id: 'crazy',
    categoryId: 'emotions',
    title: { ru: 'веселье', es: 'locura', en: 'silly' },
  },
  {
    id: 'crying',
    categoryId: 'emotions',
    title: { ru: 'плач', es: 'llanto', en: 'crying' },
  },
  {
    id: 'curious',
    categoryId: 'emotions',
    title: { ru: 'интерес', es: 'curiosidad', en: 'curious' },
  },
  {
    id: 'disappointed',
    categoryId: 'emotions',
    title: { ru: 'разочарование', es: 'decepción', en: 'disappointed' },
  },
  {
    id: 'embarrassed',
    categoryId: 'emotions',
    title: { ru: 'смущение', es: 'vergüenza', en: 'embarrassed' },
  },
  {
    id: 'excited',
    categoryId: 'emotions',
    title: { ru: 'восторг', es: 'emoción', en: 'excited' },
  },
  {
    id: 'furious',
    categoryId: 'emotions',
    title: { ru: 'ярость', es: 'furia', en: 'furious' },
  },
  {
    id: 'happy',
    categoryId: 'emotions',
    title: { ru: 'счастье', es: 'felicidad', en: 'happy' },
  },
  {
    id: 'inlove',
    categoryId: 'emotions',
    title: { ru: 'любовь', es: 'amor', en: 'in love' },
  },
  {
    id: 'laughing',
    categoryId: 'emotions',
    title: { ru: 'смех', es: 'risa', en: 'laughing' },
  },
  {
    id: 'mischievous',
    categoryId: 'emotions',
    title: { ru: 'шалость', es: 'travesura', en: 'mischievous' },
  },
  {
    id: 'nervous',
    categoryId: 'emotions',
    title: { ru: 'нервозность', es: 'nervios', en: 'nervous' },
  },
  {
    id: 'proud',
    categoryId: 'emotions',
    title: { ru: 'гордость', es: 'orgullo', en: 'proud' },
  },
  {
    id: 'sad',
    categoryId: 'emotions',
    title: { ru: 'грусть', es: 'tristeza', en: 'sad' },
  },
  {
    id: 'satisfied',
    categoryId: 'emotions',
    title: { ru: 'довольный', es: 'satisfecho', en: 'satisfied' },
  },
  {
    id: 'scared',
    categoryId: 'emotions',
    title: { ru: 'страх', es: 'miedo', en: 'scared' },
  },
  {
    id: 'serious',
    categoryId: 'emotions',
    title: { ru: 'серьезность', es: 'seriedad', en: 'serious' },
  },
  {
    id: 'sleepy',
    categoryId: 'emotions',
    title: { ru: 'сонливость', es: 'sueño', en: 'sleepy' },
  },
  {
    id: 'surprised',
    categoryId: 'emotions',
    title: { ru: 'сюрприз', es: 'sorpresa', en: 'surprised' },
  },
  {
    id: 'thoughtful',
    categoryId: 'emotions',
    title: { ru: 'задумчивость', es: 'pensativo', en: 'thoughtful' },
  },
  {
    id: 'tired',
    categoryId: 'emotions',
    title: { ru: 'усталость', es: 'cansancio', en: 'tired' },
  },
  {
    id: 'upset',
    categoryId: 'emotions',
    title: { ru: 'огорчение', es: 'disgusto', en: 'upset' },
  },
]

export const cards: LearningCard[] = cardDefinitions.map((card) => ({
  ...card,
  imageSrc: getImageSrc(card),
}))

export const getCardsByCategory = (categoryId: LearningCard['categoryId']) =>
  cards.filter((card) => card.categoryId === categoryId)
