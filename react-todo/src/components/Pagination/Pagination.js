import React from 'react';

const Pagination = (props) => {

    const {pages, changePage, currentPages} = props;

    const pageNumbers = [];
    const page2 = []

    for (let i = 1; i < pages; i++) {
        pageNumbers.push(i)
    }

    for (let i = 1; i < 2; i++) {
        page2.push(i)
    }

    let pagination;


    if (pages > 5) {
        pagination = (
            <ul className="pagination-list">
                {currentPages >= pages - 2 ? (
                    <>
                        <li><a className="pagination-link" onClick={() => changePage(1)}>1</a></li>
                        <li><span className="pagination-ellipsis">&hellip;</span></li>
                        <li><a className="pagination-link is-current"
                               style={{color: 'white'}}>{currentPages}</a></li>
                        {currentPages === pages ? (
                                <></>
                            ) :
                            <>
                                <li><a className="pagination-link"
                                       onClick={() => changePage(currentPages + 1)}>{currentPages + 1}</a></li>
                            </>
                        }

                    </>
                ) : (
                    <>
                        <li><a className="pagination-link is-current"
                               style={{color: 'white'}}>{currentPages}</a></li>
                        <li><a className="pagination-link"
                               onClick={() => changePage(currentPages + 1)}>{currentPages + 1}</a></li>
                        <li><a className="pagination-link"
                               onClick={() => changePage(currentPages + 2)}>{currentPages + 2}</a></li>
                        <li><span className="pagination-ellipsis">&hellip;</span></li>
                        <li><a className="pagination-link" onClick={() => changePage(pages)}>{pages}</a></li>
                    </>
                )
                }
            </ul>
        )
    } else {
        pagination = (
            <ul className="pagination-list">
                {pageNumbers.map(page => (
                    <li><a className="pagination-link" onClick={() => changePage(page)}>{page}</a></li>
                ))}
            </ul>
        )
    }


    return (
        <nav className="pagination is-rounded" role="navigation">
            {currentPages === 1 ?
                <a className="pagination-previous" disabled>Previous</a> :
                <a className="pagination-previous" onClick={() => changePage(currentPages - 1)}>Previous</a>
            }
            {currentPages === pages ?
                <a className="pagination-next" disabled>Next page</a> :
                <a className="pagination-next" onClick={() => changePage(currentPages + 1)}>Next page</a>
            }
            {pagination}
        </nav>
    );
}

export default Pagination;
