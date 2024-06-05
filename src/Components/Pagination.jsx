import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Pagination = ({ data, setRecords, recordsPerPage = 5 }) => {
  const [recordsPerPageState, setRecordsPerPageState] =
    useState(recordsPerPage);

  const location = useLocation();
  const navigate = useNavigate();

  const [searchState, setSearchState] = useState("");

  // Obtenemos el parámetro de la url
  const searchParams = new URLSearchParams(location.search);
  const pageParam = searchParams.get("page");
  const searchParam = searchParams.get("search") || "";
  const currentPage = pageParam ? parseInt(pageParam) : 1;

  const [npage, setNpage] = useState(0);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    // Filtra los datos segun la busqueda en cualquier campo
    const filterData = data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchParam.toLowerCase())
      )
    );

    const _lastindex = currentPage * recordsPerPageState;
    const _firstindex = _lastindex - recordsPerPageState;
    const _records = filterData?.slice(_firstindex, _lastindex);
    const _npage = Math.ceil(filterData?.length / recordsPerPageState);

    setRecords(_records?.length ? _records : data);
    setNpage(_npage);
    setShown(_records?.length ? _records?.length : filterData?.length);
  }, [currentPage, recordsPerPageState, data, searchParam, setRecords]);

  const prevPage = () => {
    if (currentPage > 1) {
      navigate(`?page=${currentPage - 1}&search=${searchParam}`);
    }
  };

  const nextPage = () => {
    if (currentPage < npage) {
      navigate(`?page=${currentPage + 1}&search=${searchParam}`);
    }
  };

  const setPage = (page) => {
    if (page >= 1 && page <= npage) {
      navigate(`?page=${page}&search=${searchParam}`);
    }
  };

  const generatedPages = () => {
    const pages = [];
    if (npage <= 3) {
      for (let i = 1; i <= npage; i++) {
        pages.push(
          <button
            key={i}
            type="button"
            onClick={() => setPage(i)}
            className={`text-[#1959b8] ${
              currentPage === i ? "underline" : ""
            } cursor-pointer`}
          >
            {i}
          </button>
        );
      }
    } else {
      for (
        let i = Math.max(1, currentPage - 2);
        i <= Math.min(npage, currentPage + 2);
        i++
      ) {
        pages.push(
          <button
            key={i}
            type="button"
            onClick={() => setPage(i)}
            className={`text-[#1959b8] ${
              currentPage === i ? "underline" : ""
            } cursor-pointer`}
          >
            {i}
          </button>
        );
      }
      if (currentPage > 3) {
        pages.unshift(<span key={"...1"}>...</span>);
      }
      if (currentPage < npage - 2) {
        pages.push(<span key={"...2"}>...</span>);
      }
    }
    return pages;
  };

  return (
    <div className="flex flex-col md:flex-row justify-start gap-y-5 md:justify-between">
      <div className="flex gap-x-3 justify-between md:justify-start">
        <label>Datos a mostrar</label>
        <select
          title="Shown Data"
          onChange={(e) => setRecordsPerPageState(Number(e.target.value))}
          className="border border-[#dee2e6] rounded-lg"
          value={recordsPerPageState}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        {`${shown} de ${data?.length} datos`}
      </div>
      <div className="flex justify-end gap-x-3">
        <button
          type="button"
          onClick={prevPage}
          className="text-[#1959b8] cursor-pointer"
        >
          {"< "}
        </button>
        {generatedPages()}
        <button
          type="button"
          onClick={nextPage}
          className="text-[#1959b8] cursor-pointer"
        >
          {" >"}
        </button>
      </div>
    </div>
  );
};
