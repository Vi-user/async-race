import { ICreateNode, createButton } from '../../helper';
import { addCar } from '../../api';
import './Garage_control_pannel.scss';

const carNameInput: ICreateNode = {
  tag: 'input',
  name: 'carNameInput',
  classes: ['carNameInput'],
};

const carColorInput: ICreateNode = {
  tag: 'input',
  name: 'carColorInput',
  classes: ['carColorInput'],
};

const createCarBtn: ICreateNode = {
  tag: 'button',
  name: 'create',
  classes: ['form-button', 'create-button'],
};

export const createForm = createButton({
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

export const nameInput = createButton(carNameInput) as HTMLInputElement;
nameInput.type = 'text';
nameInput.name = 'carNameInput';
nameInput.value = '';
nameInput.placeholder = 'car name';
export const colorInput = createButton(carColorInput) as HTMLInputElement;
colorInput.type = 'color';
colorInput.name = 'carColorInput';
colorInput.value = '#fff';
export const createCarButton = createButton(createCarBtn) as HTMLButtonElement;
createCarButton.addEventListener('click', (e: Event) => createSubmitHandler(e));

createForm.append(nameInput, colorInput, createCarButton);
