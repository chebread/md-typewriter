import { marked } from 'marked';
// updateValue 함수는 어떤 엘레멘트에서 다른 엘레멘트를 참조하여 엘레멘트의 값을 다른 엘레멘트로 MD 형식으로 출력하는 함수입니다
export const updateValue = (e, elem) => {
  // element will be the id name or the class name
  document.querySelector(elem).innerHTML = marked(e.target.value);
};
