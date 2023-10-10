import { CheckScreenSize } from "../../hooks/CheckScreenSize";

export default function FitToScreen({ reduce = 182, children }) {
    const { height } = CheckScreenSize();

    const minHeight = height - reduce;
    return <div style={{ minHeight, overflow: "auto" }}>{children}</div>;
}
