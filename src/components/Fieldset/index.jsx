import { glassEffect } from "../../themes/MyTheme";

export default function Feildset({ title, children, sx, glassEffectProp, titleStyles }) {
    return (
        <fieldset
            style={{
                borderRadius: "10px",
                border: "1px inset rgba(0, 0, 0, .2)",
                padding: "25px 50px",
                margin: "20px 10px",
                ...glassEffect,
                ...sx,
            }}
        >
            <legend>
                <h3 style={{ padding: "8px", ...titleStyles }}>{title}</h3>
            </legend>
            {children}
        </fieldset>
    );
}
