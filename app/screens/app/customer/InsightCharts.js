import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {
  LineChart,
  
} from 'react-native-chart-kit';


const InsightChart = (value) => {


  const response = value.value;

  

    return (
      response ? (
        <View>
        <LineChart
          data={{
            // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: response,
              },
            ],
          }}
          //   width={Dimensions.get('window').width} // from react-native
          height={80}
          width={120}
          withVerticalLines={false}
          withHorizontalLines={false}
          withVerticalLabels={false}
          withHorizontalLabels={false}
          
          //   yAxisLabel="$"
          // yAxisSuffix="k"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#e26a00',
            // backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 2) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,

            propsForDots: {
              r: '3',
              strokeWidth: '1',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            // justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            margin: 0,
          }}
        />
      </View>
      ): null
      
    );
};

export default InsightChart;