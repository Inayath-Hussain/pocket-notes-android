import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function GoBackIcon(props: SvgProps) {
    return (
        <Svg width="1em" height="1em" viewBox="0 0 16 12" fill="none" {...props}>
            <Path
                d="M6.275 10.85c.2-.2.296-.442.288-.725A1.03 1.03 0 006.25 9.4L3.425 6.575h11.15a.968.968 0 00.713-.288.964.964 0 00.287-.712.968.968 0 00-.288-.713.964.964 0 00-.712-.287H3.425l2.85-2.85c.2-.2.3-.438.3-.713a.97.97 0 00-.3-.712c-.2-.2-.438-.3-.713-.3a.97.97 0 00-.712.3L.275 4.875c-.1.1-.171.208-.213.325A1.083 1.083 0 000 5.575c0 .133.021.258.063.375a.888.888 0 00.212.325l4.6 4.6a.932.932 0 00.687.275c.275 0 .512-.1.713-.3z"
                fill="#fff"
            />
        </Svg>
    );
}

const MemoGoBackIcon = React.memo(GoBackIcon);
export default MemoGoBackIcon;
