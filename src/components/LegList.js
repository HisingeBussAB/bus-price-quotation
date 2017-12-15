import React, { Component } from 'react';
import moment from "moment";
import "moment/locale/sv";


class LegList extends Component {

 
  render() {
    if (this.props.trips.length < 1) {
      return (
        <ul><li>
          Det finns inga körningar eller raster i detta uppdrag ännu.
        </li></ul>
      )
    }

    const listTrips = this.props.trips.map((trip, index, list) => {
      
      let answer = [{
        start: null,
        end: null,
        from: null,
        to: null,
        km: null,
        duration: null,
        break: null,
        codriver: null,
        isbreak: null,
      }]

      if (list[index-1] !== undefined && trip.end.isValid() && trip.start.isValid()) {
        const duration = moment.duration(moment(trip.end).diff(trip.start))
        if (duration.asMinutes() > 5) {
          answer[0].start = list[index-1].end
          answer[0].end = trip.start
          answer[0].km = 0
          answer[0].duration = moment.duration(moment(answer[0].end).diff(answer[0].start))
          answer[0].isbreak = false
          answer[0].from = "waiting"
          answer[0].to = "waiting"
        }
      }
/*    

      if (trip.isbreak) {
        return ;
      } else {
        return ;
      }
    */    }
      

    )
    /*
    start: input.start,
    end: input.end,
    from: input.fromField,
    to: input.toField,
    km: input.km,
    duration: input.traffic,
    break: input.break45,
    codriver: input.multidriver,
    isbreak: false,
*/
    //if (this.props.isbreak)
    console.log(listTrips)

    const arr1 = [1,2,3,4,[5,6,7],8,9]

    console.log(arr1)
    const arr2 = [].concat.apply([], arr1);
    console.log(arr2)

    return (
      <ul>
        {//listTrips
        }
      </ul>
    )

  }
}


export default LegList