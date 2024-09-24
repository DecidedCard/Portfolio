import useTypingAnimation from "./useTypingAnimatiion";

const useIntro = () => {
  const { comment: title, isTypingPaused: titlePaused } =
    useTypingAnimation("정해준의 포트폴리오");

  const { comment: comment1, isTypingPaused: comment1Paused } =
    useTypingAnimation(
      "안녕하세요 어릴 때 꿈꾸던 개발자가 되고 싶은 정해준입니다.",
      !titlePaused
    );

  const { comment: comment2, isTypingPaused: comment2Paused } =
    useTypingAnimation("계속해서 발전하고 앞으로 나아가며", !comment1Paused);

  const { comment: comment3 } = useTypingAnimation(
    "많은 사람들이 사용하는 서비스를 만들고 싶습니다.",
    !comment2Paused
  );

  return { title, comment1, comment2, comment3 };
};

export default useIntro;
