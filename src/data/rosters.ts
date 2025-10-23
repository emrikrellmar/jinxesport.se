import kreppoImg from "../assets/kreppo.png";
import kevinImg from "../assets/1kevin.png";
import ak15Img from "../assets/15ak.png";
import emme1Img from "../assets/emme1.png";
import ragekulanImg from "../assets/ragekulaN.png";
import braxenImg from "../assets/Braxen.png";
import silhouetteImg from "../assets/silhouette.png";

type RosterStatus = "Active" | "TBA";

export type Player = {
  handle: string;
  name: string;
  role: string;
  photo?: string;
  status?: RosterStatus;
};

export type StaffMember = {
  name: string;
  handle?: string;
  role: string;
  photo?: string;
};

export const mainRoster: Player[] = [
  { handle: "KREPPO", name: "Emil Sjöstrand", role: "AWPer", photo: kreppoImg, status: "Active" },
  { handle: "1KEVIN", name: "Kevin Nygren", role: "In-Game Leader", photo: kevinImg, status: "Active" },
  { handle: "15AK", name: "Isak Olsson", role: "Rifler", photo: ak15Img, status: "Active" },
  { handle: "EMME1", name: "Emrik Rellmar", role: "Rifler", photo: emme1Img, status: "Active" },
  { handle: "RAGEKULAN", name: "Kim Danneholt", role: "Coach", photo: ragekulanImg, status: "Active" },
  { handle: "TBA", name: "TBA", role: "Rifler", photo: silhouetteImg, status: "TBA" },
];

export const academyRoster: Player[] = Array.from({ length: 5 }, () => ({
  handle: "TBA",
  name: "TBA",
  role: "TBD",
  photo: silhouetteImg,
  status: "TBA",
}));

export const staff: StaffMember[] = [
  {
    name: "Jonas Johansson",
    handle: "BRAXEN",
    role: "Founder / Owner",
    photo: braxenImg,
  },
];

