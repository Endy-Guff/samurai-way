import React, {useState} from 'react';
import s from "./Pagination.module.css";

type PaginationPropsType = {
    currentPage: number
    pageSize: number
    totalCount: number
    portionSize: number
    changePage: (page: number) => void
}

export const Pagination: React.FC<PaginationPropsType> = (
    {
        currentPage,
        changePage,
        pageSize,
        totalCount,
        portionSize
    }
) => {

    const pageCount = Math.ceil(totalCount / pageSize)
    const page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }

    const portionCount = Math.ceil(pageCount / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionNumber = (portionNumber - 1) * pageSize + 1
    const rightPortionNumber = portionNumber * pageSize


    return (
        <div className={s.pageBox}>
            {portionNumber > 1 &&
            <button className={s.btn+' '+s.prev} onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>}
            {page
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => <span
                    key={p}
                    className={currentPage === p ? s.page + ' ' + s.active : s.page}
                    onClick={() => changePage(p)}
                >{p}</span>)}
            {portionNumber < portionCount &&
            <button className={s.btn+' '+s.next} onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
        </div>
    );
};

