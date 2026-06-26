import type { Tile } from "../types";

export const BOARD = {
  width: 1200,
  height: 1200,
};

export const PLAYER_WIDTH = 80;
export const PLAYER_HEIGHT = 72;

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
  player("masterf", 587, 132),
  player("shadow", 131, 146),
  player("larcer", 211, 147),
  player("alpha1", 50, 148),
  player("dolby", 293, 149),
  player("fiona", 375, 183),
  player("birthg", 588, 206),
  player("mlym", 754, 208),
  player("iszakos", 132, 220),
  player("raz", 212, 221),
  player("pandora", 51, 222),
  player("gihu", 294, 223),
  player("jaelynd", 463, 253),
  player("lisa", 376, 257),
  player("hawk", 589, 282),
  player("fuqyu", 671, 282),

  fixed("outpost-top-right", "outpost", 755, 283),

  player("sub-minoral", 133, 296),

  fixed("outpost-left-top", "outpost", 213, 297),

  player("loki", 52, 298),
  player("hollow", 295, 299),
  player("moon2", 839, 324),
  player("fox", 464, 327),
  player("under-dog", 377, 333),
  player("peaches", 591, 360),
  player("gfitzy", 673, 360),
  player("gwen", 757, 361),
  player("aky", 213, 373),
  player("mila", 295, 373),
  player("devin", 53, 374),
  player("wally", 133, 374),
  player("clown", 840, 401),
  player("dumbers", 465, 403),
  player("sj", 922, 403),
  player("sauce", 592, 437),
  player("vamp", 674, 437),
  player("veronica", 758, 438),
  player("student", 258, 448),
  player("blue", 340, 448),
  player("purple", 53, 449),
  player("april", 178, 449),
  player("saeid", 841, 477),

  fixed("fort", "fort", 421, 479, 121, 114, "Fort"),
  player("marsh", 923, 482),
  player("ozzka", 593, 516),
  player("baku", 675, 516),
  player("faye", 759, 517),
  player("alia", 258, 521),
  player("night", 340, 521),
  player("mcqueen", 178, 522),
  player("woopz", 925, 562),
  player("alley", 167, 595),
  player("dev", 249, 595),
  player("mnight", 87, 596),
  player("saph", 333, 596),
  player("faedya", 416, 596),
  player("daan", 595, 596),
  player("venom", 677, 596),
  player("nyssa", 499, 597),
  player("alien", 761, 597),
  player("ark2", 844, 597),

  fixed("gate", "gate", 552, 668, 121, 114, "Gate"),

  player("alex", 388, 674),
  player("sss", 470, 674),
  player("boozy", 680, 674),
  player("zeph", 762, 674),
  player("nemesis", 300, 675),
  player("mirage", 846, 675),
  player("fang", 91, 678),
  player("hacong", 173, 678),

  player("chilly2", 389, 751),
  player("ark", 471, 751),

  fixed("outpost-bottom-left", "outpost", 252, 752,),
  fixed("outpost-bottom-mid", "outpost", 764, 753),

  player("epic", 82, 753),
  player("moon", 682, 753),
  player("german", 166, 754),
  player("phnx1", 848, 754),
  player("chilly1", 599, 788),
    player("alvaros", 390, 830),
  player("srzy", 472, 830),
  player("yuki", 302, 831),
  player("lobby", 685, 831),
  player("phpha", 53, 832),
  player("kopo", 135, 832),
  player("dmgd", 767, 832),
  player("chamber", 219, 833),
  player("phnx2", 851, 833),

  fixed("outpost-right", "outpost", 935, 833),

  player("harley", 1017, 833),

  fixed("alliance-top", "alliance", 1107, 850),

  player("nova1", 601, 863),
  player("xar", 686, 905),
  player("brd", 768, 906),
  player("king", 852, 907),
  player("crash", 937, 909),
  player("poca", 392, 910),
  player("doug", 474, 910),
  player("alpha2", 55, 911),
  player("ebtexa", 137, 911),
  player("ik", 304, 911),
  player("ladylynn", 221, 912),

  fixed("alliance-left", "alliance", 1028, 926),
  fixed("alliance-right", "alliance", 1107, 925),

  player("olga", 602, 937),
];
