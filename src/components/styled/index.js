import styled from 'styled-components';

export const HomeHeader = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  width: '100%';
`;

export const HeaderText = styled.p`
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const CurrentCasesContainer = styled.div`
  margin-right: 16px;
  margin-left: 16px;
  width: '100%';
  border-radius: 8px;
  border: 0.5px solid yellow;
`;

export const StandardText = styled.h4`
  color: white;
  text-align: center;
`;

export const LargeText = styled.h1`
  color: white;
  text-align: center;
`;

export const CenterAligned = styled.div`
  margin: auto;
`;

export const PredictionTimelineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 24px;
`;

export const PredictionDay = styled.div`
  flex-direction: column;
  font-size: 10px;
`;

export const PredictionCountText = styled.p`
  color: yellow;
  text-align: center;
  font-size: 15px;
`;

export const PredictionDateText = styled.p`
  color: white;
  text-align: center;
`;

export const ChartContainer = styled.div`
  color: white;
  margin: 16px;
`;
