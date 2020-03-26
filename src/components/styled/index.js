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
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-right: 16px;
  margin-left: 16px;
  width: '100%';
  border-radius: 8px;
  border: 0.5px solid yellow;
`;

export const HowItWorksContainer = styled.div`
  margin-right: 16px;
  margin-left: 16px;
  width: '100%';
  border-radius: 8px;
  border: 0.5px solid yellow;
`;

export const ColumnDiv = styled.div`
  flex-direction: column;
`;

export const StandardText = styled.h5`
  color: white;
  text-align: center;
  margin-left: 4px;
  margin-right: 4px;
`;

export const StandardParagraph = styled.p`
  margin-top: 16px;
  color: white;
  text-align: center;
  font-size: 11px;
`;

export const LargeText = styled.p`
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
  margin-left: 2px;
  margin-right: 2px;
`;

export const PredictionDay = styled.div`
  flex-direction: column;
`;

export const PredictionCountText = styled.p`
  color: yellow;
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 16px;
`;

export const PredictionDateText = styled.p`
  color: white;
  text-align: center;
  font-size: 0.5rem;
`;

export const ChartContainer = styled.div`
  color: white;
  margin-top: 16px;
`;

export const FlatCredit = styled.div`
  font-size: 9px;
  margin-top: 32px;
  text-align: center;
`;
