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
import soursopLeaf from "./images/soursop-leaf.jpg";
import guavaLeaf from "./images/guava-leaf.jpg";
import soursopFruit from "./images/Soursop-fruit.jpg";
import mangoLeaf from "./images/Mango-leaf.jpg";
import scorpionTailLeaf from "./images/Scorpion-tail-leaf.jpg";
import bloodDonorLeaf from "./images/Blood-donor-leaf.jpg";
import gegemuPlant from "./images/Gegemu-plant.jpg";
import treeOfLife from "./images/Tree-of-live.jpg";
import elegede from "./images/Elegede.jpg";
import passionPlant from "./images/passionPlant.jpg";
import avocadoPearLeaf from "./images/Avocadopearleaf.png";
import aidanLeaf from "./images/aidanLeaf.jpg";
import lamLeaf from "./images/lamLeaf.jpg";
import cassiaSpecie from "./images/cassiaSpecie.jpg";
import pineappleLeaf from "./images/pineappleLeaf.jpg";
import cottonPlant from "./images/cottonPlant.jpg";
import pineappleFruit from "./images/pineappleFruit.jpg";
import sweetLeaf from "./images/Sweetleaf.jpg";
import lemonGrass from "./images/lemon-grass.jpg";
import waterLeaf from "./images/waterLeaf.jpg";
import moringaSeeds from "./images/Moringa-Seeds.jpg";
import moringaLeaf from "./images/moringaLeaf.jpg";
import eweEran from "./images/eweEran.jpg";
import eweIpin from "./images/eweIpin.jpg";
import lapalapa from "./images/lapalapa.jpg";

class Garden {
  constructor() {
    this.garden = [];
    this.length = 0;
  }

  addPlant(
    english_name,
    yoruba_name,
    img,
    english_use,
    yoruba_use,
    model_name = ""
  ) {
    const plant = {
      id: this.length + 1,
      english_name: english_name,
      yoruba_name: yoruba_name,
      imgSrc: [img],
      english_uses: [english_use],
      yoruba_uses: [yoruba_use],
      model_name: model_name,
    };

    this.garden.push(plant);
    this.length++;

    return true;
  }

  addImage(english_name, img) {
    const plantIndex = this.garden.findIndex(
      (plant) => plant.english_name.toLowerCase() === english_name.toLowerCase()
    );
    if (plantIndex !== -1) {
      this.garden[plantIndex].imgSrc.push(img);
      return true;
    }
    return false;
  }

  removeImage(english_name, img) {
    const plantIndex = this.garden.findIndex(
      (plant) => plant.english_name.toLowerCase() === english_name.toLowerCase()
    );
    if (plantIndex !== -1) {
      const imgIndex = this.garden[plantIndex].imgSrc.indexOf(img);
      if (imgIndex !== -1) {
        this.garden[plantIndex].imgSrc.splice(imgIndex, 1);
        return true;
      }
    }
    return false;
  }

  addUse(english_name, english_use, yoruba_use) {
    const plantIndex = this.garden.findIndex(
      (plant) => plant.english_name.toLowerCase() === english_name.toLowerCase()
    );
    if (plantIndex !== -1) {
      this.garden[plantIndex].english_uses.push(english_use);
      this.garden[plantIndex].yoruba_uses.push(yoruba_use);
      return true;
    }
    return false;
  }

  removeUse(english_name, english_use) {
    const plantIndex = this.garden.findIndex(
      (plant) => plant.english_name === english_name
    );
    if (plantIndex !== -1) {
      const useIndex =
        this.garden[plantIndex].english_uses.indexOf(english_use);
      if (useIndex !== -1) {
        this.garden[plantIndex].english_uses.splice(useIndex, 1);
        this.garden[plantIndex].yoruba_uses.splice(useIndex, 1);
        return true;
      }
    }
    return false;
  }

