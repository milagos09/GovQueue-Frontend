import { Skeleton } from "@mui/material";

export default function LoadingSkeleton({ number = 1, height = 100, component = "div", variant = "rectangular", sx }) {
    const skeletons = [];
    for (let i = 0; i < number; i++) {
        skeletons.push(
            <Skeleton
                component={component}
                sx={{ height: height, my: 2, ...sx }}
                variant={variant}
                key={"skel-rect" + i}
            />
        );
    }

    return <>{skeletons}</>;
}
