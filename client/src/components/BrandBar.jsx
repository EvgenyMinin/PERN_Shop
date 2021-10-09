import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";

import { Context } from "..";

export const BrandBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <Row>
            {device.brands.map((brand) => (
                <Card
                    key={brand.id}
                    className="p-3"
                    border={brand.id === device.selectedBrand.id ? "success" : "light"}
                    style={{ width: "200px", cursor: "pointer" }}
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </Card>
            ))}
        </Row>
    );
});
