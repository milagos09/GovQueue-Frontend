export const dark = {
    backgroundColor: "#111519f0",
    color: "azure",
    boxShadow: "0 2px 10px rgba(244, 244, 244, 0.3)",
};
export const light = {
    backgroundColor: "snow",
    color: "#111519f0",
    borderRadius: "0 0 4px 4px",
    boxShadow: "4px 4px 7px rgba(0, 0, 0, 0.2)",
};
export const gold = { color: "#FB9300" };

export const glassEffect = {
    backgroundColor: "rgba(255, 255, 255, 0.3)", // Change the opacity value to adjust the glass effect
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Add a subtle shadow to enhance the effect
};

export const shadow = {
    boxShadow: " 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
};

export const roundIcon = {
    color: "#000",
    background: "white",
    ...glassEffect,
    borderRadius: "50%",
    fontSize: "2rem",
    ...shadow,
};
