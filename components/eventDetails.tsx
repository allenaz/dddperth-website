import * as React from "react";
import Countdown from "./countdown";
import { Conference, Dates } from "../config/types";
import { Fragment } from "react";
import Link from 'next/link';

export interface EventDetailsProps {
  conference : Conference,
  dates : Dates
};

export default ({conference, dates} : EventDetailsProps) =>
  <section className="countdown grey">
    <div className="container">
      {dates.IsInProgress && <Fragment>
        <h2>Event in progress</h2>
      </Fragment>}
      {dates.IsComplete && <Fragment>
        <h2>Previous event</h2>
      </Fragment>}
      {dates.HasNotStarted && !conference.HideDate && <Fragment>
        <h2>Countdown to Next Event:</h2>
        <Countdown countdownTo={conference.Date} interval={1000} />
        <hr />
      </Fragment>}

      <div className="event-details">
        {!conference.HideVenue && <div className="row">
          <div className="col-xs-12">
            <p><span>Venue</span>{conference.Venue}</p>
          </div>
        </div>}
        <div className="row">
          <div className="col-xs-12 col-sm-5 col-md-4">
            <p><span>Date</span>{dates.IsComplete ? <s>{dates.Display}</s> : <Fragment>{dates.Display}</Fragment>}</p>
          </div>
          <div className="col-xs-12 col-sm-3 col-md-4">
            <p><span>Cost</span>{conference.TicketPrice}</p>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            {/*todo: Change read more button to primary action and change nextEvent.tsx?*/}
            <Link href={conference.DetailsLandingPage}>
              <a className="btn">Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>;
