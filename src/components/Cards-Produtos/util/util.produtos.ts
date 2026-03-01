import AirPods4 from "../../../img/produtos/airpods-4.png";
import AirPodsPro from "../../../img/produtos/airpods-pro.png";
import Beats from "../../../img/produtos/Beats-Solo.png";
import airpodsmax from "../../../img/produtos/airpods-max.png";
import note1 from "../../../img/produtos/note1.png";
import note2 from "../../../img/produtos/note2.png";
import note3 from "../../../img/produtos/note3.png";
import note4 from "../../../img/produtos/note4.png";
import capinha1 from "../../../img/produtos/capinha-1.png";
import capinha2 from "../../../img/produtos/capinha-2.png";
import capinha3 from "../../../img/produtos/capinha-3.png";
import capinha4 from "../../../img/produtos/capinha-4.png";
import type { Product } from "../types/produtos";

export const productsData: Product[] = [

  {
    id: 1,
    tag: "Novo",
    title: "AirPods 4 com Cancelamento Ativo de Ruído",
    oldPrice: "R$ 1.999,00",
    currentPrice: "R$ 999,50",
    image: AirPods4,
    category: "Fones de Ouvido",
    link: "../pages/store/AirPods4.html"
  },
  {
    id: 2,
    tag: "Novo",
    title: "AirPods Max – Meia-noite",
    oldPrice: "R$ 1.999,00",
    currentPrice: "R$ 3.295,00",
    image: AirPodsPro,
    category: "Fones de Ouvido",
    link: "../pages/store/AirPods2.html"
  },
  {
    id: 3,
    tag: "Novo",
    title: "Beats Solo 4 – Fone de ouvido supra-auricular sem fio",
    oldPrice: "R$ 1.999,00",
    currentPrice: "R$ 974,50",
    image: Beats,
    category: "Fones de Ouvido",
    link: ""
  },
  {
    id: 4,
    tag: "Novo",
    title: "AirPods 4 com Cancelamento Ativo de Ruído",
    oldPrice: "R$ 1.999,00",
    currentPrice: "R$ 999,50",
    image: airpodsmax,
    category: "Fones de Ouvido",
    link: "../pages/store/AirPodsMax.html"
  },

  // SEÇÃO: COMPUTADORES
  {
    id: 5,
    tag: "Novo",
    title: "MacBook Pro",
    oldPrice: "R$ 19.999",
    currentPrice: "R$ 9.999,50",
    image: note1,
    category: "computers",
    link: ""
  },
  {
    id: 6,
    tag: "Novo",
    title: "MacBook Air",
    oldPrice: "R$ 12.999",
    currentPrice: "R$ 6.499,50",
    image: note2,
    category: "computers",
    link: ""
  },
  {
    id: 7,
    tag: "Novo",
    title: "Studio Display",
    oldPrice: "R$ 18.999",
    currentPrice: "R$ 9.499,50",
    image: note3,
    category: "computers",
    link: ""
  },
  {
    id: 8,
    tag: "Novo",
    title: "iMac",
    oldPrice: "R$ 15.499",
    currentPrice: "R$ 7.749,50",
    image: note4,
    category: "computers",
    link: ""
  },

  // SEÇÃO: ACESSÓRIOS
  {
    id: 9,
    tag: "Novo",
    title: "Capa de silicone com MagSafe para iPhone 16 Pro Max Rosa",
    oldPrice: "R$ 569,00",
    currentPrice: "R$ 284,50",
    image: capinha1,
    category: "accessories",
    link: ""
  },
  {
    id: 10,
    tag: "Novo",
    title: "Capa transparente com MagSafe para iPhone 16",
    oldPrice: "R$ 569,00",
    currentPrice: "R$ 284,50",
    image: capinha2,
    category: "accessories",
    link: ""
  },
  {
    id: 11,
    tag: "Novo",
    title: "Capa de silicone para iPhone 16e – Verde Lago",
    oldPrice: "R$ 449,00",
    currentPrice: "R$ 224,50",
    image: capinha3,
    category: "accessories",
    link: ""
  },
  {
    id: 12,
    tag: "Novo",
    title: "Capa transparente com MagSafe para iPhone 16 Pro",
    oldPrice: "R$ 569,00",
    currentPrice: "R$ 284,50",
    image: capinha4,
    category: "accessories",
    link: ""
  }
];