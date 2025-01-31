const mainStyle = {
  outerStyle: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    zIndex: 1
  },
  modal: {
    position: "relative",
    width: 500,
    padding: 20,
    boxSizing: "border-box",
    backgroundColor: "#fff",
    margin: "40px auto",
    borderRadius: 3,
    zIndex: 2,
    textAlign: "left",
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)"
  },
  overlay: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)"
  }
};

export { mainStyle };
