import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    backgroundColor: '#F7F7F7', 
    marginHorizontal: 5, 
    marginTop: 5, 
    borderWidth: 0.16, 
  },
  row: {
    flexDirection: 'row'
  },
  shadow: {
    shadowColor: '#000000', 
    shadowOffset: { width: 3, height: 3}, 
    shadowOpacity: 0.2, 
    shadowRadius: 10
  },
  imageContainer: {
    flex: 1, 
    margin: 4,
  },
  image: {
    width: width/3, 
    height: height/6
  },
  detailContainer: {
    flex: 2
  },
  left: {
    flex: 1, 
    flexDirection: 'row', 
    padding: 4
  },
  leftDetail: {
    flex: 5, 
    marginHorizontal: 4
  },
  leftDetailHeader: {
    flexDirection: 'row', 
    flexWrap: 'wrap'
  },
  pName: {
    fontSize: 14, 
    fontWeight: 'bold'
  },
  pRating: {
    marginHorizontal: 4
  },
  pThumbUp: {
    backgroundColor: '#F4BD41', 
    borderRadius: 2, 
    width: 15, 
    height: 15, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  pPointContainer: {
    flexDirection: 'row', 
    marginVertical: 5
  },
  pPoint: {
    backgroundColor: '#13357B', 
    borderTopLeftRadius: 5, 
    borderTopRightRadius: 5, 
    borderBottomRightRadius: 5, 
    marginRight: 4, 
    width: 28, 
    height: 28, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  pPointText: {
    fontSize: 14, 
    fontWeight: '200', 
    color: '#FFFFFF', 
    padding: 4
  },
  pPointRemark: {
    fontSize: 14, 
    fontWeight: '200'
  },
  pDeal: {
    backgroundColor: '#E18230', 
    borderRadius: 7.5, 
    width: 15, 
    height: 15, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  pDealText: {
    fontSize: 14, 
    fontWeight: '200', 
    color: '#E18230', 
    marginHorizontal: 4
  },
  arrow: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'flex-end'
  },
  right: {
    flex: 1, 
    padding: 5, 
    alignItems: 'flex-end'
  },
  pRightView: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  pText: {
    fontSize: 14, 
    fontWeight: '200'
  },
  pPrice: {
    fontSize: 16, 
    fontWeight: 'bold'
  },
  pCancel: {
    backgroundColor: '#51AF3A', 
    borderRadius: 7.5, 
    width: 15, 
    height: 15, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  pCancelText: {
    fontSize: 12, 
    fontWeight: '400', 
    color: '#51AF3A', 
    marginLeft: 4
  }
});

export {
  styles
}