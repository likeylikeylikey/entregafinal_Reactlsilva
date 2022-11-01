import React from "react";

const Person = (props) => {
    return (
        <div className="col-lg-4">
            <div className="text-center card-box">
                <div className="member-card pt-2 pb-2">
                    <div className="thumb-lg member-thumb mx-auto">
                        <img
                            src={props.img}
                            className="rounded-circle img-thumbnail"
                            alt="profile-image"
                        />
                        </div>
                        <div className="">
                            <h4>{props.name}</h4>
                            <p className="text-muted">{props.role}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Person;