  findPlant(model_name) {
    let plant = this.garden.find(
      (p) => p?.model_name.toLowerCase() == model_name.toLowerCase()
    );

    return plant
      ? { success: true, data: plant, message: "plant found" }
      : { success: false, data: null, message: "plant not found in garden" };
  }

  removePlant(english_name) {
    if (!english_name) return null;
    let index = this.garden.findIndex((plant) =>
      plant.english_name.includes(english_name)
    );

    if (index !== -1) {
      this.garden.splice(index, 1);
      this.length--;
      return true;
    }
    return false;
  }

  changeEnglishName(old_english_name, new_english_name) {
    const plant = this.findPlant(old_english_name);
    if (plant) {
      plant.english_name = new_english_name;
      return true;
    }
    return false;
  }

  changeYorubaName(english_name, new_yoruba_name) {
    const plant = this.findPlant(english_name);
    if (plant) {
      plant.yoruba_name = new_yoruba_name;
      return true;
    }
    return false;
  }
  getAll() {
    return this.garden;
  }
  getFirst() {
    return this.garden[0];
  }
  getLast() {
    return this.garden[this.length - 1];
  }
  getTotal() {
    return this.length;
  }
}

const MY_GARDEN = new Garden();

// Dried plantain leaf
MY_GARDEN.addPlant(
  (english_name = "Plantain leaf"),
  (yoruba_name = "Ewé ọ̀gẹ̀dẹ̀"),
  (img = driedPlantain1),
  (english_use = "used to boost the immune system and to aid health vitality."),
  (yoruba_use =
    "A máa ń lò ó láti sèrànwọ́ fún àjẹsára àti láti sèrànwọ́ fún ìgbésí ayé ara"),
  (model_name = "Ewe Ogede")
);

// Garlic
MY_GARDEN.addPlant(
  (english_name = "Garlic"),
  (yoruba_name = "Ewé ọ̀gẹ̀dẹ̀ gbígbẹ"),
  (img = garlic),
  (english_use =
    "use for healing wounds, aiding digestions, and boosting the immune system."),
  (yoruba_use =
    "Láti wo ojú ọgbẹ́ sàn, ṣíṣe ìrànwọ́ fún dídá oúnjẹ àti ṣíṣe ìrànwọ́ fún ètò àjẹsára.")
);

// Pure Honey
MY_GARDEN.addPlant(
  (english_name = "Pure Honey"),
  (yoruba_name = "Oyin gidi"),
  (img = honey),
  (english_use =
    "use for healing wounds, aiding digestions, and boosting the immune system."),
  (yoruba_use =
    "Láti wo ojú ọgbẹ́ sàn, ṣíṣe ìrànwọ́ fún dídá oúnjẹ àti ṣíṣe ìrànwọ́ fún ètò àjẹsára.")
);

// Male pawpaw leaf
MY_GARDEN.addPlant(
  (english_name = "Male pawpaw leaf"),
  (yoruba_name = "Ewé ìbépẹ akọ"),
  (img = malePawPawLeaf),
  (english_use = "used in the treatment of arthritis."),
  (yoruba_use = "Fún ṣíṣe ìtọjú làkúrègbè, tàbí àìsàn romolégun")
);

// Bitter leaf
MY_GARDEN.addPlant(
  (english_name = "Bitter leaf"),
  (yoruba_name = "Ewé Ewuro"),
  (img = bitterLeaf),
  (english_use =
    "can be used in reducing high sugar level and cholesterol in the body alongside the treatment of arthritis"),
  (yoruba_use =
    "Ó lè di lílò láti dín ìpele ṣúgà tí ó ga kùn àti ọ̀rá inú ẹ̀jẹ̀ nínú ara pẹ̀lú ṣíṣe ìtọjú làkúrègbè tàbí àìsàn romolégun.")
);

