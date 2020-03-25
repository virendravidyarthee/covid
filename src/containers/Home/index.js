import React from 'react';
import {
  getLastWeek,
  getNextWeek,
  getIsLoading,
  getGraphData,
  getHeight,
  getWidth,
  getCrosshairValues,
} from './reducer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData, updateDimensions, setCrosshairValues, clearCrosshairValues } from './actions';
import styled from 'styled-components';
import { colors } from '../../utils/constants';
import {
  CurrentCasesContainer,
  HomeHeader,
  HeaderText,
  StandardText,
  LargeText,
  CenterAligned,
  PredictionTimelineContainer,
  PredictionDay,
  PredictionCountText,
  PredictionDateText,
  ChartContainer,
} from '../../components/styled';
import Loader from 'react-loader-spinner';
import { XYPlot, HorizontalGridLines, XAxis, YAxis, LineMarkSeries, Crosshair } from 'react-vis';
import 'react-vis/dist/style.css';

const HomeTag = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.pageBackground};
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchData('india', 10));
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    this.updateWindowDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    this.props.dispatch(updateDimensions(window.innerWidth, window.innerHeight));
  }
  render() {
    console.log(this.props.graphData);

    let todaysRecord = this.props.lastWeek[this.props.lastWeek.length - 1];
    const getPredictionDays = predictionArray => {
      return predictionArray.map((prediction, index) => {
        return (
          <PredictionDay key={index}>
            <PredictionCountText>{prediction.total_cases}</PredictionCountText>
            <PredictionDateText>{prediction.date.format('ddd, Do MMM')}</PredictionDateText>
          </PredictionDay>
        );
      });
    };
    if (!todaysRecord) {
      return (
        <HomeTag>
          <CenterAligned>
            <Loader type="MutatingDots" color="yellow" height={100} width={100} />
            <StandardText>Calculating...</StandardText>
          </CenterAligned>
        </HomeTag>
      );
    } else {
      return (
        <HomeTag>
          <HomeHeader>
            <HeaderText>Covid-19 predictions in India</HeaderText>
          </HomeHeader>
          <CurrentCasesContainer>
            <StandardText>Current number of cases</StandardText>
            <LargeText>{todaysRecord.total_cases}</LargeText>
          </CurrentCasesContainer>
          <PredictionTimelineContainer>
            {getPredictionDays(this.props.nextWeek)}
          </PredictionTimelineContainer>
          <ChartContainer>
            <XYPlot
              onMouseLeave={() => {
                this.props.dispatch(clearCrosshairValues());
              }}
              margin={{ left: this.props.width * 0.09, right: 10, top: 10, bottom: 40 }}
              xType="time"
              height={300}
              width={this.props.width * 0.95}>
              <LineMarkSeries
                onNearestX={value => {
                  this.props.dispatch(
                    setCrosshairValues([
                      {
                        x: value.x.toDate(),
                        y: value.y,
                      },
                    ]),
                  );
                }}
                style={{ fill: 'none' }}
                color="yellow"
                data={this.props.graphData}
              />
              <HorizontalGridLines />
              <Crosshair values={this.props.crosshairValues}></Crosshair>
              <XAxis
                tickFormat={v => {
                  return `${v.getDate()}/${v.getMonth() + 1}`;
                }}
                tickTotal={5}
              />
              <YAxis tickSize={1} />
            </XYPlot>
          </ChartContainer>
        </HomeTag>
      );
    }
  }
}

const mapStateToProps = state => ({
  lastWeek: getLastWeek(state),
  nextWeek: getNextWeek(state),
  is_loading: getIsLoading(state),
  graphData: getGraphData(state),
  height: getHeight(state),
  width: getWidth(state),
  crosshairValues: getCrosshairValues(state),
});

Home.propTypes = {
  dispatch: PropTypes.func,
  lastWeek: PropTypes.array,
  nextWeek: PropTypes.array,
  is_loading: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  crosshairValues: PropTypes.array,
  graphData: PropTypes.array,
};

export default connect(mapStateToProps)(Home);
