import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function SendIcon(props: SvgProps) {
    return (
        <Svg width="1em" height="1em" viewBox="0 0 21 18" {...props}>
            <Path
                d="M0 17.684v-6.631l8.842-2.21L0 6.631V0l21 8.842-21 8.842z"
            />
        </Svg>
    );
}

const MemoSendIcon = React.memo(SendIcon);
export default MemoSendIcon;
