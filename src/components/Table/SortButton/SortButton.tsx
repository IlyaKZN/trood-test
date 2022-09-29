import { FC } from 'react';
import { SortBtn, SortBtnContainer } from './SortButton.styles';

const SortButton: FC = () => {
  return (
    <SortBtnContainer>
      <SortBtn/>
      <SortBtn angleRotation={180}/>
    </SortBtnContainer>
  )
};

export default SortButton;