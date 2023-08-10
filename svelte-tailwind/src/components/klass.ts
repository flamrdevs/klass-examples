const conditions = {
  base: "",
  sm: "sm:",
  md: "md:",
  lg: "lg:",
  xl: "xl:",
  xxl: "2xl:",
};

const defaultCondition = "base" satisfies keyof typeof conditions;

const spacing = (property: string) => {
  return {
    "0": `${property}-0`,
    "1": `${property}-1`,
    "2": `${property}-2`,
    "3": `${property}-3`,
    "4": `${property}-4`,
    "5": `${property}-5`,
    "6": `${property}-6`,
    "7": `${property}-7`,
    "8": `${property}-8`,
  };
};

export { conditions, defaultCondition };
export { spacing };
