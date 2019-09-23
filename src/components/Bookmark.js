import styled from 'styled-components/macro'

const Bookmark = styled.div`
  position: absolute;
  right: 10px;
  top: -10px;
  width: 30px;
  height: 20px;
  background: black;
    &:after {
    position: absolute;
    content: '';
    border: 15px solid ${({ active }) => (active ? 'hotpink' : 'black')};
    top: 100%;
    left:0;
    right:0;
    border-bottom-color: transparent;
  }
  
    

`
export default Bookmark