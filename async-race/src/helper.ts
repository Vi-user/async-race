export type CreateNodeType = {
  tag: string;
  name: string;
  classes: string[];
};

export function createNode({ tag, name, classes }: CreateNodeType): HTMLElement {
  const node = document.createElement(tag);
  node.innerText = name;
  node.classList.add(...classes);
  return node;
}
