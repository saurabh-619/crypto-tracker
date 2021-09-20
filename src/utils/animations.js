export const wrapperVarient = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.9,
      staggerChildren: 0.5,
    },
  },
};

export const coinsWrapperVarient = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const fadeUpVarient = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export const fadeUpVarientInput = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.7,
    },
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export const fadeUpVarientSearch = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.7,
    },
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};
