import React from "react";

type SavedTimeItemProps = {
    index: number;
    value: string;
};

const SavedTimeItem: React.FC<SavedTimeItemProps> = ({ index, value }) => {
    return <li>{value}</li>;
};

export default SavedTimeItem;