// Scent leaf
MY_GARDEN.addPlant(
  (english_name = "Scent leaf"),
  (yoruba_name = "Ewé Efiri"),
  (img = scentLeaf),
  (english_use =
    "can be combined with male pawpaw leaf to treat arthritis, or can be taken alone to treat cold, cough, skin disease and other ailments"),
  (yoruba_use =
    "Ó lè di lílò pẹ̀lú Ewé ìbépẹ ńlá láti tọ́jú àìsàn làkúrègbè tàbí láti tọ́jú  òtútù, ikọ́, àisàn àwọ̀ ara, àti àwọn àìsàn mìíràn")
);

// Bay leaf
MY_GARDEN.addPlant(
  (english_name = "Bay leaf"),
  (yoruba_name = "Ewé bùnkún"),
  (img = bayLeaf),
  (english_use =
    "used for lowering blood sugar, controlling cold, bowel movement, to eliminate insomnia, and also used to reduce high cholestero"),
  (yoruba_use =
    "A máa ń lò láti dín súgà èjè kùn, síṣàkóso òtútù, ìgbókègbódò ìfun, láti pa àìróorunsùn, a sì tún máa ń lò ó láti dín ọ̀rá inú ẹ̀jẹ̀ tí ó ga kùn")
);

// Sandpaper leaf
MY_GARDEN.addPlant(
  (english_name = "Sandpaper leaf"),
  (yoruba_name = "Ewé sisanpépà"),
  (img = sandpaperLeaf),
  (english_use =
    "it is used for controlling lice in chicken and other parasites and can also be used to treat hypertension."),
  (yoruba_use =
    "A máa ń lò ó láti ṣàkóso iná lára ẹran adie àti àwọn àfòmọ́ mìíràn, a sì tún lè lò ó fún ìtọ́jú ẹ̀jẹ̀ ríru.")
);

// General pawpaw leaf
MY_GARDEN.addPlant(
  (english_name = "General pawpaw leaf"),
  (yoruba_name = "Ewé ìbépẹ gbogboro"),
  (img = generalPawpawLeaf),
  (english_use =
    "when soaked in water for hours it can be used as eye drop to purify the eyes."),
  (yoruba_use =
    "Nígbà tí a bá rẹ ẹ́ sínú omi fún ọ̀pọ̀lọpọ̀ wákàtí, ó lè di lílò gẹ́gẹ́ bí òògùn ojú láti sọ ojú di mímọ́."),
  (model_name = "Ewe ibepe gbogboro")
);

// Groundnut oil
MY_GARDEN.addPlant(
  (english_name = "Groundnut oil"),
  (yoruba_name = "Òróró"),
  (img = groundnutOil),
  (english_use =
    "used with syringe and poured into the mouth of a ruminant animal in order for the animal to have an easy excretory passage."),
  (yoruba_use =
    "tí a lò pẹ̀lú abẹ́rẹ́ tí a sì dà á sí ẹnu ẹranko oníkùn mẹ́rin láti lè jẹ́ kí ẹranko náà rí ìgbé yà ní ọ̀nà tí ó rọrùn.")
);

// Soursop leaf
MY_GARDEN.addPlant(
  (english_name = "Soursop leaf"),
  (yoruba_name = "Ewé èbọ̀ /àpékàn"),
  (img = soursopLeaf),
  (english_use =
    "can be used to treat ulcer and when combined with other leaves can serve as antimalaria."),
  (yoruba_use =
    "Ó lè di lílò láti tọ́jú ọgbẹ́ àti nígbà tí a bá lò ó pẹ̀lú àwọn Ewé mìíràn lè dúró gẹ́gẹ́ bí òògùn apá ibà.")
);

// Guava leaf
MY_GARDEN.addPlant(
  (english_name = "Guava leaf"),
  (yoruba_name = "Ewé gílófà"),
  (img = guavaLeaf),
  (english_use =
    "can be used as energizers, and can also help in lowering cholesterol level."),
  (yoruba_use =
    "Ó lè di lílò gẹ́gẹ́ bí àmúsagbára, ó sì tún lè sèrànwọ́ láti dín ìpele ọ̀rá inú ẹ̀jẹ̀ kùn.")
);

