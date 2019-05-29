import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Image, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReadMore from 'react-native-read-more-text';
import MapView, { Marker } from 'react-native-maps';
//Entypo, EvilIcons, Feather, Foundation, MaterialIcons, MaterialCommunityIcons, Octicons, Zocial
//Math.floor(Math.random()*(max-min+1)+min)

const countries = require('../../../resources/countries.json')
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;
const SPACE2 = 0.1;

class Property extends Component {
  // componentDidMount() {
  //   const coordinate = (this.props.navigation.getParam('property').region);
  //   const MARKERS = [
  //     {
  //       latitude: coordinate.LATITUDE + SPACE,
  //       longitude: coordinate.LONGITUDE + SPACE
  //     }
  //   ];
  //   this.map.fitToCoordinates([MARKERS[0]], {
  //     edgePadding: { top: 40, bottom: 40, left: 40, right: 40 }
  //   });
  // }
  renderRating(rating) {
    const stars = new Array(rating).fill(0);
    return (
      stars.map((_, index) => {
        return (
          <Ionicons name="ios-star" key={`star-${index}`} size={20} color='#FEBA02' />
        )
      })
    )
  }
  renderReadMore = onPress => {
    return (
      <Text onPress={onPress} style={{fontSize: 12, fontWeight: '500', color: '#3376C6', marginTop: 15}}>Read more</Text>
    )
  }
  renderReadLess = onPress => {
    return (
      <Text onPress={onPress} style={{fontSize: 12, fontWeight: '500', color: '#3376C6', marginTop: 15}}>Read less</Text>
    )
  }

