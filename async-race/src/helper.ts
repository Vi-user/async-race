export interface ICreateNode {
  tag: string;
  classes: string[];
}

export interface ICreateButton extends ICreateNode {
  name: string;
}

export interface ICreateInput extends ICreateButton {
  type: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
}

export function createButton({ tag, name, classes }: ICreateButton): HTMLButtonElement {
  const node = document.createElement(tag) as HTMLButtonElement;
  node.innerText = name;
  node.classList.add(...classes);
  return node;
}

export function createNode({ tag, classes }: ICreateNode): HTMLElement {
  const node = document.createElement(tag);
  node.classList.add(...classes);
  return node;
}

export function createInput({
  tag,
  name,
  classes,
  type,
  value,
  placeholder,
  disabled,
}: ICreateInput): HTMLInputElement {
  const node = document.createElement(tag) as HTMLInputElement;
  node.name = name;
  node.type = type;
  node.value = value;
  if (placeholder) node.placeholder = placeholder;
  if (disabled) node.setAttribute('disabled', `${disabled}`);
  node.classList.add(...classes);
  return node;
}
