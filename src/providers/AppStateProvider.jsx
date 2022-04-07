import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";

const AppStateProvider = ({ children }) => {
  const [prototypes] = useState([
    {
      id: "music-01",
      title: "정릉",
      artist: "곽진언",
      release: "2022-04-06",
      thumbnail:
        "https://cdnimg.melon.co.kr/cm2/album/images/109/10/264/10910264_20220405163916_500.jpg/melon/resize/240/quality/80/optimize",
      price: 10,
    },
    {
      id: "music-02",
      title: "Amaranth (FEAT. 딘딘)",
      artist: "조현영",
      release: "2022.04.05",
      thumbnail:
        "https://cdnimg.melon.co.kr/cm2/album/images/109/10/600/10910600_20220405185057_500.jpg/melon/resize/240/quality/80/optimize",
      price: 20,
    },
    {
      id: "music-03",
      title: "Grey Suit - The 2nd Mini Album",
      artist: "수호 (SUHO)",
      release: "2022.04.04",
      thumbnail:
        "https://cdnimg.melon.co.kr/cm2/album/images/109/08/243/10908243_20220404114340_500.jpg/melon/resize/240/quality/80/optimize",
      price: 30,
    },
    {
      id: "music-04",
      title: "Tailwind",
      artist: "융진",
      release: "2022.04.03",
      thumbnail:
        "https://cdnimg.melon.co.kr/cm2/album/images/109/07/791/10907791_20220403213658_500.jpg/melon/resize/240/quality/80/optimize",
      price: 40,
    },
    {
      id: "music-05",
      title: "이 밤을 살아가는 너에게",
      artist: "타임브릿지",
      release: "2022.04.02",
      thumbnail:
        "https://cdnimg.melon.co.kr/cm2/album/images/109/06/934/10906934_20220406105724_500.jpg/melon/resize/240/quality/80/optimize",
      price: 50,
    },
    {
      id: "music-06",
      title: "새벽 어귀",
      artist: "윤현상",
      release: "2022.03.31",
      thumbnail:
        "https://cdnimg.melon.co.kr/cm2/album/images/109/05/202/10905202_20220330180736_500.jpg/melon/resize/240/quality/80/optimize",
      price: 60,
    },
    {
      id: "music-07",
      title: "Make me feel!",
      artist: "이 혜, Lymm (림)",
      release: "2022.03.30",
      thumbnail:
        "https://cdnimg.melon.co.kr/cm2/album/images/109/01/964/10901964_20220328173448_500.jpg/melon/resize/240/quality/80/optimize",
      price: 70,
    },
    {
      id: "music-08",
      title: "하루살이",
      artist: "태리 (Terry)",
      release: "2022.03.29",
      thumbnail:
        "https://cdnimg.melon.co.kr/cm2/album/images/109/02/973/10902973_20220329145336_500.jpg/melon/resize/240/quality/80/optimize",
      price: 80,
    },
    {
      id: "music-09",
      title: "서툰 이별을 하려해",
      artist: "문별 (마마무)",
      release: "2022.03.28 ",
      thumbnail:
        "https://cdnimg.melon.co.kr/cm2/album/images/109/01/170/10901170_20220328103155_500.jpg/melon/resize/240/quality/80/optimize",
      price: 90,
    },
    {
      id: "music-10",
      title: "BomWalk",
      artist: "RAZYBOYOCEAN",
      release: "2022.03.27",
      thumbnail:
        "https://cdnimg.melon.co.kr/cm2/album/images/108/99/434/10899434_20220324232401_500.jpg/melon/resize/240/quality/80/optimize",
      price: 90,
    },
    {
      id: "music-11",
      title: "같이 있어줘",
      artist: "Brick (브릭)",
      release: "2022.03.26",
      thumbnail:
        "https://cdnimg.melon.co.kr/cm2/album/images/108/96/691/10896691_20220323123635_500.jpg/melon/resize/240/quality/80/optimize",
      price: 90,
    },
    {
      id: "music-12",
      title: "혼자 두지 말아요",
      artist: "김기쁨",
      release: "2022.03.25",
      thumbnail:
        "https://cdnimg.melon.co.kr/cm2/album/images/108/99/627/10899627_20220325111848_500.jpg/melon/resize/240/quality/80/optimize",
      price: 90,
    },
  ]);
  const [orders, setOrders] = useState([]);

  // [{id, quantity: 1}]
  const addToOrder = useCallback((id) => {
    setOrders((orders) => {
      const finded = orders.find((order) => order.id === id);

      if (finded === undefined) {
        return [...orders, { id, quantity: 1 }];
      } else {
        return orders.map((order) => {
          if (order.id === id) {
            return {
              id,
              quantity: order.quantity + 1,
            };
          } else {
            return order;
          }
        });
      }
    });
  }, []);
  const remove = useCallback((id) => {
    setOrders((orders) => {
      return orders.filter((order) => order.id !== id);
    });
  }, []);
  const removeAll = useCallback(() => {
    setOrders([]);
  }, []);

  return (
    <AppStateContext.Provider
      value={{
        prototypes,
        orders,
        addToOrder,
        remove,
        removeAll,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
