// import jute from "./jute-leaf.jpg";
import scentLeaf from "./images/scent-leaf.jpeg";
import scentLeaf2 from "./images/scentLeaf_1.jpg";
import driedPlantain1 from "./images/dried-plantain-leaf.jpg";
import driedPlantain2 from "./images/dried-plantain-leaf-2.jpg";
import garlic from "./images/garlic.jpg";
import honey from "./images/pure-honey.jpg";
import malePawPawLeaf from "./images/male-pawpaw-leaf.jpg";
import bitterLeaf from "./images/bitter-leaf.jpg";
import bayLeaf from "./images/bay-leaf.jpg";
import sandpaperLeaf from "./images/sandpaper-leaf.jpg";
import generalPawpawLeaf from "./images/generalPawpaw-leaf.png";
import groundnutOil from "./images/groundnut-oil.jpg";

const MY_GARDEN = [
  // Dried Plantain leaf
  {
    id: 1,
    english_name: "Dried plantain leaf",
    yoruba_name: "Ewé ọ̀gẹ̀dẹ̀ gbígbẹ",
    imgSrc: [driedPlantain1],
    english_uses: [
      "used to boost the immune system and to aid health vitality.",
    ],
    yoruba_uses: [
      "A máa ń lò ó láti sèrànwọ́ fún àjẹsára àti láti sèrànwọ́ fún ìgbésí ayé ara",
    ],
  },
  // garlic
  {
    id: 2,
    english_name: "Garlic",
    yoruba_name: "Ewé ọ̀gẹ̀dẹ̀ gbígbẹ",
    imgSrc: [garlic],
    english_uses: [
      "use for healing wounds, aiding digestions, and boosting the immune system.",
    ],
    yoruba_uses: [
      "Láti wo ojú ọgbẹ́ sàn, ṣíṣe ìrànwọ́ fún dídá oúnjẹ àti ṣíṣe ìrànwọ́ fún ètò àjẹsára.",
    ],
  },

  // pure honey
  {
    id: 3,
    english_name: "Pure Honey",
    yoruba_name: "Oyin gidi",
    imgSrc: [honey],
    english_uses: [
      "use for healing wounds, aiding digestions, and boosting the immune system.",
    ],
    yoruba_uses: [
      "Láti wo ojú ọgbẹ́ sàn, ṣíṣe ìrànwọ́ fún dídá oúnjẹ àti ṣíṣe ìrànwọ́ fún ètò àjẹsára.",
    ],
  },

  // Male Pawpaw leaf
  {
    id: 4,
    english_name: "Male pawpaw leaf",
    yoruba_name: "Ewé ìbépẹ akọ",
    imgSrc: [malePawPawLeaf],
    english_uses: ["used in the treatment of arthritis."],
    yoruba_uses: ["Fún ṣíṣe ìtọjú làkúrègbè, tàbí àìsàn romolégun"],
  },

  // Bitter leaf
  {
    id: 5,
    english_name: "Bitter leaf",
    yoruba_name: "Ewé Ewúro",
    imgSrc: [bitterLeaf],
    english_uses: [
      "can be used in reducing high sugar level and cholesterol in the body alongside the treatment of arthritis",
    ],
    yoruba_uses: [
      "Ó lè di lílò láti dín ìpele ṣúgà tí ó ga kùn àti ọ̀rá inú ẹ̀jẹ̀ nínú ara pẹ̀lú ṣíṣe ìtọjú làkúrègbè tàbí àìsàn romolégun.",
    ],
  },

  // Scent leaf
  {
    id: 6,
    english_name: "Scent leaf",
    yoruba_name: "Ewé Efiri",
    imgSrc: [scentLeaf],
    english_uses: [
      "can be combined with male pawpaw leaf to treat arthritis, or can be taken alone to treat cold, cough, skin disease and other ailments",
    ],
    yoruba_uses: [
      "Ó lè di lílò pẹ̀lú ewé ìbépẹ ńlá láti tọ́jú àìsàn làkúrègbè tàbí láti tọ́jú  òtútù, ikọ́, àisàn àwọ̀ ara, àti àwọn àìsàn mìíràn",
    ],
  },

  // Sandpaper leaf
  {
    id: 7,
    english_name: "Sandpaper leaf",
    yoruba_name: "Ewé sisanpépà",
    imgSrc: [sandpaperLeaf],
    english_uses: [
      "it is used for controlling lice in chicken and other parasites and can also be used to treat hypertension.",
    ],
    yoruba_uses: [
      "A máa ń lò ó láti ṣàkóso iná lára ẹran adie àti àwọn àfòmọ́ mìíràn, a sì tún lè lò ó fún ìtọ́jú ẹ̀jẹ̀ ríru.",
    ],
  },

  // Bay leaf
  {
    id: 8,
    english_name: "Bay leaf",
    yoruba_name: "Ewé bùnkún",
    imgSrc: [bayLeaf],
    english_uses: [
      "used for lowering blood sugar, controlling cold, bowel movement, to eliminate insomnia, and also used to reduce high cholestero",
    ],
    yoruba_uses: [
      "A máa ń lò láti dín súgà èjè kùn, síṣàkóso òtútù, ìgbókègbódò ìfun, láti pa àìróorunsùn, a sì tún máa ń lò ó láti dín ọ̀rá inú ẹ̀jẹ̀ tí ó ga kùn",
    ],
  },
];
export default MY_GARDEN;