  render() {
    const { navigation } = this.props;
    const property = navigation.getParam('property');
    let facilities;
    if (property.facilities) {
      facilities = property.facilities.filter(prop => prop.display !== null);
    }

    return (
      <React.Fragment>
        <View style={{backgroundColor: '#13357B', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', height: width - 320}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-start'}} onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back" color='#FFFFFF' size={22} />
            </TouchableOpacity>
            <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#FFFFFF', fontSize: 14, fontWeight: 'bold'}}>{property.name}</Text>  
            </View>
            <View style={{flex: 0.7, alignItems: 'flex-end'}}>
              <Ionicons name="ios-heart-empty" color='#FFFFFF' size={20} />
            </View>
            <View style={{flex: 0.7, alignItems: 'flex-end'}}>
              <Ionicons name="md-open" color='#FFFFFF' size={22} />
            </View>
          </View>
        </View>

        <ScrollView style={{flex: 1, backgroundColor: '#F7F7F7'}} showsVerticalScrollIndicator={false}>
          <View style={{flex: 1}}>
            <View>
              <ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
              >
                {property.images.map((img, index) => 
                  <Image key={`${index}-${img}`} source={img} resizeMode='cover' style={{width: (width-4)/4, height: (width-4)/4, marginRight: 1}} />
                )}
              </ScrollView>
            </View>

            {facilities &&
              <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', justifyContent: 'space-evenly', padding: 15, borderBottomWidth: 0.2, borderBottomColor: '#ECECEC'}}>
                {facilities.map((facility, index) => 
                  <View key={index} style={{justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                    <Ionicons name={facility.icon} size={18} /> 
                    <Text style={{fontSize: 14, fontWeight: 'normal'}}>{facility.display}</Text>
                  </View>
                )}
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Ionicons name="ios-more" size={18} color="#3376C6" /> 
                  <Text style={{fontSize: 14, fontWeight: 'normal', color: '#3376C6'}}>More</Text>
                </View>
              </View>
            }
            
            <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', paddingHorizontal: 15, paddingVertical: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
              <View style={{flex: 4, flexDirection: 'row', flexWrap: 'wrap'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', flexWrap: 'wrap'}}>{property.name}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  {property.stars && 
                    <View style={{flexDirection: 'row', marginHorizontal: 5}}>
                      {this.renderRating(property.stars)}
                    </View>
                  }
                  {property.thumbUp && 
                    <View style={{backgroundColor: '#FEBA02', borderRadius: 2, width: 18, height: 18, justifyContent: 'center', alignItems: 'center'}}>
                      <FontAwesome name="thumbs-up" color='#FFFFFF' size={13} />
                    </View>
                  }
                </View>
              </View>
              {property.rating &&
                <View>
                  <View style={{backgroundColor: '#13357B', borderTopLeftRadius: 5, borderTopRightRadius: 5, borderBottomRightRadius: 5, width: 30, height: 30, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 16, fontWeight: '400', color: '#FFFFFF'}}>{property.rating.point}</Text>
                  </View>
                </View>
              }
            </View>

            {property.soldOut &&
              <View style={{backgroundColor: '#FFFFFF', marginBottom: 10}}>
                <View style={{flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10}}>
                  <Ionicons name="md-alarm" size={30} color="#EA3324" /> 
                  <Text style={{fontSize: 14, fontWeight: '400', color: '#EA3324', marginLeft: 10}}>Booking.com's last spot at this property was sold 15 hours ago</Text>
                </View>
              </View>
            }
            {property.soldOut &&
              <View style={{backgroundColor: '#FFFFFF', paddingVertical: 15, paddingLeft: 15, marginBottom: 10}}>
                <View style={{marginBottom: 10, paddingRight: 15}}>
                  <Text style={{fontSize: 14, fontWeight: '500', color: '#13357B'}}>No options available for these dates. Here are some alternatives with availability:</Text>
                </View>
                <View>
                  <ScrollView
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={0}
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                  >
                    {property.dateOptions && property.dateOptions.map((option, index) => 
                        <TouchableOpacity key={index}>
                          <View style={{width: (width)/4, height: (width)/6, borderRadius: 5, borderWidth: 1, borderColor: '#3376C6', justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                            <Text style={{fontSize: 12, fontWeight: '500', color: '#3376C6'}}>{option.date}</Text>
                            <Text style={{fontSize: 12, fontWeight: '500', color: '#9DA3C4'}}>from {option.currency}{option.price}</Text>
                          </View>
                        </TouchableOpacity>
                      )
                    }
                  </ScrollView>
                </View>
              </View>
            }
            
            {!property.soldOut &&
              <View style={{flexDirection: 'row', height: width * 0.5, backgroundColor: '#FFFFFF', padding: 15, marginBottom: 10}}>
                <View style={{flex: 5, justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 14, fontWeight: 'normal', color: '#EA3324'}}>Lowest price today!</Text>
                  <Text style={{fontSize: 12, fontWeight: 'normal'}}>Price for {property.stays} nights (Sep 12 - Sep 14)</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>{property.currency}</Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>{property.stays * property.price}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 12, fontWeight: 'normal'}}>+ </Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal'}}>{property.currency}</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal'}}>{property.tax}</Text>
                    <Text style={{fontSize: 12, fontWeight: 'normal'}}> taxes and charges</Text>
                  </View>
                  <Text style={{fontSize: 14, fontWeight: '500', color: '#3376C6'}}>No booking or credit card fees!</Text>
                  {property.freeCancellation && 
                    <View style={{flexDirection: 'row', backgroundColor: '#51AF3A', justifyContent: 'center', alignItems: 'center', height: 30, width: (width - 30)/2, borderRadius: 3, marginVertical: 8}}>
                      <Ionicons name="ios-checkmark" color='#FFFFFF' size={22} />
                      <Text style={{fontSize: 14, fontWeight: '500', color: '#FFFFFF', paddingHorizontal: 5}}>Free Cancellation</Text>
                    </View>
                  }
                  <Text style={{fontSize: 14, fontWeight: '500', color: '#51AF3A'}}>Some Options</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Ionicons name="ios-arrow-forward" color='#9DA3C4' size={20} />
                </View>
              </View>
            }

            <View style={{backgroundColor: '#FFFFFF', marginBottom: 10}}>
              <View style={{width: width, height: width - 250}}>
                <MapView
                  ref={ref => { this.map = ref }}
                  style={{...StyleSheet.absoluteFillObject}}
                  initialRegion={{
                    latitude: property.region.LATITUDE,
                    longitude: property.region.LONGITUDE,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                  }}
                  onLayout={() => this.map.fitToElements(false)}
                  // onLayout={() => this.map.fitToSuppliedMarkers(["Marker1"], false)}
                >
                  <Marker
                    identifier="Marker1"
                    coordinate={{
                      latitude: property.region.LATITUDE + SPACE,
                      longitude: property.region.LONGITUDE + SPACE,
                    }}
                  >
                    <Ionicons name="ios-pin" size={40} color="#009FE3" /> 
                  </Marker>
                </MapView>
              </View>
              <View style={{padding: 15}}>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                  <Ionicons name="ios-pin" size={20} /> 
                  <Text style={{fontSize: 14, fontWeight: '300', marginLeft: 10}}>{property.address}</Text>
                </View>
                {property.train && 
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <FontAwesome name="train" size={14} /> 
                    <Text style={{fontSize: 14, fontWeight: '300', marginLeft: 10}}>{property.train}</Text>
                  </View>
                }
                {property.subway && 
                  <View style={{flexDirection: 'row'}}>
                    <FontAwesome name="subway" size={14} /> 
                    <Text style={{fontSize: 14, fontWeight: '300', marginLeft: 10}}>{property.subway}</Text>
                  </View>
                }
              </View>
            </View>

            <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', padding: 15, justifyContent: 'center', alignItems: 'flex-end', marginBottom: 10, }}>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', marginBottom: 15}}>Check-in</Text>
                <Text style={{fontSize: 16, fontWeight: '500', color: '#009FE3'}}>Thu, Sep 12 </Text>
              </View>
              <View style={{width: 1, height: 25, marginHorizontal: 15, backgroundColor: '#ECECEC'}} />
              <View style={{flex: 1}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', marginBottom: 15}}>Check-out</Text>
                <Text style={{fontSize: 16, fontWeight: '500', color: '#009FE3'}}>Sat, Sep 14 </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', padding: 15, marginBottom: 10}}>
              <View style={{flex: 5, flexDirection: 'row'}}>
                <View style={{marginRight: 10}}>
                  <View style={{backgroundColor: '#13357B', borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomRightRadius: 8, width: 35, height: 35, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: '400', color: '#FFFFFF'}}>{property.rating.point}</Text>
                  </View>
                </View>
                <View>
                  <Text style={{fontSize: 14, fontWeight: 'bold', color: '#13357B'}}>{property.rating.remark}</Text>
                  <Text style={{fontSize: 12, fontWeight: '300'}}>See 402 detailed reviews</Text>
                </View>
              </View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                <Ionicons name="ios-arrow-forward" color='#9DA3C4' size={20} />
              </View>
            </View>
            
            {property.reviews && 
              <View style={{backgroundColor: '#FFFFFF', padding: 15, marginBottom: 10}}>
                <View>
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>What guests loved the most:</Text>
                </View>
                <View style={{marginVertical: 15}}>
                  {property.reviews.map((review, index) => (
                    <View key={review.id}>
                      <Text style={{fontSize: 14, fontWeight: '300'}}>{review.comment}</Text>
                      <View style={{flexDirection: 'row', marginVertical: 15}}>
                        {review.name && 
                          <View style={{width: 35, height: 35, borderRadius: 17.5, backgroundColor: '#EA3324', justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#FFFFFF'}}>{review.name}</Text>
                          </View>
                        }
                        {!review.name &&
                          <View style={{width: 35, height: 35, borderRadius: 17.5, backgroundColor: '#ABC2FA', justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                            <Ionicons name="ios-person" size={30} color="#4F73D9" /> 
                          </View>
                        }
                        <View>
                          <Text style={{fontSize: 14, fontWeight: '300'}}>{review.user}</Text>
                          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Image 
                              source={{ uri: countries[review.code].flag }} 
                              style={{width: 14, height: 10, resizeMode: 'contain'}}
                            />
                            <Text style={{fontSize: 14, fontWeight: '300', color:'#9DA3C4', marginLeft: 10}}>{review.country}</Text>
                          </View>
                        </View>
                      </View>
                      {(index !== (property.reviews.length - 1)) && 
                        <View style={{width: width - 30, height: 0.3, marginBottom: 15, backgroundColor: '#ECECEC'}} />
                      }
                    </View>
                  ))}
                </View>
                <View>
                  <Text style={{fontSize: 14, fontWeight: '500', color: '#009FE3'}}>See all 402 reviews</Text>
                </View>
              </View>
            }

            <View style={[{backgroundColor: '#FFFFFF'}, property.soldOut ? {marginBottom: 0} : {marginBottom: 10}]}>
              <View style={{padding: 15}}>
                <View>
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>Description</Text>
                </View>
                <View style={{marginVertical: 15}}>
                  <ReadMore
                    numberOfLines={3}
                    renderRevealedFooter={this.renderReadLess}
                    renderTruncatedFooter={this.renderReadMore}
                  >
                    <Text style={{fontSize: 14, fontWeight: '300'}}>{property.description}</Text>
                  </ReadMore>
                </View>
              </View>
              <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', paddingHorizontal: 15, paddingVertical: 20, borderTopWidth: 0.2, borderTopColor: '#ECECEC', borderBottomWidth: 0.2, borderBottomColor: '#ECECEC'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Facilities</Text>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Ionicons name="ios-arrow-forward" color='#9DA3C4' size={20} />
                </View>
              </View>
              <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', paddingHorizontal: 15, paddingVertical: 20, borderBottomWidth: 0.2, borderBottomColor: '#ECECEC'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Hotel Policies</Text>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Ionicons name="ios-arrow-forward" color='#9DA3C4' size={20} />
                </View>
              </View>
              <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', paddingHorizontal: 15, paddingVertical: 20, borderBottomWidth: 0.2, borderBottomColor: '#ECECEC'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Food & drink</Text>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Ionicons name="ios-arrow-forward" color='#9DA3C4' size={20} />
                </View>
              </View>
              <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', paddingHorizontal: 15, paddingVertical: 20, borderBottomWidth: 0.2, borderBottomColor: '#ECECEC'}}>
                <View>
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>Popular Attractions Nearby</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 12, fontWeight: '300', marginRight: 5}}>{property.rating.point}</Text>
                    <Text style={{fontSize: 12, fontWeight: '300'}}>{property.rating.remark}</Text>
                  </View>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Ionicons name="ios-arrow-forward" color='#9DA3C4' size={20} />
                </View>
              </View>
              <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', paddingHorizontal: 15, paddingVertical: 20, borderBottomWidth: 0.2, borderBottomColor: '#ECECEC'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Important Information</Text>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Ionicons name="ios-arrow-forward" color='#9DA3C4' size={20} />
                </View>
              </View>
              <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', paddingHorizontal: 15, paddingVertical: 20, borderBottomWidth: 0.2, borderBottomColor: '#ECECEC'}}>
                <View style={{marginRight: 10}}>
                  <Ionicons name="ios-heart-empty" size={22} />
                </View>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Save this property</Text>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Ionicons name="ios-arrow-forward" color='#9DA3C4' size={20} />
                </View>
              </View>
              <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF', paddingHorizontal: 15, paddingVertical: 20}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Share property link</Text>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Ionicons name="ios-arrow-forward" color='#9DA3C4' size={20} />
                </View>
              </View>
            </View>
            
            {!property.soldOut &&
              <View style={{backgroundColor: '#FFFFFF', padding: 15, marginBottom: 60}}>
                <View style={{marginBottom: 15, alignItems: 'flex-start'}}>
                  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginRight: 15}}>
                      <Ionicons name="ios-help-circle" size={18} />
                    </View>
                    <View>
                      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Missing some info?</Text>
                    </View>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 14, fontWeight: '500', color: '#009FE3', marginLeft: 34, marginRight: 20}}>Yes</Text>
                  <Text style={{fontSize: 14, fontWeight: '500', color: '#009FE3'}}>No</Text>
                </View>
              </View>
            }

          </View>
        </ScrollView>
        
        {!property.soldOut &&
          <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#FFFFFF'}}>
            <TouchableOpacity style={{height: 40, backgroundColor: '#009FE3', justifyContent: 'center', alignItems: 'center', borderRadius: 3, margin: 10}}>
              <Text style={{fontSize: 14, color: '#FFFFFF'}}>Select rooms</Text>
            </TouchableOpacity>
          </View>
        }
        
      </React.Fragment>
    );
  }
}

export default Property;