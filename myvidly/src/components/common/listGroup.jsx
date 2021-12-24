const ListGroup = ({items , valueProprety , textProprety , onItemSelect , selectedItem }) => {
    
    return ( 
        <ul className="list-group">
            { items.map(item => 
                    <li 
                        key={item[textProprety]} 
                        onClick={() => onItemSelect (item)} 
                        className={ item === selectedItem ? "list-group-item active" : "list-group-item"}> 

                            {item[valueProprety]}
                    </li>
                ) }            
        </ul>
    );
}
 
ListGroup.defaultProps = {
    valueProprety : "name",
    textProprety : "_id"
}

export default ListGroup;