import { Feature } from "@/types/feature";
import { FaCalendarAlt, FaUsers, FaLightbulb, FaHandsHelping } from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaCalendarAlt className="text-4xl text-white" />,
    title: "Programme de l'Événement",
    paragraph: "Découvrez le programme complet des ateliers, conférences et activités pour la Wellnesday Youth Week 2025.",
    btn: "Voir le Programme",
    btnLink: "/programme",
  },
  {
    id: 2,
    icon: <FaUsers className="text-4xl text-white" />,
    title: "Opportunités de Réseautage",
    paragraph: "Connectez-vous avec des jeunes, des mentors et des leaders du monde entier.",
    btn: "Rejoindre",
    btnLink: "https://wa.link/cjuvid",
  },
  {
    id: 3,
    icon: <FaLightbulb className="text-4xl text-white" />,
    title: "Ateliers d'Innovation",
    paragraph: "Participez à des ateliers pratiques conçus pour stimuler la créativité et l'innovation.",
    btn: "En Savoir Plus",
    btnLink: "https://wa.link/cjuvid",
  },
  {
    id: 4,
    icon: <FaHandsHelping className="text-4xl text-white" />,
    title: "Communauté de Soutien",
    paragraph: "Bénéficiez du soutien d'une communauté mondiale de jeunes leaders et acteurs du changement.",
    btn: "Rejoindre la Communauté",
    btnLink: "https://wa.link/cjuvid",
  },
];
export default featuresData;