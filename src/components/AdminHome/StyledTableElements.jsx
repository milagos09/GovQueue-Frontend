import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

const CustomTableCell = styled(TableCell)(({ theme, open }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: open ? 16 : 14,
    },
}));

const CustomTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

function StyledTableCell({ open, children }) {
    return <CustomTableCell open={open}>{children}</CustomTableCell>;
}

function StyledTableRow({ children }) {
    return <CustomTableRow>{children}</CustomTableRow>;
}

export { StyledTableCell, StyledTableRow };
