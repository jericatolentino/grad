import * as React from 'react';
import { List, arrayMove } from 'react-movable';

interface IProps {
    listItems?: string[];
    ulStyle?: Object;
    textStyle?: Object;
}

const MovableList: React.FC<IProps> = ({ listItems = [], ulStyle, textStyle }) => {
    const [items, setItems] = React.useState(listItems);
    return(
        <List
            values={items}
            onChange={({ oldIndex, newIndex }) => setItems(arrayMove(items, oldIndex, newIndex))}
            renderList={({ children, props }) => <ul style={ulStyle} {...props}>{children}</ul>}
            renderItem={({ value, props }) => {
                return <li {...props}><span style={textStyle}>{value}</span></li>
            }}
      />
    );
}

export default MovableList;