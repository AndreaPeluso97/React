import React, {useState} from 'react';
import Man from './man.svg'
import Woman from './woman.svg'
import Unknown from './unknown.svg'

function Snippet({users}) {

    const [userIndex, useUserIndex] = useState(0);
    const dict = {
        "man": Man,
        woman: Woman
    };
    const usersItem = users.map((item,index) => {
        const key = `${item.gender}-${index}`;
        const icon = item.gender in dict ? dict[item.gender] : Unknown;

        return (
            <div key={key} className="user text-center">
                <div>
                    <img src={icon} className="icon-big icon-centered" />
                </div>
                <div className="fullname-label">{item.fullname}</div>
            </div>
        )
    });

    var OnButtonClicked = () => {
        useUserIndex(p => ++p);
    };

    return (
        <React.Fragment>
            <button onClick={OnButtonClicked}>NEXT USER</button>
            <h2>User:</h2>
            {usersItem[userIndex]}
        </React.Fragment>
    )
 }

 export default Snippet;