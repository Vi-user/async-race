import { CreateNodeType, createNode } from '../../helper';
import { addCar } from '../../api';
import './Garage_control_pannel.scss';

const carNameInput: CreateNodeType = {
  tag: 'input',
  name: 'carNameInput',
  classes: ['carNameInput'],
};

const carColorInput: CreateNodeType = {
  tag: 'input',
  name: 'carColorInput',
  classes: ['carColorInput'],
};

const createCarBtn: CreateNodeType = {
  tag: 'button',
  name: 'create',
  classes: ['form-button', 'create-button'],
};

export const createForm = createNode({
  tag: 'form',
  name: '',
  classes: ['createForm'],
}) as HTMLFormElement;
createForm.id = 'createCarForm';

async function createSubmitHandler(e: Event) {
  e.preventDefault();
  const formElement = document.getElementById('createCarForm') as HTMLFormElement;
  const formData = new FormData(formElement);
  const name = formData.get('carNameInput') !== '' ? formData.get('carNameInput') : 'newCar';
  const color = formData.get('carColorInput');
  const newCar = await addCar({ name: `${name}`, color: `${color}` });
  console.log(newCar);
}

export const nameInput = createNode(carNameInput) as HTMLInputElement;
nameInput.type = 'text';
nameInput.name = 'carNameInput';
nameInput.value = '';
nameInput.placeholder = 'car name';
export const colorInput = createNode(carColorInput) as HTMLInputElement;
colorInput.type = 'color';
colorInput.name = 'carColorInput';
colorInput.value = '#fff';
export const createCarButton = createNode(createCarBtn) as HTMLButtonElement;
createCarButton.addEventListener('click', (e: Event) => createSubmitHandler(e));

createForm.append(nameInput, colorInput, createCarButton);
