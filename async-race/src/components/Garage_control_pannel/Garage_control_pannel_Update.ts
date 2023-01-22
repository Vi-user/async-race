import {
  ICreateButton,
  createButton,
  ICreateInput,
  createInput,
  createNode,
  renderCar,
} from '../../helper';
import { carNameInput, carColorInput } from './Garage_control_pannel';
import { updateCar } from '../../api';
import { handleUpdate } from '../Car-item/Car-item';
import './Garage_control_pannel.scss';

const carIDInput: ICreateInput = {
  tag: 'input',
  classes: ['carIDInput'],
  name: 'carIDInput',
  type: 'hidden',
  value: '',
};

const updateCarBtn: ICreateButton = {
  tag: 'button',
  name: 'update',
  classes: ['form-button', 'update-button'],
};

const updateForm = createNode({
  tag: 'form',
  classes: ['updateForm'],
}) as HTMLFormElement;
updateForm.id = 'updateCarForm';

async function updateSubmitHandler(e: Event): Promise<void> {
  e.preventDefault();
  const formElement = document.getElementById('updateCarForm') as HTMLFormElement;
  const formData = new FormData(formElement);
  const name = formData.get('carNameInput') !== '' ? formData.get('carNameInput') : 'newCar';
  const color = formData.get('carColorInput');
  const id = formData.get('carIDInput');
  const updatedCar = await updateCar({ name: `${name}`, color: `${color}`, id: Number(id) });
  // TODO check results
  // TODO if response success => change data
  const selectedRow = document.getElementById(`car-line_${id}`) as HTMLDivElement;
  const selectedName = selectedRow.getElementsByClassName('track-name')[0] as HTMLSpanElement;
  selectedName.innerText = `${name}`;
  const selectedColor = selectedRow.getElementsByClassName('car-SVG')[0] as HTMLSpanElement;
  selectedColor.innerHTML = renderCar(`${color}`);

  // TODO update TABLE | item, clear & disabled inputs
  formElement.reset();
  const selectCarBtn = selectedRow.getElementsByClassName(
    'updateCarButton',
  )[0] as HTMLButtonElement;
  selectCarBtn?.removeEventListener('click', handleUpdate(updatedCar));
  selectCarBtn?.addEventListener('click', handleUpdate(updatedCar));
  const nameInputField = document.getElementById('updateNameInput') as HTMLInputElement;
  nameInputField.disabled = true;
  const colorInputField = document.getElementById('updateColorInput') as HTMLInputElement;
  colorInputField.disabled = true;
  const updateBtnField = document.getElementById('updateCarButton') as HTMLButtonElement;
  updateBtnField.disabled = true;
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
