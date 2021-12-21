import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 30px;
  font-size: 15px;
  color: #008031;
  border-radius: 30px;
  border: solid 1px #008031;
  transition: border-color color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    border: solid 1px #00b344;
    color: #00b344;
  }
`;

interface Props {
  message: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = (props: Props) => {
  const { message, onClick } = props;
  return <Wrapper onClick={onClick}>{message}</Wrapper>;
};
