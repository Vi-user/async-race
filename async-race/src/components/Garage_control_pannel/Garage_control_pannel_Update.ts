import { ICreateButton, createButton, ICreateInput, createInput, createNode } from '../../helper';
import { carNameInput, carColorInput } from './Garage_control_pannel';
import { updateCar } from '../../api';
import './Garage_control_pannel.scss';

const carIDInput: ICreateInput = {
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

const updateCarBtn: ICreateButton = {
  tag: 'button',
  name: 'update',
  classes: ['form-button', 'update-button'],
};

const updateForm = createNode({
  tag: 'form',
  name: '',
  classes: ['updateForm'],
}) as HTMLFormElement;
updateForm.id = 'updateCarForm';

export const IDInput = createButton(carIDInput) as HTMLInputElement;
IDInput.name = 'carIDInput';
IDInput.type = 'hidden';

export const nameInput = createButton(carNameInput) as HTMLInputElement;
nameInput.type = 'text';
nameInput.name = 'carNameInput';
nameInput.value = '';
nameInput.placeholder = 'car name';
nameInput.disabled = true;

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
  debugger;
  // TODO update TABLE | item, clear & disabled inputs
  // formElement.innerText = '';
  // formElement.append(IDInput, nameInput, colorInput, createCarButton);
  // formElement.replaceWith(updateForm);
  // TODO if response success => change data
  const selectedRow = document.getElementById(`car_${id}`) as HTMLDivElement;
  console.log('selectedRow', selectedRow);
  const selectedName = selectedRow.getElementsByClassName('track-name')[0] as HTMLSpanElement;
  selectedName.innerText = `${name}`; // TODO in memory prev value ?!
  console.log('selectedName', selectedName);
  const selectedColor = selectedRow.getElementsByClassName('car-SVG')[0] as HTMLDivElement;
  selectedColor.style.background = `${color}`;
  console.log('selectedColor', selectedColor);
  console.log(updatedCar);
}

const IDInput = createInput(carIDInput) as HTMLInputElement;

const nameInput = createInput(carNameInput) as HTMLInputElement;
nameInput.disabled = true;
nameInput.setAttribute('id', 'updateNameInput');

const colorInput = createInput(carColorInput) as HTMLInputElement;
colorInput.disabled = true;
colorInput.setAttribute('id', 'updateColorInput');

const updateCarButton = createButton(updateCarBtn) as HTMLButtonElement;
updateCarButton.disabled = true;
updateCarButton.setAttribute('id', 'updateCarButton');
updateCarButton.addEventListener('click', (e: Event) => updateSubmitHandler(e));

updateForm.append(IDInput, nameInput, colorInput, updateCarButton);

export default updateForm;
