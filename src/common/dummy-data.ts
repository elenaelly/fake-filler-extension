// spell-checker:disable

const wordBank = [
  "лалалала",
  "lalalala",
  "test",
  "тест",
  "Rhoshandiatellyneshiaunneveshenk",
  "lalala.com",
  "田中太郎",
  "泽东",
  "сценарий",
  "альтернатива",
  "покрытие",
  "первопричина",
  "выборочность",
  "переосвидетельствование",
  "интернационализирование",
  "высокопревосходительство",
  "magna",
  "aliqua.",
  "enim",
  "ad",
  "minim",
  "veniam,",
  "quis",
  "nostrud",
  "exercitation",
  "ullamco",
  "laboris",
  "nisi",
  "ut",
  "aliquip",
  "ex",
  "ea",
  "commodo",
  "consequat.",
  "duis",
  "aute",
  "irure",
  "dolor",
  "in",
  "reprehenderit",
  "in",
  "voluptate",
  "velit",
  "esse",
  "cillum",
  "dolore",
  "eu",
  "fugiat",
  "nulla",
  "pariatur.",
  "excepteur",
  "sint",
  "occaecat",
  "cupidatat",
  "non",
  "proident,",
  "sunt",
  "in",
  "culpa",
  "qui",
  "officia",
  "deserunt",
  "mollit",
  "anim",
  "id",
  "est",
  "laborum.",
  "sed",
  "ut",
  "perspiciatis,",
  "unde",
  "omnis",
  "iste",
  "natus",
  "error",
  "sit",
  "voluptatem",
  "accusantium",
  "doloremque",
  "laudantium,",
  "totam",
  "rem",
  "aperiam",
  "eaque",
  "ipsa,",
  "quae",
  "ab",
  "illo",
  "inventore",
  "veritatis",
  "et",
  "quasi",
  "architecto",
  "beatae",
  "vitae",
  "dicta",
  "sunt,",
  "explicabo.",
  "nemo",
  "enim",
  "ipsam",
  "voluptatem,",
  "quia",
  "voluptas",
  "sit,",
  "aspernatur",
  "aut",
  "odit",
  "aut",
  "fugit,",
  "sed",
  "quia",
  "consequuntur",
  "magni",
  "dolores",
  "eos,",
  "qui",
  "ratione",
  "voluptatem",
  "sequi",
  "nesciunt,",
  "neque",
  "porro",
  "quisquam",
  "est,",
  "qui",
  "dolorem",
  "ipsum,",
  "quia",
  "dolor",
  "sit,",
  "amet,",
  "consectetur,",
  "adipisci",
  "velit,",
  "sed",
  "quia",
  "non",
  "numquam",
  "eius",
  "modi",
  "tempora",
  "incidunt,",
  "ut",
  "labore",
  "et",
  "dolore",
  "magnam",
  "aliquam",
  "quaerat",
  "voluptatem.",
  "ut",
  "enim",
  "ad",
  "minima",
  "veniam,",
  "quis",
  "nostrum",
  "exercitationem",
  "ullam",
  "corporis",
  "suscipit",
  "laboriosam,",
  "nisi",
  "ut",
  "aliquid",
  "ex",
  "ea",
  "commodi",
  "consequatur?",
  "quis",
  "autem",
  "vel",
  "eum",
  "iure",
  "reprehenderit,",
  "qui",
  "in",
  "ea",
  "voluptate",
  "velit",
  "esse,",
  "quam",
  "nihil",
  "molestiae",
  "consequatur,",
  "vel",
  "illum,",
  "qui",
  "dolorem",
  "eum",
  "fugiat,",
  "quo",
  "voluptas",
  "nulla",
  "pariatur?",
  "at",
  "vero",
  "eos",
  "et",
  "accusamus",
  "et",
  "iusto",
  "odio",
  "dignissimos",
  "ducimus,",
  "qui",
  "blanditiis",
  "praesentium",
  "voluptatum",
  "deleniti",
  "atque",
  "corrupti,",
  "quos",
  "dolores",
  "et",
  "quas",
  "molestias",
  "excepturi",
  "sint,",
  "obcaecati",
  "cupiditate",
  "non",
  "provident,",
  "similique",
  "sunt",
  "in",
  "culpa,",
  "qui",
  "officia",
  "deserunt",
  "mollitia",
  "animi,",
  "id",
  "est",
  "laborum",
  "et",
  "dolorum",
  "fuga.",
  "harum",
  "quidem",
  "rerum",
  "facilis",
  "est",
  "et",
  "expedita",
  "distinctio.",
  "Nam",
  "libero",
  "tempore,",
  "cum",
  "soluta",
  "nobis",
  "est",
  "eligendi",
  "optio,",
  "cumque",
  "nihil",
  "impedit,",
  "quo",
  "minus",
  "id,",
  "quod",
  "maxime",
  "placeat,",
  "facere",
  "possimus,",
  "omnis",
  "voluptas",
  "assumenda",
  "est,",
  "omnis",
  "dolor",
  "repellendus.",
  "temporibus",
  "autem",
  "quibusdam",
  "aut",
  "officiis",
  "debitis",
  "aut",
  "rerum",
  "necessitatibus",
  "saepe",
  "eveniet,",
  "ut",
  "et",
  "voluptates",
  "repudiandae",
  "sint",
  "molestiae",
  "non",
  "recusandae.",
  "itaque",
  "earum",
  "rerum",
  "hic",
  "tenetur",
  "a",
  "sapiente",
  "delectus,",
  "aut",
  "reiciendis",
  "voluptatibus",
  "maiores",
  "alias",
  "consequatur",
  "aut",
  "perferendis",
  "doloribus",
  "asperiores",
  "repellat",
];

