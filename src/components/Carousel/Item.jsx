import { Paper } from "@mui/material";

function Item({ item }) {
  const handleClick = () => {
    window.open(item.link);
  };

  return (
    <Paper>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "45vh",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "100%", height: "100%" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            background: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: "10px",
            textAlign: "center",
            width: "100%"
          }}
        >
          <h2>{item.title}</h2>
        </div>
      </div>
    </Paper>
  );
}

export default Item;
