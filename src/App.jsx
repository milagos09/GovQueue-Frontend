import "./App.css";
import admins from "../fake/admins.json";

export default function App() {
    return (
        <>
            {admins.map((e) => (
                <p key={e.id}>{e.agency}</p>
            ))}
        </>
    );
}
