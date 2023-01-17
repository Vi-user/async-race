import { ICreateNode, createButton } from '../../helper';
import { updateCar } from '../../api';
import './Garage_control_pannel.scss';

const carIDInput: ICreateNode = {
  tag: 'input',
  name: 'carIDInput',
  classes: ['carIDInput'],
};

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
  name: 'update',
  classes: ['form-button', 'update-button'],
};

export const updateForm = createButton({
  tag: 'form',
  name: '',
  classes: ['updateForm'],
}) as HTMLFormElement;
updateForm.id = 'updateCarForm';

async function updateSubmitHandler(e: Event) {
  e.preventDefault();
  console.log('update');
  const formElement = document.getElementById('updateCarForm') as HTMLFormElement;
  const formData = new FormData(formElement);
  const name = formData.get('carNameInput') !== '' ? formData.get('carNameInput') : 'newCar';
  const color = formData.get('carColorInput');
  const id = formData.get('carIDInput');
  // console.log(id, 'id');
  const updatedCar = await updateCar({ name: `${name}`, color: `${color}`, id: Number(id) });
  // TODO check results
  // TODO update TABLE | item, clear & disabled inputs
  // createCarItem({ name: `${name}`, color: `${color}`, id: Number(id) })
  console.log(updatedCar);
}

export const IDInput = createButton(carIDInput) as HTMLInputElement;
IDInput.name = 'carIDInput';
IDInput.type = 'hidden';

export const nameInput = createButton(carNameInput) as HTMLInputElement;
nameInput.type = 'text';
nameInput.name = 'carNameInput';
nameInput.value = '';
nameInput.placeholder = 'car name';
nameInput.disabled = true;

export const colorInput = createButton(carColorInput) as HTMLInputElement;
colorInput.type = 'color';
colorInput.name = 'carColorInput';
colorInput.value = '#fff';
colorInput.disabled = true;
export const createCarButton = createButton(createCarBtn) as HTMLButtonElement;
createCarButton.disabled = true;
createCarButton.addEventListener('click', (e: Event) => updateSubmitHandler(e));

updateForm.append(IDInput, nameInput, colorInput, createCarButton);
