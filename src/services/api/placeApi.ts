import config from '../../common/Config'
import axios from 'Axios'

export async function findPlace(place: string) {  
  const placeURI = encodeURI(place);
  const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + placeURI + '&types=restaurant&key=' + config.api_key;

  const getResult = await axios.get(url);

  return getResult.data;
}