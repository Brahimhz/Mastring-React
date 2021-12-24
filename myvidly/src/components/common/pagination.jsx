import _ from 'lodash';
import PropType from "prop-types"

const Pagination = ({itemsCount , pageSize , onPageChange , currentPage}) => {

    const pageCount = itemsCount / pageSize;

    if(pageCount <= 1 ) return null;

    const pages = _.range(1 , pageCount + 1);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page =>
                    (
                        <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                            <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                        </li>
                    )
                    )}
                
            </ul>
        </nav>

    );
}
 
Pagination.PropType = {
    itemsCount : PropType.number.isRequired ,
    pageSize : PropType.number.isRequired , 
    onPageChange : PropType.func.isRequired , 
    currentPage : PropType.number.isRequired
}

export default Pagination;