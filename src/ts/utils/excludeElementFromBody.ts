const excludeElementFromBody = (elem: HTMLElement) =>
  Array.from(document.body.children).filter((el) => el !== elem);

export default excludeElementFromBody;
