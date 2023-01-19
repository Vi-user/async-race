import { ICreateInput } from '../../helper';
import './Garage_control_pannel.scss';

export const carNameInput: ICreateInput = {
  tag: 'input',
  name: 'carNameInput',
  classes: ['carNameInput'],
  type: 'text',
  value: '',
  placeholder: 'car name',
};

export const carColorInput: ICreateInput = {
  tag: 'input',
  name: 'carColorInput',
  classes: ['carColorInput'],
  type: 'color',
  value: '#ffffff',
};
