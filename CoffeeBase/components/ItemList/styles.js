import {
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16
    },
    coffeeList: {
      flex: 1
    },
    coffeeItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16
    },
    coffeeItemImage: {
      width: 80,
      height: 80,
      marginRight: 16
    },
    coffeeItemDetails: {
      flex: 1
    },
    coffeeItemTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8
    },
    coffeeItemDescription: {
      marginBottom: 8
    },
    coffeeItemPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#888'
    }
  });

  export default styles;