// Soursop fruit
MY_GARDEN.addPlant(
  (english_name = "Soursop fruit"),
  (yoruba_name = "Èso Èdò/ Àpékàn"),
  (img = soursopFruit),
  (english_use =
    "when carefully blended, it can be used to control insomnia and respiratory related diseases."),
  (yoruba_use =
    "tí a bá lọ dáadáa, a ń lò fún ìṣòro àìrórúnsùn, àti àwọn àìsàn to níse pẹ̀lu èémí.")
);

// Mango leaf
MY_GARDEN.addPlant(
  (english_name = "Mango leaf"),
  (yoruba_name = "Ewé Mángòrò"),
  (img = mangoLeaf),
  (english_use = "it is used for malaria treatment and stress remover."),
  (yoruba_use = "a máa ń lò fún ṣíṣe ìtọ́jú àìsàn ibà, àti mímú kúrò rírẹ̀ ara."),
  (model_name = "Ewe Mangoro")
);

// Scorpion tail leaf
MY_GARDEN.addPlant(
  (english_name = "Scorpion tail leaf"),
  (yoruba_name = "Ewé Agogo igún"),
  (img = scorpionTailLeaf),
  (english_use =
    "used for treating skin disease in livestock and children and can also be used to control prostate enlargement."),
  (yoruba_use =
    "a máa ń lò fún ṣíṣe ìtọ́jú àìsàn àwọ̀ ara lára ènìyàn àti eranko. A tún lo fún títọ́jú púrósítátì fífẹ̀.")
);

// Blood donor leaf
MY_GARDEN.addPlant(
  (english_name = "Blood donor leaf"),
  (yoruba_name = "Ewé Ọgbọ́"),
  (img = bloodDonorLeaf),
  (english_use =
    "used as blood booster, and purifier. It can also be used in treating diabetes and some skin diseases."),
  (yoruba_use =
    "a máa ń lò fún ṣíṣe ìtọ́jú àìsàn àtọ̀gbẹ, fún fífọ ẹ̀jẹ̀ mọ́, àti fún àìsàn àwọ̀ ara.")
);

// Gegemu plant (Devil's plant)
MY_GARDEN.addPlant(
  (english_name = "Gegemu plant (Devil's plant)"),
  (yoruba_name = "Ohun ọ̀gbìn gégémù"),
  (img = gegemuPlant),
  (english_use =
    "can be used for intoxication, heart enhancement, respiratory infections, and loss of appetite."),
  (yoruba_use =
    "ó lè di lílò fún ọtí àmupara, ìmúláradá ọkàn, àìsàn èémí, àti àìle jẹun.")
);

// Tree of life
MY_GARDEN.addPlant(
  (english_name = "Tree of life"),
  (yoruba_name = "Ewé akoko"),
  (img = treeOfLife),
  (english_use =
    "used for coronation and as a sign of respect. It is also used with guava leaf for women fertility and irregular menstruation."),
  (yoruba_use =
    "a fín joyè, o sí máa fí ọ̀wọ̀ hàn. Tí a bá lo pẹ̀lú Ewé gílófà, o lè ṣíṣe fún àìdúródédé ǹkan oṣù ọmọbìrin."),
  (model_name = "Ewe Akoko")
);

// Pumpkin
MY_GARDEN.addPlant(
  (english_name = "Pumpkin"),
  (yoruba_name = "Elegede"),
  (img = elegede),
  (english_use = "contains antioxidants and promotes sperm production."),
  (yoruba_use =
    "o kún fún ògùn adábòbò hóró, a sì tún lo fún ṣíṣe ìrànwọ́ fún àgbéjáde ìtọ̀.")
);