const firstNames = [
  "José",
  "María-Jose",
  "Chloë",
  "Björk",
  "Nguyễn",
  "田中太郎",
  "東海林賢蔵",
  "泽东",
  "Иван",
  "Светлана",
  "แม",
  "ابن خلدو",
  "null",
  "nil",
  "false",
  "Александр",
  "Михаил",
  "Максим",
  "Лев",
  "Марк",
  "Артем",
  "Иван",
  "Матвей",
  "Дмитрий",
  "Даниил",
  "Софья",
  "Мария",
  "Анна",
  "Алиса",
  "Виктория",
  "Ева",
  "Полина",
  "Александра",
  "Василиса",
  "Варвара",
  "Аксинья",
  "Ангелина",
  "Арина",
  "Влада",
  "Диана",
  "Жанна",
  "Есения",
  "Зинаида",
  "Лидия",
  "Мирослава",
  "Милена",
  "Роза",
  "Ярослава",
  "Ким",
  "Кир",
  "Вильгельмина",
  "Константин",
  "Апполинарий",
  "Пантелеймон",
  "Ян",
  "Ростислав",
  "Аркадий",
  "Афанасий"
];

const lastNames = [
  "Casal-Giménez",
  "Carreño Quiñones",
  "Vojnovič",
  "Rømer",
  "Guðmundsdóttir",
  "Mór Ùisdean GillEasbaig 'ic Iain Mac a' Ghobhainn Fear an t-Srònaich",
  "Tấn Dũng",
  "Иванов",
  "Смирнов",
  "Кузнецов",
  "Попов",
  "Соколов",
  "Васильев",
"Петров",
"Соколов",
"Михайлов",
"Новиков",
"Федоров",
"Морозов",
"Волков",
"Алексеев",
"Лебедев",
"Семенов",
"Егоров",
"Павлов",
"Козлов",
"Степанов",
"Николаев",
"Орлов",
"Андреев",
"Макаров",
"Никитин",
"Захаров",
"Зайцев",
"Соловьев",
"Борисов",
"Яковлев",
"Григорьев",
"Романов",
"Воробьев",
"Сергеев",
"Кузьмин",
"Фролов",
"Александров",
"Дмитриев",
"Королев",
"Гусев",
"Киселев",
"Ильин",
"Максимов",
"Поляков",
"Сорокин",
"Виноградов",
"Ковалев",
"Белов",
"Медведев",
"Антонов",
"Тарасов",
"Жуков",
"Баранов",
"Филиппов",
"Комаров",
"Давыдов",
"Беляев",
"Герасимов",
"Богданов",
"Осипов",
"Сидоров",
"Матвеев",
"Титов",
"Марков",
"Миронов",
"Крылов",
"Куликов",
"Карпов",
"Власов",
"Мельников",
"Денисов",
"Гаврилов",
"Тихонов",
"Казаков",
"Афанасьев",
"Данилов",
"Савельев",
"Тимофеев",
"Фомин",
"Чернов",
"Абрамов",
"Мартынов",
"Ефимов",
"Федотов",
"Щербаков",
"Назаров",
"Калинин",
"Исаев",
"Чернышев",
"Быков",
"Маслов",
"Родионов",
"Коновалов",
"Лазарев",
"Воронин",
"Климов",
"Филатов",
"Пономарев",
"Голубев",
"Кудрявцев",
"Прохоров",
"Наумов",
"Потапов",
"Журавлев",
"Овчинников",
"Трофимов",
"Леонов",
"Соболев",
"Ермаков",
"Колесников",
"Гончаров",
"Емельянов",
"Никифоров",
"Грачев",
"Котов",
"Гришин",
"Ефремов",
"Архипов",
"Громов",
"Кириллов",
"Малышев",
"Панов",
"Моисеев",
"Румянцев",
"Акимов",
"Кондратьев",
"Бирюков",
"Горбунов",
"Анисимов",
"Еремин",
"Тихомиров",
"Галкин",
"Лукьянов",
"Михеев",
"Скворцов",
"Юдин",
"Белоусов",
"Нестеров",
"Симонов",
"Прокофьев",
"Харитонов",
"Князев",
"Цветков",
"Левин",
"Митрофанов",
"Воронов",
"Аксенов",
"Софронов",
"Мальцев",
"Логинов",
"Горшков",
"Савин",
"Краснов",
"Майоров",
"Демидов",
"Елисеев",
"Рыбаков",
"Сафонов",
"Плотников",
"Демин",
"Хохлов",
"Фадеев",
"Молчанов",
"Игнатов",
"Литвинов",
"Ершов",
"Ушаков",
"Дементьев",
"Рябов",
"Мухин",
"Калашников",
"Леонтьев",
"Лобанов",
"Кузин",
"Корнеев",
"Евдокимов",
"Бородин",
"Платонов",
"Некрасов",
"Балашов",
"Бобров",
"Жданов",
"Блинов",
"Игнатьев",
"Коротков",
"Муравьев",
"Крюков",
"Беляков",
"Богомолов",
"Дроздов",
"Лавров",
"Зуев",
"Петухов",
"Ларин",
"Никулин",
"Серов",
"Терентьев",
"Зотов",
"Устинов",
"Фокин",
"Самойлов",
"Константинов",
"Сахаров",
"Шишкин",
"Самсонов",
"Черкасов",
"Чистяков",
"Носов",
"Спиридонов",
"Карасев",
"Авдеев",
"Воронцов",
"Зверев",
"Владимиров",
"Селезнев",
"Нечаев",
"Кудряшов",
"Седов",
"Фирсов",
"Андрианов",
"Панин",
"Головин",
"Терехов",
"Ульянов",
"Шестаков",
"Агеев",
"Никонов",
"Селиванов",
"Баженов",
"Гордеев",
"Кожевников",
"Пахомов",
"Зимин",
"Костин",
"Широков",
"Филимонов",
"Ларионов",
"Овсянников",
"Сазонов",
"Суворов",
"Нефедов",
"Корнилов",
"Любимов",
"Львов",
"Горбачев",
"Копылов",
"Лукин",
"Токарев",
"Кулешов",
"Шилов",
"Большаков",
"Панкратов",
"Родин",
"Шаповалов",
"Покровский",
"Бочаров",
"Никольский",
"Маркин",
"Горелов",
"Агафонов",
"Березин",
"Ермолаев",
"Зубков",
"Куприянов",
"Трифонов",
"Масленников",
"Круглов",
"Третьяков",
"Колосов",
"Рожков",
"Артамонов",
"Шмелев",
"Лаптев",
"Лапшин",
"Федосеев",
"Зиновьев",
"Зорин",
"Уткин",
"Столяров",
"Зубов",
"Ткачев",
"Дорофеев",
"Антипов",
"Завьялов",
"Свиридов",
"Золотарев",
"Кулаков",
"Мещеряков",
"Макеев",
"Дьяконов",
"Гуляев",
"Петровский",
"Бондарев",
"Поздняков",
"Панфилов",
"Кочетков",
"Суханов",
"Рыжов",
"Старостин",
"Калмыков",
"Колесов",
"Золотов",
"Кравцов",
"Субботин",
"Шубин",
"Щукин",
"Лосев",
"Винокуров",
"Лапин",
"Парфенов",
"Исаков",
"Голованов",
"Коровин",
"Розанов",
"Артемов",
"Козырев",
"Русаков",
"Алешин",
"Крючков",
"Булгаков",
"Кошелев",
"Сычев",
"Синицын",
"Черных",
"Рогов",
"Кононов",
"Лаврентьев",
"Евсеев",
"Пименов",
"Пантелеев",
"Горячев",
"Аникин",
"Лопатин",
"Рудаков",
"Одинцов",
"Серебряков",
"Панков",
"Дегтярев",
"Орехов",
"Царев",
"Шувалов",
"Кондрашов",
"Горюнов",
"Дубровин",
"Голиков",
"Курочкин",
"Латышев",
"Севастьянов",
"Вавилов",
"Ерофеев",
"Сальников",
"Клюев",
"Носков",
"Озеров",
"Кольцов",
"Комиссаров",
"Меркулов",
"Киреев",
"Хомяков",
"Булатов",
"Ананьев",
"Буров",
"Шапошников",
"Дружинин",
"Островский",
"Шевелев",
"Долгов",
"Суслов",
"Шевцов",
"Пастухов",
"Рубцов",
"Бычков",
"Глебов",
"Ильинский",
"Успенский",
"Дьяков",
"Кочетов",
"Вишневский",
"Высоцкий",
"Глухов",
"Дубов",
"Бессонов",
"Ситников",
"Астафьев",
"Мешков",
"Шаров",
"Яшин",
"Козловский",
"Туманов",
"Басов",
"Корчагин",
"Болдырев",
"Олейников",
"Чумаков",
"Фомичев",
"Губанов",
"Дубинин",
"Шульгин",
"Касаткин",
"Пирогов",
"Семин",
"Трошин",
"Горохов",
"Стариков",
"Щеглов",
"Фетисов",
"Колпаков",
"Чесноков",
"Зыков",
"Верещагин",
"Минаев",
"Руднев",
"Троицкий",
"Окулов",
"Ширяев",
"Малинин",
"Черепанов",
"Измайлов",
"Алехин",
"Зеленин",
"Касьянов",
"Пугачев",
"Павловский",
"Чижов",
"Кондратов",
"Воронков",
"Капустин",
"Сотников",
"Демьянов",
"Косарев",
"Беликов",
"Сухарев",
"Белкин",
"Беспалов",
"Кулагин",
"Савицкий",
"Жаров",
"Хромов",
"Еремеев",
"Карташов",
"Астахов",
"Русанов",
"Сухов",
"Вешняков",
"Волошин",
"Козин",
"Худяков",
"Жилин",
"Малахов",
"Сизов",
"Ежов",
"Толкачев",
"Анохин",
"Вдовин",
"Бабушкин",
"Усов",
"Лыков",
"Горлов",
"Коршунов",
"Маркелов",
"Постников",
"Черный",
"Дорохов",
"Свешников",
"Гущин",
"Калугин",
"Блохин",
"Сурков",
"Кочергин",
"Греков",
"Казанцев",
"Швецов",
"Ермилов",
"Парамонов",
"Агапов",
"Минин",
"Корнев",
"Черняев",
"Гуров",
"Ермолов",
"Сомов",
"Добрынин",
"Барсуков",
"Глушков",
"Чеботарев",
"Москвин",
"Уваров",
"Безруков",
"Муратов",
"Раков",
"Снегирев",
"Гладков",
"Злобин",
"Моргунов",
"Поликарпов",
"Рябинин",
"Судаков",
"Кукушкин",
"Калачев",
"Грибов",
"Елизаров",
"Звягинцев",
"Корольков",
"Федосов",
"Васильева",
"Петрова",
"Соколова",
"Михайлова",
"Новикова",
"Федорова",
"Морозова",
"Волкова",
"Алексеева",
"Лебедева",
"Семенова",
"Егорова",
"Павлова",
"Козлова",
"Степанова",
"Николаева",
"Орлова",
"Андреева",
"Макарова",
"Никитина",
"Захарова",
"Зайцева",
"Соловьева",
"Борисова",
"Яковлева",
"Григорьева",
"Романова",
"Воробьева",
"Сергеева",
"Кузьмина",
"Фролова",
"Александрова",
"Дмитриева",
"Королева",
"Гусева",
"Киселева",
"Ильина",
"Максимова",
"Полякова",
"Сорокина",
"Виноградова",
"Ковалева",
"Белова",
"Медведева",
"Антонова",
"Тарасова",
"Жукова",
"Баранова",
"Филиппова",
"Комарова",
"Давыдова",
"Беляева",
"Герасимова",
"Богданова",
"Осипова",
"Сидорова",
"Матвеева",
"Титова",
"Маркова",
"Миронова",
"Крылова",
"Куликова",
"Карпова",
"Власова",
"Мельникова",
"Денисова",
"Гаврилова",
"Тихонова",
"Казакова",
"Афанасьева",
"Данилова",
"Савельева",
"Тимофеева",
"Фомина",
"Чернова",
"Абрамова",
"Мартынова",
"Ефимова",
"Федотова",
"Щербакова",
"Назарова",
"Калинина",
"Исаева",
"Чернышева",
"Быкова",
"Маслова",
"Родионова",
"Коновалова",
"Лазарева",
"Воронина",
"Климова",
"Филатова",
"Пономарева",
"Голубева",
"Кудрявцева",
"Прохорова",
"Наумова",
"Потапова",
"Журавлева",
"Овчинникова",
"Трофимова",
"Леонова",
"Соболева",
"Ермакова",
"Колесникова",
"Гончарова",
"Емельянова",
"Никифорова",
"Грачева",
"Котова",
"Гришина",
"Ефремова",
"Архипова",
"Громова",
"Кириллова",
"Малышева",
"Панова",
"Моисеева",
"Румянцева",
"Акимова",
"Кондратьева",
"Бирюкова",
"Горбунова",
"Анисимова",
"Еремина",
"Тихомирова",
"Галкина",
"Лукьянова",
"Михеева",
"Скворцова",
"Юдина",
"Белоусова",
"Нестерова",
"Симонова",
"Прокофьева",
"Харитонова",
"Князева",
"Цветкова",
"Левина",
"Митрофанова",
"Воронова",
"Аксенова",
"Софронова",
"Мальцева",
"Логинова",
"Горшкова",
"Савина",
"Краснова",
"Майорова",
"Демидова",
"Елисеева",
"Рыбакова",
"Сафонова",
"Плотникова",
"Демина",
"Хохлова",
"Фадеева",
"Молчанова",
"Игнатова",
"Литвинова",
"Ершова",
"Ушакова",
"Дементьева",
"Рябова",
"Мухина",
"Калашникова",
"Леонтьева",
"Лобанова",
"Кузина",
"Корнеева",
"Евдокимова",
"Бородина",
"Платонова",
"Некрасова",
"Балашова",
"Боброва",
"Жданова",
"Блинова",
"Игнатьева",
"Короткова",
"Муравьева",
"Крюкова",
"Белякова",
"Богомолова",
"Дроздова",
"Лаврова",
"Зуева",
"Петухова",
"Ларина",
"Никулина",
"Серова",
"Терентьева",
"Зотова",
"Устинова",
"Фокина",
"Самойлова",
"Константинова",
"Сахарова",
"Шишкина",
"Самсонова",
"Черкасова",
"Чистякова",
"Носова",
"Спиридонова",
"Карасева",
"Авдеева",
"Воронцова",
"Зверева",
"Владимирова",
"Селезнева",
"Нечаева",
"Кудряшова",
"Седова",
"Фирсова",
"Андрианова",
"Панина",
"Головина",
"Терехова",
"Ульянова",
"Шестакова",
"Агеева",
"Никонова",
"Селиванова",
"Баженова",
"Гордеева",
"Кожевникова",
"Пахомова",
"Зимина",
"Костина",
"Широкова",
"Филимонова",
"Ларионова",
"Овсянникова",
"Сазонова",
"Суворова",
"Нефедова",
"Корнилова",
"Любимова",
"Львова",
"Горбачева",
"Копылова",
"Лукина",
"Токарева",
"Кулешова",
"Шилова",
"Большакова",
"Панкратова",
"Родина",
"Шаповалова",
"Покровскийа",
"Бочарова",
"Никольскийа",
"Маркина",
"Горелова",
"Агафонова",
"Березина",
"Ермолаева",
"Зубкова",
"Куприянова",
"Трифонова",
"Масленникова",
"Круглова",
"Третьякова",
"Колосова",
"Рожкова",
"Артамонова",
"Шмелева",
"Лаптева",
"Лапшина",
"Федосеева",
"Зиновьева",
"Зорина",
"Уткина",
"Столярова",
"Зубова",
"Ткачева",
"Дорофеева",
"Антипова",
"Завьялова",
"Свиридова",
"Золотарева",
"Кулакова",
"Мещерякова",
"Макеева",
"Дьяконова",
"Гуляева",
"Петровскийа",
"Бондарева",
"Позднякова",
"Панфилова",
"Кочеткова",
"Суханова",
"Рыжова",
"Старостина",
"Калмыкова",
"Колесова",
"Золотова",
"Кравцова",
"Субботина",
"Шубина",
"Щукина",
"Лосева",
"Винокурова",
"Лапина",
"Парфенова",
"Исакова",
"Голованова",
"Коровина",
"Розанова",
"Артемова",
"Козырева",
"Русакова",
"Алешина",
"Крючкова",
"Булгакова",
"Кошелева",
"Сычева",
"Синицына",
"Черныха",
"Рогова",
"Кононова",
"Лаврентьева",
"Евсеева",
"Пименова",
"Пантелеева",
"Горячева",
"Аникина",
"Лопатина",
"Рудакова",
"Одинцова",
"Серебрякова",
"Панкова",
"Дегтярева",
"Орехова",
"Царева",
"Шувалова",
"Кондрашова",
"Горюнова",
"Дубровина",
"Голикова",
"Курочкина",
"Латышева",
"Севастьянова",
"Вавилова",
"Ерофеева",
"Сальникова",
"Клюева",
"Носкова",
"Озерова",
"Кольцова",
"Комиссарова",
"Меркулова",
"Киреева",
"Хомякова",
"Булатова",
"Ананьева",
"Бурова",
"Шапошникова",
"Дружинина",
"Островскийа",
"Шевелева",
"Долгова",
"Суслова",
"Шевцова",
"Пастухова",
"Рубцова",
"Бычкова",
"Глебова",
"Ильинскийа",
"Успенскийа",
"Дьякова",
"Кочетова",
"Вишневскийа",
"Высоцкийа",
"Глухова",
"Дубова",
"Бессонова",
"Ситникова",
"Астафьева",
"Мешкова",
"Шарова",
"Яшина",
"Козловскийа",
"Туманова",
"Басова",
"Корчагина",
"Болдырева",
"Олейникова",
"Чумакова",
"Фомичева",
"Губанова",
"Дубинина",
"Шульгина",
"Касаткина",
"Пирогова",
"Семина",
"Трошина",
"Горохова",
"Старикова",
"Щеглова",
"Фетисова",
"Колпакова",
"Чеснокова",
"Зыкова",
"Верещагина",
"Минаева",
"Руднева",
"Троицкийа",
"Окулова",
"Ширяева",
"Малинина",
"Черепанова",
"Измайлова",
"Алехина",
"Зеленина",
"Касьянова",
"Пугачева",
"Павловскийа",
"Чижова",
"Кондратова",
"Воронкова",
"Капустина",
"Сотникова",
"Демьянова",
"Косарева",
"Беликова",
"Сухарева",
"Белкина",
"Беспалова",
"Кулагина",
"Савицкийа",
"Жарова",
"Хромова",
"Еремеева",
"Карташова",
"Астахова",
"Русанова",
"Сухова",
"Вешнякова",
"Волошина",
"Козина",
"Худякова",
"Жилина",
"Малахова",
"Сизова",
"Ежова",
"Толкачева",
"Анохина",
"Вдовина",
"Бабушкина",
"Усова",
"Лыкова",
"Горлова",
"Коршунова",
"Маркелова",
"Постникова",
"Черныйа",
"Дорохова",
"Свешникова",
"Гущина",
"Калугина",
"Блохина",
"Суркова",
"Кочергина",
"Грекова",
"Казанцева",
"Швецова",
"Ермилова",
"Парамонова",
"Агапова",
"Минина",
"Корнева",
"Черняева",
"Гурова",
"Ермолова",
"Сомова",
"Добрынина",
"Барсукова",
"Глушкова",
"Чеботарева",
"Москвина",
"Уварова",
"Безрукова",
"Муратова",
"Ракова",
"Снегирева",
"Гладкова",
"Злобина",
"Моргунова",
"Поликарпова",
"Рябинина",
"Судакова",
"Кукушкина",
"Калачева",
"Грибова",
"Елизарова",
"Звягинцева",
"Королькова",
"Федосова"
];

const organizationSuffix = ["Inc", "Plc", "LLC", "ООО", "ЗАО", "ОАО", "ПАО", "ИП", "ОДО", "УП"];

const domains = [
  ".com",
  ".net",
  ".org",
  ".info",
  ".biz",
  ".co.uk",
  ".org.uk",
  ".me.uk",
  ".in",
  ".us",
  ".me",
  ".co",
  ".ca",
  ".cc",
  ".mobi",
  ".com.au",
  ".org.au",
  ".tv",
  ".ws",
  ".cm",
];

const consonants = ["б", "в", "г", "д", "ж", "з", "й", "к", "л", "м", "н", "п", "р", "с", "т", "ф", "х", "ц", "ч", "ш", "щ"];

const vowels = ["а", "и", "о", "у", "ы", "э"];

const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ъ",
  "ь",
  "э",
  "ю",
  "я"
];

export { alphabets, consonants, domains, firstNames, lastNames, organizationSuffix, vowels, wordBank };
