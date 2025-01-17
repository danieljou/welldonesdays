"use client";
import React from "react";
import { FaMedal, FaMicrophone, FaBullhorn, FaChartLine, FaHandshake } from "react-icons/fa";
// import { motion } from "framer-motion";

const SponsorSection = () => {
  const sponsorPackages = [
    {
      title: "Package Gold",
      price: "1 000 000 FCFA",
      features: [
        { icon: <FaMedal className="w-6 h-6" />, text: "Logo sur tous les supports de communication" },
        { icon: <FaBullhorn className="w-6 h-6" />, text: "Stand prioritaire pendant l'événement" },
        { icon: <FaMicrophone className="w-6 h-6" />, text: "Prise de parole lors de l'ouverture" },
        { icon: <FaChartLine className="w-6 h-6" />, text: "Mention dans les reportages médiatiques" },
        { icon: <FaHandshake className="w-6 h-6" />, text: "Rencontres privilégiées avec les talents" },
      ],
      color: "from-yellow-400 to-yellow-600", // Gradient pour Gold
    },
    {
      title: "Package Silver",
      price: "750 000 FCFA",
      features: [
        { icon: <FaMedal className="w-6 h-6" />, text: "Logo sur tous les supports de communication" },
        { icon: <FaBullhorn className="w-6 h-6" />, text: "Stand dédié pour exposition" },
        { icon: <FaChartLine className="w-6 h-6" />, text: "Mention dans les reportages médiatiques" },
      ],
      color: "from-gray-400 to-gray-600", // Gradient pour Silver
    },
    {
      title: "Package Bronze",
      price: "500 000 FCFA",
      features: [
        { icon: <FaMedal className="w-6 h-6" />, text: "Logo dans les communications de l'événement" },
        { icon: <FaBullhorn className="w-6 h-6" />, text: "Présence dans le programme officiel" },
      ],
      color: "from-orange-400 to-orange-600", // Gradient pour Bronze
    },
  ];

  return (
    <section id="sponsor" className="relative z-20 overflow-hidden bg-white pb-24 pt-28 dark:bg-dark lg:pb-[120px] lg:pt-[140px]">
      <div className="container mx-auto px-4">
        {/* Titre et description */}
        <div className="mb-16 text-center">
          <h2
            // initial={{ opacity: 0, y: -20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-dark dark:text-white mb-4"
          >
            Devenir Sponsor
          </h2>
          <p
            // initial={{ opacity: 0, y: -20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Faites partie d’une initiative qui changera la vie des jeunes camerounais et connectez-vous avec les talents de demain.
          </p>
        </div>

        {/* Packages de sponsoring */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorPackages.map((pkg, index) => (
            <div
              key={index}
              // initial={{ opacity: 0, y: 50 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-gradient-to-br p-1 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`bg-gradient-to-br ${pkg.color} rounded-xl p-8 h-full`}>
                <h3 className="text-2xl font-bold text-center text-white mb-4">{pkg.title}</h3>
                <p className="text-center text-3xl font-semibold text-white mb-6">{pkg.price}</p>
                <ul className="space-y-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <span className="text-white">{feature.icon}</span>
                      <span className="text-white">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;