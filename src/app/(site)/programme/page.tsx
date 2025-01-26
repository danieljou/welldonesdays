"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Image from "next/image";
import { FaLightbulb, FaUsers, FaTrophy, FaCalendarAlt, FaHandshake, FaChartLine, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProgramPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Programme"
        pageDescription="Explorez et découvrez le programme de l'événement"
      />

      <section
        id="pricing"
        className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-dark dark:text-white sm:text-5xl md:text-6xl">
              Programme de l'événement
            </h2>
            <p className="mt-4 text-xl text-body-color dark:text-dark-6">
              Découvrez les activités et les moments forts de la Wellnesday Youth Week 2025.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto max-w-6xl">
            {/* Ligne de la timeline */}
            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-primary dark:bg-secondary hidden md:block"></div>

            {/* Étape 1 */}
            <motion.div
              className="mb-12 flex w-full flex-col items-center justify-between gap-8 md:flex-row"
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="order-1 hidden w-5/12 md:block"></div>
              <div className="order-1 w-full rounded-lg bg-white p-8 shadow-2xl dark:bg-dark-2 md:w-6/12">
                <div className="flex items-center">
                  <div className="mr-6 rounded-full bg-primary p-4 text-white">
                    <FaLightbulb className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-dark dark:text-white">
                    Sélection des idées
                  </h4>
                </div>
                <p className="mt-4 text-lg text-body-color dark:text-dark-6">
                  <FaCalendarAlt className="mr-2 inline-block" />
                  <strong>3 février 2025</strong>
                </p>
                <p className="mt-6 text-lg text-body-color dark:text-dark-6">
                  Les élèves du secondaire présenteront leurs idées innovantes. Un jury
                  sélectionnera les meilleures propositions pour passer à l'étape suivante.
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <FaHandshake className="h-6 w-6 text-primary" />
                  <FaChartLine className="h-6 w-6 text-secondary" />
                  <span className="text-lg text-body-color dark:text-dark-6">
                    Soutien et évaluation par des experts.
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Étape 2 */}
            <motion.div
              className="mb-12 flex w-full flex-col items-center justify-between gap-8 md:flex-row"
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="order-1 w-full rounded-lg bg-white p-8 shadow-2xl dark:bg-dark-2 md:w-6/12">
                <div className="flex items-center">
                  <div className="mr-6 rounded-full bg-secondary p-4 text-white">
                    <FaUsers className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-dark dark:text-white">
                    Formation et accompagnement
                  </h4>
                </div>
                <p className="mt-4 text-lg text-body-color dark:text-dark-6">
                  <FaCalendarAlt className="mr-2 inline-block" />
                  <strong>3 - 5 février 2025</strong>
                </p>
                <p className="mt-6 text-lg text-body-color dark:text-dark-6">
                  Les participants sélectionnés bénéficieront de formations et d'un accompagnement
                  personnalisé pour développer leurs solutions.
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <FaChartLine className="h-6 w-6 text-primary" />
                  <FaAward className="h-6 w-6 text-secondary" />
                  <span className="text-lg text-body-color dark:text-dark-6">
                    Ateliers pratiques et mentorat.
                  </span>
                </div>
              </div>
              <div className="order-1 hidden w-5/12 md:block"></div>
            </motion.div>

            {/* Étape 3 */}
            <motion.div
              className="mb-12 flex w-full flex-col items-center justify-between gap-8 md:flex-row"
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="order-1 hidden w-5/12 md:block"></div>
              <div className="order-1 w-full rounded-lg bg-white p-8 shadow-2xl dark:bg-dark-2 md:w-6/12">
                <div className="flex items-center">
                  <div className="mr-6 rounded-full bg-primary p-4 text-white">
                    <FaTrophy className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-dark dark:text-white">
                    Présentation et remise des prix
                  </h4>
                </div>
                <p className="mt-4 text-lg text-body-color dark:text-dark-6">
                  <FaCalendarAlt className="mr-2 inline-block" />
                  <strong>8 février 2025</strong>
                </p>
                <p className="mt-6 text-lg text-body-color dark:text-dark-6">
                  Les équipes présenteront leurs solutions devant un panel d'experts. Les meilleurs
                  projets seront récompensés lors de la cérémonie de clôture.
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <FaAward className="h-6 w-6 text-primary" />
                  <FaHandshake className="h-6 w-6 text-secondary" />
                  <span className="text-lg text-body-color dark:text-dark-6">
                    Cérémonie de clôture et networking.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image du programme */}
          <div className="mt-16 flex justify-center">
            <div className="w-full max-w-6xl overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl">
              <Image
                src="/images/program.jpeg"
                alt="Programme de l'événement"
                width={1440}
                height={960}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
};

export default ProgramPage;