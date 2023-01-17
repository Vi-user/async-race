export interface ICreateNode {
  tag: string;
  name: string;

  classes: string[];
}

export function createButton({ tag, name, classes }: ICreateNode): HTMLElement {
  const node = document.createElement(tag);
  node.innerText = name;
  node.classList.add(...classes);
  return node;
}

export function createNode({ tag, classes }: Omit<ICreateNode, 'name'>): HTMLElement {
  const node = document.createElement(tag);
  node.classList.add(...classes);
  return node;
}
