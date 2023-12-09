import {ViewStyle} from "react-native";

const styleObject: ViewStyle = { // Works fine! No problem here.
    transform: [{translateX: 15}, {rotateX: "45deg"}]
};

type StyleCreator = () => ViewStyle;
const styleCreator: StyleCreator = function () // Doesn't work. TS2322 error is thrown here
{
    return {
        transform: [{translateX: 15}, {rotateX: "45deg"}]
    };
};
