import React from "react";
import { Modal } from "react-bootstrap";

import { GetMessage } from "src/common/helpers";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const GetProModal = (props: Props) => {
  return (
    <Modal show={props.isOpen} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{GetMessage("upgradeToFakeFillerPro")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Чтобы создать больше полей, купите подписку Fake Filler Pro </p>

        <div className="alert alert-info">
          <p>С подпиской Fake Filler Pro, вы сможете:</p>
          <ul>
            <li>
              Создавать <b>НЕОГРАНИЧЕННОЕ</b> количество полей.
            </li>
            <li>Синхронизировать и сохранять настройки</li>
            <li>Создавать поля по URL (много профилей)</li>
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <a className="btn btn-primary" href="https://fakefiller.com/#pricing">
          {GetMessage("upgradeToFakeFillerPro")}
        </a>
      </Modal.Footer>
    </Modal>
  );
};

export default GetProModal;
