import './App.css';
import CircleChart from './components/circleChart/CircleChart';
import { nftData } from './components/circleChart/data';
import { styled } from 'styled-components';

function App() {
  return (
    <Wrapper>
      <CircleChart data={nftData} />;
    </Wrapper>
  );
}

const Wrapepr = styled.div`
  background-color: gray;
`;

export default App;
