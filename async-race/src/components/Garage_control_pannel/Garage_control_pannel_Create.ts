import { createButton, createInput, createNode, ICreateButton } from '../../helper';
import { carNameInput, carColorInput } from './Garage_control_pannel';
import { addCar } from '../../api';
import createCarItem from '../Car-item/Car-item';
import { currentCarsQuantity } from '../Cars-statistic/Cars-statistic';
import APP_STATE from '../../state';

const createForm = createNode({
  tag: 'form',
  classes: ['createForm'],
}) as HTMLFormElement;
createForm.id = 'createCarForm';

async function createSubmitHandler(e: Event): Promise<void> {
  e.preventDefault();
  const formElement = document.getElementById('createCarForm') as HTMLFormElement;
  const formData = new FormData(formElement);
  const name = formData.get('carNameInput') !== '' ? formData.get('carNameInput') : 'newCar';
  const color = formData.get('carColorInput');
  const newCar = await addCar({ name: `${name}`, color: `${color}` });
  // TODO check success
  APP_STATE.totalCars += 1;
  currentCarsQuantity();
  await document?.getElementById('garage-ring')?.append(createCarItem(newCar));
  formElement.reset();
}

const createCarBtn: ICreateButton = {
  tag: 'button',
  name: 'create',
  classes: ['form-button', 'create-button'],
};

const nameInput: HTMLInputElement = createInput(carNameInput);
const colorInput: HTMLInputElement = createInput(carColorInput);
const createCarButton: HTMLButtonElement = createButton(createCarBtn);
createCarButton.addEventListener('click', (e: Event) => createSubmitHandler(e));

createForm.append(nameInput, colorInput, createCarButton);

export default createForm;
