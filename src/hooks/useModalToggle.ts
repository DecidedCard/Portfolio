import { useCallback, useState } from "react";

const useModalToggle = () => {
  const [isModal, setIsModal] = useState(false);

  const onClickIsModalToggleHandler = useCallback(() => {
    setIsModal(!isModal);
  }, [isModal]);

  return { isModal, onClickIsModalToggleHandler };
};

export default useModalToggle;
