import React from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";

const OptionsPopover = (props) => {
  const { editCallback, deleteCallback } = props;
  const popoverRight = (
    <Popover id="popover-options">
      <Popover.Content>
        <Button variant="light" size="sm" onClick={editCallback} block="true">
          Edit
        </Button>
        <Button
          variant="danger"
          size="sm"
          className=""
          onClick={deleteCallback}
          block="true"
        >
          Delete
        </Button>
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      overlay={popoverRight}
      rootClose
    >
      <Button bsPrefix="none">
        <i className="material-icons">more_vert</i>
      </Button>
    </OverlayTrigger>
  );
};

export default OptionsPopover;
