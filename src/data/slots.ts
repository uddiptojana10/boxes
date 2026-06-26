import type { Tile } from "../types";

export const BOARD = {
  width: 1380,
  height: 1380,
};

export const PLAYER_WIDTH = 92;
export const PLAYER_HEIGHT = 83;

const player = (
  id: string,
  x: number,
  y: number
): Tile => ({
  id,
  type: "player",
  x,
  y,
  width: PLAYER_WIDTH,
  height: PLAYER_HEIGHT,
});

const fixed = (
  id: string,
  type: "fort" | "gate" | "outpost" | "alliance",
  x: number,
  y: number,
  width = PLAYER_WIDTH,
  height = PLAYER_HEIGHT,
  name?: string
): Tile => ({
  id,
  type,
  x,
  y,
  width,
  height,
  name,
});

export const slots: Tile[] = [
  player("masterf", 675, 152),
  player("shadow", 151, 168),
  player("larcer", 243, 169),
  player("alpha1", 58, 170),
  player("dolby", 337, 172),
  player("fiona", 431, 211),
  player("birthGiver", 676, 237),
  player("mlym", 868, 239),
  player("iszakos", 152, 253),
  player("raz", 244, 254),
  player("pandora", 59, 255),
  player("gihu", 338, 257),
  player("jaelynd", 532, 291),
  player("lisa", 432, 296),
  player("hawk", 677, 324),
  player("fuqyu", 772, 324),

  fixed("outpost-top-right", "outpost", 869, 325),

  player("sub-minoral", 153, 340),

  fixed("outpost-left-top", "outpost", 245, 342),

  player("loki", 60, 343),
  player("hollow", 339, 344),
  player("moon2", 965, 373),
  player("fox", 534, 376),
  player("under-dog", 434, 383),
  player("peaches", 680, 414),
  player("gfitzy", 774, 414),
  player("gwen", 870, 415),
  player("aky", 245, 429),
  player("mila", 339, 429),
  player("devin", 61, 430),
  player("wally", 153, 430),
  player("clown", 966, 461),
  player("dumbers", 535, 463),
  player("sj", 1061, 463),
  player("sauce", 681, 503),
  player("vamp", 775, 503),
  player("veronica", 872, 504),
  player("student", 297, 515),
  player("blue", 391, 515),
  player("purple", 61, 516),
  player("april", 205, 516),
  player("saeid", 967, 548),

  fixed("fort", "fort", 484, 551, 139, 131, "Fort"),
  player("marsh", 1061, 554),
  player("ozzka", 682, 593),
  player("baku", 776, 593),
  player("faye", 873, 595),
  player("alia", 297, 599),
  player("night", 391, 599),
  player("mcqueen", 205, 600),
  player("woopz", 1063, 646),
  player("alley", 192, 685),
  player("dev", 286, 685),
  player("MidNight", 100, 686),
  player("saph", 383, 686),
  player("faedya", 478, 686),
  player("daan", 685, 686),
  player("venom", 779, 686),
  player("nyssa", 574, 687),
  player("alien", 876, 687),
  player("ark2", 970, 687),

  fixed("gate", "gate", 635, 768, 139, 131, "Gate"),

  player("alex", 446, 775),
  player("sss", 541, 775),
  player("boozy", 782, 775),
  player("zeph", 876, 775),
  player("nemesis", 345, 776),
  player("mirage", 974, 776),
  player("fang", 105, 780),
  player("hacong", 199, 780),

  player("chilly2", 448, 864),
  player("ark", 542, 864),

  fixed("outpost-bottom-left", "outpost", 290, 865),
  fixed("outpost-bottom-mid", "outpost", 879, 866),

  player("epic", 94, 866),
  player("moon", 784, 866),
  player("german", 191, 867),
  player("pheonix1", 976, 867),
  player("chilly1", 689, 907),
  player("alvaros", 449, 954),
  player("srzy", 543, 954),
  player("yuki", 347, 956),
  player("lobby", 788, 956),
  player("phpha", 61, 957),
  player("kopo", 155, 957),
  player("DamageDealer", 882, 957),
  player("chamber", 252, 958),
  player("pheonix2", 979, 958),

  fixed("outpost-right", "outpost", 1075, 958),

  player("harley", 1170, 958),

  fixed("alliance-top", "alliance", 1273, 978),

  player("nova1", 691, 993),
  player("xar", 789, 1041),
  player("brd", 884, 1042),
  player("king", 980, 1043),
  player("crash", 1078, 1045),
  player("poca", 451, 1046),
  player("doug", 545, 1046),
  player("alpha2", 63, 1048),
  player("ebtexa", 158, 1048),
  player("ik", 350, 1048),
  player("ladylynn", 254, 1049),

  fixed("alliance-left", "alliance", 1182, 1065),
  fixed("alliance-right", "alliance", 1273, 1064),

  player("olga", 692, 1078),
];
