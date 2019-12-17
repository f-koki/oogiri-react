import React from 'react';
import Button, { ButtonColor } from '.'

export default {
  title: 'Button'
}

export const normal = () => <Button message={ButtonColor.Normal} />;
export const main = () => <Button message={ButtonColor.Main} color={ButtonColor.Main} />
export const sub = () => <Button message={ButtonColor.Sub} color={ButtonColor.Sub} />