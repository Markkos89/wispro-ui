import React from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonWithIconAndTooltip = ({ icon, placement, variant, fn, btnSize, tooltipText }) => {
    return (
        <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
                <Tooltip id={`tooltip-${placement}`}>
                    {tooltipText}
                </Tooltip>
            }
        >
            <Button
                variant={variant}
                style={{ marginRight: "5px" }}
                onClick={fn}
                size={btnSize}
            >
                <FontAwesomeIcon icon={icon} />
            </Button>
        </OverlayTrigger>
    )
}

export { ButtonWithIconAndTooltip }