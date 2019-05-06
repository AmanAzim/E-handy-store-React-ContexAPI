import React from 'react';

const Title=(props)=>{
    return(
        <div className="row">
            <div className="col-10 mx-auto text-center text-title">
                <h1 className="font-weight-bold ">{props.name} <strong className="text-red">{props.title}</strong></h1>
            </div>
        </div>
    );
};

export default Title;
