import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SyntaxHighlight({ data, language = "javascript" }) {
    const code = JSON.stringify(data, null, 2);
    return (
        <SyntaxHighlighter language={language} style={a11yDark}>
            {code}
        </SyntaxHighlighter>
    );
}
