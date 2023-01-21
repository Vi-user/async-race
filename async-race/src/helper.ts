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

export function renderCar(color: string): string {
  return `
  <svg xmlns='http://www.w3.org/2000/svg' width='100px' height='60px' viewBox='0 0 100 80' version='1.1'>
    <circle cx='70.735' cy='56.775' r='1.955' style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${color}; fill-rule: nonzero; opacity: 1;' transform='  matrix(1 0 0 1 0 0) '/>
    <circle cx='19.765' cy='56.775' r='1.955' style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${color}; fill-rule: nonzero; opacity: 1;' transform='  matrix(1 0 0 1 0 0) '/>
    <path d='M 75.479 36.045 l -7.987 -1.22 l -2.35 -2.574 c -5.599 -6.132 -13.571 -9.649 -21.874 -9.649 h -6.245 c -1.357 0 -2.696 0.107 -4.016 0.296 c -0.022 0.004 -0.044 0.006 -0.066 0.01 c -7.799 1.133 -14.802 5.468 -19.285 12.106 C 5.706 37.913 0 45.358 0 52.952 c 0 3.254 2.647 5.9 5.9 5.9 h 3.451 c 0.969 4.866 5.269 8.545 10.416 8.545 s 9.447 -3.679 10.416 -8.545 h 30.139 c 0.969 4.866 5.27 8.545 10.416 8.545 s 9.446 -3.679 10.415 -8.545 H 84.1 c 3.254 0 5.9 -2.646 5.9 -5.9 C 90 44.441 83.894 37.331 75.479 36.045 z M 43.269 26.602 c 7.065 0 13.848 2.949 18.676 8.094 H 39.464 l -3.267 -8.068 c 0.275 -0.009 0.55 -0.026 0.826 -0.026 H 43.269 z M 32.08 27.118 l 3.068 7.578 H 18.972 C 22.429 30.813 27.018 28.169 32.08 27.118 z M 19.767 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 s 6.623 2.971 6.623 6.623 C 26.39 60.427 23.419 63.397 19.767 63.397 z M 70.738 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 c 3.651 0 6.622 2.971 6.622 6.623 C 77.36 60.427 74.39 63.397 70.738 63.397 z' style='stroke: black; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${color}; fill-rule: nonzero; opacity: 1;' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round' />
  </svg>
`;
}

export function renderFlag(): string {
  return `
    <svg xmlns='http://www.w3.org/2000/svg' height='60px' width='80px' version='1.1' viewBox='0 0 20.695 20.695' xml:space='preserve'>
    <g>
      <path style='fill:#030104;' d='M10.099,3.996l0.898,1.453L9.372,6.64L8.447,5.144L7.141,5.952L6.332,4.645L7.64,3.836l0.809,1.306   L10.099,3.996z M10.181,7.946L9.374,6.64L8.066,7.448l0.807,1.306L10.181,7.946z M17.667,5.115l-0.144,0.312   c-0.26,1.43-1.146,2.388-1.805,2.795c-1.426,0.881-2.903,0.353-2.964,0.331c-0.958-0.203-1.814-0.087-2.52,0.35   C8.926,9.712,8.553,11.37,8.55,11.389l-0.087,0.407l5.182,8.378l-0.839,0.521L3.577,5.775C3.4,5.845,3.193,5.787,3.089,5.619   C2.971,5.428,3.03,5.18,3.22,5.062l0.694-0.428C4.102,4.516,4.352,4.575,4.47,4.766C4.568,4.925,4.537,5.12,4.414,5.251   l0.249,0.404l0.006-0.013C5.211,4.327,5.901,3.404,6.719,2.9c1.484-0.917,2.84-0.154,2.897-0.121   c1.16,0.676,1.986,0.458,2.474,0.156c0.209-0.13,0.319-0.256,0.319-0.256c1.146-1.005,1.607-2.143,1.81-2.559   c0.202-0.415,0.563,0.383,0.563,0.383L17.667,5.115z M14.049,1.209l0.209,0.338l0.513-0.4l-0.41-0.662   C14.277,0.652,14.201,0.956,14.049,1.209z M8.442,10.6l-0.235,0.146l0.111,0.177C8.35,10.83,8.393,10.717,8.442,10.6z    M12.691,8.188l-0.18-0.291l-0.176,0.238C12.452,8.148,12.572,8.164,12.691,8.188z M13.958,7.312L13.251,6.17l1.433-1.01   l-0.809-1.306l-1.431,1.012l-0.839-1.355c-0.168,0.04-0.356,0.064-0.563,0.062L10.1,3.997L9.582,3.163   C9.534,3.136,9.487,3.112,9.438,3.084C9.422,3.075,9.297,3.005,9.092,2.937L7.639,3.836L7.158,3.061   C7.075,3.1,6.99,3.147,6.904,3.2C6.569,3.407,6.259,3.697,5.97,4.06l0.361,0.586L5.184,5.354C5.132,5.465,5.081,5.575,5.031,5.693   l0.707,1.126L7.14,5.952l0.926,1.495L6.675,8.308l0.817,1.3l1.381-0.854l0.351,0.565c0.227-0.264,0.497-0.514,0.825-0.718   c0.132-0.08,0.269-0.147,0.408-0.21l-0.276-0.446l1.632-1.176l-0.816-1.32l1.445-0.583l0.807,1.305l-1.435,0.598l0.669,1.081   L13.958,7.312z M17.147,4.951l-0.021-0.034l-0.502,0.456l-0.698-1.126l0.526-0.409l-0.871-1.394L15.117,2.94l-0.858-1.39   l-0.757,0.468c-0.133,0.176-0.281,0.349-0.438,0.519l0.812,1.315l1.243-0.913l0.807,1.308l-1.241,0.912l0.707,1.142l-1.396,1.072   l0.576,0.93c0.312-0.065,0.639-0.182,0.961-0.381c0.205-0.127,0.397-0.282,0.576-0.461l-0.717-1.159l1.232-0.929l0.41,0.663   L17.147,4.951z'/>
    </g>
    </svg>
  `;
}