// Passion plant
MY_GARDEN.addPlant(
  (english_name = "Passion plant"),
  (yoruba_name = "Ohun ọ̀gbìn pásọ́nì"),
  (img = passionPlant),
  (english_use =
    "it can be used to control arthritis, joint pain kidney and heart problems."),
  (yoruba_use =
    "a máa ń lò fún ṣíṣe ìtọ́jú arọmọlégun, ìrora ara àti àìsàn kídìrín pẹ̀lú ọkàn.")
);

// Avocado pear leaf
MY_GARDEN.addPlant(
  (english_name = "Avocado pear leaf"),
  (yoruba_name = "Ewé píà òyìnbó"),
  (img = avocadoPearLeaf),
  (english_use = "can be used to treat insomnia and hypertension."),
  (yoruba_use = "a máa ń lò fún ṣíṣe ìtọ́jú àìsàn àìrórúnsùn àti ẹ̀jẹ̀ ríru.")
);

// Aidan leaf
MY_GARDEN.addPlant(
  (english_name = "Aidan leaf"),
  (yoruba_name = "Ewé àìdán"),
  (img = aidanLeaf),
  (english_use = "it is used in the farm as insecticide"),
  (yoruba_use = "a máa ń lò gẹ́gẹ́ bí ògùn apakoríko")
);

// Lam leaf
MY_GARDEN.addPlant(
  (english_name = "Lam leaf"),
  (yoruba_name = "Ewé dọ́ngóyárò"),
  (img = lamLeaf),
  (english_use =
    "it can be used as antimalaria, to treat headache and also for treating plants parasites."),
  (yoruba_use =
    "a máa ń lò fún ṣíṣe ìtọ́jú àìsàn ibà, orí fífọ́, àti gẹ́gẹ́ bíi ògùn apakoríko.")
);

// Molefuru leaf
// MY_GARDEN.addPlant(
//   (english_name = "Molefuru leaf"),
//   (yoruba_name = "Ewé mòléfùrù"),
//   (img = ""),
//   (english_use = "it can be used to control toothache problem."),
//   (yoruba_use = "a máa ń lò fún ṣíṣe ìtọ́jú ìṣòro ẹyín.")
// );

// Cassia Specie
MY_GARDEN.addPlant(
  (english_name = "Cassia Specie"),
  (yoruba_name = "Asán òyìnbó"),
  (img = cassiaSpecie),
  (english_use = "it can be used to treat ringworm and pile issues."),
  (yoruba_use = "a máa ń lò fún ṣíṣe ìtọ́jú àrùn inú àti ìṣòro jẹ̀díjẹ̀dí.")
);

// Pineapple leaf
MY_GARDEN.addPlant(
  (english_name = "Pineapple leaf"),
  (yoruba_name = "Ewé àti èso Ọ̀pọ́n òyìnbó"),
  (img = pineappleLeaf),
  (english_use = "is it can be used to treat arthritis and joint pain."),
  (yoruba_use =
    "a máa ń lò fún ṣíṣe ìtọ́jú àìsàn arọrọmọlápá, àti dídùn orí keríke.")
);

// Cotton plant
MY_GARDEN.addPlant(
  (english_name = "Cotton plant"),
  (yoruba_name = "Èso Òwú"),
  (img = cottonPlant),
  (english_use =
    "it's used to treat malaria, yellow fever, dysentry, and menstruation disorder."),
  (yoruba_use =
    "a máa ń lo láti fi tọ́jú àìsàn ibà, àìsedédé ǹkan oṣù ọmọbìrin, ìgbẹ́ gburu, ati ibà pọ́njú-pọ́ntú.")
);

// Pineapple fruit
MY_GARDEN.addPlant(
  (english_name = "Pineapple fruit"),
  (yoruba_name = "Èso ọ̀pọ̀n òyìnbó"),
  (img = pineappleFruit),
  (english_use =
    "it's used to reduce stress and body pain. When also used with other leaves, it can serve as herbs."),
  (yoruba_use =
    "a ń lò fún dídínkù wàhálà àti ìrora ara. A tún lo fún ṣíṣe àgbo.")
);

