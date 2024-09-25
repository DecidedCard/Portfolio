import { useEffect, useRef } from "react";

type Props = {
  isModal: boolean;
  onClose: () => void;
};

//모달의 콘덴츠 부분이 아닌 부분을 클릭했을 때 모달이 닫히는 기능
const useModalClose = ({ isModal, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 클릭한 요소가 모달 컨텐츠 내부가 아니면 모달을 닫음
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModal, onClose]);

  return { modalRef };
};

export default useModalClose;
