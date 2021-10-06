import React from 'react';
import axios from 'axios';
import FeedbackCard from './FeedbackCard';

export default class Feedback extends React.Component {

  render() {
    return (
        <div>
            <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample1">
                    {this.props.feedbackList.map(feedback =>
                        <div class="card card-body" >
                            <FeedbackCard id={feedback.id} courseId={feedback.courseId} comment={feedback.comment} rating={feedback.rating} />
                        </div>)}
                </div>
            </div>
        </div>

    )}
}

{/* <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                        <div class="card card-body">
                            Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div> */}