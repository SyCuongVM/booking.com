import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      measurements: {},
    }
  }
  renderRating(rating) {
    const stars = new Array(rating).fill(0);
    return (
      stars.map((_, index) => {
        return (
          <Ionicons name="ios-star" key={`star-${index}`} size={10} color='#FEBA02' />
        )
      })
    )
  }

  render() {
    const { 
      coverImage, breakfast, name, stars, thumbUp, rating, room, location, deal, soldOut, 
      propertyType, stays, currency, price, tax, freeCancellation, noPrepayment, roomLefts
    } = this.props;
    const netPrice = stays * price;

    return (
      <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#F2F6FA', marginHorizontal: 5, marginTop: 5,  borderWidth: 0.16, shadowColor: '#000000', shadowOffset: { width: 3, height: 3}, shadowOpacity: 0.2, shadowRadius: 10}}>
        <View style={{flex: 1, margin: 4,}}
          onLayout={({nativeEvent}) => {
            this.setState({
              measurements: nativeEvent.layout
            })
          }}
        >
          <View>
            <Image source={coverImage} resizeMode='cover' style={{width: (width - 10)/3, height: this.state.measurements.height}} />
            {breakfast && 
              <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#51AF3A', justifyContent: 'center', alignContent: 'center', width: (width - 10)/3}}>
                <Text style={{fontSize: 12, fontWeight: '400', color: '#FFFFFF', textAlign: 'center', paddingVertical: 5, paddingHorizontal: 10}}>Breakfast included</Text>
              </View>
            }
          </View>
        </View>
        <View style={{flex: 2}}>
          <View style={{flex: 1, flexDirection: 'row', padding: 4}}>
            <View style={{flex: 5, marginHorizontal: 4}}>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>{name}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  {stars && 
                    <View style={{flexDirection: 'row', marginHorizontal: 4}}>
                      {this.renderRating(stars)}
                    </View>
                  }
                  {thumbUp && 
                    <View style={{backgroundColor: '#FEBA02', borderRadius: 2, width: 15, height: 15, justifyContent: 'center', alignItems: 'center'}}>
                      <FontAwesome name="thumbs-up" color='#FFFFFF' size={10} />
                    </View>
                  }
                </View>
              </View>
              {rating &&
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                  <View style={{backgroundColor: '#003580', borderTopLeftRadius: 5, borderTopRightRadius: 5, borderBottomRightRadius: 5, marginRight: 4, width: 20, height: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 12, fontWeight: '200', color: '#FFFFFF', padding: 4}}>{rating.point}</Text>
                  </View>
                  <Text style={{fontSize: 12, fontWeight: '200'}}>{rating.remark}</Text>
                </View>
              }
              {!soldOut && room &&
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: 15, height: 15, justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome name="bed" size={15} />
                  </View>
                  <View style={{marginHorizontal: 4, flexWrap: 'wrap'}}>
                    { room.bedroom && 
                      <Text style={{fontSize: 12, fontWeight: '200'}}>{room.bedroom} bedrooms
                        { room.livingroom && 
                          <Text style={{fontSize: 12, fontWeight: '200'}}> * {room.livingroom} livingrooms</Text>
                        }
                        { room.bed && 
                          <Text style={{fontSize: 12, fontWeight: '200'}}> * {room.bed} beds</Text>
                        }
                      </Text>
                    }
                  </View>
                </View>
              }
              {location &&
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: 15, height: 15, justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome name="map-marker" size={15} />
                  </View>
                  <Text style={{fontSize: 12, fontWeight: '200'}}>{location}</Text>
                </View>
              }
              {!soldOut && deal && deal.todayDeal &&
                <View style={{flexDirection: 'row'}}>
                  <View style={{backgroundColor: '#FEBA02', borderRadius: 7.5, width: 15, height: 15, justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome name="heart" color='#FFFFFF' size={10} />
                  </View>
                  <Text style={{fontSize: 12, fontWeight: '200', color: '#FEBA02', marginHorizontal: 4}}>Today's Value Deal</Text>
                </View>
              }
              {!soldOut && deal && deal.getawayDeal &&
                <View style={{flexDirection: 'row'}}>
                  <View style={{backgroundColor: '#FEBA02', borderRadius: 7.5, width: 15, height: 15, justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome name="percent" color='#FFFFFF' size={10} />
                  </View>
                  <Text style={{fontSize: 12, fontWeight: '200', color: '#FEBA02', marginHorizontal: 4}}>Getaway Deal</Text>
                </View>
              }
              {!soldOut && deal && deal.secretDeal &&
                <View style={{flexDirection: 'row'}}>
                  <View style={{backgroundColor: '#FEBA02', borderRadius: 7.5, width: 15, height: 15, justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome name="key" color='#FFFFFF' size={10} />
                  </View>
                  <Text style={{fontSize: 12, fontWeight: '200', color: '#FEBA02', marginHorizontal: 4}}>Secret Deal</Text>
                </View>
              }
              {soldOut && 
                <View style={{backgroundColor: '#CF3125', justifyContent: 'center', alignItems: 'center', height: 20, width: 70, borderRadius: 3, marginVertical: 5}}>
                  <Text style={{fontSize: 12, fontWeight: '200', color: '#FFFFFF'}}>Sold Out!</Text>
                </View>
              }
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
              <Ionicons name="ios-arrow-forward" color='#9DA3C4' size={15} />
            </View>
          </View>

          {!soldOut &&
            <View style={{flex: 1, padding: 5, alignItems: 'flex-end'}}>
              {propertyType && 
                <View>
                  <Text style={{fontSize: 10, fontWeight: '200'}}>{propertyType}</Text>
                </View>
              }
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 10, fontWeight: '200'}}>{stays}</Text>
                <Text style={{fontSize: 10, fontWeight: '200'}}>-night stay: </Text>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{currency}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{netPrice}</Text>
              </View>
              {tax &&
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 10, fontWeight: '200'}}>+ </Text>
                  <Text style={{fontSize: 10, fontWeight: '200'}}>{currency}</Text>
                  <Text style={{fontSize: 10, fontWeight: '200'}}>{tax}</Text>
                  <Text style={{fontSize: 10, fontWeight: '200'}}> taxes and charges</Text>
                </View>
              }
              {roomLefts &&
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{backgroundColor: '#EA3324', borderRadius: 7.5, width: 15, height: 15, justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome name="dashboard" color='#FFFFFF' size={10} />
                  </View>
                  <Text style={{fontSize: 12, fontWeight: '400', color: '#EA3324', marginLeft: 4}}>Only {roomLefts} room left!</Text>
                </View>
              }
              {freeCancellation &&
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{backgroundColor: '#51AF3A', borderRadius: 7.5, width: 15, height: 15, justifyContent: 'center',alignItems: 'center'}}>
                    <FontAwesome name="check" color='#FFFFFF' size={10} />
                  </View>
                  <Text style={{fontSize: 12, fontWeight: '400', color: '#51AF3A', marginLeft: 4}}>Free Cancellation</Text>
                </View>
              }
              {noPrepayment && 
                <View>
                  <Text style={{fontSize: 12, fontWeight: '200'}}>No prepayment needed</Text>
                </View>
              }
            </View>
          }
        </View>
      </View>
    );
  }
}

export default Property;