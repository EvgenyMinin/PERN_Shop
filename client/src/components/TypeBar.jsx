import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { ListGroup } from "react-bootstrap";

import { Context } from "..";

export const TypeBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <ListGroup>
            {device.types.map((type) => (
                <ListGroup.Item key={type.id} active={type.id === device.selectedType.id} onClick={() => device.setSelectedType(type)} style={{ cursor: "pointer" }}>
                    {type.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
});
