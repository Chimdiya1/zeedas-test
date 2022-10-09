import "./Text.scss";

function Text({ children, color, size, weight, font, style }) {
  let _style = {
    fontSize: size ? size : "14px",
    color: color ? color : "rgba(3, 41, 61, 0.5)",
    fontWeight: weight ? weight : "600",
    fontFamily: font ? font : `"Nunito Sans", sans-serif`,
    ...style
  };
  return (
    <p style={_style} className="Text">
      {children}
    </p>
  );
}

export default Text;
