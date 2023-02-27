import React, {useMemo} from "react";
import MySecond from './MySecond'
import classes from './DemoList.module.css'

const Demo = (props) => {
    // console.log('DEMO RUNNING')

    const { items } = props;
    // return  <MySecond>{props.show ? 'This is new' : ''}</MySecond>;

    const sortList = useMemo(() => {
        console.log('SORT RUNNING');
        return items.sort((a,b) => a - b);
    }, [items])


    console.log('DemoList RUNNING');

    return (
        <div className={classes.list}>
            <h2>{props.title}</h2>
            <ul>{sortList.map((item) => (
                    <li key={item}>{item}</li>)
            )}</ul>
        </div>
    )
};

export default React.memo(Demo);
