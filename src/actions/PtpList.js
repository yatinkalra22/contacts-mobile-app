import { GET_PTP_LIST } from "./Types";

const data = [
  {
    name: "Mr. KV Srinivasan",
    amount: "15,907",
    ifsc_id: "RLUCMUM000040105",
    currentDpd: 625,
    address: "113, B Block Valmilik CHS, Govind PlazaNagar, NRI Tower",
    date: "20th Jan",
    type: "PTP",
  },
  {
    name: "Mr. Yatin Kalra",
    amount: "1000",
    currentDpd: 400,
    ifsc_id: "SBI00000001",
    address: "203, Shanti Park, Mira Road east",
    date: "19th Jan",
    type: "RTP",
  },
  {
    name: "Ms. Kavita Patil",
    amount: "33,333",
    currentDpd: 100,
    ifsc_id: "HDFC1010005",
    address: "201, Hitoshi park, Borivali",
    date: "16th Jan",
    type: "BTP",
  },
  {
    name: "Mr. Pranav Patil",
    amount: "20,000",
    currentDpd: 50,
    ifsc_id: "KCK66400021023",
    address: "404, B Block Valmilik CHS, Govind PlazaNagar, NRI Tower",
    date: "10th Jan",
    type: "PTP",
  },
];

export const getPipList = () => {
  return {
    type: GET_PTP_LIST,
    payload: data,
  };
};
