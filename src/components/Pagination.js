import React from 'react';
import Store from '../store/DirectoryStore';
import { observer } from 'mobx-react-lite';

const store = new Store()

export const Pagination = observer(({ data, RenderComponent, title }) => {
    
    const getPaginatedData = () => {
        const startIndex = store.currentPage * store.dataLimit - store.dataLimit;
        const endIndex = startIndex + store.dataLimit;
        return data.slice(startIndex, endIndex);
    };
    
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>{title}</h1>
                <div className="dataContainer">
                    {getPaginatedData().map((d, idx) => (
                        <RenderComponent key={idx} data={d} />
                    ))}
                </div>
                <div className="pagination">
                    <button
                        onClick={() => store.setPrevPage()}
                        className={`prev ${store.currentPage === 1 ? 'disabled' : ''}`}
                    >
                        prev
                    </button>
                
                    {store.paginationGroup.map((item, index) => (
                        <button
                            key={index}
                            onClick={(e) => store.changePage(e.target.textContent)}
                            className={`paginationItem ${store.currentPage === item ? 'active' : null}`}
                        >
                        <span>{item}</span>
                        </button>
                    ))}
                    <button
                        onClick={() => store.setNextPage()}
                        className={`next ${store.currentPage === 10000 ? 'disabled' : ''}`}
                    >
                        next
                    </button>
                </div>
            </div>
        );
})
