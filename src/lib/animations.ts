export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
        },
    },
};

export const slideIn = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: index * 0.1,
        },
    }),
};
