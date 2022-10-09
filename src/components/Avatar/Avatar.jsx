import "./Avatar.scss";

function Avatar({ initials, bgColor }) {
  return (
    <div className="avatar" style={{ backgroundColor: bgColor }}>
      <span>{initials}</span>
    </div>
  );
}

export default Avatar;
