import analyzePerQueue from "./analyze";
import SyntaxHighlighter from "./../../SyntaxHighlighter";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import colorGenerator from "../../../helpers/colorGenerator";

export default function Summary({ logs }) {
    if (!logs.length) {
        return <p style={{ textAlign: "center", padding: "20px" }}>No results</p>;
    }

    const data = analyzePerQueue(logs);

    return (
        <>
            <div style={{ width: 550, height: 330, p: 2 }}>
                {data.map((d, i) => {
                    const name = d.name;
                    delete d.name;

                    return (
                        <Accordion key={name + i} sx={{ boxShadow: 3, border: "1px rgb(0,0,0,.22) groove" }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
                                <p style={{ fontSize: "1.1rem", color: colorGenerator()[i] }}>{name}</p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <SyntaxHighlighter data={d} language="json" />
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </div>
        </>
    );
}