// Sweet leaf
MY_GARDEN.addPlant(
  (english_name = "Sweet leaf"),
  (yoruba_name = "Ewé adùn (sítífíà)"),
  (img = sweetLeaf),
  (english_use =
    "it can be used to lower blood pressure, and to reduce diarrhea."),
  (yoruba_use = "a ń lò fún dídínkù ìfúnpá àti ìgbẹ́ gburu.")
);

// Lemon grass
MY_GARDEN.addPlant(
  (english_name = "Lemon grass"),
  (yoruba_name = "Koríko oroǹbó kíkan"),
  (img = lemonGrass),
  (english_use = "it can be used to treat cough and catarrh issues."),
  (yoruba_use = "a ń lò fún kíkojú ikọ́, àti ìṣòro kàtá.")
);

// Water leaf
MY_GARDEN.addPlant(
  (english_name = "Water leaf"),
  (yoruba_name = "Èfọ́ Gbúre"),
  (img = waterLeaf),
  (english_use =
    "it can be used as iron supplement, to shrink tumor, and very useful for pregnant women. It can also be used to aid digestion and to control prostate enlargement, and hypertension."),
  (yoruba_use =
    "a ń lò gẹ́gẹ́ bí ògùn ìpèsè ẹ̀jẹ̀, fún ìlera pípé aláboyún, láti mú kí oúnjẹ ṣíṣe lára bí o ti yẹ. A tún lo fún títọ́jú fífẹ̀ púrósítátì, àti ẹ̀jẹ̀ ríru.")
);

// Moringa seed
MY_GARDEN.addPlant(
  (english_name = "Moringa seed"),
  (yoruba_name = "Hóró mọ̀ríngà"),
  (img = moringaSeeds),
  (english_use = "Helps to improve the digestive system"),
  (yoruba_use = "máa ń sèrànwọ́ fún ṣíṣe ìmúdára ètò dídá oúnjẹ.")
);

// Moringa leaf
MY_GARDEN.addPlant(
  (english_name = "Moringa leaf"),
  (yoruba_name = "Ewé mọ̀ríngà"),
  (img = moringaLeaf),
  (english_use =
    "Helps to protect the liver from damage by serving as antioxidants."),
  (yoruba_use =
    "máa ń sèrànwọ́ fún dídábò bo ẹ̀yà ara lífà, nípa ṣíṣe gẹ́gẹ́ bíi ògùn adábòbò àwọn ẹ̀yà ara.")
);
// Ewé Eran
MY_GARDEN.addPlant(
  (english_name = "Thaumatococcus daniellii"),
  (yoruba_name = "Ewé eeran"),
  (img = eweEran),
  (english_use =
    "Helps to protect the liver from damage by serving as antioxidants."),
  (yoruba_use =
    "máa ń sèrànwọ́ fún dídábò bo ẹ̀yà ara lífà, nípa ṣíṣe gẹ́gẹ́ bíi ògùn adábòbò àwọn ẹ̀yà ara.")
);

// Ewé ipin leaf
MY_GARDEN.addPlant(
  (english_name = "Sandpaper leaf"),
  (yoruba_name = "Ewé Ipin"),
  (img = eweIpin),
  (english_use =
    "Helps to protect the liver from damage by serving as antioxidants."),
  (yoruba_use =
    "máa ń sèrànwọ́ fún dídábò bo ẹ̀yà ara lífà, nípa ṣíṣe gẹ́gẹ́ bíi ògùn adábòbò àwọn ẹ̀yà ara.")
);

// Ewé làpálàpá
MY_GARDEN.addPlant(
  (english_name = "Red leaf plant"),
  (yoruba_name = "Ewé làpálàpá"),
  (img = lapalapa),
  (english_use = "helps to treat arthritis, and to reduce blood pressure."),
  (yoruba_use =
    "a máa ń lò fún ṣíṣe ìtọ́jú àìsàn aromolégun àti láti díkùn ìfúnpá."),
  (model_name = "Ewe lapalapa")
);

