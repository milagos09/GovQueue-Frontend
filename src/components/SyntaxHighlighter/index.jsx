import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { hopscotch } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SyntaxHighlight(props) {
  const code = JSON.stringify(props.example, null, 2);
  return (
    <SyntaxHighlighter language="javascript" style={hopscotch}>
      {code}
    </SyntaxHighlighter>
  );
}
