import { useInView, motion } from "framer-motion";
import { containerVariant, floatVariant } from "./animation/animation";
import { useRef } from "react";
import HOCComponent from "./HOC/HOCComponent";
import { AimList } from "./List/AimList";

const Aim = () => {
  const aimContainer = useRef(null);
  const mainContainer = useRef(null);
  const bounceContainer = useRef(null);

  const isInView = useInView(aimContainer, { threshold: 0.1 });
  const mainIsInView = useInView(mainContainer, { threshold: 0.1 });
  const bounceIsInView = useInView(bounceContainer, { threshold: 0.1 });

  return (
    <div>
      <motion.div className="md:p-4 p-2">
        <motion.h2
          ref={bounceContainer}
          variants={floatVariant("right", "", "bounce")}
          animate={bounceIsInView && "show"}
          initial="hidden"
          className="text-4xl font-bold"
        >
          Our Target
        </motion.h2>
        <motion.p
          ref={mainContainer}
          variants={containerVariant("up", 0.5, 0.7)}
          animate={mainIsInView && "show"}
          initial="hidden"
          className="text-white text-xl font-medium"
        >
          In our own way of contributing to the society. And Contributing to us
          means a very great deal.
          <br /> Starting small between 3-5 warehouses in the major cities of
          Nigeria. <br />
          And gradually expanded to gaining presence in every geo-political
          zone.
          <br /> Our 7 Target goals are:
        </motion.p>
        <div
          ref={aimContainer}
          className="mt-4 flex flex-wrap md:justify-center ms-5 gap-6"
        >
          {AimList &&
            AimList.map((aims) => (
              <motion.div
                key={aims.id}
                initial="hidden"
                animate={isInView && "show"}
                variants={floatVariant("right", 0.8*aims.id, "spring")}
                className="bg-tone w-contain w-40 h-36 rounded p-px"
              >
                <div className="text-white bg-dark bg-opacity-90 h-full rounded p-2 flex justify-center items-center">
                  <motion.h3 className="text-md font-medium text-center">{aims.aim}</motion.h3>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

const WrappedAim = () => <HOCComponent Component={Aim} idName="aim" />;

export default WrappedAim;