// // Yam leaf
// MY_GARDEN.addPlant(
//   (english_name = "Yam leaf"),
//   (yoruba_name = "Ewé Iṣu"),
//   (img = null),
//   (english_use = "Used to build strong bones and body vitality."),
//   (yoruba_use =
//     "a máa ń lò fún mímú kí egun ara le, àti ṣíṣe ìtọ́jú gbogbo ara.")
// );

// // Miracle fruit plant
// MY_GARDEN.addPlant(
//   (english_name = "Miracle fruit plant"),
//   (yoruba_name = "Èso ohun ọ̀gbìn àbámọlá"),
//   (img = null),
//   (english_use =
//     "it can be used to boost male fertility and to prevent cancer."),
//   (yoruba_use =
//     "a ń lò fún ṣíṣeranwo fún ǹkan ọmọkùnrin àti láti dènà ààrùn jẹjẹrẹ.")
// );

// // Wild lettuce
// MY_GARDEN.addPlant(
//   (english_name = "Wild lettuce"),
//   (yoruba_name = "Ẹ̀fọ́ yánrin"),
//   (img = null),
//   (english_use =
//     "used in the treatment of asthma, cough, urinary tract infection, insomnia, restlessness in children, painful menstrual period and so on."),
//   (yoruba_use =
//     "a máa ń lò fún ṣíṣe ìtọ́jú àrùn isè èmi àti ikọ́ ife, àìsàn ìtọ̀ títọ̀, àìrórúnsùn, àìsími ọmọdé, àti àìdúródédé ǹkan oṣù.")
// );

// // Wild lettuce
// MY_GARDEN.addPlant(
//   (english_name = "Wild lettuce"),
//   (yoruba_name = "Ẹ̀fọ́ yánrin"),
//   (img = null),
//   (english_use =
//     "used in the treatment of asthma, cough, urinary tract infection, insomnia, restlessness in children, painful menstrual period and so on."),
//   (yoruba_use =
//     "a máa ń lò fún ṣíṣe ìtọ́jú àrùn isè èmi àti ikọ́ ife, àìsàn ìtọ̀ títọ̀, àìrórúnsùn, àìsími ọmọdé, àti àìdúródédé ǹkan oṣù.")
// );

// // Amaranthus Spinosus
// MY_GARDEN.addPlant(
//   (english_name = "Amaranthus Spinosus"),
//   (yoruba_name = "Tẹ̀tẹ̀ ẹlẹ́gùn-ún"),
//   (img = null),
//   (english_use = "it cures pain in urination and kidney stones."),
//   (yoruba_use = "a máa ń lò fún títọ́jú ìrora ìtọ̀ títọ̀ àti àrùn òkúta kídìrín.")
// );

// // Solanum Nigrum
// MY_GARDEN.addPlant(
//   (english_name = "Solanum Nigrum"),
//   (yoruba_name = "Èfọ́ òdù"),
//   (img = null),
//   (english_use =
//     "can be used in the treatment of bacteria infections, cough and indigestion."),
//   (yoruba_use =
//     "a máa ń lò fún ṣíṣe ìtọ́jú ìkóràn batéríà, ikọ́, àti àìdà oúnjẹ.")
// );

// // Euphorbia Etha
// MY_GARDEN.addPlant(
//   (english_name = "Euphorbia Etha"),
//   (yoruba_name = "Ewé oun ògbìn ikọ́-fee"),
//   (img = null),
//   (english_use = "have used in the control of asthma, cough, and cold."),
//   (yoruba_use = "a máa ń lò fún ṣíṣe ìtọ́jú ikọ́, ikọ́-fee, àti òtútù.")
// );

// console.log(MY_GARDEN.getTotal());
const MYGARDEN = MY_GARDEN.getAll();
export default MY_GARDEN;
